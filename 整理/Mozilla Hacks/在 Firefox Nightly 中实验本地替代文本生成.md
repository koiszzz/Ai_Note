---
title: "在 Firefox Nightly 中实验本地替代文本生成"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Experimenting with local alt text generation in Firefox Nightly.md"
source_note: "[[信息源/Mozilla Hacks/Experimenting with local alt text generation in Firefox Nightly.]]"
source_sha256: 89fcbf83a6fdba59699b3a6c68b33590b7722b97746d3ba1593fc4b1f3fcb8e0
original_url: "https://hacks.mozilla.org/2024/05/experimenting-with-local-alt-text-generation-in-firefox-nightly/"
published: 2024-05-31
processed: 2026-08-05
language: zh-CN
---

# 在 Firefox Nightly 中实验本地替代文本生成

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Tarek Ziadé
> - 发布时间：2024-05-31
> - 原文链接：[打开原文](https://hacks.mozilla.org/2024/05/experimenting-with-local-alt-text-generation-in-firefox-nightly/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Experimenting with local alt text generation in Firefox Nightly.|查看原始文件]]

## 摘要

- Firefox 130 将引入实验性新能力：用完全私密的设备端 AI 模型为图像自动生成替代文本；功能将作为 Firefox 内置 PDF 编辑器一部分，最终目标是为使用屏幕阅读器的用户在一般浏览中提供。
- 为什么需要 alt text：辅助技术（如屏幕阅读器）依赖作者提供的图像替代文本；但许多作者不这样做——Web Almanac 2022 报告近半图像缺失 alt text；此前浏览器在不把潜在敏感数据发送到远程服务器的情况下推断高质量 alt text 不可行，AI 最新进展使 CPU 上高效进行此图像分析成为可能。
- 用小开源模型生成 alt text：Transformer 模型（如 BLIP、VIT）在 COCO/Flickr30k 训练，结合 GPT-2 文本解码器可产生 2 亿参数以下的替代文本；量化后磁盘 <200MB，笔记本上几秒运行。示例：182M 参数的 Firefox 模型（DistilGPT-2 + ViT）对 COCO 图像描述合理，基线模型被手部位置困惑；GPT-4o 描述细节极多但冗长压倒，一句话描述更平衡。
- 小的好处：隐私（全部操作在设备内，Mozilla 不访问图像/PDF/生成标题，数据不用于训练）、资源效率（无需云端高功率 GPU，更环保）、更高透明度（内部管理模型可监督训练数据集）、碳足迹监控（CodeCarbon 精确跟踪 CO2）、易于改进（单硬件上不到一天重训练，频繁更新）。
- 集成本地推理：扩展 Firefox Translations 推理架构——Translations 用 Bergamot 项目（Marian C++ 推理运行时编译为 WASM，模型文件每翻译任务一个，一次性下载后完全离线）；决定嵌入 ONNX runtime 与 Transformers.js 库；ONNX 有 WASM 分发可直接浏览器运行，近期引入 WebGPU 支持；Transformers.js 提供 JS 层、API 模仿流行 Python 库、处理数据准备与输出转换、下载缓存模型；Mozilla 调整其发布（ONNX 与 Transformers.js 分离分发、去掉 Node.js 部分、修复 eval() 调用），复用 Translation 架构在独立进程运行 ONNX，Transformers.js 配自定义模型缓存（从自家服务器下载、缓存于 IndexedDB）；计划添加管理下载模型的界面。
- 微调 ViT + GPT-2 模型：基于 Ankur Kumar 流行模型（google/vit-base + GPT-2，COCO 微调），用 DistilGPT-2 替换 GPT-2（快 2 倍、小 33%），改进训练数据集（flickr30k-transformed-captions）与监督学习（alt-text-validation）简化输出缓解偏见；GIT 架构尚不被 ONNX 转换器支持故选 ViT。
- PDF.js 中 alt text 生成：Firefox 130 起添加图像时自动生成 alt text 并让用户验证；首次需等待模型下载（可达几分钟），后续模型本地存储更快；未来为 PDF 中任何现有图像提供 alt text（纯文本图像除外，如扫描书）。
- 下一步：迭代式公开改进；推理引擎已作为新 ml 组件落地 Nightly；改进数据集与模型（Hugging Face 发布）；代码在 mozilla/distilvit 与 mozilla/checkvite；PDF.js 功能成熟后推广到一般浏览。

## 正文

以下是文章全文翻译。

如 Mozilla Connect 所述，Firefox 130 将引入实验性新能力：用完全私密的设备端 AI 模型为图像自动生成替代文本。该功能将作为 Firefox 内置 PDF 编辑器一部分提供，我们的最终目标是让使用屏幕阅读器的用户在一般浏览中使用它。

**为什么需要 alt text？** Web 页面有根本简单的结构，其语义让浏览器能为不同人按各自需求与偏好解释相同内容。这是我们认为 Web 特别之处的重要部分，使浏览器能充当用户代理、负责让 Web 为人服务。这对屏幕阅读器等辅助技术尤其有用，它们能与浏览器功能协作减少人们访问与交换信息的障碍。对静态 Web 页面，一般只需站点极少交互即可完成，这种访问对许多人极其有益。但即使简单静态页面也有某些类型信息（如图像替代文本）必须由作者提供，才能为使用辅助技术的人提供可理解体验（规范要求）。不幸的是许多作者不这样做：Web Almanac 2022 报告近半图像缺失 alt text。直到最近，浏览器在不把潜在敏感数据发送到远程服务器的情况下推断合理高质量 alt text 不可行。然而 AI 最新发展使这类图像分析即使在 CPU 上也能高效进行。我们在 Firefox Nightly 的 PDF 编辑器内添加功能验证该方法。随进一步发展并从部署中学习，我们的目标是为想在浏览时使用它的用户提供，帮助他们更好理解否则无法访问的图像。

**用小开源模型生成 alt text。** 我们用基于 Transformer 的机器学习模型描述图像。这些模型越来越擅长描述图像内容，同时足够紧凑可在资源有限设备上运行。虽然无法超越 GPT-4 Turbo with Vision 或 LLaVA 等大语言模型，但足够准确，能在多样硬件上提供有价值的设备端洞见。BLIP 或 VIT 等架构在 COCO 或 Flickr30k 等数据集训练擅长识别图像物体。与 OpenAI 的 GPT-2 等文本解码器结合，可产生 2 亿参数以下的替代文本。量化后这些模型磁盘 <200MB，笔记本上几秒运行——相对 LLM 需要的 GB 级资源大幅缩减。示例输出：COCO 图像分别由 FIREFOX（182M 参数、Distilled GPT-2 + ViT 图像编码器）、BASELINE MODEL（稍大 ViT+GPT-2）与 HUMAN TEXT（数据集标注者）描述。两个小模型相对人类描述损失准确率，基线模型被手部位置困惑，Firefox 模型该例稍好并捕捉重点。重点可以见仁见智——注意人类没写办公室环境或蛋糕上樱桃，但说明蜡烛很长。同一图像在 GPT-4o 上结果极其详细——细节丰富但如此详细对 alt text 压倒性，不优先最重要信息。简洁不是唯一目标但是有帮助起点，草稿的精炼准确让内容创作者把编辑聚焦于缺失上下文与细节。若请 LLM 一句话描述："一群人聚在办公室庆祝，前景是点着蜡烛的生日蛋糕，背景一位微笑女士。"这比我们小模型细节多，但不能本地运行而不把图像发送到服务器。

**小即是美。** 本地运行小模型推理优势多多：隐私——全部操作包含于设备内确保数据隐私，Mozilla 不访问图像、PDF 内容、生成标题或最终标题，数据不用于训练模型；资源效率——小模型消除云端高功率 GPU 需求，减少资源消耗更环保；增加透明度——内部管理模型可直接监督训练数据集，比一些 LLM 更透明；碳足迹监控——内部训练模型用 CodeCarbon 等工具精确跟踪 CO2 排放；易于改进——单硬件上不到一天完成重训练，允许频繁更新增强。

**把本地推理集成进 Firefox。** 扩展 Translations 推理架构：Firefox Translations 用 Bergamot 项目（Marian C++ 推理运行时）驱动。运行时编译为 WASM，每个翻译任务一个模型文件。例如法语 Firefox 访问英语页面会询问是否翻译，下载英语到法语模型（约 20MiB）与推理运行时。一次性下载：文件落盘后翻译完全离线。WASM 运行时与模型都存储于 Firefox Remote Settings 服务，可规模化分发与管理版本。推理任务在独立进程运行，防止推理运行时崩溃导致浏览器或标签页崩溃。**ONNX 与 Transformers.js**：我们决定在 Firefox Nightly 嵌入 ONNX runtime 与 Transformers.js 库，扩展翻译架构执行不同推理工作。与 Bergamot 一样，ONNX 有 WASM 分发可直接浏览器运行。ONNX 项目近期引入 WebGPU 支持，最终将为此功能在 Firefox Nightly 激活。Transformers.js 在 ONNX 推理运行时上提供 JS 层，轻松为大量模型架构添加推理。API 模仿非常流行的 Python 库，处理传递给运行时的数据准备并把输出转换回可用结果，还处理从 Hugging Face 下载模型与缓存。从项目文档看，一行即可在文本上运行情感分析模型。用 Transformers.js 给我们尝试新模型时的信心：其架构列入文档就是好迹象。为引入 Firefox Nightly，我们略微改变其发布：ONNX 与 Transformers.js 分离分发、丢弃 Node.js 相关部分、修复 ONNX 库自带的恼人 eval() 调用。构建脚本见 mozilla-central。从那里复用 Translation 架构在独立进程运行 ONNX，Transformers.js 配自定义模型缓存系统。**模型缓存**：Transformers.js 可用本地与远程模型并有浏览器缓存机制。由于我们在隔离 web worker 运行推理，不想提供文件系统访问或把模型存进浏览器缓存；也不想在 Firefox 用 Hugging Face 作为模型中心，想从自家服务器提供模型文件。Transformers.js 提供自定义缓存回调，我们实现特定模型缓存层从自家服务器下载文件并缓存于 IndexedDB。随项目增长我们预期浏览器存储更多模型占用显著磁盘空间，计划添加管理下载模型的 Firefox 界面让用户列出并删除。**微调 ViT + GPT-2 模型**：Ankur Kumar 发布流行模型生成图像 alt text 并博客介绍；Joshua Lochner 发布 ONNX 权重使其可用于 Transformers.js。模型表现良好——虽有些情况 microsoft/git-base-coco 结果更好——但 GIT 架构尚不被 ONNX 转换器支持，且 <200M 参数下大部分准确率来自良好训练数据，故首个模型选 ViT。Ankur 用 google/vit-base-patch16-224-in21k 图像编码器与 GPT-2 文本解码器，COCO 数据集（超 120k 标注图像）微调。为减小模型并提速，用 DistilGPT-2 替换 GPT-2——按其文档快 2 倍、小 33%。Transformers.js 中使用效果良好。我们进一步用更新训练数据集与监督学习改进模型：简化输出并缓解图像到文本模型常见偏见。**PDF.js 中 alt text 生成**：Firefox 能用流行开源 pdf.js 库在 PDF 添加图像。Firefox 130 起添加图像时自动生成 alt text 并让用户验证：每次添加图像得到像素数组传给 ML 引擎，几秒后得到图像描述字符串。首次添加图像需等待下载模型（按连接可达几分钟），后续使用快得多因模型本地存储。未来我们想为 PDF 中任何现有图像提供 alt text，纯文本图像除外（扫描书 PDF 常见）。

**下一步。** 我们的 alt text 生成器远非完美，但想采取迭代方法公开改进。推理引擎已作为新 ml 组件落地 Firefox Nightly，附初始文档页。我们正按本文描述改进图像到文本数据集与模型，将在 Hugging Face 页持续更新。生成模型的代码在 github.com/mozilla/distilvit，为团队改进模型的 Web 应用在 github.com/mozilla/checkvite。我们想确保构建的模型、数据集与所有代码对社区开放。PDF.js 的 alt text 功能成熟验证后，我们希望为使用屏幕阅读器的用户在一般浏览中提供该功能。

## 关键词

#Firefox #alt文本 #本地AI #可访问性 #ONNX
