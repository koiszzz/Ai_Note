---
title: "Kakehashi：在 Linux ARM 上运行 macOS 二进制的实验性用户态"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-03 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-03 (ZH)]]"
source_fragment: "Kakehashi：在 Linux ARM 上运行 macOS 二进制的实验性用户态"
source_sha256: ecc86803d9e2fb408fe257b29d97f84afda72a2ddf5f623b91194da6a8a95ee7
original_url: "https://github.com/wie-project/kakehashi"
published: 2026-08-03
processed: 2026-08-05
language: zh-CN
validation_attempt: 2
validation_manual_approved: true
validation_manual_approval_reason: "已逐段对照原始日报；剩余外文仅为项目名、命令名、技术术语、参考链接标题和专有名词。"
---

# Kakehashi：在 Linux ARM 上运行 macOS 二进制的实验性用户态

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-03
> - 原文链接：[打开原文](https://github.com/wie-project/kakehashi)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-03 (ZH)|查看原始日报]]

## 摘要

- Kakehashi 是一个实验性用户态项目，目标是在 Linux ARM 机器上原生运行 macOS 命令行二进制。目前已有 7-Zip、curl 和 Xcode Git 的工作原型：7-Zip 通过 8k 文件树的多线程压缩测试，但比原生 Linux 执行慢约 5.2 倍；curl 的 200 多个命令和选项通过自动化 Docker 测试；Xcode Git 支持基本版本控制。项目处于早期阶段，尚未成熟，但开发者已规划优化方案以缩小性能差距。

## 正文

Kakehashi 是一个实验性用户态项目，目标是在 Linux ARM 机器上原生运行 macOS 命令行二进制。目前已有 7-Zip、curl 和 Xcode Git 的工作原型：7-Zip 通过 8k 文件树的多线程压缩测试，但比原生 Linux 执行慢约 5.2 倍；curl 的 200 多个命令和选项通过自动化 Docker 测试；Xcode Git 支持基本版本控制。项目处于早期阶段，尚未成熟，但开发者已规划优化方案以缩小性能差距。

hackernews · vlad_kalinkin · 8月2日 16:26 · [社区讨论](https://news.ycombinator.com/item?id=49145937)

「背景」 Kakehashi 是一个面向 Linux ARM64（aarch64）的 macOS 二进制翻译层，采用纯用户态方案，不依赖内核模块，也不使用 JIT。它加载 Darwin 平台的 Mach-O 可执行文件，在 Linux 进程中作为普通用户代码运行，并提供独立的 libSystem 实现和 BSD 系统调用翻译。另一个更广为人知的类似项目是 Darling，它旨在为 Linux 提供完整的 macOS 兼容层，但目前在 x86/x64 上支持较好，ARM64 支持仍在开发中；Kakehashi 则更专注于命令行工具，属于早期实验性项目。

「影响」 对 Linux ARM 用户而言，该项目提供了在本机运行部分 macOS 命令行工具（7-Zip、curl、Git）的实验性路径，但当前性能开销和成熟度仍不足以支撑生产环境。

「社区讨论」 评论区普遍表示期待，认为该方向类似 WINE/Proton 对 Windows 的价值；有评论询问是否与 Darling 项目及其 ARM64 PR 合作或目标不同，也有用户希望未来能实现类似 yabridge 的机制，在 Linux 上运行 macOS 音频单元（AU）插件。

参考链接

- [GitHub - wie - project / kakehashi : Userspace macOS translation layer...](https://github.com/wie-project/kakehashi)

- [kakehashi /docs/architecture.md at main · wie - project / kakehashi](https://github.com/wie-project/kakehashi/blob/main/docs/architecture.md)

- [Darling (software) - Wikipedia](https://en.wikipedia.org/wiki/Darling_%28software%29)

- [GitHub - darlinghq/darling: Darwin/macOS emulation layer for ... Architectures supported · darlinghq darling · Discussion ... Build instructions - Darling Docs Darling download | SourceForge.net Introduction - Darling Docs Darling (software) - Wikipedia](https://github.com/darlinghq/darling)

标签: #macOS, #Linux, #ARM, #binary compatibility, #open source

## 关键词

#macOS #Linux #ARM #binary-compatibility #open-source #科技新闻
