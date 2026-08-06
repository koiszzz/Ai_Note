---
title: "NetBSD 11.0 发布：新增 RISC-V 支持与 NPF 改进"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-04 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-04 (ZH)]]"
source_fragment: "NetBSD 11.0 发布：新增 RISC-V 支持与 NPF 改进"
source_sha256: 394593e54b3a42b7dc4973ca5a342d896120ce9bbc7a6f374ffa92c89c7b9829
original_url: "https://lwn.net/Articles/1086898/"
published: 2026-08-04
processed: 2026-08-05
language: zh-CN
---

# NetBSD 11.0 发布：新增 RISC-V 支持与 NPF 改进

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-04
> - 原文链接：[打开原文](https://lwn.net/Articles/1086898/)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-04 (ZH)|查看原始日报]]

## 摘要

- NetBSD 11.0 作为该操作系统的第 19 个主要版本正式发布。此次更新包含面向 RISC-V 架构的新移植，改进了 compat_linux() 中对 Linux 系统调用的支持，并增强了 NPF 防火墙。开发团队在发布说明中表示，由于 AI 工具导致安全问题的数量大幅增加，他们选择公开未解决的问题，而不是继续推迟发布。二进制发行版和完整变更日志已通过官方发布说明提供。这些改进使 NetBSD 在硬件支持和 Linux 兼容性方面迈出重要一步。

## 正文

NetBSD 11.0 作为该操作系统的第 19 个主要版本正式发布。此次更新包含面向 RISC-V 架构的新移植，改进了 compat_linux() 中对 Linux 系统调用的支持，并增强了 NPF 防火墙。开发团队在发布说明中表示，由于 AI 工具导致安全问题的数量大幅增加，他们选择公开未解决的问题，而不是继续推迟发布。二进制发行版和完整变更日志已通过官方发布说明提供。这些改进使 NetBSD 在硬件支持和 Linux 兼容性方面迈出重要一步。

rss · LWN.net · 8月3日 13:33

「背景」 NetBSD 是一个以可移植性和支持众多硬件平台著称的开源操作系统，上一稳定版本为 10.1。NetBSD 11.0 在经历超过 18 个月和七个候选版本后发布，首次为 64 位 RISC-V 架构提供了官方支持的稳定移植，并改进了 Linux 应用程序的二进制兼容层（compat_linux）以及 NPF 防火墙等功能。

「影响」 对于现有 NetBSD 用户和潜在采用者，这一版本提供了新的 RISC-V 平台支持、更好的 Linux 二进制兼容性以及防火墙功能增强，但公开的未解决安全问题可能影响升级决策。

参考链接

- [NetBSD 11 . 0 Ships First Stable RISC - V Port and Ten-Millisecond Boot...](https://www.techtimes.com/articles/322681/20260802/netbsd-110-ships-first-stable-risc-v-port-ten-millisecond-boot-kernel.htm)

- [NetBSD 11 . 0 Released With RISC - V Support, Enhanced... - Phoronix](https://www.phoronix.com/news/NetBSD-11.0)

标签: #NetBSD, #operating system, #RISC-V, #open source, #security

## 关键词

#NetBSD #operating-system #RISC-V #open-source #security #科技新闻
