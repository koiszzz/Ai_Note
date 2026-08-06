---
title: "通过减少 DLL 注入改善企业环境中的 Firefox 稳定性"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Improving Firefox Stability in the Enterprise by Reducing DLL Injection.md"
source_note: "[[信息源/Mozilla Hacks/Improving Firefox Stability in the Enterprise by Reducing DLL Injection.]]"
source_sha256: df141f856a1acd15c8ef9df9182bf5544383ba2f5f56fc0242c053ef50da864d
original_url: "https://hacks.mozilla.org/2025/03/improving-firefox-stability-in-the-enterprise-by-reducing-dll-injection/"
published: 2025-03-25
processed: 2026-08-05
language: zh-CN
---

# 通过减少 DLL 注入改善企业环境中的 Firefox 稳定性

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Haik Aftandilian
> - 发布时间：2025-03-25
> - 原文链接：[打开原文](https://hacks.mozilla.org/2025/03/improving-firefox-stability-in-the-enterprise-by-reducing-dll-injection/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Improving Firefox Stability in the Enterprise by Reducing DLL Injection.|查看原始文件]]

## 摘要

- 自版本 138 起，Firefox 为企业环境的数据丢失防护（DLP）部署提供 DLL 注入的替代方案。
- DLL 注入：第三方 Windows 软件把自身 DLL 模块代码注入 Firefox 扩展功能；注入代码与应用内部交互，而应用未记录的内部本不是稳定接口——底层应用变更会导致不兼容、崩溃或意外行为；现代浏览器每月发布新功能与修复，正常开发会造成与注入软件的兼容性问题。Firefox 2023 年允许用户阻止第三方 DLL 加载，有 about:third-party 页面与第三方注入策略；2019 年与 Polytechnique Montréal 合作发布 DLL 注入 bug 研究。
- 企业中的 DLP：数据丢失防护产品广泛部署以阻止私有数据意外泄露（客户记录、公司机密）；DLP 软件通常用 DLL 注入监控 Firefox 等应用的可泄露敏感信息的操作（文件上传、复制粘贴、拖放、打印）。
- 今天 DLP 与 Firefox：DLP 软件经 DLL 注入监控；DLP 厂商努力测试测试版确保兼容但仍定期出问题；常见流程是企业用户报 IT 部门、IT 调试、报 bug；Mozilla 难以确定 bug 由外部软件导致；用户体验差甚至换浏览器，问题成高严重性事件。
- 浏览隐私：公司设备上浏览隐私常受公司强制软件支配；Firefox 建立在"浏览活动只属于用户"的原则上，但作为应用不能合理覆盖设备管理员意愿；若无良好支持机制，管理员将用 DLL 注入等不透明方法或替换浏览器。
- 新变化：Firefox 138 起 DLP 软件无需 DLL 注入即可与 Firefox 协作——集成 Google 开发、Chrome Enterprise 使用的 Content Analysis SDK（轻量协议，浏览器与 DLP 代理间，实现浏览器特定；Firefox 有自己的协议实现），可用企业策略启用；减少第三方代码注入改善企业用户稳定性；随更多 DLP 厂商采用 SDK，注入更少；同一 SDK 下单一 DLP 代理实现兼容多浏览器；开发中与领先 DLP 厂商合作；使用 DLP SDK 时 Firefox 显示指示器增加透明度。
- 企业使用：仅在使用 Firefox 企业策略的配置启用 Content Analysis SDK；企业策略允许管理员配置扩展限制、安全设置、网络代理等。

## 正文

以下是文章全文翻译。

自版本 138 起，Firefox 将为企业环境的数据丢失防护（DLP）部署提供 DLL 注入的替代方案。

**DLL 注入。** 向 Firefox 注入 DLL 是我们之前在 Hacks 博客覆盖过的主题。2023 年我们撰写了 Firefox 让用户阻止第三方 DLL 加载的能力，解释了 DLL 注入是什么、我们如何处理有问题的第三方模块、about:third-party 页面与第三方注入政策。更早在 2019 年，我们与 Polytechnique Montréal 合作发布了对 Firefox 生态 DLL 注入 bug 的研究。现在我们在企业 Firefox 安装的背景下回到此主题。首先提醒 DLL 注入是什么及为何仍有问题。DLL 注入是我们描述第三方 Windows 软件把自身 DLL 模块代码注入 Firefox 的术语。第三方开发 DLL 注入应用以某种方式扩展功能，这在 Windows 生态很普遍。第三方代码被注入时，注入代码与应用内部交互。虽然软件协同工作并不罕见、互联网建立于文档化标准上的软件互操作，DLL 注入的不同在于应用的未记录内部本不打算作为稳定接口，因此是构建软件产品的糟糕基础。底层应用改变时可导致不兼容、崩溃或其他意外行为。像 Firefox 这样的现代浏览器，新功能与修复大大小小按每月节奏开发发布。因此正常浏览器开发可造成与注入软件的不兼容，导致 Firefox 崩溃、绕过安全功能或其他不可预测的 bug 行为。这些问题出现时需要紧急排查并工程化临时方案直到软件更新解决，常需浏览器与第三方应用开发者协作。注入 Firefox 的软件类型从小型开源项目到广泛部署的企业安全产品。为消除一些最难的 DLL 注入问题，我们把注意力转向数据丢失防护企业应用。

**企业中的 DLP。** 数据丢失防护（DLP）产品是组织广泛部署以防止私有数据意外泄露的一类软件。私有数据示例包括客户记录（姓名、地址、信用卡信息）或公司机密。就像杀毒软件部署在公司笔记本舰队上，DLP 软件也如此。这些部署日益普遍，很大程度上因合规与责任担忧。这与 Firefox 有何关系？DLP 软件通常用 DLL 注入监控 Firefox 等应用可能泄露私有数据的活动。这只适用于能泄露敏感信息的特定操作：文件上传、粘贴（如复制粘贴）、拖放与打印。

**今天 DLP 与 Firefox。** 今天 DLP 软件通常经上述 DLL 注入监控 Firefox 活动。Firefox 与浏览器在此方面并不独特，但它们被重度使用且持续开发，使 DLL 注入更危险。DLP 软件通常部署到由 IT 部门管理的公司电脑舰队，包括注入应用的软件部署。DLP 厂商努力测试测试版确保产品与最新 Firefox 兼容并按需更新 DLL，但问题仍定期出现。常见问题是企业用户遇到问题报 IT 部门；IT 人员调试，可能向 Firefox 或 DLP 厂商报 bug。Mozilla 收到 bug 时可能难确定 bug 实际由外部软件导致。我们得知此类问题会提醒厂商并调查变通方案。期间用户体验差，可能不得不绕开问题甚至用另一浏览器。浏览器不可用时问题成高严重性事件，支持团队尽快恢复功能。

**浏览隐私。** 用户在公司电脑浏览时，其浏览隐私常受公司强制软件支配。不同地区对此与所需披露有不同法律，但技术层面，设备由公司控制时，公司有许多途径按公司政策规定水平监控活动。Firefox 建立在浏览活动只属于用户的原则上，但作为应用不能合理覆盖设备管理员意愿。只要管理员选择部署 DLP 软件，就期望它与该设备其他软件协作。若无良好支持的机制可用，他们将转向 DLL 注入等不透明易错方法，或用另一浏览器替换 Firefox。

**新变化——减少企业中的 DLL 注入。** 自 Firefox 138 起，DLP 软件无需 DLL 注入即可与 Firefox 协作。Firefox 138 集成 Content Analysis SDK（Google 开发、Chrome Enterprise 使用），可用企业策略启用。SDK 是浏览器与 DLP 代理间的轻量协议，实现浏览器特定——即 Firefox 有自己的协议实现。该集成让 Firefox 与 DLP 软件交互同时减少第三方代码注入。这将改善企业 Firefox 用户稳定性，且随更多 DLP 厂商采用 SDK，注入 Firefox 的第三方代码更少。厂商与浏览器用同一 SDK 时，厂商知道单一 DLP 代理实现将与多浏览器兼容。Firefox 实现开发期间我们与一些领先 DLP 厂商合作确保兼容。除稳定性外，使用 DLP SDK 时 Firefox 将显示指示器，为用户提供更多透明度。

**企业使用。** Firefox 仅在使用 Firefox 企业策略的配置中启用 Content Analysis SDK。Firefox 企业策略被组织用于跨电脑舰队配置 Firefox 设置，允许管理员配置 Firefox，例如限制可安装的浏览器扩展、设置安全相关浏览器设置、配置网络代理设置等。可在此支持文章了解更多 Firefox 企业策略。

## 关键词

#Firefox #DLL注入 #DLP #企业 #稳定性
