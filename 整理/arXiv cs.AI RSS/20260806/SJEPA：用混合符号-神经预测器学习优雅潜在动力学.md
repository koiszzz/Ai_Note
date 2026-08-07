---
published: 20260806
title: "SJEPA：用混合符号-神经预测器学习优雅潜在动力学"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SJEPA- Learning Elegant Latent Dynamics with Hybrid Symbolic-Neural Predictors.md"
source_note: "[[信息源/arXiv cs.AI RSS/SJEPA- Learning Elegant Latent Dynamics with Hybrid Symbolic-Neural Predictors]]"
source_sha256: f090783e6436eb2eb8fa9aed5e947ffdde216ab2ed66cf88e7acf784fcd5f755
original_url: "https://arxiv.org/abs/2608.04060"
processed: 2026-08-06
language: zh-CN

---

# SJEPA：用混合符号-神经预测器学习优雅潜在动力学

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yongchao Huang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04060)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SJEPA- Learning Elegant Latent Dynamics with Hybrid Symbolic-Neural Predictors|查看原始文件]]

## 摘要

- 联合嵌入预测架构通过从上下文嵌入预测目标嵌入学习抽象状态，但其转换模型通常是不可见神经映射；本文引入 SJEPA，一个免重建 JEPA 框架，学习诱导动力学承认紧凑符号描述的预测表示。
- 混合转换结合符号定律与所选语法外动力学的正则化神经校正；核心原则是学习最简单充分动力学：表示约束保留信息性、非坍缩预测坐标，算子压缩偏好保持预测充分的低复杂度符号-神经转换。
- 通过诱导动力学复杂性形式化此原则，分析预测坐标不可识别性，显示无约束算子压缩创建表示坍缩的直接捷径；受控钟摆实验中，联合学习发现更简单符号动力学，长时程回滚误差和发散低于事后拟合，无约束单步诊断实现预测坍缩捷径。

## 正文

联合嵌入预测架构通过从上下文嵌入预测目标嵌入学习抽象状态，但其转换模型通常是不可见的神经映射。我们引入 SJEPA，一个免重建 JEPA 框架，学习预测表示，其诱导动力学承认紧凑符号描述。其混合转换结合符号定律与所选语法外动力学的正则化神经校正。核心原则是学习最简单充分的动力学：表示约束保留信息性、非坍缩的预测坐标，而算子压缩偏好保持预测充分的低复杂度符号-神经转换。我们通过诱导动力学复杂性（induced-dynamics complexity）形式化此原则，分析预测坐标不可识别性，并显示无约束算子压缩创建表示坍缩的直接捷径。该框架支持交替表示-方程学习和拟合到固定表示的符号动力学。受控钟摆实验中，联合学习发现显著更简单的符号动力学，长时程回滚误差和发散低于事后拟合，而无约束单步诊断实现预测的坍缩捷径。语法错误指定下，校正正则化保留可表示符号机制，并将神经组件引向残差动力学。结果暴露预测保真度、表示质量、符号简洁性和符号-神经分配之间可控权衡。

## 关键词

#JEPA #潜在动力学 #符号回归 #混合模型 #arXiv