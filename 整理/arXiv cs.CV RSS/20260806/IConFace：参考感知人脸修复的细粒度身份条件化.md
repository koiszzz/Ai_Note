---
published: 2026-08-06
title: IConFace：参考感知人脸修复的细粒度身份条件化
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/IConFace- Fine-Grained Identity Conditioning for Reference-Aware Face Restoration.md
source_note: "[[信息源/arXiv cs.CV RSS/IConFace- Fine-Grained Identity Conditioning for Reference-Aware Face Restoration]]"
source_sha256: d52df0dc9baef976e5986108779d28253a56019902811681c6f8b71db9c9781d
original_url: https://arxiv.org/abs/2605.02814
processed: 2026-08-07
language: zh-CN
---

# IConFace：参考感知人脸修复的细粒度身份条件化

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.02814)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/IConFace- Fine-Grained Identity Conditioning for Reference-Aware Face Restoration|查看原始文件]]

## 摘要

- 提出 IConFace：细粒度身份条件化人脸修复框架，可选择性以最多三张同身份参考图像对修复进行条件化，同身份参考提供缺失的个体证据，退化观测锚定目标结构
- 混合拼接骨干将退化与参考观测保留为密集视觉令牌以保存局部参考证据；身份通路提供紧凑的多参考引导，退化结构通路注入全场与局部残差记忆以强化目标对齐结构
- 引入人工审核基准衡量局部身份细节能否在修复后存活；IConFace 参考兼容性领先（尤其严重退化时），保留率最高，无参考时在五个盲修复基准取得领先的学习感知质量

## 正文

严重的人脸退化可能抹去个体特定的证据，使修复成为欠定问题。生成先验可能恢复出清晰、合理的人脸，却遗漏同一人不同图像中持续存在的局部特征。同身份参考提供了这些缺失的证据，而退化观测锚定了目标结构。我们提出 IConFace，一个细粒度身份条件化框架，可选择性地以最多三张同身份参考对修复进行条件化。其混合拼接（hybrid concat）骨干将退化观测与参考观测保留为密集视觉令牌，保存局部参考证据。身份通路提供紧凑的多参考引导，而退化结构通路注入全场与局部残差记忆以强化目标对齐的结构。我们还引入一个经人工审核的基准，衡量持续存在的局部身份细节能否在修复后存活。IConFace 实现了领先的参考兼容性，尤其是在严重退化下，并在该基准上取得最高观测到的保留率。在无参考情况下，它在五个盲修复基准上取得领先的学习感知质量。基于参考与配对目标相结合的评估表明，参考支撑的身份恢复与精确目标一致性是互补的。

## 关键词

#人脸修复 #身份条件化 #图像生成 #盲修复
