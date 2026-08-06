---
published: 2026-07-27
title: "GitHub Copilot 应用初学者指南：入门"
source: "GitHub Blog"
original_file: "信息源/GitHub Blog/GitHub Copilot app for Beginners- Getting started.md"
source_note: "[[信息源/GitHub Blog/GitHub Copilot app for Beginners- Getting started.]]"
source_sha256: 99b775878e02e71d0404d50e18df936f14da8c7bd7f4c8450db3ee78c1f9c142
original_url: "https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-getting-started/"
processed: 2026-08-05
language: zh-CN
---

# GitHub Copilot 应用初学者指南：入门

> [!info] 来源信息
> - 数据源：GitHub Blog
> - 作者：Christopher Harrison
> - 发布时间：2026-07-27
> - 原文链接：[打开原文](https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-getting-started/)
> - Vault 原文件：[[信息源/GitHub Blog/GitHub Copilot app for Beginners- Getting started.|查看原始文件]]

## 摘要

- AI 编码工具往往始于聊天窗口；这对快速问答或生成代码有效，但真实软件开发很少直线进行——你可能在修 bug、评审 PR、探索不熟悉代码或尝试新想法之间切换。
- GitHub Copilot 应用为此类工作流设计：不把 AI 当作单一对话，而给你一个可管理多个智能体会话、在任务间切换不丢势头的 workspace。
- 工作从项目开始：智能体会话连接到项目，每个会话获得特定任务所需的仓库上下文；从主屏幕选择以前用过的项目或从 GitHub/本地机器添加新项目；会话可检查项目、识别相关文件、做修改并运行测试验证。
- 保持多线程进行：创建额外会话处理其他问题而不中断现有工作；Quick Chat 允许从主屏幕开新对话；每个对话聚焦不同工作领域，返回原会话可继续审查变更。
- 用画布让工作交互：浏览器画布直接在工作流内打开，预览应用并按所见调整；画布是围绕工作工件（计划、看板、清单或运行中应用）的共享交互空间；用 /create-canvas 斜杠命令创建，Canvas Dev Mode 与 Pick & Polish 可直接选择画布中的元素作为下次请求的上下文。
- Agent Merge 保持工作推进：监控 PR 并协助评审中出现任务（处理评审反馈、解决 CI 失败、处理合并冲突）；启用后监控 PR 在评审与 CI 过程中的状态，检查通过后可合并。
- 入门路径：从项目开始，为不同工作线创建单独会话，创建画布可视化并精炼工作，用 Agent Merge 让变更通过 PR 流程。

## 正文

以下是文章全文翻译。

AI 编码工具往往始于一个聊天窗口。虽然这对快速问答或生成代码有效，但真正的软件开发很少直线进行。前一分钟你在修 bug，下一分钟你在评审拉取请求、钻研代码库不熟悉的部分或探索新想法。GitHub Copilot 应用就是为此类工作流设计的。它不把 AI 当作单一对话，而是给你一个 workspace，在其中管理多个智能体会话、在任务间切换而不失势头，并跨工作流的不同部分与 AI 智能体协作。

**你的工作始于项目。** 智能体会话连接到项目，给每个会话特定任务所需的仓库上下文。从 GitHub Copilot 应用主屏幕，你可以选择以前用过的项目，或从 GitHub 或本地机器添加新项目。选择项目后，你可以带解决任务所需的代码库、文件与工具开始会话。例如，你可能想给现有应用添加面包屑导航组件。与其手动搜索文件找正确的修改位置，你可以描述想要的更新。会话可检查项目、识别相关文件、做修改并运行测试帮助验证工作。每个会话开始时项目已连接，你花更多时间工作、更少时间准备环境。

**保持多线程移动。** 选择项目并开始智能体会话后，你可以为其他问题、想法或任务创建额外会话而不打断现有工作。Quick Chat 让你从 Copilot 应用主屏幕开始新对话。每个对话可聚焦不同工作领域，给你探索想法、提问或推进变更的专用空间。例如，你可以开 Quick Chat 会话向 Copilot 提问 Copilot 本身（如应用中的 worktree 如何工作），而另一个智能体会话继续项目更新。你也可用 Quick Chat 调查代码库如何工作、探索潜在方法或决定如何推进前收集上下文。回到原会话时，你可以从离开处继续、评审变更并做任何推进任务所需的更新。多个会话让你跟进不同工作线而不丢失每个任务的状态。

**用画布让工作交互。** 处理 UI 变更时，看到结果可能与评审其背后代码一样重要。GitHub Copilot 应用让你直接在工作流内打开浏览器画布，预览应用并按所见修改。画布是围绕工作工件（计划、看板、清单或运行中的应用）构建的共享交互空间。它在对话旁提供工作的可视化表示，让你超越任务的纯文本视图。无需打开新终端与单独浏览器，你可用 /create-canvas 斜杠命令在 GitHub Copilot 应用中创建浏览器画布。例如，让 Copilot 更新 UI 组件后，可用 /create-canvas 打开此应用于浏览器画布创建画布。应用在画布中打开，可预览结果。需要调整时，可启用 Canvas Dev Mode 并用 Pick & Polish 直接在画布中选择元素，把它们用作下次请求的上下文。你指向页面特定部分、请求更新并继续精炼结果。

**用 Agent Merge 保持工作推进。** 变更准备好后，下一步是创建拉取请求并走标准 CI 与评审流程。Agent Merge 通过监控拉取请求并协助评审中出现任务，把工作流扩展到初始代码变更之外。要启动 Agent Merge 工作流，在 Copilot 应用中打开 PR 选项并选择 Agent Merge。从中选择 Agent Merge 可采取的动作，如处理评审反馈、帮助解决 CI 失败或处理合并冲突。启用后 Agent Merge 监控 PR 走完评审与 CI 流程。出现问题时，它可帮助处理请求的变更并准备合并。必需检查通过后，你可选择合并 PR。

**开始探索 Copilot 应用。** Copilot 应用把开发工作流的不同部分汇聚一处。从项目开始。从中可为不同工作线创建单独会话、创建画布可视化并精炼工作，并用 Agent Merge 让变更通过 PR 流程。还有更多可探索，包括定制与扩展工作流的额外方式。学习 GitHub Copilot 应用的最好方式是亲自尝试。有堆积在待办列表的任务？试试 GitHub Copilot 应用，看如何用 AI 智能体探索、构建与交付。

## 关键词

#GitHub-Copilot #AI编码 #智能体会话 #画布 #Agent-Merge
