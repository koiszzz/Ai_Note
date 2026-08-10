---
published: 2026-08-07
title: "DASH：面向推理模型策略内自蒸馏的散度自适应监督视野"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DASH- Divergence-Adaptive Supervision Horizons for On-Policy Self-Distillation of Reasoning Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/DASH- Divergence-Adaptive Supervision Horizons for On-Policy Self-Distillation of Reasoning Models]]"
source_sha256: 943048b8d5f8362127cb306440c54f6a4e3b62f71ec4998c67dc288c4882326a
original_url: "https://arxiv.org/abs/2608.06243"
processed: 2026-08-07
language: zh-CN
---

# DASH：面向推理模型策略内自蒸馏的散度自适应监督视野

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：ZhiYan Hou, Xinyu Tang, Hongyan An, Jianjin Zhang, Weizhen Wang, Yunyun Han, Gengsheng Li, Xiangzhao Hao, Haiyun Guo, Wenbin Hu, Jinqiao Wang, Yafeng Deng
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06243)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DASH- Divergence-Adaptive Supervision Horizons for On-Policy Self-Distillation of Reasoning Models|查看原始文件]]

## 摘要

- 带可验证奖励的强化学习（RLVR）用自动可验证的结果信号改善 LLM 推理能力，但这些信号通常稀疏且处于序列级；策略内自蒸馏（OPSD）通过在学生访问的前缀处查询特权教师并提供密集 token 级分布监督缓解稀疏性。
- 标准 OPSD 仍未充分利用 rollout 的时间结构：它为每个局部散度分配相同系数，不论其位置或所处散度序列；策略内自回归生成中，相同散度幅度可跟随不同差异历史，反映教师与学生失配的不同演化，而局部标量无法区分这些时间上下文。
- 提出散度自适应监督视野（DASH）：将每个局部蒸馏信号与序列级均值之间的差距映射为自适应传播门，用这些门控制向后多步聚合，从而按局部散度在生成期间的演化调整 token 级监督权重。
- 三个数学推理基准、三种模型规模上的实验显示，DASH 在全部基准、全部规模上优于匹配的 vanilla OPSD 重跑；DASH 复用 OPSD 已计算的教师与学生分布，增益无需额外教师或学生前向。代码：https://github.com/DBtxy/DASH-OPSD。

## 正文

带可验证奖励的强化学习（RLVR）使用自动可验证的结果信号改善大语言模型的推理能力，但这些信号通常稀疏且处于序列级。策略内自蒸馏（on-policy self-distillation，OPSD）通过在学生访问的前缀处查询特权教师并提供密集 token 级分布监督来缓解这种稀疏性。尽管这种密集监督缓解了信号稀疏性，我们发现标准 OPSD 仍未充分利用 rollout 的时间结构。它为每个局部散度分配相同的系数，无论其位置或所处散度序列。在策略内自回归生成中，相同散度幅度可以跟随不同的差异历史，反映教师与学生之间失配的不同演化。由于局部标量本身无法区分这些时间上下文，标准 OPSD 无法将其 token 级权重适应于已实现的散度序列。为解决这一局限，我们提出散度自适应监督视野（Divergence-Adaptive Supervision Horizons，DASH）。DASH 将每个局部蒸馏信号与序列级均值之间的差距映射为自适应传播门，然后使用这些门控制向后多步聚合。通过这种方式，DASH 根据局部散度在生成期间的演化调整 token 级监督权重。在三个数学推理基准、三种模型规模上的实验表明，DASH 在全部三个规模的全部基准上优于我们匹配的 vanilla OPSD 重跑。DASH 复用 OPSD 已计算的教师与学生分布，因此增益不需要额外的教师或学生前向传递。代码：https://github.com/DBtxy/DASH-OPSD。

## 关键词

#自蒸馏 #强化学习 #推理模型 #散度自适应
