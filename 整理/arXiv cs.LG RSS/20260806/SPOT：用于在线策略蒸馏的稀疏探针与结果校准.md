---
published: 2026-08-06
title: SPOT：用于在线策略蒸馏的稀疏探针与结果校准
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SPOT- Sparse Probing and Outcome Calibration for On-Policy Distillation.md
source_note: "[[信息源/arXiv cs.LG RSS/SPOT- Sparse Probing and Outcome Calibration for On-Policy Distillation]]"
source_sha256: f89563b1055c631db94c6692205ca6bc67610819c4e0d09b1c25738412636686
original_url: https://arxiv.org/abs/2608.04419
processed: 2026-08-07
language: zh-CN
---

# SPOT：用于在线策略蒸馏的稀疏探针与结果校准

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04419)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SPOT- Sparse Probing and Outcome Calibration for On-Policy Distillation|查看原始文件]]

## 摘要

- SPOT 通过"采集-探索-利用"过程同时解决"在哪里探测"与"蒸馏什么"两个耦合决策。
- 采集阶段用位置级分数（归一化教师熵、top-k 候选概率质量、学生-教师不匹配）分配有限探测预算；探索阶段用验证器打分的学生续写评估候选。
- 利用阶段产生闭式、KL 正则化的结果校准目标；在多个学生模型与推理基准上有效提升推理性能并平衡解质量与覆盖率。

## 正文

在线策略蒸馏（OPD）为学生模型在自身生成的轨迹上提供密集的教师监督，但标准的反向 KL 训练可能给其他合理续写分配不足的概率。仅凭教师熵无法揭示不确定性是集中于少数几个合理的下一令牌，还是分散在长长的概率尾部，也无法揭示学生是否已经很好地表示了这些候选。此外，局部的教师概率未必能预测下游成功。我们提出 Sparse Probing and Outcome-calibrated Targets OPD（SPOT），通过一个"采集-探索-利用"过程同时解决两个耦合的决策：在哪里探测与蒸馏什么。在采集阶段，一个位置级分数结合归一化教师熵、小型 top-k 候选集捕获的概率质量以及学生-教师不匹配度，来分配有限的探测预算。在探索阶段，SPOT 通过验证器打分的学生续写来评估教师提出的候选。在利用阶段，这些结果产生一个闭式的、KL 正则化的目标，它偏好下游结果更优的候选，同时仍锚定于教师分布。跨多个学生模型与推理基准的大量实验证明了 SPOT 在提升推理性能的同时平衡解质量与覆盖率的有效性。

## 关键词

#知识蒸馏 #在线策略 #推理蒸馏 #KL散度 #验证器
