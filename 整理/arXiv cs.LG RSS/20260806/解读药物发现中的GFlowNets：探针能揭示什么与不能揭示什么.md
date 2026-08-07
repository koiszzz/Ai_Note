---
published: 2026-08-06
title: 解读药物发现中的GFlowNets：探针能揭示什么与不能揭示什么
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Interpreting GFlowNets for Drug Discovery- What probes can and cannot show.md
source_note: "[[信息源/arXiv cs.LG RSS/Interpreting GFlowNets for Drug Discovery- What probes can and cannot show]]"
source_sha256: 501c7034ee25a00cde30df673145ab192203d016325e30ade0582be39ce0c630
original_url: https://arxiv.org/abs/2511.19264
processed: 2026-08-07
language: zh-CN
---

# 解读药物发现中的GFlowNets：探针能揭示什么与不能揭示什么

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.19264)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Interpreting GFlowNets for Drug Discovery- What probes can and cannot show|查看原始文件]]

## 摘要

- 对以药物相似性（QED）为奖励训练的合成感知 GFlowNet（SynFlowNet）进行对照验证的可解释性研究
- 架构匹配的未训练网络解码能力与训练策略相当，表明可解码性源于图架构与原子特征化而非策略训练
- 提供可复用的分子模型可解释性对照协议；高探针分数不应被视为习得化学知识的证据

## 正文

生成流网络（Generative Flow Networks，GFlowNets）通过顺序决策构建分子，但其内部策略仍不透明，限制了在药物发现中的应用——化学家需要为所提出的结构提供可解释的理由。我们提出一项经过对照验证的可解释性研究，针对 SynFlowNet——一个以药物相似性（QED）为奖励训练的、具有合成感知能力的 GFlowNet。我们的框架结合了梯度显著性（gradient saliency）与反事实编辑、一个欠完备因子分析，以及一个过完备的 BatchTopK 稀疏自编码器，并使用打乱标签对照、RDKit 描述符基线、骨架不相交划分、跨随机种子稳定性，以及架构匹配的未训练网络进行评估。

这些对照显著改变了结论。物理化学性质与官能团可从 SynFlowNet 嵌入中被高度解码，但具有相同架构的未训练网络表现与训练后的策略基本相当（药物相似性相差 0.005 以内，分子大小解码略优）。因此，这种可解码性反映的是图架构与原子特征化，而非通过策略训练习得的表示。保留下来的结论范围更窄：在相当稀疏度下，过完备自编码器对嵌入的重建优于匹配的欠完备基线；化学富集的子结构检测器（包括逐卤素与硼特征）在单次运行中出现，尽管只有一小部分字典方向跨种子保持稳定；将单个特征置零会对探针解码产生特定于属性的影响。

除 SynFlowNet 之外，本研究还为分子模型可解释性提供了一套可复用的对照协议，将习得的结构与架构和输入表示所提供的信号区分开来。高探针分数本身不应被视为习得化学知识的证据。

## 关键词

#GFlowNets #药物发现 #可解释性 #自编码器 #SynFlowNet #探针
