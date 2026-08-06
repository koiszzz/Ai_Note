---
published: 2026-08-06
title: "FUSE 维护者谈维护困境与新 fusex API"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-06 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-06 (ZH)]]"
source_fragment: "FUSE 维护者谈维护困境与新 fusex API"
source_sha256: 6eb01013c952babadec417836467614fe54ac3fae3fc587167282efa60091f31
original_url: "https://lwn.net/Articles/1086336/"
processed: 2026-08-06
language: zh-CN
---

# FUSE 维护者谈维护困境与新 fusex API

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://lwn.net/Articles/1086336/)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-06 (ZH)|查看原始日报]]

## 摘要

- LWN 的 Jake Edge 报道称，在 2026 年 LSFMM+BPF 峰会上，FUSE 维护者 Miklos Szeredi 主持了一场 BoF 讨论，谈及维护挑战、多项待合并特性以及全新的用户空间 API“fusex”。Szeredi 坦言自己更擅长阻止 bug 进入而不擅长接纳新特性，希望有人自愿担任共同维护者，但现场无人正式承担。待办特性包括 Darrick Wong 基于 iomap 的用户空间 API（会使内核中 FUSE 代码量增加至少 30%）、John……

## 正文

LWN 的 Jake Edge 报道称，在 2026 年 LSFMM+BPF 峰会上，FUSE 维护者 Miklos Szeredi 主持了一场 BoF 讨论，谈及维护挑战、多项待合并特性以及全新的用户空间 API“fusex”。Szeredi 坦言自己更擅长阻止 bug 进入而不擅长接纳新特性，希望有人自愿担任共同维护者，但现场无人正式承担。待办特性包括 Darrick Wong 基于 iomap 的用户空间 API（会使内核中 FUSE 代码量增加至少 30%）、John Groves 的 famfs、Joanne Koong 的 io_uring 零拷贝支持和大型 folio 支持、Horst Birthelmer 的 compound commands、Luis Henriques 的文件句柄用户空间 API 等。Szeredi 已完成传输层与文件系统层的分离并将进入 7.2 内核，同时计划对 CUSE 和 virtiofs 做类似改造。fusex 目前约 2000 行代码，仅为现有 FUSE API 的 10%，仅支持本地文件系统且为同步设计，他希望它最终成为 FUSE 协议的新主要版本。

rss · LWN.net · 8月5日 15:59

「背景」 FUSE（Filesystem in Userspace）是 Linux 内核提供的机制，允许在用户空间实现文件系统；现有 FUSE 用户空间 API 已有超过 20 年历史，积累了不少历史包袱。LSFMM+BPF 是 Linux 存储、文件系统、内存管理和 BPF 领域的年度技术峰会，FUSE 维护者常在此讨论子系统的方向与路线图。

「影响」 对依赖 FUSE 的用户空间文件系统开发者来说，最直接的影响是内核侧可能迎来新协议/API“fusex”以及更清晰的传输层分层，但具体效果取决于是否有人愿意担任共同维护者、特性能否合并以及跨平台协调能否推进。

标签: #FUSE, #Linux kernel, #filesystems, #LSFMM+BPF, #API design

## 关键词

#FUSE #Linux-kernel #filesystems #LSFMM+BPF #API-design #科技新闻
