---
title: "DiffImaginE：用扩散想象来验证实体类型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DiffImaginE- Imagine to Verify Entity Types with Diffusio.md"
source_note: "[[信息源/arXiv cs.AI RSS/DiffImaginE- Imagine to Verify Entity Types with Diffusio]]"
source_sha256: e8ddf55dca966f0414841f3a6bf0c3a11e203363fa54e24e251b952221c6287c
original_url: "https://arxiv.org/abs/2608.03025"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# DiffImaginE：用扩散想象来验证实体类型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Feng Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03025)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DiffImaginE- Imagine to Verify Entity Types with Diffusio|查看原始文件]]

## 摘要

- 提出 DiffImaginE：把多模态命名实体识别（MNER）的类型验证表述为条件潜扩散推理；给定跨度定位的视觉证据，类型条件去噪器预测注入其标准化潜变量的噪声。
- 去噪误差提供与 ELBO 一致的类别条件负对数似然替代，可对不同类型假设解释观测的好坏进行排序。
- 保留标准多模态编码器栈，用 Min-SNR 权重训练的无分类器引导扩散评分器替代确定性验证器；直接监督逐类型扩散分数作为分类 logits，学习跨噪声水平聚合，并用对偶采样降低蒙特卡洛比较方差。
- 在 Twitter-2015 与 Twitter-2017 上，与匹配的确定性 ImaginE 控制组相比取得一致提升，并有消融与配对显著性检验支持。

## 正文

论文编号：arXiv:2608.03025v1（更新类型：new）。以下为摘要全文翻译。

多模态命名实体识别（MNER）判断每个候选跨度与实体类型假设是否得到联合文本与视觉证据的支持。现有的“想象并比较”验证器把每个（跨度，类型）对映射到一个预测的视觉特征，把多样的视觉实现压缩为单一原型，并提供没有显式概率语义的兼容性分数。我们引入 DiffImaginE，把 MNER 类型验证表述为条件潜扩散推理。给定跨度定位的视觉证据，类型条件去噪器预测注入其标准化潜变量的噪声。由此产生的去噪误差提供与 ELBO 一致的类别条件负对数似然替代，使竞争的类型假设可以按其解释观测的好坏排序。DiffImaginE 保留标准多模态编码器栈，用基于 Min-SNR 权重训练的无分类器引导扩散评分器替代确定性验证器。我们直接监督逐类型扩散分数作为分类 logits，学习跨噪声水平的聚合，并使用对偶采样（antithetic sampling）降低蒙特卡洛比较方差。我们的分析表明，无分类器引导使诱导的类型后验更尖锐，并刻画了对偶配对何时能在相等去噪器成本下降低方差。在 Twitter-2015 和 Twitter-2017 上的实验表明，在相同编码器、辅助目标与评估协议下，与匹配的确定性 ImaginE 控制组相比取得一致提升，并有消融与配对显著性检验支持。

## 关键词

#多模态命名实体识别 #扩散模型 #类型验证 #ELBO
