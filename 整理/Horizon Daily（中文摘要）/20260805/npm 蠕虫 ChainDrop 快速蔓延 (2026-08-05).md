---
published: 2026-08-05
title: "npm 蠕虫 ChainDrop 快速蔓延"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)]]"
source_fragment: "npm 蠕虫 ChainDrop 快速蔓延"
source_sha256: a95ca2b002031ca8b11b06a7711ba64db3ff679428fdd0f1ed0860fe3068c63d
original_url: "https://lwn.net/Articles/1087108/"
processed: 2026-08-05
language: zh-CN
---

# npm 蠕虫 ChainDrop 快速蔓延

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://lwn.net/Articles/1087108/)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)|查看原始日报]]

## 摘要

- StepSecurity 报告称，npm 生态系统中出现一种名为 ChainDrop 的自传播蠕虫，目前已标记 435 个软件包和超过 1,550 个被入侵的版本，起始于 keyv@6.0.0。该蠕虫的设计并不新颖，但利用窃取的 npm 打包者凭据传播的速度值得关注。StepSecurity 仍在调查完整影响范围，并提醒使用所列软件包的环境应视为已受损。

## 正文

StepSecurity 报告称，npm 生态系统中出现一种名为 ChainDrop 的自传播蠕虫，目前已标记 435 个软件包和超过 1,550 个被入侵的版本，起始于 keyv@6.0.0。该蠕虫的设计并不新颖，但利用窃取的 npm 打包者凭据传播的速度值得关注。StepSecurity 仍在调查完整影响范围，并提醒使用所列软件包的环境应视为已受损。

rss · LWN.net · 8月4日 14:54

「背景」 npm 是 JavaScript 生态中广泛使用的软件包管理器，开发者通过它下载和发布可复用代码库。供应链攻击会利用被攻陷的软件包或维护者凭证，将恶意代码植入下游项目。ChainDrop 是一种自传播型 npm 蠕虫，最早以 keyv@6.0.0 为起点，利用窃取的 npm 账户凭证快速发布被感染的软件包版本，截至报告已有 444 个包和 2,212 个版本受影响，后续还在持续扩散。

「影响」 使用受影响软件包的开发者和组织应假定自身环境已被入侵，并检查依赖链以降低供应链风险。

参考链接

- [ChainDrop npm Worm : Bun-loaded CI/CD credential... - StepSecurity](https://www.stepsecurity.io/blog/chaindrop-npm-worm)

- [Another npm worm [LWN.net]](https://lwn.net/Articles/1087108/)

标签: #npm, #security, #supply-chain, #worm, #open-source

## 关键词

#npm #security #supply-chain #worm #open-source #科技新闻
