---
published: 20260806
title: "IConFace：参考感知人脸恢复的细粒度身份条件"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/IConFace- Fine-Grained Identity Conditioning for Reference-Aware Face Restoration.md"
source_note: "[[信息源/arXiv cs.AI RSS/IConFace- Fine-Grained Identity Conditioning for Reference-Aware Face Restoration]]"
source_sha256: 1f50556ea690202005db15b6da15b6b3713dfac2f9859c7aad49b36151588059
original_url: "https://arxiv.org/abs/2605.02814"
processed: 2026-08-06
language: zh-CN

---

# IConFace：参考感知人脸恢复的细粒度身份条件

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Axi Niu, Jinyang Zhang, Senyan Qing
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.02814)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/IConFace- Fine-Grained Identity Conditioning for Reference-Aware Face Restoration|查看原始文件]]

## 摘要

- 严重人脸退化可移除人物特定证据，使恢复欠定；生成先验可恢复清晰、看似合理的人脸，但可能丢失同一人物跨图像持续存在的局部特征；同身份参考提供此缺失证据，而退化观测锚定目标结构。
- 本文提出 IConFace，一个细粒度身份条件框架，可选条件恢复最多三个同身份参考：混合拼接骨干将退化与参考观测保留为密集视觉 token，保留局部参考证据；身份通路提供紧凑多参考指导，退化结构通路注入全场和局部残差记忆强化目标对齐结构。
- 引入人类审计基准，测量持久局部身份细节是否在恢复中存活；IConFace 在严重退化下实现领先参考兼容性和最高观察保留率，无参考时在五个盲恢复基准实现领先学习感知质量。

## 正文

严重人脸退化可移除人物特定证据，使恢复欠定。生成先验可恢复清晰、看似合理的人脸，却可能丢失同一人物跨图像持续存在的局部特征。同身份参考提供此缺失证据，而退化观测锚定目标结构。我们提出 IConFace，一个细粒度身份条件框架，可选条件恢复最多三个同身份参考。其混合拼接骨干将退化与参考观测保留为密集视觉 token，保留局部参考证据。身份通路提供紧凑多参考指导，而退化结构通路注入全场和局部残差记忆，强化目标对齐结构。我们还引入一个人类审计基准，测量持久局部身份细节是否在恢复中存活。IConFace 实现领先参考兼容性，尤其在严重退化下，并在该基准上实现最高观察保留率。无参考时，它在五个盲恢复基准上实现领先学习感知质量。联合基于参考和配对目标评估表明，参考支持的身份恢复与精确目标一致性互补。

## 关键词

#人脸恢复 #身份条件 #参考引导 #生成模型 #arXiv