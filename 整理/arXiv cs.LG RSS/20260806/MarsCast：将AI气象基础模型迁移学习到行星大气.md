---
published: 2026-08-06
title: MarsCast：将AI气象基础模型迁移学习到行星大气
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/MarsCast- Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres.md
source_note: "[[信息源/arXiv cs.LG RSS/MarsCast- Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres]]"
source_sha256: 565929362c3692d3ebfb23b3a8d24c7678f2e16ad740b321f9e81bd7f67b4632
original_url: https://arxiv.org/abs/2608.05054
processed: 2026-08-07
language: zh-CN
---

# MarsCast：将AI气象基础模型迁移学习到行星大气

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05054)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MarsCast- Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres|查看原始文件]]

## 摘要

- 将地球气象基础模型迁移到行星大气：把 GraphCast 图神经网络天气预报模型适配到火星
- 使用火星气候数据库（MCD）评估零样本与微调 GraphCast 对火星温度与风场的预测：零样本对当前条件惊人地准确，但无法再现日变化且迅速衰减到气候学平均态
- 用 MCD 变量与大气层顶太阳辐射强迫微调（湿度保持恒定）后，仅 10 个训练周期即可捕获日循环，10 天预测能再现季节与垂直温度结构，为任务运行、沙尘暴风险缓解与未来载人探索提供快速行星天气预报途径

## 正文

我们研究了地球气象基础模型向行星大气的可迁移性，将 GraphCast 图神经网络天气预报模型适配到火星。虽然 GraphCast 在地球预报上取得了最先进的性能，但其在非地球环境中的适用性尚未被探索。使用火星气候数据库（MCD，Mars Climate Database）——它提供跨越垂直高度层（类似于地球气压层）的全球大气场——我们评估了零样本与微调的 GraphCast 对火星温度与风场的预测。零样本预报对当前条件产生了惊人地准确的描绘，但无法再现日变化，并迅速衰减到气候学平均态。为弥补这一局限，我们使用 MCD 变量与大气层顶太阳辐射强迫对 GraphCast 进行微调，同时保持湿度恒定。微调使火星热变率得以快速学习。仅需 10 个训练周期，模型就开始捕获日循环，且长达 10 天的预报能够再现季节与垂直温度结构。预测质量随训练样本量提高，并对季节初始化表现出敏感性。这些结果表明，在地球上训练的 AI 气象模型可以适配以模拟火星大气动力学，为快速行星天气预报提供了一条路径，可支持任务运行、沙尘暴风险缓解与未来载人探索。

## 关键词

#气象基础模型 #GraphCast #火星大气 #迁移学习 #行星天气预报
