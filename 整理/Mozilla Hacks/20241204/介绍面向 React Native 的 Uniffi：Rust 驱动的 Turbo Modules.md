---
published: 2024-12-04
title: "介绍面向 React Native 的 Uniffi：Rust 驱动的 Turbo Modules"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Introducing Uniffi for React Native- Rust-Powered Turbo Modules.md"
source_note: "[[信息源/Mozilla Hacks/Introducing Uniffi for React Native- Rust-Powered Turbo Modules.]]"
source_sha256: e12ccb22051887b354a4d9158d5a7f12fe498f34e06b02974a18eaacb97e521a
original_url: "https://hacks.mozilla.org/2024/12/introducing-uniffi-for-react-native-rust-powered-turbo-modules/"
processed: 2026-08-05
language: zh-CN
---

# 介绍面向 React Native 的 Uniffi：Rust 驱动的 Turbo Modules

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Mark Mayo
> - 发布时间：2024-12-04
> - 原文链接：[打开原文](https://hacks.mozilla.org/2024/12/introducing-uniffi-for-react-native-rust-powered-turbo-modules/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Introducing Uniffi for React Native- Rust-Powered Turbo Modules.|查看原始文件]]

## 摘要

- Mozilla 与 Filament 以开源许可发布 Uniffi for React Native：用 Rust 构建 React Native Turbo Modules 的新工具；让数百万写跨平台 React Native 应用的开发者用以安全与性能著称的 Rust 实现应用核心逻辑的单一实现，无缝跨 iOS 与 Android 工作。
- React Native 挑战：依赖单一 JavaScript 线程，复杂任务时变慢；传统变通是写两次代码（iOS 一次 Android 一次）或用难管理的 C++；Uniffi for React Native 提供更好方案：把重任务卸载到 Rust。
- 工作原理：uniffi 绑定生成器，经 Turbo Modules 从 React Native 使用 Rust——生成从 TypeScript 调用 Rust 再返回的 TypeScript 与 JSI C++，以及把绑定安装进运行中 React Native 库的 Turbo Module。
- 历史：2020 年 Uniffi 起步，作为"一次编写处处运行"工具集，最初是为 Firefox Sync 核心（Rust）单一实现部署到 Android 与 iOS 的 hack；此后 Mozilla 用 uniffi-rs 在移动与桌面产品成功部署 Rust（书签与历史同步、Firefox Suggest、遥测与实验）；Mozilla 之外 Uniffi 用于 Android AOSP、Nord Security 与 Bitwarden 等安全产品及社区熟悉的一些复杂库。
- 当前为早期版本；开源贡献者 Johannes Marbach 已被 Unomed 赞助用 Uniffi for React Native 为 Matrix SDK 创建 React Native 库。
- 两个兴奋用例：(1) 用 Rust 把计算繁重代码卸载到多线程/内存安全子系统，逃离 React Native 单线程 JS 性能瓶颈；(2) 利用庞大 Rust crates 库——Filament 开发者用基础 Rust 知识当天找到快速 blurhashing 库替换慢 TypeScript 实现。
- 披露：除协作外，Mozilla Ventures 是 Filament 投资者。
- 资源：GitHub（jhugman/uniffi-bindgen-react-native）与 Matrix 频道。

## 正文

以下是文章全文翻译。

今天 Mozilla 与 Filament 以开源许可发布 Uniffi for React Native——我们一直在用它在 Rust 中构建 React Native Turbo Modules 的新工具。这允许数百万编写跨平台 React Native 应用的开发者使用 Rust——一种以安全与性能收益著称的现代编程语言——为应用核心逻辑构建单一实现，无缝跨 iOS 与 Android 工作。这对我们与共同开发该库的 Filament 以及首席开发者 James Hugman 都是巨大胜利。我们认为对许多其他开发者也会很棒。更少代码是好的。内存安全是好的。性能是好的。我们三者兼得，还加上在更多地方使用我们热爱的语言的乐趣。对熟悉 React Native 的人，它是创建跨平台应用的优秀框架，但也有挑战。React Native 应用依赖单一 JavaScript 线程，处理复杂任务时会变慢。开发者传统上通过写两次代码（iOS 一次、Android 一次）或使用难管理的 C++ 来绕开。Uniffi for React Native 提供更好方案：让开发者把重任务卸载到 Rust，现在与 React Native 集成很容易。结果是你得到更快、更流畅的应用与精简的开发流程。

**Uniffi for React Native 如何工作。** Uniffi for React Native 是一个 uniFFI 绑定生成器，用于经 Turbo Modules 从 React Native 使用 Rust。它让我们在足够高的抽象层工作以专注应用需求，而非迷失于定制原生跨平台开发的繁琐技术细节。它提供工具生成：从 TypeScript 调用 Rust 再返回的 TypeScript 与 JSI C++；以及把绑定安装进运行中 React Native 库的 Turbo Module。我们对此工作的继续感到兴奋。2020 年我们开始用 Uniffi 作为 Rust 的现代"一次编写；处处运行"工具集。Uniffi 自我们把它作为让 Firefox Sync 核心（Rust）单一实现部署到 Android 与 iOS 应用的小 hack 开发以来走了很长的路！此后 Mozilla 用 uniffi-rs 在移动与桌面产品成功部署 Rust，服务于数亿用户。这些 Rust 代码运行书签与历史同步、Firefox Suggest、遥测与实验等重要子系统。Mozilla 之外，Uniffi 用于 Android（AOSP）、高知名度安全产品（Nord Security、Bitwarden）与社区熟悉的一些复杂库（dotlottie、native.live）。

目前 Uniffi for React Native 项目是早期版本。我们没有酷炫落地页或仓库示例（即将推出！），但开源贡献者 Johannes Marbach 已被 Unomed 赞助使用 Uniffi for React Native 创建 Matrix SDK 的 React Native 库。需要尝试的想法？我有两个非常兴奋的用例：(1) 用 Rust 把计算繁重代码卸载到多线程/内存安全子系统，逃离 React Native 单线程 JS 性能瓶颈。懂的人都懂。(2) 在 React Native 应用利用不可思议的 Rust crates 库。一位 Filament 开发者近期展示了其强大：凭基础 Rust 知识，他们在 crates.io 找到快速 blurhashing 库替换慢 TypeScript 实现并当天运行起来。我们希望进一步改进工具让这类优化尽可能容易。Uniffi 代表跨平台开发的一步前进，把 Rust 力量与 React Native 灵活性结合，为应用开发者解锁新可能。我们期待社区探索可能性。请查看 GitHub 上的库并加入 Matrix 对话。披露：除此次协作外，Mozilla Ventures 是 Filament 的投资者。

## 关键词

#Uniffi #React-Native #Rust #Turbo-Modules #跨平台
