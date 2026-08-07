---
published: 20260806
title: "SPOT：策略内蒸馏的稀疏探针与结果校准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SPOT- Sparse Probing and Outcome Calibration for On-Policy Distillation.md"
source_note: "[[信息源/arXiv cs.AI RSS/SPOT- Sparse Probing and Outcome Calibration for On-Policy Distillation]]"
source_sha256: 9cb41cc518bd62b974e066b36ce8c088cd61ffc4779b1952d9a9b5fa55227088
original_url: "https://arxiv.org/abs/2608.04419"
processed: 2026-08-06
language: zh-CN

---

# SPOT：策略内蒸馏的稀疏探针与结果校准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zikun Qu, Min Zhang, Mingze Kong, Zhiwei Shang, Yikun Ban, Shuang Qiu, Zhongxiang Dai
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04419)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SPOT- Sparse Probing and Outcome Calibration for On-Policy Distillation|查看原始文件]]

## 摘要

- 策略内蒸馏（OPD）在学生生成轨迹上提供密集教师监督，但标准反向 KL 训练可给其他看似合理延续分配不足概率；教师熵单独不揭示不确定性集中在几个看似合理下一 token 还是分散在长概率尾，也不揭示学生是否已良好表示这些候选；局部教师概率可能不预测下游成功。
- 本文引入稀疏探针与结果校准目标 OPD（SPOT），通过采集-探索-利用程序解决两个耦合决策（探针何处和蒸馏什么）：采集期间，位置级分数组合归一化教师熵、小 top-k 候选集捕捉的概率质量与学生-教师不匹配，分配有限探针预算。
- 探索期间 SPOT 通过验证器评分学生延续评估教师提议候选；利用期间这些结果产生闭式、KL 正则目标，偏好下游结果更好的候选，同时保持锚定教师分布；多个学生模型和推理基准广泛实验显示 SPOT 在平衡解质量和覆盖的同时改进推理性能。

## 正文

策略内蒸馏（OPD）在学生生成轨迹上提供密集教师监督，但标准反向 KL 训练可给其他看似合理延续分配不足概率。教师熵单独不揭示不确定性是集中在几个看似合理下一 token 还是分散在长概率尾，也不揭示学生是否已良好表示这些候选。此外，局部教师概率可能不预测下游成功。我们引入稀疏探针与结果校准目标 OPD（SPOT），通过采集-探索-利用（acquisition-exploration-exploitation）程序解决两个耦合决策——探针何处和蒸馏什么。采集期间，位置级分数组合归一化教师熵、小 top-k 候选集捕捉的概率质量与学生-教师不匹配，分配有限探针预算。探索期间，SPOT 通过验证器评分的学生延续评估教师提议的候选。利用期间，这些结果产生闭式、KL 正则目标，偏好下游结果更好的候选，同时保持锚定教师分布。多个学生模型和推理基准的广泛实验表明，SPOT 在平衡解质量和覆盖的同时有效改进推理性能。

## 关键词

#策略内蒸馏 #稀疏探针 #结果校准 #推理 #arXiv