---
published: 2026-08-07
title: "IPV-Bench：多样图像到视频生成场景下图像保护方法的基准"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/IPV-Bench- Benchmarking Image Protection Methods under Diverse Image-to-Video Generation Scenarios.md"
source_note: "[[信息源/arXiv cs.CV RSS/IPV-Bench- Benchmarking Image Protection Methods under Diverse Image-to-Video Generation Scenarios]]"
source_sha256: de0427f43b327d5c03b721891e7221373efc3db3c486c5ed0de3c39e24e9ccdd
original_url: "https://arxiv.org/abs/2603.26154"
processed: 2026-08-07
language: zh-CN
---

# IPV-Bench：多样图像到视频生成场景下图像保护方法的基准

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Xiaofeng Li, Leyi Sheng, Yifan Zhao, Zhen Sun, Zongmin Zhang, Jiaheng Wei, Xinlei He
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2603.26154)

## 摘要

- 图像到视频（I2V）生成模型可被滥用将单张图像动画化为令人信服的假视频，推动旨在破坏此类生成的基于扰动的图像保护方法；这些方法难比较：在不一致度量与生成设定下报告、常仅在其优化的单一生成器上验证、在不能反映真实滥用的窄单域图像集上评估。
- 引入 IPV-Bench（对抗视频生成的图像保护）：I2V 生成场景图像保护的第一个系统基准；耦合统一协议（联合评分保护有效性、视觉保真度与对预处理攻击的稳健性）与 IPV-500（覆盖五个滥用相关领域的提示配对数据集）。
- 基于该基准评估四个 I2V 模型上五种代表性保护方法（覆盖不同架构与开源及商业系统）：大量实验显示一致发人深省的图景：图像保护与视频破坏互相权衡、多数方法无法超越噪声破坏生成、保护很少跨生成器迁移、少数有效案例被简单预处理破坏。
- 图像内容决定保护的感知成本而非收益：没有图像域提供更容易的目标；IPV-Bench 为开发实践中有效保护方法提供严格、可复现、可扩展基础。

## 正文

图像到视频（image-to-video, I2V）生成模型可被滥用于将单张图像动画化为令人信服的假视频，推动了旨在破坏此类生成的基于扰动的图像保护方法。然而这些方法难以比较：它们在不一致的度量与生成设定下报告，常常只在其优化针对的单一生成器上验证，并在不能反映真实滥用的窄、单域图像集上评估。为应对这些挑战，研究引入 IPV-Bench（Image Protection against Video generation），I2V 生成场景中图像保护的第一个系统基准。IPV-Bench 耦合一个统一协议（联合评分保护有效性、视觉保真度与对预处理攻击的稳健性）与 IPV-500（一个覆盖五个滥用相关领域的提示配对数据集）。基于该基准，研究在四个 I2V 模型上评估五种代表性保护方法，覆盖不同架构以及开源与商业系统。大量实验显示一致且发人深省的图景：图像保护与视频破坏相互权衡；多数方法除噪声外无法破坏生成；保护很少跨生成器迁移；少数有效案例被简单预处理破坏。研究进一步发现，图像内容支配保护的感知成本而非其收益：没有图像域提供更容易的目标。总体而言，IPV-Bench 为开发在实践中有效的保护方法提供了严格、可复现且可扩展的基础。

## 关键词

图像保护、I2V 生成、基准、对抗扰动、视频伪造
