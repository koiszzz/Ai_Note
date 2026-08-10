---
title: "sub2api 曝 OAuth 高危漏洞，仅凭邮箱即可接管账户"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH)]]"
source_fragment: "sub2api 曝 OAuth 高危漏洞，仅凭邮箱即可接管账户"
source_sha256: 6e8dde8f282ed0a4e0983273702ea4892d79ce10648a2ce7b0f51173b915314b
original_url: "https://github.com/Wei-Shaw/sub2api/issues/5350"
published: 2026-08-08
processed: 2026-08-09
language: zh-CN
---

# sub2api 曝 OAuth 高危漏洞，仅凭邮箱即可接管账户

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-08
> - 原文链接：[打开原文](https://github.com/Wei-Shaw/sub2api/issues/5350)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH)|查看原始日报]]

## 摘要

- sub2api v0.1.171 及之前版本存在一个 CVSS 8.8 的高危 OAuth 账户接管漏洞。攻击者仅需知道受害者注册邮箱，无需密码、验证码或用户交互，即可通过接口将攻击者的 OAuth 身份绑定到受害者账户，从而完全控制其 API 密钥、账单余额与订阅配额。该漏洞源于 pending session 流程中 existingUser 分支未校验密码和验证码，攻击者将目标用户 ID 设为受害者后即可完成 OAuth 身份绑定，之后每次 OAuth 登录都会解析为受……

## 正文

sub2api v0.1.171 及之前版本存在一个 CVSS 8.8 的高危 OAuth 账户接管漏洞。攻击者仅需知道受害者注册邮箱，无需密码、验证码或用户交互，即可通过接口将攻击者的 OAuth 身份绑定到受害者账户，从而完全控制其 API 密钥、账单余额与订阅配额。该漏洞源于 pending session 流程中 existingUser 分支未校验密码和验证码，攻击者将目标用户 ID 设为受害者后即可完成 OAuth 身份绑定，之后每次 OAuth 登录都会解析为受害者账户。相关讨论已在 GitHub Issue 中公开，使用该项目的用户应尽快关注修复或升级。

telegram · zaihuapd · 8月7日 14:59

「背景」 sub2api 是一个用于分发和管理 AI 产品订阅 API 配额的网关平台，用户通过平台生成的 API 密钥访问上游 AI 服务，平台负责认证、计费、负载均衡和请求转发。该项目的登录流程采用 OAuth，并在处理待定会话（pending session）的 existingUser 分支时缺乏对密码和验证码的校验，从而为账户接管漏洞埋下隐患。

「影响」 使用 sub2api v0.1.171 及之前版本的用户面临账户被完全接管的风险，包括 API 密钥、账单余额和订阅配额失控；项目维护者应立即发布修复版本并提醒受影响用户轮换密钥。

参考链接

- [GitHub Wei-Shaw/ sub 2 api LLM Context](https://uuithub.com/Wei-Shaw/sub2api)

- [GitHub - Wei-Shaw/ sub 2 api : Sub 2 API ...](https://github--com.proxy.hfzk.net.cn/Wei-Shaw/sub2api)

标签: #security, #vulnerability, #OAuth, #account-takeover, #sub2api

## 关键词

#security #vulnerability #OAuth #account-takeover #sub2api #科技新闻
