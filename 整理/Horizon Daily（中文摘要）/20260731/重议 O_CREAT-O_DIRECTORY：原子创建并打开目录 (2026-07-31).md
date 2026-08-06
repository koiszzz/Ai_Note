---
published: 2026-07-31
title: "重议 O_CREAT|O_DIRECTORY：原子创建并打开目录"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-07-31 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-07-31 (ZH)]]"
source_fragment: "重议 O_CREAT|O_DIRECTORY：原子创建并打开目录"
source_sha256: 898af1afa623dd8dc1fc38ee05167c63aca85eabf865591f7a539b16f4b2e1ae
original_url: "https://lwn.net/Articles/1085617/"
processed: 2026-08-05
language: zh-CN
---

# 重议 O_CREAT|O_DIRECTORY：原子创建并打开目录

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-07-31
> - 原文链接：[打开原文](https://lwn.net/Articles/1085617/)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-07-31 (ZH)|查看原始日报]]

## 摘要

- Linux 目前没有能在单个无竞态系统调用中同时创建并打开目录的接口，这种两步操作可能被其他进程在中间替换路径。Jori Koolstra 先提出新的 mkdirat_fd()/mkdirat2() 系统调用，随后按 Christian Brauner 的建议改为复用 open() 的 O_CREAT|O_DIRECTORY 组合；该组合自内核 6.4 起在所有情况下返回 EINVAL。支持者认为这样可以免费获得 open() 的路径解析限制等能力，反对者如 Pedro Fa……

## 正文

Linux 目前没有能在单个无竞态系统调用中同时创建并打开目录的接口，这种两步操作可能被其他进程在中间替换路径。Jori Koolstra 先提出新的 mkdirat_fd()/mkdirat2() 系统调用，随后按 Christian Brauner 的建议改为复用 open() 的 O_CREAT|O_DIRECTORY 组合；该组合自内核 6.4 起在所有情况下返回 EINVAL。支持者认为这样可以免费获得 open() 的路径解析限制等能力，反对者如 Pedro Falcato 则警告历史上各 UNIX 对该组合约有 5 种不同行为，可移植使用是“雷区”；Brauner 认为担心不值得考虑，并建议把 6.4 修复移植到旧内核，Christoph Hellwig 则坚持接口必须在 Linux 旧内核上自发现。Neil Brown 提出用 OPENAT2_NEW_COMBINATION 标志让 openat2() 在旧内核上立即失败，讨论仍在进行。

rss · LWN.net · 7月30日 14:00

「背景」： open() 的 O_DIRECTORY 标志表示只打开目录，O_CREAT 表示不存在时创建文件。过去内核把 O_CREAT|O_DIRECTORY 组合视为错误：旧内核会在文件存在时返回 ENOTDIR/EISDIR，不存在时仍创建普通文件；Linux 5.7 起最后一类情况也会报错但仍会创建文件；Linux 6.4 起该组合一律返回 EINVAL。这段历史正是开发者担心“重新赋予该组合新语义”会误导应用程序的原因。

标签: #linux-kernel, #system-calls, #filesystems, #api-design, #open

## 关键词

#linux-kernel #system-calls #filesystems #api-design #open #科技新闻
