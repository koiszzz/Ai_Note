---
published: 2026-08-07
title: "保留针、剪掉草堆：高效零样本异常检测的缺陷保留 token 剪枝"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Keep the Needle, Prune the Haystack- Defect-Preserving Token Pruning for Efficient Zero-Shot Anomaly.md"
source_note: "[[信息源/arXiv cs.CV RSS/Keep the Needle, Prune the Haystack- Defect-Preserving Token Pruning for Efficient Zero-Shot Anomaly]]"
source_sha256: 57135bd1460298d4aedc141be6ff3b827a37b1d3789f726366b67516ee4eca50
original_url: "https://arxiv.org/abs/2608.03681"
processed: 2026-08-07
language: zh-CN
---

# 保留针、剪掉草堆：高效零样本异常检测的缺陷保留 token 剪枝

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yanning Hou, Jingyuan Zhang, Xiaoyun Wang, Qixiang Ma, Sihang Zhou, Ke Xu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.03681)

## 摘要

- 零样本视觉异常检测取得显著进展，近期纯视觉方法进一步提升性能同时简化推理流水线；现有方法通常对所有图像与空间 token 进行稠密计算，尽管正常样本主导真实场景且异常通常只占小区域。
- Token 剪枝提供有前景解决方案，但引入异常检测的不对称剪枝风险：保留正常 token 主要招致冗余计算，移除异常 token 可能消除检测与定位的唯一证据；该风险在早期层尤其严重（剪枝计算收益最大但异常语义仍不可靠）。
- 提出 KeepAD：缺陷保留 token 剪枝框架，将 token 选择形式化为高召回、异常感知路由；浅层中结合局部 2×2 补丁邻域覆盖保留选择与确定性异常救援，降低丢弃细微缺陷风险；深层中冻结正常与异常原型在图像自适应 token 预算下引导剪枝，激进移除低风险正常 token 同时保留局部异常证据；稠密到稀疏自蒸馏进一步监督早期 token 路由而不引入额外推理开销。
- 六个工业与七个医学零样本异常检测基准实验显示 KeepAD 将 token 保留率降至 20% 以下，同时将图像级与像素级 AUROC 平均退化限制在 2.7 个百分点以内；最激进运行点相对最强 CLIP 基基线实现 7.9 倍加速。

## 正文

零样本视觉异常检测已取得显著进展，近期纯视觉方法在简化推理流水线的同时进一步提升性能。然而，现有方法通常对所有图像与空间 token 执行稠密计算，尽管正常样本主导真实世界场景，且异常通常只占据小区域。Token 剪枝提供一个有前景的解决方案，但它引入异常检测中的不对称剪枝风险：保留正常 token 主要招致冗余计算，而移除异常 token 可能消除检测与定位的唯一证据。该风险在早期层尤其严重——剪枝在那里提供最大计算收益，但异常语义仍不可靠。研究提出 KeepAD，一个缺陷保留 token 剪枝框架，将 token 选择形式化为高召回、异常感知的路由。在浅层，KeepAD 结合局部 2×2 补丁邻域上的覆盖保留选择与确定性异常救援（deterministic anomaly rescue），降低丢弃细微缺陷的风险。在深层，冻结的正常与异常原型在图像自适应 token 预算下引导剪枝，激进移除低风险正常 token，同时保留局部异常证据。稠密到稀疏自蒸馏进一步监督早期 token 路由，而不引入额外推理开销。六个工业与七个医学零样本异常检测基准上的实验表明，KeepAD 将 token 保留率降至 20% 以下，同时将图像级与像素级 AUROC 的平均退化限制在 2.7 个百分点以内。在最激进的运行点，KeepAD 相对最强 CLIP 基基线实现 7.9 倍加速。

## 关键词

零样本异常检测、token 剪枝、缺陷保留、高效推理、CLIP
