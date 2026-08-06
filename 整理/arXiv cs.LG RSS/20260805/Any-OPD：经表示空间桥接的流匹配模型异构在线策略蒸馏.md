---
published: 2026-08-05
title: "Any-OPD：经表示空间桥接的流匹配模型异构在线策略蒸馏"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Any-OPD- Heterogeneous On-Policy Distillation for Flow-Matching Models via Representation-Space Brid.md"
source_note: "[[信息源/arXiv cs.LG RSS/Any-OPD- Heterogeneous On-Policy Distillation for Flow-Matching Models via Representation-Space Brid]]"
source_sha256: d06e69cd0cebe8eab94f4e4cd7d942f7def10e2dc3e99cc19bc9eb3cb2ae4556
original_url: "https://arxiv.org/abs/2608.03316"
processed: 2026-08-05
language: zh-CN
---

# Any-OPD：经表示空间桥接的流匹配模型异构在线策略蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Siming Fu、Zheming Fu、Ruizhe He 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03316)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Any-OPD- Heterogeneous On-Policy Distillation for Flow-Matching Models via Representation-Space Brid|查看原始文件]]

## 摘要

- 提出 Any-OPD，据作者所知首个任意潜流匹配生成器对之间在线策略蒸馏的框架：把教师纯粹视为黑箱采样器，在恰好一个点连接两模型——冻结、模型无关的视觉表示（在其中比较它们独立解码的输出），绕开对潜变量、特征或架构的每个假设。
- 在线策略蒸馏（教师纠正学生自身生成的样本）预设两模型说相同语言：相同 VAE 潜变量、匹配架构与公共时间步网格；询问全不成立时怎么办（最强可用教师与想部署的学生来自不同模型家族），发现标准配方无解：教师潜变量无法在外部坐标系中作目标、对随机重绘局部细节的教师做逐像素损失退化为模糊或发散、时间步索引跨错配调度失去意义。
- 轨迹对应经匹配连续噪声水平（而非步索引）恢复；简短锚定阶段把教师样本经学生自身 VAE 重编码，确保在线策略梯度测量样本质量而非域错配。
- 把 12B FLUX.1-dev 蒸馏进 2.5B SD3.5-Medium：Any-OPD 把学生 PickScore 从 0.846 提升到 0.884、HPSv3 从 9.12 提升到 10.97，以五分之一规模媲美教师，而直接潜回归根本无法训练。

## 正文

论文编号：arXiv:2608.03316v1（更新类型：new）。以下为摘要全文翻译。

在线策略蒸馏——教师纠正学生自身生成的样本——预设两个模型说同一种语言：相同的 VAE 潜变量、匹配的架构与公共的时间步网格。我们询问当这一切都不成立时会发生什么，例如最强可用教师与想要部署的学生来自不同模型家族，并发现标准配方没有答案：教师的潜变量无法在外部坐标系中充当目标；对随机重绘局部细节的教师做逐像素损失会退化为模糊或发散；时间步索引跨错配调度失去意义。我们提出 Any-OPD，据我们所知，这是任意潜流匹配生成器对之间在线策略蒸馏的第一个框架。Any-OPD 把教师纯粹视为黑箱采样器，并在恰好一个点连接两个模型：一个冻结、模型无关的视觉表示，在其中比较它们独立解码的输出——绕开对潜变量、特征或架构的每一个假设。轨迹对应通过匹配连续噪声水平（而非步索引）恢复；一个简短的锚定阶段把教师样本经学生自己的 VAE 重编码，确保在线策略梯度测量的是样本质量，而非域错配。把 12B 的 FLUX.1-dev 蒸馏进 2.5B 的 SD3.5-Medium，Any-OPD 把学生的 PickScore 从 0.846 提升到 0.884、HPSv3 从 9.12 提升到 10.97，以五分之一的大小媲美教师，而直接潜回归根本无法训练。

## 关键词

#在线策略蒸馏 #流匹配 #异构模型 #表示桥接
