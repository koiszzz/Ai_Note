---
published: 20260806
title: "NodeJEPA：节点级图自监督学习的结构条件潜在预测"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/NodeJEPA- Structure-Conditioned Latent Prediction for Node-Level Graph Self-Supervised Learning.md"
source_note: "[[信息源/arXiv cs.AI RSS/NodeJEPA- Structure-Conditioned Latent Prediction for Node-Level Graph Self-Supervised Learning]]"
source_sha256: de997eb379dc953c7b847996da289a7857642a1e91a0d8a69791a3ed96f83395
original_url: "https://arxiv.org/abs/2608.04381"
processed: 2026-08-06
language: zh-CN

---

# NodeJEPA：节点级图自监督学习的结构条件潜在预测

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Tinghe Zhang, Jian Xu, Jiaheng Chen, Jiaxing Li, Yucheng Xiao, Qiang Wang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04381)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/NodeJEPA- Structure-Conditioned Latent Prediction for Node-Level Graph Self-Supervised Learning|查看原始文件]]

## 摘要

- 图上的自监督学习主要由依赖精心设计增强的对比方法和在输入空间重建节点属性的生成方法塑造；两种范式都可纠缠表示与低层输入统计而非关系结构。联合嵌入预测架构（JEPA）通过学习预测潜在目标而非重建输入来学习，近期工作探索了图级表示学习的此思想，但如何为节点级任务设计 JEPA 风格目标以及预测器应条件于哪些结构信号仍不清晰。
- 本文呈现 NodeJEPA，一个节点级图自监督学习的联合嵌入预测架构：掩蔽结构感知 k 跳自我子图，训练上下文编码器预测掩蔽节点的潜在表示；目标来自 EMA 更新目标编码器带停止梯度；结构条件预测器通过交叉注意力集成谱和中心性描述符。
- 方差、协方差和拉普拉斯谱正则化器帮助稳定嵌入几何，可选课程逐渐增加掩蔽难度；因预测发生在潜在空间，NodeJEPA 不依赖输入重建或手工图增强；线性探测和微调协议下标准节点分类基准评估显示有效性。

## 正文

图上的自监督学习主要由依赖精心设计增强的对比方法和在输入空间重建节点属性的生成方法塑造。两种范式都可纠缠表示与低层输入统计而非关系结构。联合嵌入预测架构（JEPA）通过学习预测潜在目标而非重建输入来学习。近期工作探索了图级表示学习的此思想，但如何为节点级任务设计 JEPA 风格目标，以及预测器应条件于哪些结构信号，仍不清晰。我们呈现 NodeJEPA，一个节点级图自监督学习的联合嵌入预测架构。NodeJEPA 掩蔽结构感知 k 跳自我子图，并训练上下文编码器预测掩蔽节点的潜在表示。这些目标来自带停止梯度的 EMA 更新目标编码器。结构条件预测器通过交叉注意力集成谱和中心性描述符。方差、协方差和拉普拉斯谱正则化器帮助稳定嵌入几何，可选课程在训练期间逐渐增加掩蔽难度。由于预测发生在潜在空间，NodeJEPA 不依赖输入重建或手工图增强。我们在线性探测和微调协议下标准节点分类基准上评估 NodeJEPA，并对掩蔽、预测和正则化设计选择进行消融。我们的研究为图上节点级 JEPA 风格潜在预测提供实用配方，并澄清结构条件何时帮助表示学习。代码、配置和评估脚本公开可用：https://github.com/OliverZ-dot/Node-Jepa。

## 关键词

#图自监督 #JEPA #节点表示 #潜在预测 #arXiv