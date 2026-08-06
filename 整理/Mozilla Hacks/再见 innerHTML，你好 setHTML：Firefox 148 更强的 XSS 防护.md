---
title: "再见 innerHTML，你好 setHTML：Firefox 148 更强的 XSS 防护"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Goodbye innerHTML, Hello setHTML- Stronger XSS Protection in Firefox 148.md"
source_note: "[[信息源/Mozilla Hacks/Goodbye innerHTML, Hello setHTML- Stronger XSS Protection in Firefox 148.]]"
source_sha256: cef4daf336ad07b25488c6969f8bd6ebbb32fa69e9a3145babd436ced8576bcf
original_url: "https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/"
published: 2026-02-24
processed: 2026-08-05
language: zh-CN
---

# 再见 innerHTML，你好 setHTML：Firefox 148 更强的 XSS 防护

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Tom Schuster
> - 发布时间：2026-02-24
> - 原文链接：[打开原文](https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Goodbye innerHTML, Hello setHTML- Stronger XSS Protection in Firefox 148.|查看原始文件]]

## 摘要

- 跨站脚本（XSS）仍是 Web 上最普遍的漏洞之一；新的标准化 Sanitizer API 为 Web 开发者提供在插入 DOM 前净化不受信任 HTML 的直接方式；Firefox 148 是首个发布此标准化安全增强 API 的浏览器，预期其他浏览器很快跟进。
- XSS 漏洞产生于网站无意让攻击者通过用户生成内容注入任意 HTML 或 JavaScript；攻击者可监控操纵用户交互并持续窃取数据；XSS 近十年位列顶级 Web 漏洞（CWE-79）前三。
- Firefox 从一开始深入参与 XSS 解决方案：2009 年率先提出 Content-Security-Policy（CSP）标准，允许网站限制浏览器可加载执行的资源；但 CSP 未获足够采用以保护 Web 长尾，因需现有网站重大架构变更与安全专家持续评审。
- Sanitizer API 填补缺口：标准化方式把恶意 HTML 变成无害 HTML。setHTML() 方法把净化直接集成进 HTML 插入，默认安全。示例：`document.body.setHTML('<h1>Hello my name is <img src="x" onclick="alert(\'XSS\')">')` 保留 <h1> 移除 <img> 与其 onclick 属性，得到 `<h1>Hello my name is</h1>`。
- 开发者用最少代码变更即可通过把易错 innerHTML 赋值替换为 setHTML() 选择更强 XSS 防护；默认配置过严（或不够严）时可提供自定义配置定义保留或移除哪些元素属性。
- 更强防护可与 Trusted Types 组合：集中控制 HTML 解析与注入；采用 setHTML() 后站点更易启用 Trusted Types 执行，严格策略可允许 setHTML() 同时阻止其他不安全 HTML 插入方法，帮助防止未来 XSS 回归。
- Firefox 148 同时支持 Sanitizer API 与 Trusted Types；采用这些标准让所有开发者无需专门安全团队或重大实现变更即可防 XSS。
- 实验建议：Sanitizer API playground（sanitizer-api.dev）。

## 正文

以下是文章全文翻译。

跨站脚本（XSS）仍是 Web 上最普遍的漏洞之一。新的标准化 Sanitizer API 为 Web 开发者提供在插入文档对象模型（DOM）前净化不受信任 HTML 的直接方式。Firefox 148 是首个发布这一标准化安全增强 API 的浏览器，为所有人推进更安全的 Web。我们预期其他浏览器很快跟进。XSS 漏洞产生于网站无意让攻击者通过用户生成内容注入任意 HTML 或 JavaScript。凭此攻击，攻击者可监控并操纵用户交互，并在漏洞持续可利用期间不断窃取用户数据。XSS 以难以防止著称，近十年一直位居顶级 Web 漏洞前三（CWE-79）。Firefox 从一开始就深入参与 XSS 解决方案，从 2009 年率先提出 Content-Security-Policy（CSP）标准开始。CSP 允许网站限制浏览器可加载与执行的资源（脚本、样式、图像等），提供对抗 XSS 的强防线。尽管持续改进与维护，CSP 未获足够采用以保护 Web 长尾，因为它需要现有网站重大架构变更与安全专家持续评审。

Sanitizer API 旨在帮助填补缺口：提供把恶意 HTML 变成无害 HTML——即净化它——的标准化方式。setHTML() 方法把净化直接集成进 HTML 插入，默认安全。净化不安全 HTML 的示例：`document.body.setHTML('<h1>Hello my name is <img src="x" onclick="alert(\'XSS\')">')`。此净化允许 <h1> 元素，同时移除嵌入的 <img> 元素与其 onclick 属性，从而消除 XSS 攻击，得到安全 HTML：`<h1>Hello my name is</h1>`。开发者可用最少代码变更选择更强 XSS 防护：把易错的 innerHTML 赋值替换为 setHTML()。若 setHTML() 默认配置对给定用例过严（或不够严），开发者可提供自定义配置，定义应保留或移除哪些 HTML 元素与属性。在引入 Web 页面前提早实验 Sanitizer API，建议探索 Sanitizer API playground。

为获得更强防护，Sanitizer API 可与 Trusted Types 组合，后者集中控制 HTML 解析与注入。采用 setHTML() 后，站点可更轻松启用 Trusted Types 执行，通常无需复杂自定义策略。严格策略可允许 setHTML() 同时阻止其他不安全 HTML 插入方法，帮助防止未来 XSS 回归。Sanitizer API 使现有代码中 innerHTML 赋值到 setHTML() 的替换变得容易，引入保护用户免受 Web XSS 攻击的更新更安全的默认。Firefox 148 支持 Sanitizer API 与 Trusted Types，创造更安全的 Web 体验。采用这些标准将让所有开发者无需专门安全团队或重大实现变更即可防 XSS。

## 关键词

#XSS #Sanitizer-API #setHTML #Trusted-Types #Firefox
