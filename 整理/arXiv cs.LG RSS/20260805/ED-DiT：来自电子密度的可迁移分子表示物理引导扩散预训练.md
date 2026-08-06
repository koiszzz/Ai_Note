---
published: 2026-08-05
title: "ED-DiT：来自电子密度的可迁移分子表示物理引导扩散预训练"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ED-DiT- Physics-Guided Diffusion Pretraining for Transferable Molecular Representations from Electro.md"
source_note: "[[信息源/arXiv cs.LG RSS/ED-DiT- Physics-Guided Diffusion Pretraining for Transferable Molecular Representations from Electro]]"
source_sha256: 9aec3c6c57b4de70684007944682932ee620db2a426a0cb2eafc5ddf62989148
original_url: "https://arxiv.org/abs/2608.03260"
processed: 2026-08-05
language: zh-CN
---

# ED-DiT：来自电子密度的可迁移分子表示物理引导扩散预训练

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Liang Shuang、Haocheng Wang、Jiayi Song 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03260)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ED-DiT- Physics-Guided Diffusion Pretraining for Transferable Molecular Representations from Electro|查看原始文件]]

## 摘要

- 提出 ED-DiT，电子密度点云自监督预训练的物理引导扩散 Transformer：通过跨扩散噪声水平重建被破坏与部分掩码的对数密度场学习可复用表示；引入电子数一致性约束保持总电子质量。
- 预训练对学习可迁移表示展现强潜力，但对基于电子密度的分子学习仍未被充分探索；电子密度提供分子电子结构的连续三维描述，捕获局部空间模式与全局物理量。
- 预训练编码器可适配性质预测、开壳/闭壳分类、分子-电子密度检索与分子条件电子密度预测。
- 六个 EDBench 任务实验：ED-DiT 一致优于同架构从零训练（尤其有限监督下）；分子条件电子密度预测 RMSE 从 2.2474 降至 1.3753 并超过可用基线；仅 10% 标签改善轨道能量预测 RMSE 从 0.0293 到 0.0138——物理引导电子密度预训练对学习可迁移分子表示的有效性。

## 正文

论文编号：arXiv:2608.03260v1（更新类型：new）。以下为摘要全文翻译。

预训练在学习可迁移表示方面展现出强大潜力，然而它对基于电子密度的分子学习仍未被充分探索。电子密度提供了分子电子结构的连续三维描述，捕获局部空间模式与全局物理量。这引出一个关键问题：电子密度场能否用于自监督预训练，学习一个跨多样电子结构相关任务迁移的共享表示？我们提出 ED-DiT，一个用于电子密度点云自监督预训练的物理引导扩散 Transformer。ED-DiT 通过跨扩散噪声水平重建被破坏与部分掩码的对数密度场来学习可复用表示。进一步引入电子数一致性约束以保持总电子质量。预训练编码器可以适配性质预测、开壳/闭壳分类、分子-电子密度检索与分子条件电子密度预测。在六个 EDBench 任务上的实验表明，ED-DiT 一致优于从零训练的相同架构，尤其在有限监督下。对分子条件电子密度预测，它把 RMSE 从 2.2474 降至 1.3753，并超过可用基线。仅用 10% 的标签，它就把轨道能量预测的 RMSE 从 0.0293 改善到 0.0138。这些结果证明了物理引导电子密度预训练在学习可迁移分子表示方面的有效性。

## 关键词

#电子密度 #分子表示 #扩散预训练 #物理引导
