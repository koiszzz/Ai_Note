---
published: 2026-08-06
title: "GitHub Copilot 应用中的斜杠命令指南"
source: "GitHub Blog"
original_file: "信息源/GitHub Blog/A guide to slash commands in the GitHub Copilot app.md"
source_note: "[[信息源/GitHub Blog/A guide to slash commands in the GitHub Copilot app]]"
source_sha256: 88b109599c27a84f5cadd235f47540751e13603e31467703ede6960cd76746b9
original_url: "https://github.blog/ai-and-ml/github-copilot/a-guide-to-slash-commands-in-the-github-copilot-app/"
processed: 2026-08-07
language: zh-CN
---

# GitHub Copilot 应用中的斜杠命令指南

> [!info] 来源信息
> - 数据源：GitHub Blog
> - 作者：Jacklyn Carroll
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://github.blog/ai-and-ml/github-copilot/a-guide-to-slash-commands-in-the-github-copilot-app/)
> - Vault 原文件：[[信息源/GitHub Blog/A guide to slash commands in the GitHub Copilot app|查看原始文件]]

## 摘要

- GitHub Copilot 应用中的斜杠命令是输入到聊天输入框的文本快捷方式，输入 / 会弹出自动补全菜单，帮助你管理会话、导航项目、定制 Copilot 工作流。
- /plan 帮助你在写代码前拆解任务并进入 Plan 模式；/spar 让 Copilot 扮演"魔鬼代言人"质疑你的假设；/autopilot 接管实现，让 Copilot 自主完成多步任务。
- /rubber-duck 用另一个模型独立评审你的工作，发现盲点；/create-canvas 把对话变成交互式可视化；/orchestrate 跨会话和仓库协调并行任务。

## 正文

如果你用过 GitHub Copilot CLI 中的斜杠命令，你已经知道一个快速的 / 有多强大。在 GitHub Copilot 应用中，斜杠命令把这个想法推得更远，为你提供管理会话、导航项目和定制 Copilot 工作流的快捷方式。

## 什么是斜杠命令？

斜杠命令是你直接输入到 GitHub Copilot 应用聊天输入框中的文本快捷方式。从输入 / 开始，一个自动补全菜单就会出现，显示当前上下文中可用的命令。这是一个小小的字符，潜力却很大，为帮助你以全新方式使用 Copilot 的快捷方式打开了大门。

如果你是从 CLI 过来的，关键区别在于：CLI 斜杠命令围绕终端优先的工作流设计。添加目录、设置工作目录、管理终端访问这类事情都通过命令完成。这很合理，因为 CLI 住在你的终端里，那里没有可视化界面。

💡 提示：如果你用过 Copilot CLI 中的斜杠命令，会注意到一些熟悉的面孔。/clear 和 /model 这类命令在两处都可用。但 GitHub Copilot 应用专属命令是为桌面应用提供的多会话工作流定制的。

而应用提供了可视化的上下文管理界面。像 /add-dir 或 /cwd 这类文件访问命令就没有必要了，因为应用会自动管理项目上下文。应用斜杠命令更偏工作流：你可以切换会话、管理项目、控制智能体的工作方式。

## 为什么使用斜杠命令？

斜杠命令看起来像是简单的快捷键，但它们可以改变你与 Copilot 的互动方式。它们帮你更快行动、保持专注、快速访问需要的工作流。不用翻找选项或打断思路去找对的工具，你输入一条命令就能继续前进。一个 / 就能打开斜杠命令列表，帮你加速、探索新想法、最大化利用应用。

让我们看看 GitHub Copilot 应用中可用的一些斜杠命令，以及它们如何融入你的日常工作流。

## 写代码之前，先做个 /plan

好代码始于好计划。/plan 帮你在开始写代码前拆解任务、思考方法、识别潜在挑战、决定下一步要做什么。它还会把你的会话切换为 Plan 模式，你也可以从聊天输入框的 Mode 下拉菜单里选择。

- 规划一个新功能。在动手实现之前拆解新功能想法。让 Copilot 识别文件、组件和依赖，让你有更清晰的路线。

- /plan 我需要给我们的应用添加双因素认证。帮我拆解相关的工作，识别需要改哪些文件，并勾勒实现方案。

- 为大型重构做准备。在动你的代码之前，先把复杂改动规划出来。发现潜在风险，制定增量方案，安全地进行大改动。

- /plan 我们想重构通知系统的代码，让它更容易支持推送通知这类新渠道。帮我理解需要哪些改动，并制定一个增量迁移计划。

- 分诊和修复 bug。如果你知道出了问题但不确定从哪开始，/plan 能帮你探索可能的原因，并列出诊断和解决问题的步骤。

- /plan 用户反馈我们的结账流程在支付处理后偶尔随机失败。帮我调查可能的原因，并制定一个诊断和修复问题的计划。

## 让 Copilot 扮演魔鬼代言人：/spar

有时验证一个想法的最好方式就是挑战它。/spar 就像那个举手问"我们想过出事怎么办吗？"的队友。它通过让 Copilot 质疑你的假设、指出潜在风险或权衡，帮你在你投入某个方案之前先对它做压力测试。以下是几种用法：

- 验证一个架构选择。提出你用 Redis 做缓存的方案，让 Copilot 质疑你的失效策略、可扩展性，或者是否有更适合你工作负载的其他方案。

- /spar 我打算用 Redis 作为产品 API 的缓存层。挑战我的方案，指出我可能遗漏的任何可扩展性或一致性问题。

- 比较实现选项。让 Copilot 基于你的应用需求，辩论 REST 与 GraphQL、同步与异步处理的利弊。

- /spar 帮我决定客户面向的 API 用 REST 还是 GraphQL。提出问题、挑战我的假设，并推荐哪种最适合有移动客户端的应用。

- 评审一个迁移计划。在开始之前，让 Copilot 走一遍数据库迁移或基础设施变更，找出边界情况、风险或上线顾虑。

- /spar 我打算以最小停机时间把数据库迁移到一个新的托管服务。挑挑我的迁移计划的毛病，指出我应该考虑的任何风险或边界情况。

- 挑战一个性能优化。分享你正在考虑的优化，让 Copilot 指出隐藏的瓶颈、意外副作用或更简单的替代方案。

- /spar 我打算对站点上的大部分组件做懒加载来改善首次加载时间。批评我的方法，告诉我在哪里可能损害用户体验或引入不必要的复杂性。

## /autopilot 接管方向盘

一旦你有了 /plan，下一步就是把想法变成能跑的代码。/autopilot 帮你推进实现、做改动、按需迭代。不用管理每一个单独的步骤，给 Copilot 一个目标，让它自己推进完成任务所需的步骤。它还会把你的会话切换为 Autopilot 模式，你也可以从聊天输入框的 Mode 下拉菜单里选择。

- 实现一个新功能。把任务交给 Copilot，让它推进实现步骤。

- /autopilot 添加支持把用户报告导出为 CSV 文件的功能。识别需要改动的文件，实现该功能，并更新相关测试。

- 完成一个更大的维护任务。用 /autopilot 处理需要多步骤的任务，比如更新依赖、重构代码或改进文档。

- /autopilot 把这个项目更新到最新版 React。识别破坏性变更，更新相关代码，并确保测试套件通过。

## 用 /rubber-duck 聊聊

我亲身经历过，跟猫说话不一定有用。它们的倾听技巧最多算可疑，调试建议通常以坐在我键盘上或咬我的线收尾。/rubber-duck 给你更好的东西：一双新眼睛。

它用另一个模型独立评审你的工作，帮助暴露盲点、质疑假设、抓住你的主模型可能漏掉的问题。它对复杂重构、架构决策、迁移计划特别有用，或者任何时候你想要第二意见再动手。

- 给计划要个第二意见。在实现复杂功能之前，让另一个模型独立评审你的计划，指出假设、遗漏步骤或潜在风险。

- /rubber-duck 评审我们为添加双因素认证制定的实现计划。指出我们可能忽略的任何盲点、边界情况或风险。

- 评审大型重构。做完重大改动后，让 /rubber-duck 批评这个方案，指出任何可以简化、改进或换种处理的地方。

- /rubber-duck 评审我们为通知系统完成的重构。找找架构问题、不必要的复杂性，或者在我开 PR 前可以改进的地方。

- 验证迁移策略。在推出复杂迁移之前，用第二个模型独立评估你的方案，指出上线或可靠性顾虑。

- /rubber-duck 评审我们的数据库迁移计划和实现。指出部署前我们应该处理的任何盲点、回滚顾虑或边界情况。

## 用 /create-canvas 把对话变成交互体验

不是每个问题都适合在聊天窗口里解决。/create-canvas 让你直接从与 Copilot 的对话中创建交互式界面。与其在长聊天里处理信息，你可以把它变成可交互的可视化、仪表盘或自定义工作流。例如：

- /create-canvas 创建一个交互式图表，展示这个应用中的服务是如何连接的。

- /create-canvas 创建一个 issue 分诊看板，让我可以评审和分类未关闭的 issue。

关于创建 canvas 的更多信息和示例，[看看我们的博客文章](https://github.blog/ai-and-ml/github-copilot/how-to-build-interactive-experiences-with-canvases/)。

## 当一个任务变成很多个，用 /orchestrate

不是每个任务都正好装进单个工作流。有时你需要跨多个仓库做改动，或同时处理几个相关任务。/orchestrate 通过把更大的工作拆成可以并行推进的小任务，帮你跨会话和仓库协调工作。

- 协调跨仓库改动。当一个功能触及多个代码库时，/orchestrate 能帮你跟踪工作并协调每个仓库的更新。

- /orchestrate 我需要在我们的前端、后端和共享仓库中支持一个新的认证流程。帮我拆解工作并协调每个代码库需要的改动。

- 管理并行开发任务。对于更大的项目，Copilot 可以把工作分成聚焦的部分，让多个部分并行推进。

- /orchestrate 为这个功能的发布做准备。识别实现、测试、文档和部署需要的工作，然后协调每个任务。

## 你的下一个工作流，从 / 开始

你不需要背下任何命令才能开始。挑几个符合你工作方式的斜杠命令，然后从那里开始构建。自动补全菜单会兜住剩下的。输入 / 开始探索！你也可以[阅读我们的文档](https://docs.github.com/copilot/concepts/agents/github-copilot-app)了解更多关于 GitHub Copilot 应用的内容。

[在 GitHub Copilot 应用中试用斜杠命令](https://github.com/features/ai/github-app)，或[查看我们的文档](https://docs.github.com/copilot/reference/github-copilot-app-reference/slash-commands)获取可用命令列表。

## 关键词

#GitHub-Copilot #斜杠命令 #AI编程 #开发者工具 #Copilot
