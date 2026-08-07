---
published: 20260806
title: "解释药物发现的 GFlowNet：探针能显示什么和不能显示什么"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Interpreting GFlowNets for Drug Discovery- What probes can and cannot show.md"
source_note: "[[信息源/arXiv cs.AI RSS/Interpreting GFlowNets for Drug Discovery- What probes can and cannot show]]"
source_sha256: 5bc7d806f0acc8354814d511740a58353f6180f453d7a23d50b8ec2215828e52
original_url: "https://arxiv.org/abs/2511.19264"
processed: 2026-08-06
language: zh-CN

---

# 解释药物发现的 GFlowNet：探针能显示什么和不能显示什么

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Amirtha Varshini A S, Duminda S. Ranasinghe, Hok Hei Tam
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.19264)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Interpreting GFlowNets for Drug Discovery- What probes can and cannot show|查看原始文件]]

## 摘要

- 生成流网络（GFlowNet）通过顺序决策构建分子，但其内部策略保持不透明，限制在化学家需要可解释理由的药物发现中的采用；本文呈现 SynFlowNet（用药物相似性 QED 奖励训练的合成感知 GFlowNet）的对照验证可解释性研究。
- 框架结合梯度显著性和反事实编辑、欠完全因子分析和过完全 BatchTopK 稀疏自编码器，用乱序标签对照、RDKit 描述符基线、支架不相交分割、跨种子稳定性和架构匹配未训练网络评估。
- 对照实质改变解释：物理化学性质和官能团从 SynFlowNet 嵌入高度可解码，但相同架构的未训练网络表现基本与训练策略相当（药物相似性 0.005 以内）；存活的结论更窄：过完全自编码器在相当稀疏度下比匹配欠完全基线更好重建嵌入，化学富集子结构检测器在个别运行涌现，但只有少数字典方向跨种子稳定。

## 正文

生成流网络（GFlowNet）通过顺序决策构建分子，但其内部策略保持不透明，限制在药物发现中的采用，化学家需要所提议结构的可解释理由。我们呈现 SynFlowNet（一个用药物相似性 QED 奖励训练的合成感知 GFlowNet）的对照验证可解释性研究。我们的框架结合梯度显著性和反事实编辑、欠完全因子分析，以及过完全 BatchTopK 稀疏自编码器，用乱序标签对照、RDKit 描述符基线、支架不相交分割、跨种子稳定性和架构匹配未训练网络评估。这些对照实质改变解释。物理化学性质和官能团从 SynFlowNet 嵌入高度可解码，但相同架构的未训练网络表现基本与训练策略相当（药物相似性 0.005 以内，分子大小解码略好）。因此，这种可解码性反映图架构和原子特征化，而非通过策略训练获得的表示。存活的结论更窄：过完全自编码器在相当稀疏度下比匹配欠完全基线更好重建嵌入；化学富集子结构检测器（包括每卤素和硼特征）在个别运行涌现，尽管只有少数字典方向跨种子稳定；将个别特征归零对探针解码产生属性特定效果。除 SynFlowNet 外，本研究为分子模型可解释性提供可复用对照协议，分离学习结构来自架构和输入表示提供的信号。高探针分数本身不应被视为学习化学的证据。

## 关键词

#GFlowNet #药物发现 #可解释性 #对照验证 #arXiv