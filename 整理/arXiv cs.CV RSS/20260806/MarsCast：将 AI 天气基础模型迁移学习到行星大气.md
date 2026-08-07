---
published: 2026-08-06
title: MarsCast：将 AI 天气基础模型迁移学习到行星大气
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MarsCast- Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres.md
source_note: "[[信息源/arXiv cs.CV RSS/MarsCast- Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres]]"
source_sha256: 683e4941bba773964ccb756aee5f28a36d7b55b6ca5899d765987b5a1f9309ec
original_url: https://arxiv.org/abs/2608.05054
processed: 2026-08-07
language: zh-CN
---

# MarsCast：将 AI 天气基础模型迁移学习到行星大气

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05054)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MarsCast- Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres|查看原始文件]]

## 摘要

- 研究地球天气基础模型的跨行星迁移：将 GraphCast 图神经网络天气预测模型适配到火星，用火星气候数据库（MCD）评估零样本与微调后的温度与风场预测。
- 零样本预测能准确描述当前状态，但无法再现昼夜变化并快速衰减到气候平均态；微调后仅需约 10 个训练周期即可捕捉昼夜循环，10 天预报再现季节与垂直温度结构。
- 结果表明地球训练的 AI 天气模型可适配模拟火星大气动力学，为任务操作、沙尘暴风险缓解和未来人类探索提供快速行星天气预报路径。

## 正文

我们研究地球天气基础模型向行星大气的可迁移性，将 GraphCast 图神经网络天气预报模型适配到火星。虽然 GraphCast 在地球预报上达到最先进性能，但其在非地球环境中的适用性仍未被探索。

利用火星气候数据库（Mars Climate Database, MCD）——它提供跨垂直高度层（类似于地球气压层）的全球大气场——我们评估了零样本和微调后的 GraphCast 对火星温度和风场的预测。零样本预测对当前状况产生了出人意料的准确描述，但无法再现昼夜变化，且会迅速衰减到气候平均态。

为解决这一局限，我们使用 MCD 变量和大气顶太阳辐射强迫微调 GraphCast，同时保持湿度恒定。微调使模型能够快速学习火星的热力变化。仅需 10 个训练周期，模型便开始捕捉昼夜循环，且长达 10 天的预报能再现季节性和垂直温度结构。预测质量随训练样本规模提高，并对季节初始化表现出敏感性。

这些结果表明，地球训练的 AI 天气模型可以被适配用于模拟火星大气动力学，为快速行星天气预报提供了路径，以支持任务操作、沙尘暴风险缓解和未来的人类探索。

## 关键词

#火星天气 #迁移学习 #GraphCast #行星科学
