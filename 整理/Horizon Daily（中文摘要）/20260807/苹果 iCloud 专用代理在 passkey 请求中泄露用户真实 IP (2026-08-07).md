---
title: "苹果 iCloud 专用代理在 passkey 请求中泄露用户真实 IP"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-07 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-07 (ZH)]]"
source_fragment: "苹果 iCloud 专用代理在 passkey 请求中泄露用户真实 IP"
source_sha256: ccd03a1d29c5c9cfe45914f96ef46bb6bb54fd1205d1fad4251f7b0de31c355e
original_url: "https://www.404media.co/apples-private-relay-is-exposing-users-real-ip-addresses/"
published: 2026-08-07
processed: 2026-08-07
language: zh-CN
---

# 苹果 iCloud 专用代理在 passkey 请求中泄露用户真实 IP

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://www.404media.co/apples-private-relay-is-exposing-users-real-ip-addresses/)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-07 (ZH)|查看原始日报]]

## 摘要

- 安全研究员 Tommy Mysk 与 Talal Haj Bakry 发现，苹果 iCloud+ 付费功能“iCloud 专用代理”（Private Relay）在特定条件下无法隐藏用户真实 IP：任何支持或假装支持 passkey 的网站都可能借此获取用户真实地址，且不少网站已在无意中收集了这些信息。404 Media 复现测试确认了该问题。根因是 iOS 上所有浏览器必须使用 WebKit 引擎，而 passkey 验证时请求由系统凭证服务而非 Safari 发起，绕过了……

## 正文

安全研究员 Tommy Mysk 与 Talal Haj Bakry 发现，苹果 iCloud+ 付费功能“iCloud 专用代理”（Private Relay）在特定条件下无法隐藏用户真实 IP：任何支持或假装支持 passkey 的网站都可能借此获取用户真实地址，且不少网站已在无意中收集了这些信息。404 Media 复现测试确认了该问题。根因是 iOS 上所有浏览器必须使用 WebKit 引擎，而 passkey 验证时请求由系统凭证服务而非 Safari 发起，绕过了专用代理的中继路径。该缺陷也影响 iOS 上的 Tor 浏览器 OnionBrowser。此前苹果“隐藏邮件地址”也被曝泄露真实邮箱，苹果称正在调查。

telegram · zaihuapd · 8月6日 03:04

「背景」 iCloud 专用代理是 iCloud+ 的付费增值功能，可将 Safari 等 WebKit 浏览器的流量经苹果与第三方中继转发，使网站难以直接看到用户 IP。Passkey（密钥）是一种基于公钥加密的无密码登录方式，在 iOS 上由系统凭证服务配合 WebKit 处理；由于相关请求不经过 Safari 的普通网络栈，可能脱离专用代理的保护范围。

「影响」 对使用 iCloud+ 并在 iOS 上访问 passkey 网站的订阅者，这一缺陷会让网站或攻击者获取其真实 IP，削弱其隐私预期；OnionBrowser（Tor 浏览器）用户在 iOS 上也同样受影响。官方尚未说明修复时间，实际泄露取决于网站是否已记录这些请求。

标签: #privacy, #apple, #webkit, #security, #iCloud

## 关键词

#privacy #apple #webkit #security #iCloud #科技新闻
