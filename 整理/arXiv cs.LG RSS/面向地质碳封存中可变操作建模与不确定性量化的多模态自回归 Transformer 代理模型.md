---
title: "面向地质碳封存中可变操作建模与不确定性量化的多模态自回归 Transformer 代理模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Multimodal Auto-regressive Transformer Surrogate for Modeling Variable Operations and Quantifying Un.md"
source_note: "[[信息源/arXiv cs.LG RSS/Multimodal Auto-regressive Transformer Surrogate for Modeling Variable Operations and Quantifying Un.]]"
source_sha256: e6b919545c104df13eca752697519d04929533364e8775999b5e1079ae6c7004
original_url: "https://arxiv.org/abs/2608.02629"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 面向地质碳封存中可变操作建模与不确定性量化的多模态自回归 Transformer 代理模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yifu Han、Louis J. Durlofsky
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02629)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Multimodal Auto-regressive Transformer Surrogate for Modeling Variable Operations and Quantifying Un.|查看原始文件]]

## 摘要

- 使用可变井射孔与注入策略可以提高地质碳封存操作的效率；开发一个新的多模态自回归 Transformer 代理模型，在地质不确定性下对这些操作建模。
- 考虑修改后的 SEAM CO2 地质模型，涉及带三个叠置含水层的断层系统；两口注入井从底部到顶部逐级射孔，级持续时间与单井注入速率作为控制变量。
- 代理模型通过独立编码器处理三种输入模态——3D 地质模型、刻画相对渗透率函数的标量参数与控制变量——在 Transformer 编码器中经自注意力融合，时间解码器通过编码器—解码器交叉注意力自回归生成预测。
- 用 4000 次 GEOS 流动仿真训练，预测监测位置的饱和度与压力、总注入与流动 CO2 质量以及饱和度足迹；对新测试集（随机采样地质模型与控制变量），代理取得中位饱和度 MAE 0.028，其他关注量的中位相对误差 0.2–5%。
- 重要的是，它捕捉从速率控制到底孔压力控制的切换。
- 代理模型用于分层马尔可夫链蒙特卡洛数据同化流程，针对三种操作策略下的合成真实模型；关键元参数（尤其断层渗透率）的不确定性大幅降低；饱和度足迹与总注入和流动 CO2 质量的后验预测也与真实模型结果总体一致。

## 正文

论文编号：arXiv:2608.02629v1（更新类型：new）。以下为摘要全文翻译。

使用可变井射孔与注入策略可以提高地质碳封存操作的效率。我们开发一个新的多模态自回归 Transformer 代理模型，在地质不确定性下对这些操作建模。考虑一个修改后的 SEAM CO2 地质模型，涉及带三个叠置含水层的断层系统。两口注入井从底部到顶部逐级射孔，级持续时间与单井注入速率被视为控制变量。代理模型通过独立编码器处理三种输入模态——3D 地质模型、刻画相对渗透率函数的标量参数与控制变量——在 Transformer 编码器中通过自注意力融合，时间解码器通过编码器—解码器交叉注意力自回归生成预测。代理模型用 4000 次 GEOS 流动仿真训练，预测监测位置的饱和度与压力、总注入与流动 CO2 质量，以及饱和度足迹。对包含随机采样地质模型与控制变量的新测试集，代理取得中位饱和度 MAE 0.028，其他关注量的中位相对误差为 0.2–5%。重要的是，它捕捉了从速率控制到底孔压力控制的切换。代理模型被用于分层马尔可夫链蒙特卡洛数据同化流程，针对三种操作策略下的合成真实模型。关键元参数（尤其是断层渗透率）的不确定性得到大幅降低。饱和度足迹与总注入和流动 CO2 质量的后验预测也被证明与真实模型结果总体一致。

## 关键词

#地质碳封存 #代理模型 #Transformer #不确定性量化 #数据同化
