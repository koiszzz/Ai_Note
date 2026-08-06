---
published: 2026-08-02
title: "NetBSD 11.0 发布：更快的 MICROVM 内核与 npf 增强"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-02 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-02 (ZH)]]"
source_fragment: "NetBSD 11.0 发布：更快的 MICROVM 内核与 npf 增强"
source_sha256: 24a3e6b0050cf2e9ee2dcc80be9b162d085ea40db7d6fdb14f15127841cb1369
original_url: "https://blog.netbsd.org/tnf/entry/netbsd_11_0_released"
processed: 2026-08-05
language: zh-CN
---

# NetBSD 11.0 发布：更快的 MICROVM 内核与 npf 增强

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-02
> - 原文链接：[打开原文](https://blog.netbsd.org/tnf/entry/netbsd_11_0_released)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-02 (ZH)|查看原始日报]]

## 摘要

- NetBSD 11.0 已发布，这是这款以可移植性著称的开源类 Unix 操作系统的一次重要版本更新，带来了新功能、性能改进和更广泛的硬件支持。其中最受关注的改动包括面向 x86 的 MICROVM 内核，可在约 10 毫秒内启动，以及 npf 防火墙的增强，新增了二层过滤和用户/组过滤能力。该版本对 BSD 生态和系统编程社区具有重要意义，为虚拟化、嵌入式或轻量级场景提供了新的可能性。

## 正文

NetBSD 11.0 已发布，这是这款以可移植性著称的开源类 Unix 操作系统的一次重要版本更新，带来了新功能、性能改进和更广泛的硬件支持。其中最受关注的改动包括面向 x86 的 MICROVM 内核，可在约 10 毫秒内启动，以及 npf 防火墙的增强，新增了二层过滤和用户/组过滤能力。该版本对 BSD 生态和系统编程社区具有重要意义，为虚拟化、嵌入式或轻量级场景提供了新的可能性。

hackernews · jaypatelani · 8月1日 17:56 · [社区讨论](https://news.ycombinator.com/item?id=49136736)

「背景」 NetBSD 是一个开源的类 Unix 操作系统，以高度可移植性和对多种硬件架构的支持著称。NetBSD 11.0 是该项目第十九个主要版本，官方于 2026 年 7 月 30 日发布；根据发布公告，它带来了新的 MICROVM 内核、npf 防火墙增强（包括二层与用户/组过滤）以及更广泛的硬件支持。由于 NetBSD 项目通常只维护较新的正式版本，11.0 的发布也为使用旧版本的用户提供了升级到受支持版本的机会。

「影响」 NetBSD 11.0 用户可以直接获得更快的虚拟机启动路径（MICROVM 内核，x86 上约 10ms）和更灵活的防火墙策略（npf 二层、用户/组过滤），使 NetBSD 在虚拟化与网络隔离场景中更有吸引力。

「社区讨论」 评论中有人好奇当前 BSD 系统的使用规模、开发活跃度以及与 Linux 的对比；多数讨论聚焦于 MICROVM 的 10ms 启动速度和 npf 新过滤能力，认为它们是有价值的改进。也有用户询问 Wine 在 NetBSD 上能否良好运行，以便在老 ThinkPad 上使用仅支持 Windows 的 SDR 软件。

参考链接

- [Announcing NetBSD 11.0 (July 30, 2026)](https://www.netbsd.org/releases/formal-11/NetBSD-11.0.html)

- [NetBSD 11.0 released! - blog.netbsd.org](https://blog.netbsd.org/tnf/entry/netbsd_11_0_released)

- [NetBSD releases](https://www.netbsd.org/releases/)

标签: #NetBSD, #operating-systems, #open-source, #release, #BSD

## 关键词

#NetBSD #operating-systems #open-source #release #BSD #科技新闻
