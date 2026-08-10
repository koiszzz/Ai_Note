---
published: 2026-08-09
title: GitHub Models 现已退役
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/GitHub Models is now retired.md
source_note: "[[信息源/Simon Willison Blog/GitHub Models is now retired.md]]"
source_sha256: ebb0c09f9e247cccb6141a32c580d097b88a0b4504f1f2b22e9865ff34360c3d
original_url: https://simonwillison.net/2026/Aug/9/github-models-is-now-retired/#atom-everything
processed: 2026-08-10
language: zh-CN
---

# GitHub Models 现已退役

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 作者：Simon Willison
> - 发布时间：2026-08-09
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/9/github-models-is-now-retired/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/GitHub Models is now retired.md|查看原始文件]]

## 摘要

- GitHub Models 已正式退役（GitHub 公告：https://github.blog/changelog/2026-07-30-github-models-is-now-retired/）。
- 作者直到今天才发现这一消息，原因是其 simonw/research 仓库的 GitHub Actions 运行失败，报错称“GitHub Models 作为计划退役的一部分暂时不可用”。
- GitHub Models 提供了一个模型游乐场和覆盖多家 LLM 提供商的统一 API，最大好处是 GitHub Actions 中的代码可直接使用环境内已有的 GitHub API Key 执行提示词，很适合构建 GitHub Next 的 Continuous AI 概念。
- 作者猜测关闭原因与编码 Agent 模式使免费或补贴 token 的成本高得难以承受有关。
- 作者已将自己的工作流从 GitHub Models 切换到带月度消费上限的 OpenAI API Key，现在用 GPT-5.6 Luna 生成 README 的文件夹摘要。

## 正文

GitHub Models 现已退役

我直到今天才发现这个消息，当时我 simonw/research 仓库的 GitHub Actions 运行失败，报错信息如下：

> GitHub Models 作为计划退役的一部分暂时不可用。

那条消息其实已经过时了，因为退役已经完成。

GitHub Models 是一只有点奇怪的鸭子。GitHub 提供了一个模型游乐场工具，以及一个覆盖多家不同 LLM 提供商的统一 API，最大的好处在于：在 GitHub Actions 中运行的代码可以直接使用该环境中已有的 GitHub API Key 来执行提示词。

这让构建符合 GitHub Next 的 Continuous AI 概念的东西变得很容易。

GitHub 没有透露关闭的原因，但我的猜测是：编码 Agent 模式让免费或补贴 token 的成本变得高得无法承受，正好符合这一模式。

我的工作流会用一次 LLM 调用为 README 生成文件夹摘要（使用的代码见此处）。我把 GitHub Models 换成了带月度消费上限的 OpenAI API Key，现在用 GPT-5.6 Luna 生成摘要。

## 关键词

#GitHub #GitHubModels #GitHubActions #AI #LLM
