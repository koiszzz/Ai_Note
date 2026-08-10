---
published: 2026-08-07
title: "IDperturb：经角扰动增强合成人脸生成的多样性"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/IDperturb- Enhancing Variation in Synthetic Face Generation via Angular Perturbation.md"
source_note: "[[信息源/arXiv cs.CV RSS/IDperturb- Enhancing Variation in Synthetic Face Generation via Angular Perturbation]]"
source_sha256: d540ff0540e3a16693f9eb5627607324268d7fb219a595c470ada573dde558f9
original_url: "https://arxiv.org/abs/2602.18831"
processed: 2026-08-07
language: zh-CN
---

# IDperturb：经角扰动增强合成人脸生成的多样性

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Fadi Boutros, Eduarda Caldeira, Tahar Chettaoui, Naser Damer
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2602.18831)

## 摘要

- 合成数据已成为训练人脸识别（FR）系统的真实人脸数据集实用替代，尤其隐私与法律关注日益限制真实生物数据使用；身份条件扩散模型近期进展实现照片级真实且身份一致的人脸图像生成。
- 许多此类模型受限于类内变化——训练稳健可泛化 FR 模型的基本性质。
- 提出 IDPERTURB：简单有效的几何驱动采样策略，增强合成人脸生成多样性；在单位超球面受限角区域内扰动身份嵌入，不修改底层生成模型即产生多样嵌入集。
- 每个扰动嵌入作为预训练扩散模型的条件向量，合成视觉多样且身份连贯的人脸图像；实证显示在 IDPERTURB 生成数据集上训练 FR 相对现有合成数据生成方法在多个 FR 基准取得改进性能。

## 正文

合成数据已成为训练人脸识别（face recognition, FR）系统的真实人脸数据集的实用替代，尤其当隐私与法律关注日益限制真实生物特征数据的使用。身份条件扩散模型的近期进展已实现照片级真实且身份一致的人脸图像生成。然而，许多此类模型受限于有限的类内变化（intra-class variation）——训练稳健且可泛化 FR 模型的基本性质。本文提出 IDPERTURB，一种简单而有效的几何驱动采样策略，以增强合成人脸生成的多样性。IDPERTURB 在单位超球面的受限角区域内扰动身份嵌入，产生一组多样嵌入，而无需修改底层生成模型。每个扰动嵌入作为预训练扩散模型的条件向量，实现合成视觉多样但身份连贯的人脸图像，适合训练可泛化 FR 系统。实证结果表明，在 IDPERTURB 生成的数据集上训练 FR，相对现有合成数据生成方法在多个 FR 基准上取得改进性能。

## 关键词

人脸识别、合成数据、扩散模型、身份扰动、类内变化
