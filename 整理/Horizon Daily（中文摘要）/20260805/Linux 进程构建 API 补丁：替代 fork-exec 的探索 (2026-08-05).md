---
published: 2026-08-05
title: "Linux 进程构建 API 补丁：替代 fork/exec 的探索"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)]]"
source_fragment: "Linux 进程构建 API 补丁：替代 fork/exec 的探索"
source_sha256: a95ca2b002031ca8b11b06a7711ba64db3ff679428fdd0f1ed0860fe3068c63d
original_url: "https://lwn.net/Articles/1086330/"
processed: 2026-08-05
language: zh-CN
---

# Linux 进程构建 API 补丁：替代 fork/exec 的探索

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://lwn.net/Articles/1086330/)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)|查看原始日报]]

## 摘要

- Li Chen 发布了一组补丁系列，提出用于 Linux 的进程构建 API，作为传统 fork()/exec() 模式的替代方案；该工作在先前“spawn 模板”讨论的基础上展开，并借助了大量 LLM 辅助。新接口首先通过带 PIDFD_EMPTY 标志的 pidfd_open(0, PIDFD_EMPTY) 创建一个空的进程外壳，再用 pidfd_spawn_run() 系统调用配合包含 path、argv、envp 和 actions 数组的结构体来填充并启动进程，另外……

## 正文

Li Chen 发布了一组补丁系列，提出用于 Linux 的进程构建 API，作为传统 fork()/exec() 模式的替代方案；该工作在先前“spawn 模板”讨论的基础上展开，并借助了大量 LLM 辅助。新接口首先通过带 PIDFD_EMPTY 标志的 pidfd_open(0, PIDFD_EMPTY) 创建一个空的进程外壳，再用 pidfd_spawn_run() 系统调用配合包含 path、argv、envp 和 actions 数组的结构体来填充并启动进程，另外提供 pidfd_config() 用于设置字符串参数。当前支持的动作只有 DUP2、CLOSE_RANGE 和 FCHDIR 三种，动作失败会导致整个系统调用失败且不启动新进程；要完整实现 posix_spawn() 还需要更多动作，例如信号处理、调度器参数和打开文件等。补丁系列仍属于概念验证，文章还指出 pidfd_spawn_run() 并未真正从零创建进程，但原文在此处截断，未继续说明具体实现方式。

rss · LWN.net · 8月4日 13:27

「背景」 传统 Unix/Linux 进程创建通常先调用 fork()（Linux 上实际是 clone() 的一个变体）复制父进程，再通过 execve() 加载新程序，这导致许多复制父进程状态的工作被白白丢弃。posix_spawn() 是标准库层面为高效进程创建提供的替代接口，但内核层面一直缺少能够从零组装新进程的通用机制；本补丁系列正是对这一方向的探索。

「影响」 如果社区接受这一方向，未来 Linux 进程创建有望获得比 fork/exec 更高效的路径，但当前概念验证仍缺少实现完整 posix_spawn() 所需的众多动作，且“从零创建”的说法尚未得到完整验证，短期内不会直接改变现有系统编程方式。

标签: #Linux, #process API, #fork/exec, #kernel development, #systems programming

## 关键词

#Linux #process-API #fork/exec #kernel-development #systems-programming #科技新闻
