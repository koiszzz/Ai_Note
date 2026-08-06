---
title: "Llamafile v0.8.14：新 UI、性能提升与更多"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Llamafile v0.8.14- a new UI, performance gains, and more.md"
source_note: "[[信息源/Mozilla Hacks/Llamafile v0.8.14- a new UI, performance gains, and more.]]"
source_sha256: b1f3c5ef30eeddd8cd785c5c5963e6da6431844b62cd7a2461cf04049fa497ce
original_url: "https://hacks.mozilla.org/2024/10/llamafile-v0-8-14-a-new-ui-performance-gains-and-more/"
published: 2024-10-16
processed: 2026-08-05
language: zh-CN
---

# Llamafile v0.8.14：新 UI、性能提升与更多

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Stephen Hood
> - 发布时间：2024-10-16
> - 原文链接：[打开原文](https://hacks.mozilla.org/2024/10/llamafile-v0-8-14-a-new-ui-performance-gains-and-more/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Llamafile v0.8.14- a new UI, performance gains, and more.|查看原始文件]]

## 摘要

- Mozilla 发布 Llamafile 0.8.14，其流行开源 AI 工具最新版；Llamafile 是 Mozilla Builders 项目，把模型权重变成在多数电脑运行的快速便捷可执行文件，让任何人用已有硬件充分利用开放 LLM。
- 新聊天界面：彩色命令行聊天界面，启动 Llamafile 时自动打开；快速易用，比之前默认 Web 界面更简单（Web 界面仍可用，支持图像上传，浏览器指向 localhost:8080）。
- 其他近期改进：Llamafiler——自建 OpenAl 兼容 API 服务器，更可靠稳定快速；已交付 embeddings 端点，比 llama.cpp 快三倍，completions 端点开发中（完成后成为默认 API 服务器）。
- 性能提升：k-quant 发明者 @Kawrakow 等贡献者推动系列大幅提速，尤其 pre-fill（提示评估）速度：Intel Core i9 从 100 token/秒到 400（4x）；AMD Threadripper 从 300 到 2,400（8x）；Raspberry Pi 5 从 8 到 80（10x!）；配合高速 embedding 服务器，Llamafile 成为运行 RAG 等复杂本地 AI 应用的最快方式之一。
- 新模型支持：跟上开放 LLM 进步，支持数十个新模型与架构（405B 到 1B 参数）：Llama 3.2 1B/3B（小尺寸惊人性能）、Llama 3.1 405B（内存充足可在家运行的真正"前沿模型"）、OLMo 7B（真正开放透明模型）、TriLM（面向 CPU 推理优化的"1.58 bit"微模型）。
- Whisperfile：单文件语音转文本——为 whisper.cpp 做 Llamafile 为 llama.cpp 做的事，变成近处处运行的多平台可执行文件，轻松用 OpenAI Whisper 技术把语音高效转文本。
- 目标：Llamafile 成为构建复杂本地运行 AI 应用的坚实根基；社区贡献者（@Kawrakow、@cjpais、@mofosyne、@Djip007）定期留下印记；邀请加入 GitHub repo 与 Discord 专用频道。

## 正文

以下是文章全文翻译。

我们刚发布 Llamafile 0.8.14，我们流行的开源 AI 工具最新版本。作为 Mozilla Builders 项目，Llamafile 把模型权重变成在多数电脑上运行的快速便捷可执行文件，让任何人轻松用已有硬件充分利用开放 LLM。

**新聊天界面。** 此新版关键功能是我们多彩的新命令行聊天界面。启动 Llamafile 时我们现在自动在终端打开这个新聊天 UI。此新界面快速易用，整体比我们先前默认启动的 Web 界面更简单。（那个界面继承自上游 llama.cpp 项目，仍可用并支持一系列功能包括图像上传。只需把浏览器指向 localhost 的 8080 端口。）

**其他近期改进。** 新聊天 UI 只是冰山一角。自上篇博客以来，首席开发者 Justine Tunney 一直忙于交付一系列新版本，每个都以重要方式推进项目。以下是一些亮点：**Llamafiler**：我们在构建自己的干净设计 OpenAI 兼容 API 服务器 Llamafiler。此新服务器将比它所替代的更可靠、稳定，最重要的是更快。我们已交付 embeddings 端点，运行速度是 llama.cpp 的三倍。Justine 正在开发 completions 端点，届时 Llamafiler 将成为 Llamafile 的默认 API 服务器。**性能提升**：在 k-quant 发明者 @Kawrakow 等开源贡献者帮助下，Llamafile 过去几个月经历一系列惊人提速。尤其 pre-fill（提示评估）速度在多种架构显著提升：Intel Core i9 从 100 token/秒到 400（4x）；AMD Threadripper 从 300 到 2,400（8x）；连谦虚的 Raspberry Pi 5 也从 8 跳到 80（10x!）。配合上述新高速 embedding 服务器，Llamafile 已成为运行使用检索增强生成（RAG）等方法复杂本地 AI 应用的最快方式之一。**支持强大新模型**：Llamafile 继续跟上开放 LLM 进步，新增数十个模型与架构支持，从 4050 亿参数到 10 亿参数。Hugging Face 上可下载的新 Llamafiles 示例：Llama 3.2 1B 与 3B——小尺寸下极其令人印象深刻的性能与质量；Llama 3.1 405B——系统 RAM 充足即可在家运行的真"前沿模型"；OLMo 7B——来自 Allen Institute 朋友，首批真正开放透明的模型之一；TriLM——面向 CPU 推理优化的新"1.58 bit"微模型，指向矩阵乘法可能不再称王的近未来。**Whisperfile，单文件语音转文本**：感谢社区成员 @cjpais 的贡献，我们创建了 Whisperfile，为 whisper.cpp 做 Llamafile 为 llama.cpp 做的事：变成近处处运行的多平台可执行文件。Whisperfile 因此让用 OpenAI Whisper 技术高效把语音转文本变得容易，无论你拥有何种硬件。

**参与进来。** 我们的目标是让 Llamafile 成为构建复杂本地运行 AI 应用的坚如磐石的基础。Justine 在新 Llamafiler 服务器上的工作是这个等式的重要组成部分，持续支持新模型与为尽可能多用户优化推理性能的工作也是。我们自豪且感激项目在这些及其他领域的一些最大突破来自社区，@Kawrakow、@cjpais、@mofosyne 与 @Djip007 等贡献者定期留下印记。我们邀请你加入他们与我们。欢迎 GitHub 仓库的 issue 与 PR。欢迎成为 Mozilla 的 AI Discord 服务器成员，那里有专为 Llamafile 设的频道，可直接联系项目团队。希望见到你！

## 关键词

#Llamafile #本地AI #开源 #LLM #Mozilla-Builders
