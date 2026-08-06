---
published: 2026-08-01
title: "Arch Linux 因恶意接管关闭 AUR 孤儿包领养"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-01 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-01 (ZH)]]"
source_fragment: "Arch Linux 因恶意接管关闭 AUR 孤儿包领养"
source_sha256: 2393bfb8413683a472d8dd29a4d57eae2c4368a79f7d1d4bd862891940f60de6
original_url: "https://lwn.net/Articles/1086489/"
processed: 2026-08-05
language: zh-CN
---

# Arch Linux 因恶意接管关闭 AUR 孤儿包领养

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-01
> - 原文链接：[打开原文](https://lwn.net/Articles/1086489/)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-01 (ZH)|查看原始日报]]

## 摘要

- Arch Linux DevOps 团队宣布，由于“当前一波通过 AUR 进行的恶意包领养和后续提交”，已禁用对 Arch 用户仓库（AUR）中孤儿包的领养功能。Michael Taggart 的简要分析显示，本轮攻击添加的载荷疑似为远程访问木马（RAT），通过 Tor 网络接收命令，并试图上传大量用户数据。此前项目已因类似攻击于 6 月暂停新账户注册，7 月 13 日重新开放，但新增的限制措施显然未能生效。此举旨在阻断攻击者领养孤儿包后推送恶意更新的供应链攻击路径。

## 正文

Arch Linux DevOps 团队宣布，由于“当前一波通过 AUR 进行的恶意包领养和后续提交”，已禁用对 Arch 用户仓库（AUR）中孤儿包的领养功能。Michael Taggart 的简要分析显示，本轮攻击添加的载荷疑似为远程访问木马（RAT），通过 Tor 网络接收命令，并试图上传大量用户数据。此前项目已因类似攻击于 6 月暂停新账户注册，7 月 13 日重新开放，但新增的限制措施显然未能生效。此举旨在阻断攻击者领养孤儿包后推送恶意更新的供应链攻击路径。

rss · LWN.net · 7月31日 13:38

「背景」 AUR 是 Arch 社区维护的软件包仓库，包含用户提交的 PKGBUILD 等构建脚本；当维护者弃用某个包时，它成为孤儿包，其他用户可申请领养并继续更新。攻击者利用这一机制领养知名孤儿包，再向其中加入恶意代码，用户通过 AUR 助手或手动安装时就会在系统上执行恶意内容。

「影响」 Arch 用户在攻击期间安装或更新被恶意接管的 AUR 孤儿包，可能会执行 RAT 并被窃取数据；禁用领养可阻止新的恶意接管，但已下发的恶意包仍可能影响用户系统。

标签: #security, #Arch Linux, #AUR, #malware, #open-source

## 关键词

#security #Arch-Linux #AUR #malware #open-source #科技新闻
