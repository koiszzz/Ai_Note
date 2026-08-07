---
published: 20260806
title: "MarsCast：AI 天气基础模型向行星大气迁移学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MarsCast- Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres.md"
source_note: "[[信息源/arXiv cs.AI RSS/MarsCast- Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres]]"
source_sha256: 9355f5bf6e8741f7477060ea6c3ce3eb908474eb62e161b68b3c244943f11b2f
original_url: "https://arxiv.org/abs/2608.05054"
processed: 2026-08-06
language: zh-CN

---

# MarsCast：AI 天气基础模型向行星大气迁移学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：M. L. Carroll, J. Li, S. D. Guzewich, G. Villanueva, J. A. Caraballo-Vega, M. J. Frost
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05054)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MarsCast- Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres|查看原始文件]]

## 摘要

- 本文通过将 GraphCast 图神经天气预测模型适应火星，研究地球天气基础模型向行星大气的可迁移性；GraphCast 在地球预报实现最先进性能，但其对非地球环境的适用性仍未探索。
- 使用火星气候数据库（MCD，提供跨垂直高度层的全球大气场，类似地球气压层），评估零样本和微调 GraphCast 对火星温度和风场的预测：零样本预报产生惊人准确当前条件描绘，但无法复现昼夜变异性并迅速衰减向气候平均态。
- 微调使用 MCD 变量和大气层顶太阳辐射强迫（湿度保持恒定）：仅 10 个训练轮次内模型开始捕捉昼夜循环，高达 10 天预报复现季节性和垂直温度结构；结果表明地球训练 AI 天气模型可适应模拟火星大气动力学。

## 正文

我们通过将 GraphCast 图神经天气预测模型适应火星，研究地球天气基础模型向行星大气的可迁移性。虽然 GraphCast 在地球预报实现最先进性能，其对非地球环境的适用性仍未探索。使用火星气候数据库（MCD）——提供跨垂直高度层的全球大气场（类似地球气压层）——我们评估零样本和微调 GraphCast 对火星温度和风场的预测。零样本预报产生惊人准确的当前条件描绘，但无法复现昼夜变异性，并迅速衰减向气候平均态。为应对此局限，我们使用 MCD 变量和大气层顶太阳辐射强迫微调 GraphCast，同时保持湿度恒定。微调使模型快速学习火星热变异性。仅 10 个训练轮次内，模型开始捕捉昼夜循环，高达 10 天的预报复现季节性和垂直温度结构。预测质量随训练样本量改进，并显示对季节初始化的敏感性。这些结果表明，地球训练的 AI 天气模型可适应模拟火星大气动力学，为快速行星天气预报提供路径，支持任务运营、沙尘暴风险缓解和未来人类探索。

## 关键词

#天气预测 #迁移学习 #火星 #基础模型 #arXiv