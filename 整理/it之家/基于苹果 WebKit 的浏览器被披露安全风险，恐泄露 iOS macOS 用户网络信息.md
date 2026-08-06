---
title: "基于苹果 WebKit 的浏览器被披露安全风险，恐泄露 iOS / macOS 用户网络信息"
source: "it之家"
original_file: "信息源/it之家/基于苹果 WebKit 的浏览器被披露安全风险，恐泄露 iOS - macOS 用户网络信息.md"
source_note: "[[信息源/it之家/基于苹果 WebKit 的浏览器被披露安全风险，恐泄露 iOS - macOS 用户网络信息]]"
source_sha256: 4b7cb2568e2913521a04397000666e9d5eccc2b35b62d9d4d251c37bff004a45
original_url: "https://www.ithome.com/0/985/850.htm"
processed: 2026-08-05
language: zh-CN
---

# 基于苹果 WebKit 的浏览器被披露安全风险，恐泄露 iOS / macOS 用户网络信息

> [!info] 来源信息
> - 数据源：it之家
> - 原文链接：[打开原文](https://www.ithome.com/0/985/850.htm)
> - Vault 原文件：[[信息源/it之家/基于苹果 WebKit 的浏览器被披露安全风险，恐泄露 iOS - macOS 用户网络信息|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，正文已从 HTML 转换为 Markdown 并统一排版。

## 正文

IT之家 8 月 5 日消息，网络安全博客 Mysk 昨日（8 月 4 日）发布博文，披露称在 iOS 和 macOS 系统中，基于 WebKit 引擎的浏览器存在 DNS 预取、通行密钥验证与 WebTransport 三个漏洞，**被黑客利用可泄露用户网络信息。**

研究人员 Talal Haj Bakry 与 Tommy Mysk 在报告中指出，基于 WebKit 的浏览器可以通过 WKWebsiteDataStore.proxyConfigurations，把网页流量转发至代理服务器。

根据苹果设计规范，网页发起的所有网络连接都应经过代理，网站只能看到代理服务器的 IP 地址。但研究人员发现，WebKit 的 3 项功能会绕过应用配置的代理，直接从设备发起网络请求：

-

DNS prefetching：通过设备的常规 DNS 路径解析域名，泄露用户真实 DNS 服务器。iOS 自 iOS 26.0 起支持该功能。
-

WebAuthn Related Origin Requests：由操作系统凭据服务直接获取验证文件，暴露设备真实 IP 地址。该功能于 iOS 18.0 引入。
-

WebTransport：建立绕过代理的 HTTP/3 连接，暴露设备真实 IP 地址。该功能随 iOS 26.4 公开发布。

这些泄露路径可能绕过代理或 iCloud Private Relay，暴露用户的真实 IP 地址，或让域名查询走向常规 DNS 路径。

*

IT之家附上参考地址

-

[IP and DNS Leaks in WebKit Affecting Proxy Browsers and Apple iCloud Private Relay](https://mysk.blog/2026/08/04/webkit-proxy-icloud-private-relay-ip-leak/)

## 关键词

#it之家
