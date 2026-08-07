---
title: "BPF 进入 binfmt_misc：可编程执行格式选择"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-07 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-07 (ZH)]]"
source_fragment: "BPF 进入 binfmt_misc：可编程执行格式选择"
source_sha256: ccd03a1d29c5c9cfe45914f96ef46bb6bb54fd1205d1fad4251f7b0de31c355e
original_url: "https://lwn.net/Articles/1086947/"
published: 2026-08-07
processed: 2026-08-07
language: zh-CN
---

# BPF 进入 binfmt_misc：可编程执行格式选择

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://lwn.net/Articles/1086947/)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-07 (ZH)|查看原始日报]]

## 摘要

- LWN 报道，Linux 内核的 binfmt_misc 机制预计将迎来重大更新，核心新增能力是允许加载 BPF 程序来决定如何运行一个可执行文件。这一方向由 Christian Brauner 在 2026 年 7 月的补丁集中提出，随后 Farid Zakaria 也提交了自己的版本；Brauner 的 v2 补丁集被视为最终解决方案的雏形。新接口通过 struct_ops 注册 binfmt_misc_ops，包含 match() 和 load() 两个回调，分别负责匹……

## 正文

LWN 报道，Linux 内核的 binfmt_misc 机制预计将迎来重大更新，核心新增能力是允许加载 BPF 程序来决定如何运行一个可执行文件。这一方向由 Christian Brauner 在 2026 年 7 月的补丁集中提出，随后 Farid Zakaria 也提交了自己的版本；Brauner 的 v2 补丁集被视为最终解决方案的雏形。新接口通过 struct_ops 注册 binfmt_misc_ops，包含 match() 和 load() 两个回调，分别负责匹配待启动程序并加载合适的解释器。背景是 Nix 发行版需要“密封/可重定位”二进制，而 PT_INTERP 相对路径方案因安全顾虑被否决。

rss · LWN.net · 8月6日 13:47

「背景」 binfmt_misc 是 Linux 自 1997 年引入的机制，允许用户空间通过 /proc/sys/fs/binfmt_misc/register 注册新的可执行格式，内核根据文件头字节或扩展名识别程序，并调用指定的解释器执行。传统上这种匹配是静态的，而 BPF 的引入让这一决策变得可编程，可以根据 linux_binprm 中的更多信息动态选择解释器。

「影响」 如果该补丁被合并，使用 binfmt_misc 的发行版和开发者将能用 BPF 程序动态选择解释器，从而在不修改二进制文件的情况下运行带有任意动态链接器路径的密封二进制；但目前该特性仍处于补丁讨论阶段，尚未进入主线内核。

标签: #Linux kernel, #BPF, #binfmt\_misc, #executable formats, #kernel development

## 关键词

#Linux-kernel #BPF #binfmt\_misc #executable-formats #kernel-development #科技新闻
