---
published: 2026-08-06
title: Sentinel-1时间序列中海上海上风能基础设施密集事件分类的深度学习模型基准测试
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Benchmarking Deep Learning Models for Dense Event Classification of Offshore Wind Infrastructure in .md
source_note: "[[信息源/arXiv cs.LG RSS/Benchmarking Deep Learning Models for Dense Event Classification of Offshore Wind Infrastructure in ]]"
source_sha256: 13067494e0694bb2d5dac548257a983601388210666e1dc0520e1fb6ffbf1bc9
original_url: https://arxiv.org/abs/2608.04706
processed: 2026-08-07
language: zh-CN
---

# Sentinel-1时间序列中海上海上风能基础设施密集事件分类的深度学习模型基准测试

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04706)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Benchmarking Deep Learning Models for Dense Event Classification of Offshore Wind Infrastructure in |查看原始文件]]

## 摘要

- 系统比较十种深度学习训练变体，用于基于 Sentinel-1 SAR 的海上风能基础设施时间序列密集分类，推进基于规则的事件分类。
- 有监督 BiLSTM 表现最佳：目标 AUC 从 0.7853 提升到 0.8509，完全匹配率从 0.3508 提升到 0.5063；标签转移最小化集成进一步改善与测试数据的一致性。
- 用改进标签在 2016-01-01 至 2025-03-31 期间全球分离涡轮机部署阶段，中位部署时长：中国 84 天、欧盟 242 天、英国 258 天。

## 正文

对海上海上风能基础设施生命周期的监测，尤其是在部署阶段，是利益相关方在部署活动日益增多的阶段做出知情决策的重要支撑。ESA 的 Sentinel-1 合成孔径雷达（Synthetic Aperture Radar, SAR）任务产生了庞大的数据档案，能够实现对海上风能基础设施的全球监测。将这些高容量档案转化为信息，需要能够在全球范围内从密集时间序列中自动提取单一事件标签的算法。

在本研究中，我们提出了十种深度学习模型训练变体的结构化比较，用于基于 Sentinel-1 的海上风能基础设施时间序列的密集分类，旨在推进该任务的基于规则（rule-based）的事件分类。我们训练了具有单时相（monotemporal）、单向和双向上下文感知的 LSTM、Transformer 和全连接模型变体，每种变体都分别带和不带自监督预训练。

其中，有监督的 BiLSTM 表现最佳，将目标 AUC 分数从基于规则的基线的 0.7853 提高到 0.8509，完全匹配率（perfect match rate）从 0.3508 提高到 0.5063。将 BiLSTM 预测与现有基线标签在标签转移最小化（label-transition-minimising）的集成中结合，进一步改善了与测试数据的一致性。

利用这些改进后的标签，我们在全球范围内分离出单台风力涡轮机的部署阶段，并进行了覆盖 2016-01-01 至 2025-03-31 的区域和次区域分析，报告的中位部署时长为 84 天（中国）、242 天（欧盟）和 258 天（英国）。部署相关驱动因素，包括补贴等法律法规（legal regulations）和环境条件，在多个空间尺度上从分析结果中清晰地显现出来。

## 关键词

#Sentinel-1 #SAR #海上风电 #深度学习 #时间序列分类
