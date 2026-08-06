---
published: 2026-08-05
title: "用于地质碳封存变量操作建模与不确定性量化的多模态自回归 Transformer 代理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Multimodal Auto-regressive Transformer Surrogate for Modeling Variable Operations and Quantifying Un.md"
source_note: "[[信息源/arXiv cs.AI RSS/Multimodal Auto-regressive Transformer Surrogate for Modeling Variable Operations and Quantifying Un]]"
source_sha256: 13c6c75c7dc159c444456c1611363d2a73ebd4fa60d80fd3a6a8c8c162938d35
original_url: "https://arxiv.org/abs/2608.02629"
processed: 2026-08-05
language: zh-CN
---

# 用于地质碳封存变量操作建模与不确定性量化的多模态自回归 Transformer 代理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yifu Han、Louis J. Durlofsky
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02629)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Multimodal Auto-regressive Transformer Surrogate for Modeling Variable Operations and Quantifying Un|查看原始文件]]

## 摘要

- 开发新的多模态自回归 Transformer 代理，在地质不确定性下建模变量井射孔与注入策略：使用修改的 SEAM CO2 地质模型（带断层系统与三个叠加含水层），两口注入井自下而上分段射孔，阶段时长与单井注入速率作为控制变量。
- 代理通过分离编码器处理三种输入模态（3D 地质模型、表征相对渗透率函数的标量参数与控制变量），在 Transformer 编码器中经自注意力融合，时间解码器通过编码器-解码器交叉注意力自回归生成预测。
- 用 4,000 次 GEOS 流模拟训练，预测监测位置的饱和度与压力、总注入与移动 CO2 质量及饱和度足迹；新测试集（随机采样地质模型与控制变量）中位饱和度 MAE 0.028，其他关注量中位相对误差 0.2–5%；捕获从速率控制到井底压力控制的切换。
- 在三种操作策略下用于合成真实模型的层级马尔可夫链蒙特卡洛数据同化：关键元参数（尤其断层渗透率）的不确定性大幅降低；饱和度足迹与总注入及移动 CO2 质量的后验预测与真实模型结果总体一致。

## 正文

论文编号：arXiv:2608.02629v1（更新类型：cross）。以下为摘要全文翻译。

使用可变的井射孔与注入策略可以提高地质碳封存操作的效率。我们开发一个新的多模态自回归 Transformer 代理，在地质不确定性下对这些操作进行建模。考虑一个修改的 SEAM CO2 地质模型，涉及带三个叠加含水层的断层系统。两口注入井自下而上分段射孔，阶段时长与单井注入速率作为控制变量。代理模型通过分离编码器处理三种输入模态——3D 地质模型、表征相对渗透率函数的标量参数与控制变量——并在 Transformer 编码器中经自注意力融合；时间解码器通过编码器-解码器交叉注意力自回归生成预测。代理使用 4,000 次 GEOS 流模拟训练，预测监测位置的饱和度与压力、总注入与移动 CO2 质量以及饱和度足迹。对一个涉及随机采样地质模型与控制变量的新测试集，代理实现 0.028 的中位饱和度 MAE，其他关注量的中位相对误差为 0.2–5%。重要的是，它捕获了从速率控制到井底压力控制的切换。该代理模型在一个分层马尔可夫链蒙特卡洛数据同化流程中使用，针对三种操作策略下的合成真实模型。关键元参数（特别是断层渗透率）的不确定性大幅降低。饱和度足迹与总注入和移动 CO2 质量的后验预测也显示与真实模型结果总体一致。

## 关键词

#碳封存 #Transformer代理 #不确定性量化 #多模态
