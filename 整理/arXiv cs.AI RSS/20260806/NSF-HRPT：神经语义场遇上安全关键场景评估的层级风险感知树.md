---
published: 20260806
title: "NSF-HRPT：神经语义场遇上安全关键场景评估的层级风险感知树"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/NSF-HRPT- Neural Semantic Field meets Hierarchical Risk Perception Tree for Safety-Critical Scenario.md"
source_note: "[[信息源/arXiv cs.AI RSS/NSF-HRPT- Neural Semantic Field meets Hierarchical Risk Perception Tree for Safety-Critical Scenario]]"
source_sha256: 64318cdacfca756ef6e0081b6f35d45f6e11223e3a811ef2f7a60e23156b35e9
original_url: "https://arxiv.org/abs/2608.04776"
processed: 2026-08-06
language: zh-CN

---

# NSF-HRPT：神经语义场遇上安全关键场景评估的层级风险感知树

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yu Zhao, Jiangyu Pan, Tao Hu, Ming Yin, Fan Yang, Jiangfan Liu, Xiubo Liang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04776)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/NSF-HRPT- Neural Semantic Field meets Hierarchical Risk Perception Tree for Safety-Critical Scenario|查看原始文件]]

## 摘要

- 准确评估和预判安全关键场景风险的能力对自动驾驶系统至关重要；现有研究在碰撞预测上取得进展，但多智能体交互复杂动态和真实环境固有不确定性使从单目视觉输入精确定量风险水平仍具挑战性。
- 本文呈现 NSF-HRPT，一个结合学习感知与结构化推理进行定量风险评估的新框架：神经语义场（NSF）学习从模拟数据建模场景语义、轨迹预测和概率碰撞时间（TTC）分布。
- 推理时预训练 NSF 作为层级风险感知树（HRPT）的先验，实现多智能体风险的高效并行计算和空间推理；引入 Sim2Real 增强策略，通过融入基础模型先验改进真实世界适用性无需重训练；广泛评估显示在合成基准实现最先进性能，真实数据集 TTC 估计准确率和风险定位精度竞争、接近最先进。

## 正文

准确评估和预判安全关键场景风险的能力对自动驾驶系统至关重要。虽然现有研究在碰撞预测上取得进展，多智能体交互复杂动态和真实环境固有不确定性使从单目视觉输入精确定量风险水平仍具挑战性。为应对这些挑战，我们呈现 NSF-HRPT，一个结合学习感知与结构化推理进行定量风险评估的新框架。我们的方法具有神经语义场（Neural Semantic Field，NSF），学习从模拟数据建模场景语义、轨迹预测和概率碰撞时间（TTC）分布。推理时，预训练 NSF 作为层级风险感知树（Hierarchical Risk Perception Tree，HRPT）的先验，实现多智能体风险的高效并行计算和空间推理。此外，我们引入 Sim2Real 增强策略，通过融入基础模型先验改进真实世界适用性，无需重训练。广泛评估表明，我们的框架在合成基准实现最先进性能，并在真实世界数据集上实现竞争、接近最先进的结果，TTC 估计准确率和风险定位精度均领先。所提方法为单目相机输入的实时风险感知提供有效解决方案。

## 关键词

#自动驾驶 #风险评估 #神经语义场 #碰撞时间 #arXiv