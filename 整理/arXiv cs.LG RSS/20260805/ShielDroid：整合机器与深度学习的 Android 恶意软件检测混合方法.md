---
published: 2026-08-05
title: "ShielDroid：整合机器与深度学习的 Android 恶意软件检测混合方法"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ShielDroid- A Hybrid Approach Integrating Machine and Deep Learning for Android Malware Detection.md"
source_note: "[[信息源/arXiv cs.LG RSS/ShielDroid- A Hybrid Approach Integrating Machine and Deep Learning for Android Malware Detection.]]"
source_sha256: c0635a67fe4d270b3ab4cbd19c8b68d3fffe70d447e1fc62c877f05d85506b7b
original_url: "https://arxiv.org/abs/2608.03250"
processed: 2026-08-05
language: zh-CN
---

# ShielDroid：整合机器与深度学习的 Android 恶意软件检测混合方法

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Md Faisal Ahmed、Zarin Tasnim Biash、Abu Raihan Shakil、Ahmed Ann Noor Ryen、Arman Hossain、Faisal Bin Ashraf、Muhammad Iqbal Hossain
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03250)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ShielDroid- A Hybrid Approach Integrating Machine and Deep Learning for Android Malware Detection.|查看原始文件]]

## 摘要

- 现代技术的快速发展使智能手机与平板等智能设备使用显著增加，移动应用广泛普及；尽管应用在官方应用商店发布前须经恶意软件筛查，许多恶意应用仍通过隐藏复杂恶意变体成功逃避检测。
- 这些恶意行为通常只在运行时激活，难以经传统静态分析识别；因此恶意软件可能在安装后才被察觉，对用户及其设备造成不可逆损害。
- 提出实时 Android 恶意软件检测框架：分析应用行为以准确识别与分类复杂恶意软件；采用混合动态分析技术区分恶意与良性应用。
- 预处理与过滤收集的数据集后，用多个机器学习算法分类应用；进行全面性能评估，比较不同分类技术在检测准确率与执行时间上的有效性。
- 实验结果表明：结合随机森林与多层感知机的混合模型取得最佳整体性能——准确率 97.5%，执行时间 22.945 秒。
- 所提框架可通过及时检测恶意应用与降低网络攻击风险增强移动设备安全。

## 正文

论文编号：arXiv:2608.03250v1（更新类型：cross）。以下为摘要全文翻译。

现代技术的快速发展导致智能设备（如智能手机与平板电脑）使用显著增加，移动应用得到广泛采用。虽然应用在官方应用商店发布前被要求经过恶意软件筛查，许多恶意应用仍通过隐藏复杂恶意变体成功逃避检测。这些恶意行为往往只在运行时激活，使其难以通过传统静态分析识别。因此，恶意软件可能在安装后才保持未被发现，对用户及其设备造成不可逆的损害。本研究提出一个实时 Android 恶意软件检测框架，分析应用行为以准确识别与分类复杂恶意软件。所提方法采用混合动态分析技术区分恶意应用与良性应用。预处理并过滤收集的数据集后，应用使用多个机器学习算法分类。进行全面的性能评估，以检测准确率与执行时间比较不同分类技术的有效性。实验结果表明，结合随机森林与多层感知机的混合模型取得最佳整体性能，达到 97.5% 的准确率与 22.945 秒的执行时间。所提框架可以通过及时检测恶意应用并降低网络攻击风险来增强移动设备安全。

## 关键词

#Android恶意软件 #动态分析 #随机森林 #多层感知机 #移动安全
