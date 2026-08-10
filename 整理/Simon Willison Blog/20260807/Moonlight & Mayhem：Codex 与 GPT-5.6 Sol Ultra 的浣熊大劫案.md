---
published: 2026-08-07
title: "Moonlight & Mayhem：Codex 与 GPT-5.6 Sol Ultra 的浣熊大劫案"
source: "Simon Willison Blog"
original_file: "信息源/Simon Willison Blog/Moonlight & Mayhem (Raccoon Heist by Codex + GPT-5.6 Sol Ultra).md"
source_note: "[[信息源/Simon Willison Blog/Moonlight & Mayhem (Raccoon Heist by Codex + GPT-5.6 Sol Ultra)]]"
source_sha256: f9c98291fca411ab9fbe820016082ec62bc6f8863bec1d043ddb525d1adbf99f
original_url: "https://simonwillison.net/2026/Aug/7/moonlight-mayhem/#atom-everything"
processed: 2026-08-07
language: zh-CN
---

# Moonlight & Mayhem：Codex 与 GPT-5.6 Sol Ultra 的浣熊大劫案

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/7/moonlight-mayhem/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/Moonlight & Mayhem (Raccoon Heist by Codex + GPT-5.6 Sol Ultra)|查看原始文件]]

## 摘要

- Simon Willison 周三曾用 Claude Fable 5“一次性”做出完整可玩的《Raccoon Heist》游戏，这次他把完全相同的提示词抛给了运行 GPT-5.6 Sol Ultra 的 Codex Desktop，看看它表现如何。
- Codex 产出了一个好得多的游戏《Moonlight & Mayhem》：你在博物馆里营救两只浣熊同伴，叠罗汉砸开金枪鱼罐头展示柜，更有“劫案”味道。
- 一次生成的版本带有一个离谱的 bug：每只浣熊头上都悬浮着一个巨大的黑色球体当“眼球”；用一个追问“为什么浣熊身上有巨大黑球？”加一句“Fix it”就修好了。
- Codex 全程花了 52 分钟，若按全价 API 计费（而非订阅）估算成本约 23.28 美元；完整 Codex 转录已开源在仓库中。

## 正文

**《[Moonlight & Mayhem（Codex + GPT-5.6 Sol Ultra 的浣熊大劫案）](https://simonw.github.io/raccoon-heist-codex/)》**

周三我写了[用 Claude Fable 5 一次性做出《Raccoon Heist》游戏](https://simonwillison.net/2026/Aug/5/raccoon-heist/)——我让 Claude Fable 5 根据我[四年前](https://twitter.com/simonw/status/1555626060384911360)用 GPT-3 和 DALL-E 生成的创意，从零做出一个完整可玩的游戏。

我决定把[完全相同的提示词](https://simonwillison.net/2026/Aug/5/raccoon-heist/#the-fable-5-prompt)抛给运行 GPT-5.6 Sol Ultra 的 Codex Desktop——在这个模式下 Sol 会*激进地*使用子智能体——看看它表现如何。

它产出了一个好得多的游戏！这里是[《Moonlight & Mayhem》](https://simonw.github.io/raccoon-heist-codex/)——[GitHub 仓库在这里](https://github.com/simonw/raccoon-heist-codex/)，包含它用 `gpt-image-2` 生成的[纹理和提示词](https://github.com/simonw/raccoon-heist-codex/tree/main/output/imagegen)。

<video controls="controls" preload="none" poster="https://static.simonwillison.net/static/2026/raccoon-heist-codex-poster.jpg" width="1280" height="720" style="display: block; width: 100%; height: auto;"><source src="https://static.simonwillison.net/static/2026/raccoon-heist-codex-720p.mp4" type="video/mp4" />您的浏览器不支持 HTML5 视频。</video>

GPT-3 当年生成的游戏描述是这样的：

> 在《Raccoon Heist》里，你和你的浣熊小偷团队要完成一系列胆大包天的劫案。从抢银行到偷无价艺术品，没有哪件活计是你的毛茸茸小队干不了的。

Fable 的版本是你扮演一只浣熊在后院跑来跑去捡金币和鱼。而 GPT-5.6 Sol 的版本是你在博物馆里，救出另外两只浣熊同伴，然后叠罗汉把金枪鱼罐头从展示柜里砸出来。

更有“劫案”味道了！

不过有一个问题：一次性提示生成的版本有个 bug——每只浣熊的眼球都被放大成一个悬浮在头顶的巨大球体！

![主玩家角色浣熊清晰可见，头顶叠着一个比身体大四倍的多边形黑色球体，上面有白色瞳孔](https://static.simonwillison.net/static/2026/raccoon-heist-codex-bug.jpg)

你可以[在这里玩那个版本](https://static.simonwillison.net/static/2026/raccoon-heist-eyeball-edition/)。

尽管开发过程中看过截图，Codex 还是没发现并修正这个 bug。

我靠提示词修好了它：

> 为什么浣熊身上有巨大的黑色球体？

然后是：

> Fix it

结果是[这个修复提交](https://github.com/simonw/raccoon-heist-codex/commit/4e9a390dfbe80533324ee61a37aa661813c08446)。

我把[完整的 Codex 转录](https://github.com/simonw/raccoon-heist-codex/blob/main/transcript.md)分享在了仓库里——真希望 Claude Code 也有同样的“复制为 Markdown”功能。

Codex 在这个项目上花了 52 分钟。下面是 [AgentsView](https://www.agentsview.io) 对这次会话的成本估算——假设按全价 API 付费、而不是用我每月的 Codex 订阅：

![总成本：23.28 美元。输入 token：700.7K，外加 3250 万缓存 token。输出 token：148K](https://static.simonwillison.net/static/2026/raccoon-heist-codex-cost.webp)

标签：[game-design](https://simonwillison.net/tags/game-design)、[ai](https://simonwillison.net/tags/ai)、[openai](https://simonwillison.net/tags/openai)、[generative-ai](https://simonwillison.net/tags/generative-ai)、[llms](https://simonwillison.net/tags/llms)、[coding-agents](https://simonwillison.net/tags/coding-agents)、[codex](https://simonwillison.net/tags/codex)、[gpt](https://simonwillison.net/tags/gpt)

## 关键词

#Codex #游戏开发 #AI编程 #Simon-Willison #GPT-5.6
