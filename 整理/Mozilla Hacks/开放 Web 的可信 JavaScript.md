---
title: "开放 Web 的可信 JavaScript"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Trustworthy JavaScript for the Open Web.md"
source_note: "[[信息源/Mozilla Hacks/Trustworthy JavaScript for the Open Web.]]"
source_sha256: 643d286b7990af068a63d0adc9dd0eddf925b5bdae19edeed3b73d5a2fbdc692
original_url: "https://hacks.mozilla.org/2026/05/trustworthy-javascript-for-the-open-web/"
published: 2026-05-05
processed: 2026-08-05
language: zh-CN
---

# 开放 Web 的可信 JavaScript

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Firefox Security Team
> - 发布时间：2026-05-05
> - 原文链接：[打开原文](https://hacks.mozilla.org/2026/05/trustworthy-javascript-for-the-open-web/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Trustworthy JavaScript for the Open Web.|查看原始文件]]

## 摘要

- 开放 Web 是处理高度敏感数据（从私人通信到金融交易与医疗记录）应用的关键平台。传统上服务器被信任为其 Web 应用向浏览器交付恰当代码与资源，浏览器随后提供安全隔离的执行环境。某些情况下此信任模型力不从心。
- 考虑基于浏览器的消息应用（如 Signal 或 WhatsApp）用端到端加密：浏览器依赖服务器提供可信的应用 JavaScript 实现，确保用户消息与密码学密钥得到恰当保护；恶意或被攻破的服务器可选择性向某些用户提供修改代码，以极小检测风险破坏其安全——挑战端到端加密的基本前提：不当行为的服务器不应能破坏用户安全。
- 迈向 Web 可验证安全：Web 应用在恶意服务器存在下可信需两个性质——完整性（用户执行的代码与开发者在 manifest 承诺的匹配）与透明性（manifest 公开记录且可独立审计）。Web Application Integrity, Consistency and Transparency（WAICT）把这些性质带给 Web 平台。
- WAICT 允许网站把客户端代码密码学绑定到 manifest，并把 manifest 提交到可公开审计的日志；需要更强信任模型的站点可选择加入 WAICT 执行；选择加入的站点交付未公开记录代码时浏览器拒绝，此前不可见的攻击变得可观察、可归因。
- Mozilla 与生态伙伴（Cloudflare、Freedom of the Press Foundation、Meta）协作确保部署模型实用、安全且尽可能简单；在 Real World Cryptography 2026 联合演讲。
- 早期原型在 Firefox Nightly 的 pref 后可用，在真实场景验证方法：可在 waict.dev 试驾——包括 WAICT 保护的端到端加密视频通话应用；实现是进行中工作而非成品，但提供迭代与标准化的具体基础；规范在开放中开发，欢迎早期反馈。
- WAICT 标志着向使强大、可验证应用安全成为开放 Web 一等属性迈出的重要一步。

## 正文

以下是文章全文翻译。

开放 Web 是处理高度敏感数据应用（从私人通信到金融交易与医疗记录）的关键平台。传统上，服务器被信任为其 Web 应用向浏览器交付恰当代码与资源，浏览器随后提供安全隔离的执行环境。某些情况下，此信任模型力不从心。考虑基于浏览器的消息应用，如 Signal 或 WhatsApp，它们使用端到端加密。浏览器依赖服务器提供可信的 JavaScript 应用实现，确保用户消息与密码学密钥得到恰当保护。恶意或被攻破的服务器可选择性向某些用户提供修改过的代码，以极小检测风险破坏他们的安全。这挑战端到端加密的基本前提：不当行为的服务器不应能破坏用户安全。

**迈向 Web 可验证安全。** 为使 Web 应用在恶意服务器存在下可信，两个性质必不可少：完整性——用户执行的代码与开发者在 manifest 中承诺的匹配；透明性——这些 manifest 公开记录且可独立审计。Web Application Integrity, Consistency and Transparency（WAICT，Web 应用完整性、一致性与透明性）把这些性质带给 Web 平台。WAICT 允许网站把客户端代码密码学绑定到 manifest，并把该 manifest 提交到可公开审计的日志。需要更强信任模型的站点可选择加入 WAICT 执行。若选择加入的站点交付未公开记录的代码，浏览器拒绝它，此前不可见的攻击变得可观察、可归因。这确保交付到用户机器的代码与安全研究者可检查的公开代码一致。

**把完整性与透明性带给开放 Web。** 我们与生态伙伴协作——包括 Cloudflare、新闻自由基金会（Freedom of the Press Foundation）与 Meta——确保部署模型实用、安全且尽可能简单。可在 Real World Cryptography 2026 的联合演讲了解更多 WAICT。WAICT 的早期原型在 Firefox Nightly 的 pref 后可用，帮助在真实世界场景验证方法。你可在 https://waict.dev/ 试驾该原型——包括一个由 WAICT 保护的端到端加密视频通话应用。实现是进行中工作，不是成品方案，但它为迭代与标准化提供具体基础。我们在开放中开发规范，欢迎早期反馈。WAICT 标志着向使强大、可验证的应用安全成为开放 Web 一等属性迈出的重要一步。特别感谢 Anna Weine、Benjamin Beurdouche、Christoph Kerschbaumer、Dennis Jackson、Frederik Braun 与 Tom Schuster。

## 关键词

#WAICT #JavaScript #完整性 #透明性 #Web安全
