---
published: 20260806
title: "EA-Graph：上游漂移下编码智能体的工件锚定验证记忆"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/EA-Graph- Artifact-Anchored Verification Memory for Coding Agents under Upstream Drift.md"
source_note: "[[信息源/arXiv cs.AI RSS/EA-Graph- Artifact-Anchored Verification Memory for Coding Agents under Upstream Drift]]"
source_sha256: e7765a1a6ec91613dd096d40cbf809d020c66bb901a6e6c0ac636d87a4b700a7
original_url: "https://arxiv.org/abs/2608.04278"
processed: 2026-08-06
language: zh-CN

---

# EA-Graph：上游漂移下编码智能体的工件锚定验证记忆

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Hwai-Jung Hsu, Cheng-Jan Chi, Hanna Everett
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04278)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/EA-Graph- Artifact-Anchored Verification Memory for Coding Agents under Upstream Drift|查看原始文件]]

## 摘要

- 编码智能体日益跨会话工作，但散文笔记可保留结论而不保留支持它的程序状态；上游变更后，即使早期验证声明不再有效，仓库仍可能构建。
- EA-Graph 是验证声明的工件锚定记忆：以子路径粒度表示工件，将别名解析到叶定义，将每个声明锚定到用于建立它的内容，并将证据强度与新鲜度分离；替换内容不可用时，声明变为不可证明而非猜测。
- 在行为到工件地面真值按构造已知的生成仓库上评估：任务是在值漂移、逻辑漂移和故意扣留上游内容后将先前声明分类为不受影响、受影响或不可证明；Haiku 轮中工件锚定记忆在全部七个世界中胜过散文笔记和无持久记忆。

## 正文

编码智能体日益跨会话工作，但散文笔记可保留结论而不保留支持它的程序状态。上游变更后，即使早期验证声明不再有效，仓库仍可能构建。EA-Graph 是验证声明的工件锚定（artifact-anchored）记忆。它以子路径粒度表示工件，将别名解析到叶定义，将每个声明锚定到用于建立它的内容，并将证据强度与新鲜度分离。替换内容不可用时，声明变为不可证明而非猜测。EA-Graph 在生成仓库上评估，其行为到工件地面真值按构造已知。任务是在值漂移、逻辑漂移和故意扣留上游内容后将先前声明分类为不受影响、受影响或不可证明。分析覆盖七个干净世界的 42 个会话、14 个模型世界实例、三种记忆条件和两个模型层级。Haiku 轮中，工件锚定记忆在全部七个世界中胜过散文笔记和无持久记忆；每个精确配对 Wilcoxon 比较产生 p = 0.0156。Sonnet 轮中，锚定条件完美，但频繁的控制上限使预注册对比不显著。没有会话捏造扣留内容。这些结果支持一个有限声明：工件锚定记忆改进了较小模型在此测试台上的可证明性判断。探索性比较进一步表明，结构化声明记忆可能通过外部化会话内重新推导缩小能力差距，但不确立跨模型等价性。该研究不声明效率或修复质量。

## 关键词

#编码智能体 #验证记忆 #工件锚定 #上游漂移 #arXiv