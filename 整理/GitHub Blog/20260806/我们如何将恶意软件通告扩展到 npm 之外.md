---
published: 2026-08-06
title: 我们如何将恶意软件通告扩展到 npm 之外
source: GitHub Blog
original_file: 信息源/GitHub Blog/How we took malware advisories beyond npm.md
source_note: "[[信息源/GitHub Blog/How we took malware advisories beyond npm]]"
source_sha256: cc7113b8a4aa84c9a3433f582949884a63862edba1ea790e738ec49c2ea474d4
original_url: https://github.blog/security/supply-chain-security/how-we-took-malware-advisories-beyond-npm/
processed: 2026-08-07
language: zh-CN
---

# 我们如何将恶意软件通告扩展到 npm 之外

> [!info] 来源信息
> - 数据源：GitHub Blog
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://github.blog/security/supply-chain-security/how-we-took-malware-advisories-beyond-npm/)
> - Vault 原文件：[[信息源/GitHub Blog/How we took malware advisories beyond npm|查看原始文件]]

## 摘要

- Dependabot 背后的供应链工程团队基于 OpenSSF 的共享恶意软件包数据，将恶意软件通告从仅覆盖 npm 扩展到八个软件包生态系统（npm、PyPI、Maven、RubyGems、NuGet、Go、crates.io、PHP Composer）。
- 方案核心是构建一个统一导入器而非八个检测系统：读取 OSV 记录、严格校验、规范化、去重（跳过来自 GitHub 自身的往返数据），并为自动发布的通告设计了三层安全防护：批量上限、来源追溯和整批回滚。
- 恶意软件警报为选择加入功能，一旦启用即会对现有通告进行回填匹配。

## 正文

一个被攻陷的软件包可以在你安装它的瞬间窃取凭据，而直到最近，GitHub 也只能标记 npm 中的这类软件包。现在情况不同了。这是 Dependabot 背后的供应链工程团队如何基于 OpenSSF 的共享恶意软件包数据，将恶意软件通告扩展到八个生态系统的故事。

目前的进展是：今年早些时候，[Dependabot 开始标记 npm 依赖中的恶意软件](https://github.blog/changelog/2026-03-17-dependabot-now-detects-malware-in-npm-dependencies/)。如果你编写 JavaScript，这是好消息。现在我们正把同样的功能带到 PyPI。

我们增强了 GitHub 咨询数据库（GitHub Advisory Database），以摄取来自 [OpenSSF 恶意软件包仓库](https://github.com/ossf/malicious-packages) 的恶意软件报告，这意味着恶意软件通告以及由它们驱动的 Dependabot 警报覆盖全部八个主流软件包生态系统：npm、PyPI、Maven、RubyGems、NuGet、Go、crates.io 和 PHP Composer。我领导 GitHub 供应链安全组织中的 Dependabot 团队，在这篇文章中，我将展示这条流水线是如何工作的。

### 从一个生态系统到八个

咨询数据库多年来一直在从外部来源导入漏洞数据。RubySec 负责 gems，RustSec 负责 crates，PyPA 负责 Python。每个都是一个导入器（importer），读取公开的咨询仓库并将记录映射到我们的数据库中。恶意软件是个异类：它通过一条独立的、仅限 npm 的内部路径流转，这条路径建立在 GitHub 自身对恶意 npm 包的检测之上。

将现有检测从 1 个扩展到 8 个受支持的生态系统，需要数年时间。与此同时，OpenSSF 已经为所有人解决了聚合问题。他们的恶意软件包仓库于 2023 年上线，以 OSV 格式收录了超过 15,000 份报告。此后它每天都在增长，由社区提交和整个行业的自动化检测源共同喂养：域名仿冒包（typosquats）、依赖混淆包（dependency-confusion）、账户接管、恶意预编译二进制文件。它是公开的、结构化的，并且覆盖 OSV 模式支持的任何生态系统。

所以，设计几乎是不言自明的。我们不是构建八个独立的检测系统，而是构建了一个导入器。

### 导入器

我们复用了基于仓库的导入器已有的模式：遍历源仓库的文件树，拾取自上次运行以来发生变化的文件，并逐个处理。新的 OpenSSF 导入器读取每条 OSV 记录，并在任何数据触及数据库之前，根据模式验证必填字段、类型和格式。验证失败的记录会被拒绝并记录日志。它永远不会被悄悄修补后放行，因为一份"基本有效"的恶意软件通告正是那种六个月后反咬你一口的东西。

有效的记录会被规范化为 feed 条目：数据源、标识符、存在的 CVE ID、作为快照完整保留的上游记录，以及我们的发布流水线所消费的映射子集。

规范化听起来很枯燥，直到你面对真实数据。上游的生态系统字符串并不总是与我们的匹配（仓库写的是 PyPI，我们的数据库写的是 pip）。OSV 记录将受影响的版本列为离散值，而我们以范围思考，有些记录根本没有给出可用的版本。details 字段经常为空，当多个来源报告同一个软件包时，他们的描述会被追加成一个巨大的文本块。报告也会被撤回：仓库为被证实错误的通告保留了一个完整的 osv/withdrawn 目录，因此导入器必须应对一个软件包周一被标记、周三就被否认的情况。

然后是去重问题，这是个有趣的问题。GitHub 本身就是 OpenSSF 仓库的贡献者；我们自己的 npm 恶意软件通告会流入上游。天真地导入这个仓库，我们就会陷入循环重新导入自己数据的局面。解决办法依赖 OSV 的 origin 元数据：malicious-packages 中的每条记录都记录了报告的来源，任何标记为 ghsa-malware 的条目都始于我们。导入器在创建 feed 条目之前就把这些记录丢弃了。

当我们对照实时数据进行验证时，每月流入该仓库的新 npm 报告中有一半以上追溯到我们自己的通告，作为往返数据被跳过，因此导入器拾取到的是我们真正不知道的内容。

### 通告摄取工作流以及我们采取的安全预防措施

我们的安全审查被一个问题主导：如果上游数据变坏怎么办？

恶意软件通告是自动发布的。没有人在每条发布前阅读它，这是有意为之。当一个软件包正在窃取凭据时，以天为单位衡量的审查队列无异于给攻击者送礼。有意的改变在于，这些自动发布的通告现在可以生成 Dependabot 警报。我们未审查的通告此前已经自动发布，但这是第一次自动发布的通告可以触发警报，值得说清楚原因。

我的同事 Madison Ficorilli 最近写了一篇关于对漏洞通告来说"已审查"实际上意味着什么的文章：人类策展人在任何内容发布前验证软件包映射、版本范围和严重性。当问题是库的哪些版本存在漏洞时，这种严谨性值得付出延迟。恶意软件是另一种野兽。报告近乎二元（这个软件包是敌对的），而且时效比细微差别更重要。该设计假设上游 feed 有一天可能携带坏数据：一份虚假报告将合法且广泛使用的软件包标记为恶意软件，一条记录带了错误的软件包名称，或者一批数据从被攻陷的来源整体发布。

因此，我们构建了一个具有三层保护的弹性摄取流水线，正是为了那一天。它们的工作原理如下：

- **批量上限（Batch caps）**：让每次导入运行对它可以创建的通告数量有一个可配置的上限。超过上限时，运行不会削减以适应，而是完全停止，什么都不发布，并用确切的数量呼我们。一次突然想要往常五倍数量的运行不是吞吐量问题。那是危险信号。

- **来源追溯（Provenance）**：每条记录还携带来源追溯。每个导入的通告都追溯到 malicious-packages 仓库中确切的上游提交，因此在一场事故中，我们能在几分钟内判断一条坏通告是来自合法的（虽然错误）上游报告，还是来自更有预谋的东西。

- **回滚（Rollback）**：如果一批受污染的数据还是落地了，我们不会手工从数据库中挑选通告。每一批都是可识别、可作为一个单元回滚的。一次回滚，干净利落。

### 这对你意味着什么

如果你在大多数软件包生态系统中使用了恶意依赖，Dependabot 和 GitHub 现在都会提醒你。

恶意软件警报是选择加入的：[在仓库、组织或企业安全设置中启用](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-malware-alerts)它。Dependabot 会将你的依赖与咨询数据库中的恶意软件通告进行匹配，包括对现有通告的回填，从你开启的那一刻开始。

[为你的仓库启用 Dependabot 恶意软件警报 >](https://docs.github.com/code-security/concepts/supply-chain-security/dependabot-malware-alerts)

## 关键词

#供应链安全 #恶意软件 #Dependabot #OpenSSF #软件包安全
