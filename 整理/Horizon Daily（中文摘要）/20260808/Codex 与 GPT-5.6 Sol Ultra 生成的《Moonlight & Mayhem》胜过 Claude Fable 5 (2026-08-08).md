---
title: "Codex 与 GPT-5.6 Sol Ultra 生成的《Moonlight & Mayhem》胜过 Claude Fable 5"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH)]]"
source_fragment: "Codex 与 GPT-5.6 Sol Ultra 生成的《Moonlight & Mayhem》胜过 Claude Fable 5"
source_sha256: 6e8dde8f282ed0a4e0983273702ea4892d79ce10648a2ce7b0f51173b915314b
original_url: "https://simonwillison.net/2026/Aug/7/moonlight-mayhem/#atom-everything"
published: 2026-08-08
processed: 2026-08-09
language: zh-CN
---

# Codex 与 GPT-5.6 Sol Ultra 生成的《Moonlight & Mayhem》胜过 Claude Fable 5

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-08
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/7/moonlight-mayhem/#atom-everything)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH)|查看原始日报]]

## 摘要

- 西蒙·威利森使用完全相同的提示词，将 Codex Desktop 搭配 GPT-5.6 Sol Ultra 的“激进子代理”模式与 Claude Fable 5 进行对比，结果 Codex 生成了更好的游戏《Moonlight & Mayhem》。该游戏设定在一座博物馆中，玩家需要营救两只浣熊队友并叠罗汉取出金色沙丁鱼，而 Claude Fable 5 的版本只是单只浣熊在后院收集硬币和鱼。Codex 初次生成时存在一个明显 bug，每只浣熊头顶都有一个巨大黑色球体眼球，且 ……

## 正文

西蒙·威利森使用完全相同的提示词，将 Codex Desktop 搭配 GPT-5.6 Sol Ultra 的“激进子代理”模式与 Claude Fable 5 进行对比，结果 Codex 生成了更好的游戏《Moonlight & Mayhem》。该游戏设定在一座博物馆中，玩家需要营救两只浣熊队友并叠罗汉取出金色沙丁鱼，而 Claude Fable 5 的版本只是单只浣熊在后院收集硬币和鱼。Codex 初次生成时存在一个明显 bug，每只浣熊头顶都有一个巨大黑色球体眼球，且 Codex 在开发中查看截图时未能发现，最终通过追问“为什么浣熊身上有巨大黑色球体”并指示“修复它”解决。Codex 总计耗时 52 分钟；根据 AgentsView 估算，若按 API 全价计费，该会话成本约为 23.28 美元，涉及 70.07 万输入 token、3250 万缓存 token 和 14.8 万输出 token。完整 Codex 转录和修复提交已公开在 GitHub 仓库中。

rss · Simon Willison · 8月7日 19:18

「背景」 西蒙·威利森此前使用 Claude Fable 5 依据一个由 GPT-3 和 DALL-E 在四年前生成的创意一次性构建出完整可玩的《Raccoon Heist》游戏。本次对比中，他使用同一提示词测试 Codex Desktop 的 GPT-5.6 Sol Ultra 模式，该模式会大量使用子代理来并行处理开发任务。

「影响」 对评估 AI 编程工具的开发者来说，这次对比提供了具体证据：Codex 的子代理模式在复杂游戏生成上能产出更完整、更具主题性的结果，但初版仍存在视觉 bug，说明自动化代理也需要人工审查和后续修复；用户可以直接试玩游戏并查看公开的代码仓库与完整对话记录。

标签: #AI code generation, #LLM comparison, #Claude, #Codex, #GPT-5.6

## 关键词

#AI-code-generation #LLM-comparison #Claude #Codex #GPT-5.6 #科技新闻
