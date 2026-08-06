---
published: 2026-07-23
title: "冷却的理由：Dependabot 为何现在在发出版本更新前等待"
source: "GitHub Blog"
original_file: "信息源/GitHub Blog/The case for a cooldown- Why Dependabot now waits before issuing version updates.md"
source_note: "[[信息源/GitHub Blog/The case for a cooldown- Why Dependabot now waits before issuing version updates.]]"
source_sha256: 66047f1c3f4b3be7441778b8d984316daa41a5cba77ae1ac8bfddcfc89746c61
original_url: "https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/"
processed: 2026-08-05
language: zh-CN
---

# 冷却的理由：Dependabot 为何现在在发出版本更新前等待

> [!info] 来源信息
> - 数据源：GitHub Blog
> - 作者：Carlin Cherry
> - 发布时间：2026-07-23
> - 原文链接：[打开原文](https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/)
> - Vault 原文件：[[信息源/GitHub Blog/The case for a cooldown- Why Dependabot now waits before issuing version updates.|查看原始文件]]

## 摘要

- 2025 年 9 月，一名攻击者钓鱼窃取单个 npm 维护者凭据，发布 chalk、debug 等约十几个包的诱杀版本，这些包每周合计下载超 20 亿次；代码重写任何加载它的浏览器应用中的加密货币钱包地址；投毒版本存活约两小时后被社区发现并撤下。
- 两小时是快速响应，但也足够自动化更新工具看到新版本、开 PR 并放到团队面前——版本更新工具天生在新版本落地瞬间抓取。
- 该模式在供应链攻击中占比日益增长：恶意代码搭新发布便车、发布到公共注册表、数分钟内被拉进构建流水线，人类或扫描器还没看过它。
- 冷却改变这一数学：等待几天再采用新发布，给维护者、安全研究者与自动化扫描器时间发现恶意版本并在到达你的 PR 前撤下。
- 对非安全版本升级，Dependabot 现在至少在发布后等待三天才开 PR；dependabot.yml 中的 cooldown 配置选项仍控制行为，可自定义。
- 两类 Dependabot 更新：安全更新（响应已知漏洞，披露时开 PR 移到补丁版）与版本更新（保持依赖最新）；新三天冷却默认只适用版本更新，安全更新仍立即打开。
- 案例研究：Solana web3.js、Axios、ua-parser-js 的被攻破构建都在发布后数小时内被抓住；截至 2026 年 5 月的年度内，GitHub Advisory Database 发布超 6,500 条 npm 恶意软件公告（前一年约 6,200），约每天 18 个新编目恶意 npm 包。
- 为何三天：对 2018–2026 年间 21 起广泛报道供应链事件的审查发现相同模式——恶意版本都在发布数小时内被撤下，冷却可过滤掉大多数短暂发布；三天默认平衡两个目标：越过多数攻击所在窗口，又不比必要更长地扣住依赖。
- 纵深防御：冷却针对特定模式（快速发布、传播、被抓的恶意版本），对长期游戏（潜伏后门、维护者破坏、被攻破构建系统）作用有限；应作为多层之一：锁文件 pin 依赖、CI 禁用安装脚本、限定流水线 token、合并前评审。
- 默认开启，无需任何配置即激活，也可按工作流调优。

## 正文

以下是文章全文翻译。

2025 年 9 月，一名攻击者钓鱼窃取了单个 npm 维护者的凭据，发布 chalk、debug 与约十几个其他包的诱杀版本，这些包每周合计下载超过 20 亿次。代码重写任何加载它的浏览器应用内的加密货币钱包地址。投毒版本存活约两小时，之后社区发现它们、npm 撤下它们。两小时是快速响应。然而，它也足够自动化更新工具看到新版本、打开拉取请求并放到你团队面前，因为版本更新工具天生在新版本落地瞬间抓取。这个模式坐在日益增长的供应链攻击份额背后。恶意代码搭全新发布便车、发布到公共注册表、数分钟内被拉进构建流水线——在人类或扫描器甚至看过它之前。冷却改变那个数学。等待几天再采用新发布，给维护者、安全研究者与自动化扫描器时间发现恶意版本并在它到达你的拉取请求前撤下。对非安全版本升级，Dependabot 现在至少在发布后等待三天才开 PR。dependabot.yml 中的 cooldown 配置选项仍控制该行为，因此你可以选择适合项目的不同冷却参数。

**两类 Dependabot 更新。** Dependabot 是 GitHub 内置的保持依赖安全与最新的工具，它做两项不同工作：安全更新响应已知漏洞——你使用包的公告发布时，Dependabot 发出警报并开 PR 把你移到补丁版；版本更新在新发布出来时保持依赖最新，无论当前版本健康状况如何。新三天冷却默认只适用版本更新。安全更新仍立即打开，因为那里的延迟会扣住已公开缺陷的修复。本文一切内容都关于版本更新——目标是保持最新，风险是在发布经过审查前采用它。

**案例研究与 GitHub Advisory Database 数据。** 攻击者攻破流行包时，投毒版本倾向于短命。它被发布、传播经过安装它的任何东西、然后被抓，通常在数小时内。先前例子只存活两小时。其他广泛使用包遵循同样弧线：Solana web3.js、Axios 与 ua-parser-js 的被攻破构建都在发布数小时内被抓。更一般地，GitHub 通过 GitHub Advisory Database 直接看到此模式，它跨生态编目开源安全公告。截至 2026 年 5 月的年度内，数据库发布超 6,500 条 npm 恶意软件公告，高于前一年约 6,200 条，合计约每天 18 个新编目恶意 npm 包。冷却让你离开那个开场窗口，让发布在到达你前积累一些审查。

**为何三天。** 针对流行包的已发布恶意软件往往被抓得很快。对 2018 至 2026 年间 21 起广泛报道供应链事件的审查发现相同模式：axios、Solana web3.js、ua-parser-js 与 Ledger Connect Kit 的恶意版本都在发布数小时内被撤下，冷却本可在任何人安装前过滤掉其中大多数短暂发布。三天作为默认平衡两个目标：把你推过多数此类攻击所在窗口，又不比必要更长地扣住依赖。其他社区成员也落在三天冷却（有些甚至更长），因此该默认行为让 Dependabot 与开发者在工具间移动时保持一致。你总能用 Dependabot 的 cooldown 配置选项设置更长或更短窗口。

**纵深防御。** 冷却针对特定模式构建：发布、传播、快速被抓的恶意版本。它对玩更长游戏的攻击作用有限，包括发布中埋下并休眠的后门、维护者破坏或被攻破的构建系统。默认的要点是移除一条常见且时间敏感的路径，而非替代你其余防线。因为冷却只处理快速移动情形，它应作为几层之一。一些额外步骤：用锁文件 pin 依赖、在 CI 中尽可能禁用安装脚本、限定构建流水线中的 token、合并前评审更新。若想为高度受信内部包与公共注册表定制延迟，见配置 Dependabot 的文档或 Dependabot 配置选项参考的完整冷却参数集。

**我们接下来去哪。** 这是我们为所有在 GitHub 上构建的人强化软件供应链所采取的若干步骤之一。它默认开启，因此你无需改变任何东西即可激活它。你也可以调优它以适应工作流。在 Dependabot 社区讨论中告诉我们它表现如何。

## 关键词

#Dependabot #供应链安全 #npm #恶意软件 #冷却
