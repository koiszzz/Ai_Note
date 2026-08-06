---
title: "GitHub Copilot 应用中的堆叠会话与拉取请求"
source: "GitHub Blog"
original_file: "信息源/GitHub Blog/Stacked sessions and pull requests in the GitHub Copilot app.md"
source_note: "[[信息源/GitHub Blog/Stacked sessions and pull requests in the GitHub Copilot app.]]"
source_sha256: 4bca6180ef10422ca0ff869ffe0dfab12704eca2825c37e703385ecff9e4df48
original_url: "https://github.blog/ai-and-ml/github-copilot/stacked-sessions-and-pull-requests-in-the-github-copilot-app/"
published: 2026-07-30
processed: 2026-08-05
language: zh-CN
---

# GitHub Copilot 应用中的堆叠会话与拉取请求

> [!info] 来源信息
> - 数据源：GitHub Blog
> - 作者：Cassidy Williams
> - 发布时间：2026-07-30
> - 原文链接：[打开原文](https://github.blog/ai-and-ml/github-copilot/stacked-sessions-and-pull-requests-in-the-github-copilot-app/)
> - Vault 原文件：[[信息源/GitHub Blog/Stacked sessions and pull requests in the GitHub Copilot app.|查看原始文件]]

## 摘要

- 作者有一个十多年前（约 2014 年底）创建的个人应用仓库，依赖严重老化：React 15（2016 年发布）、Less CSS 预处理器与同期 react-bootstrap；在 AI 之前解开这个烂摊子需要数周，作者曾尝试又放弃。
- 用 GitHub Copilot 应用现代化前端：Plan 模式中输入详细提示（用 Tailwind 或原生 CSS、移除 Less、清理可访问性与响应式、现代化依赖），经 Claude Opus 4.8 与 GPT-5.5 橡皮鸭评审与多轮往返做决策后执行——一次成功失败了，且是作者自己的错。
- 发现旧 dev 分支已有部分现代化版本且日常部署用着它：变更大到必须把新变更应用到 dev 分支而非把 dev 变更拉到 main；Copilot 用简单请求切换档位：为新会话、关闭尝试的 PR、把样式决策移植到 dev 分支的变更。
- 测试发现 react-bootstrap 中的旧警告（findDOMNode、componentWillReceiveProps）；Plan 模式建议完全移除 react-bootstrap 而非升级。
- 为避免范围蔓延（一万行 PR 只是新形式的拖延），作者要求为现有工作建 PR，然后为 react-bootstrap 替换工作开新会话——Copilot 应用创建了"堆叠会话"（取先前上下文、在现有会话后运行、建计划、批准后执行）与跟随现有工作的"堆叠拉取请求"。
- 堆叠（stack）是同一仓库中一系列 PR，每个 PR 针对其下方 PR 的分支，形成最终落在 main 分支的有序链；作者的会话不仅互相跟随，变更也如此。
- 截图解读：顶部是拉入的仓库；"Frontend modernization"是初始会话名；下一层嵌套是未交付的第一次 PR 尝试（红图标）；同层下一层是 dev 分支可用 PR；下方嵌套会话是进行中的 react-bootstrap 变更草稿 PR。
- 软件工程从不顺滑，但这个项目因现代工具变得容易得多。

## 正文

以下是文章全文翻译。

我想让你看一会儿 GitHub Copilot 应用的这个截图。它很小、图标很多，讲着一个让我非常兴奋的、最辉煌的故事。这张图是一组堆叠会话。它们是同一仓库中的一系列任务，每个会话都建立在彼此之上！为什么这张截图如此神奇？我们需要从十多年前开始。我有一个个人应用的老仓库。我很久以前（约 2014 年底）创建它，这些年它一直做我想让它做的事（像个人"生活"仪表板：日历、家中智能设备与任务管理）。我偶尔做些更新，但越来越难打理。依赖变得陈旧，尴尬地陈旧。我用 React 15（2016 年发布）、Less 做 CSS 预处理、还有同期版本 react-bootstrap。是的你没看错。Bootstrap。这太旧了。在 AI 之前解开这绝对混乱要花我数周。我以前试过又放弃了。它不是世界上最大的应用，但恰好大到令人痛苦，汁水不值得挤。……但现在我们有 AI 了，于是我启动 GitHub Copilot 应用、添加仓库、开始。

**第一步：能一击完成吗？** 不能。但我试了！这是我 Plan 模式中用的提示：现代化这个项目的前端。很多代码是十多年前写的，应该大清理。我想我们开始用 Tailwind 或纯 CSS（请审查一切帮我决定）、移除所有 Less 等，并清理可访问性与响应式。现在我真正想聚焦样式，然后慢慢组织整合 React 功能。现代化依赖可能也值得。动手前我们先定个计划。附注：1. 没有什么是神圣的，部分完全重来也行；2. 链接应变色并在悬停/聚焦加下划线；3. 输入框圆角更小，标签更干净；4. 容器应有好的换行与最大宽度，输入框不横跨整个宽屏。我把它传给 Claude Opus 4.8，得到 GPT-5.5 的橡皮鸭评审，来回不少才做决定。到我满意后按"开始"，让应用在我项目上大干一场看是否可行……它没成，而且是我的错。

**第二步：意识到我以前试过。** 记得我说过"试过又放弃"吗？原来我有一个旧 dev 分支，那里我确实现代化了一部分，当时没意识到会遇到的兼容性问题。但这是好事！我运行此会话的新版本时意识到：我从 main 分支出去，但我日常使用的部署用的是 dev 上半更新版本。所以一些我为自己做的想要功能需要包含进这批变更。但变更刚好大到我得把那些变更应用到 dev 分支以保理智，而不是把 dev 变更拉进 main。AI 之前……天哪，这会使我抓狂。我承认这里也沮丧了。我花了时间与 token 用自认不错的计划运行它。但我能用简单请求切换档位（与会话），比预期酷得多。一切都未浪费！Copilot 为我创建新会话、关闭我尝试的 PR、把我的样式决策移植到它正应用到 dev 分支的变更。

**第三步：测试后的发现。** 好，我有不错的分支与满意的 PR。开始测试时，我注意到控制台有些旧警告。看到 findDOMNode 与 componentWillReceiveProps 的旧引用，我心中充满恐惧——那些我多年没碰的函数。那些引用在我的代码库已不多，但在 react-bootstrap 里。我再次打开 Plan 模式，因为需要弄清升级是否可行或应完全移除库：你认为我们应该完全移除 react-bootstrap（用现代替代替换），还是只升级/迁移现有组件？运行它给出不错计划、讨论选项，并建议完全替换库。

**第四步：在另一个之上堆叠会话。** 我需要确保变更免受现有工作影响，但 react-bootstrap 替换对当前所做的事像太多范围蔓延。我发现许多"智能体"工程工作中特别难避免那种范围蔓延：因为不必自己写所有代码，做一万行 PR 一次搞定所有想做的事太诱人了！这其实只是拖延的新形式。所以我没给自己做巨型 PR 测试，而是用新会话拆分，提示：为现有工作建 PR，然后为这个 react-bootstrap 替换工作开新会话，它将在此现有工作处分出分支，并作为单独 PR 在此之后合并进 dev。这是让我想写这篇博客的感觉神奇的部分。GitHub Copilot 应用：为当前所有变更基于 dev 建 PR；为 react-bootstrap 移除创建"堆叠会话"（取先前上下文、建在现有会话后运行的会话、创建计划、让我批准计划、然后运行）；创建跟随现有工作的堆叠拉取请求。太酷了。堆叠会话与堆叠 PR？这是未来吗？是的！堆叠是同一仓库中一系列 PR，每个 PR 针对其下方 PR 的分支，形成最终落在 main 分支的有序链。我的情况中，不仅会话互相跟随，它们的变更也如此！

**第五步：乘堆叠 PR 驶向夕阳。** 我知道自己兴奋得有点得意忘形，但我的快乐是真诚的。忽视旧代码库多年后，交付这些变更的轻松是愉快体验。让我们再看第一张截图，我带你解读：顶部可见拉入的仓库；接下来"Frontend modernization"是初始会话名；再下一层嵌套是第一次 PR 尝试，我们最终没交付（因此红图标）；同层下一层是我们为 dev 分支获得的可工作 PR；下方嵌套会话是进行中的草稿 PR，带 react-bootstrap 变更。软件开发从不顺滑。但这个项目因这些现代工具变得容易得多。要现代化自己的代码库，试试这个！在 GitHub 提交代码的任何地方试用 PR 堆叠，在 GitHub Copilot 应用试用堆叠会话。

## 关键词

#GitHub-Copilot #堆叠PR #智能体会话 #前端现代化 #开发工作流
