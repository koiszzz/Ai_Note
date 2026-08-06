---
title: "Llamafile 四个月的进展"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Llamafile’s progress, four months in.md"
source_note: "[[信息源/Mozilla Hacks/Llamafile’s progress, four months in.]]"
source_sha256: 99254296933937a0e2817d8f9c1316ce3cdb8d593171e9ecb4b40e300bac0588
original_url: "https://hacks.mozilla.org/2024/04/llamafiles-progress-four-months-in/"
published: 2024-04-25
processed: 2026-08-05
language: zh-CN
---

# Llamafile 四个月的进展

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Stephen Hood
> - 发布时间：2024-04-25
> - 原文链接：[打开原文](https://hacks.mozilla.org/2024/04/llamafiles-progress-four-months-in/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Llamafile’s progress, four months in.|查看原始文件]]

## 摘要

- Mozilla 创新组去年底推出 llamafile 项目，立即获得开源 AI 开发者积极反响；成为 Mozilla GitHub 最受欢迎前三大仓库之一，吸引贡献者与成长社区；首席开发者 Justine Tunney 持续工作，v0.8 发布包括最新开放模型支持与 CPU 推理大性能提升。
- 今天 llamafile 是在自有硬件运行多种开放 LLM 最简单最快的方式——例如在普通 Macbook 运行 Meta 刚发布的 LLaMA 3。
- tinyBLAS：民主化 NVIDIA 与 AMD 的 GPU 支持。llamafile 建于 llama.cpp 之上；llama.cpp 经 cuBLAS 支持 NVIDIA GPU 加速推理但需安装 CUDA SDK，与全开源透明 AI 栈目标冲突且配置麻烦。社区帮助下创建 tinyBLAS——全新高效线性代数库，NVIDIA 加速简单无缝（Windows 无需装 CUDA，只需显示驱动）；还支持 AMD GPU（约占 20% GPU 市场，软件驱动支持差使其成机器学习次要玩家）——Windows 用户无需 AMD ROCm SDK；多数用户开箱即用自动用 GPU。
- CPU 性能提升：Mozilla 对"本地 AI"（模型与应用直接在终端硬件运行）兴趣浓厚——更多用户控制与隐私安全；Justine 写 84 个新矩阵乘法内核使提示评估性能比上版提升惊人 10x；工作回馈上游 llama.cpp（PR 6414）。
- Raspberry Pi 性能：为最新 Raspberry Pi 5 优化，Rocket-3B、TinyLLaMA-1.5B、Phi-2 等小 LLM 在最便宜电脑上可用速度运行，提示评估最高 80 token/秒。
- 跟上最新模型：开放模型进步惊人快（数百模型经微调发布/更新，性能提升、尺寸缩小）；llama.cpp 出色跟进，llamafile 密切同步支持同样模型；Meta 最新 LLaMA 3（8B-Instruct、70B-Instruct）发布一天内推出 llamafiles；v0.8 还能运行 Grok、Mixtral 8x22B、Command-R。
- 创建自己的 llamafiles：过去多步，现在单命令 llamafile-convert [model.gguf] 产生可用 model.llamafile；Hugging Face 添加 llamafile 官方支持，可搜索过滤社区创建的 llamafiles。
- OpenAI 兼容 API 服务器：继承 llama.cpp 服务器组件提供 OpenAI 兼容端点，让 OpenAI 之上开发者切换开放模型；Mozilla 支持开放 AI 作为集中封闭商业方案的可行替代的未来；扩展端点功能与兼容性，今天可作多种用例的 OpenAI 即插即用替代。
- 与开源 AI 项目集成：Open Interpreter 采用；Kate Silverstein 为 LangChain 与 LlamaIndex 添加 llamafile 支持（AutoGPT 即将推出）。
- 邀请加入：Discord 服务器有 llamafile 专用频道；GitHub 仓库欢迎增强请求、issue 与 PR。

## 正文

以下是文章全文翻译。

当 Mozilla 创新组去年底首次推出 llamafile 项目时，我们为开源 AI 开发者的即时积极响应而激动。它已成为 Mozilla 在 GitHub 上最受欢迎的前三大仓库之一，吸引许多贡献者、一些优秀 PR 与我们 Discord 服务器上成长的社区。一路走来，首席开发者兼项目远见者 Justine Tunney 持续忙于项目各类根本改进。就在昨晚，Justine 交付 llamafile 的 v0.8 发布，不仅包括最新开放模型支持，还有 CPU 推理的大量性能提升。由于 Justine 的工作，今天 llamafile 是在自有硬件上运行多种开放大语言模型最简单最快的方式。亲自看看：用 llamafile，你可以在普通 Macbook 上运行 Meta 刚发布的 LLaMA 3 模型——其性能与同尺寸类最佳模型匹敌。我们怎么做到的？解释前先退一步讲讲自 v0.1 以来改变的一切。

**tinyBLAS：民主化 NVIDIA 与 AMD 的 GPU 支持。** llamafile 建于现在传奇的 llama.cpp 项目之上。llama.cpp 经 cuBLAS 线性代数库支持 NVIDIA 处理器 GPU 加速推理，但要求用户安装 NVIDIA CUDA SDK。我们对这一事实感到不安，因为它与我们构建任何人都能在商品硬件运行的全开源透明 AI 栈的项目目标冲突。况且在某些系统正确配置 CUDA 很麻烦。必须有更好方式。在社区帮助下（感谢 @ahgamut 与 @mrdomino！），我们创建了自己的方案：叫 tinyBLAS，llamafile 全新高效线性代数库。tinyBLAS 让 NVIDIA 加速对 llamafile 用户简单无缝。Windows 上甚至无需安装 CUDA；只需可能已安装的显示驱动。但 tinyBLAS 不止 NVIDIA：它也支持 AMD GPU。这绝非易事。AMD 占今天 GPU 市场可观 20%，但糟糕软件与驱动支持历史上使其成机器学习领域次要玩家。鉴于 AMD GPU 高性能、价格竞争且广泛可得，这很可惜。llamafile 目标之一是民主化开源 AI 技术访问，这意味着让 AMD 坐上谈判桌。这正是我们所做：有了 llamafile 的 tinyBLAS，你现在可轻松充分利用 AMD GPU 加速本地推理。与 CUDA 一样，Windows 用户甚至无需安装 AMD ROCm SDK。这一切意味着对许多用户，llamafile 开箱即自动使用 GPU，几乎无需你费力。

**CPU 性能提升，更快的本地 AI。** 在 Mozilla 我们密切关注"本地 AI"的前景——AI 模型与应用直接在终端用户硬件而非云端运行。本地 AI 令人兴奋，因为它开启用户对这些系统更多控制与更大隐私安全的可能。但许多消费设备缺乏推理任务常需的高端 GPU。llama.cpp 在这方面是游戏改变者，使本地推理不仅在 GPU 上，在 CPU 上也可能且性能可用。Justine 在 llamafile 的近期工作把最先进水平推得更远。如她详细博客所述，通过编写 84 个新矩阵乘法内核，她把 llamafile 提示评估性能相对上版提升惊人 10 倍。这是让本地 AI 在消费硬件可行的重大且有影响的进步。此工作也是我们致力于开源 AI 社区承诺的绝佳示例。完成后我们立即提交 PR 把这些性能改进回馈上游 llama.cpp。这是我们回馈 llama.cpp 的众多增强中最新一次，计划继续此实践。

**Raspberry Pi 性能提升。** 说到消费硬件，没有比心爱的 Raspberry Pi 更有趣又更谦逊的例子。以极低价格，你得到功能完整运行 Linux 的电脑，典型桌面用途计算力充足。它是令人印象深刻的包，但历史上不视为 AI 应用可行平台。不再如此。llamafile 已为最新型号（Raspberry Pi 5）优化，结果是许多小 LLM——如 Rocket-3B、TinyLLaMA-1.5B 与 Phi-2——在今天最便宜电脑之一上以可用速度运行。我们见过提示评估速度最高 80 token/秒！

**跟上最新模型。** 开放模型领域进步速度惊人。过去几个月数百模型经微调发布或更新。一路上有模型性能不断提升、尺寸不断缩小的清晰趋势。llama.cpp 项目在跟上这些新模型方面做得出色，常在其发布数天内推出新架构与模型功能支持。我们则让 llamafile 与 llama.cpp 紧密同步，从而支持同样模型。鉴于两项目复杂度，这绝非易事，幸运有 Justine 负责。今天，得益于她的辛勤工作，你可以用 llamafile 使用最新最强大的开放模型。例如 Meta 最新 LLaMA 3 模型（8B-Instruct 与 70B-Instruct）发布一天内我们就推出 llamafiles。昨天 0.8 发布后，llamafile 还能运行 Grok、Mixtral 8x22B 与 Command-R。

**创建自己的 llamafiles。** 自 llamafile 发布那天起人们就想创建自己的 llamafiles。以前这需要若干步骤，今天单命令即可：`llamafile-convert [model.gguf]`。片刻后产生立即可用的 "model.llamafile" 文件。感谢社区成员 @chand1012 贡献此有用改进。相关进展：Hugging Face 最近在其模型中心添加 llamafile 官方支持。你现在可以专门搜索过滤开源社区其他人创建分发的 llamafiles。

**OpenAI 兼容 API 服务器。** 由于建于 llama.cpp 之上，llamafile 继承该项目服务器组件，提供 OpenAI 兼容 API 端点。这让在 OpenAI 之上构建的开发者切换到使用开放模型。在 Mozilla 我们非常想支持这样的未来：开源 AI 是集中封闭商业方案的可行替代。虽然开放模型尚未完全匹敌封闭模型能力，它们进步迅速。我们相信让现有代码更容易转向对开放模型执行会增加需求并进一步推动进步。过去几个月我们投入扩展这些端点，既增加功能也改善兼容性。今天 llamafile 可在广泛用例中充当 OpenAI 的即插即用替代。我们想进一步扩展 API 服务器能力，渴望听到开发者需要什么。什么阻碍你使用开放模型？需要什么功能、能力或工具？告诉我们！

**与其他开源 AI 项目集成。** 最后，看到 llamafile 被独立开发者采用并集成进领先开源 AI 项目（如 Open Interpreter）令人欣喜。特别表扬我们自己的 Kate Silverstein，她落地了为 LangChain 与 LlamaIndex 添加 llamafile 支持的 PR（AutoGPT 即将推出）。若你维护或贡献于你认为能从 llamafile 集成受益的开源 AI 项目，告诉我们如何帮忙。

**加入我们！** llamafile 项目刚刚起步，也只是 Mozilla 参与开源 AI 社区重大新举措的第一步。我们很快会分享更多，但此刻：邀请你加入 llamafile 项目！联系 Mozilla llamafile 团队与整体 llamafile 社区的最佳场所是我们的 Discord 服务器，有专为 llamafile 设的频道。当然，增强请求、issue 与 PR 始终欢迎于我们的 GitHub 仓库。希望你加入。未来几个月对 llamafile 与开源 AI 本身都将比过去更有趣、更意外。

## 关键词

#Llamafile #本地AI #llama.cpp #GPU #开源
