---
title: "FakeI2V-Bench：图像级深度伪造检测器用于深度伪造视频检测的适用性基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FakeI2V-Bench- Benchmarking the Applicability of Image-level Deepfake Detectors for Deepfake Video D.md"
source_note: "[[信息源/arXiv cs.AI RSS/FakeI2V-Bench- Benchmarking the Applicability of Image-level Deepfake Detectors for Deepfake Video D]]"
source_sha256: 14f9c472243789be0dc3641cc284c77aa91b0758773abce3ccf54641f266bf99
original_url: "https://arxiv.org/abs/2608.03096"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# FakeI2V-Bench：图像级深度伪造检测器用于深度伪造视频检测的适用性基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Pei Li、Sihan Chen、Delong Ran 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03096)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FakeI2V-Bench- Benchmarking the Applicability of Image-level Deepfake Detectors for Deepfake Video D|查看原始文件]]

## 摘要

- 提出 FakeI2V-Bench：在挑战场景中评估最先进视频级深度伪造检测器的基准，尤其系统评估图像级检测器在视频域的表现；包含 97,548 个视频，覆盖最新强生成模型的内容与更广类别。
- 系统评估八个视频级检测器与十二个代表性图像级检测器：最佳图像级检测器 AUC 80.16%，略优于最强视频级检测器（79.99%）。
- 提出 IV-Bridge 通用框架：用带统计特征的随机森林模型聚合帧级预测，使十一个图像级检测器超越最先进视频级方法，最佳变体 AUC 93.80%。
- 代码与数据：https://github.com/CryptoAILab/FakeI2V-Bench

## 正文

论文编号：arXiv:2608.03096v1（更新类型：cross）。以下为摘要全文翻译。

视频生成模型的最新进展显著加剧了深度伪造威胁，然而当前的深度伪造视频检测基准仍不发达。特别是，图像级检测器在视频域的有效性尚未被系统评估。为填补这一空白，我们提出 FakeI2V-Bench，一个在挑战场景中评估最先进视频级深度伪造检测器的基准，重点系统评估图像级深度伪造检测器在视频域的表现。FakeI2V-Bench 包含 97,548 个视频，涵盖最新强生成模型生成的内容，并覆盖更广的类别。使用该数据集，我们对八个视频级检测器与十二个代表性图像级检测器进行系统评估。实验结果显示，表现最佳的图像级检测器取得 80.16% 的 AUC，略优于最强的视频级检测器（即 79.99% AUC）。超越基准本身，我们提出 IV-Bridge，一个增强图像级深度伪造检测器对视频适用性的通用框架。IV-Bridge 采用带统计特征的随机森林模型聚合帧级预测，使十一个图像级检测器超越最先进的视频级方法，最佳变体取得 93.80% 的 AUC。总体而言，FakeI2V-Bench 为深度伪造视频检测建立了严格基准，并引入了一条把图像级检测器扩展到视频域的新路径，为未来研究提供新见解与方向。代码与数据可在 https://github.com/CryptoAILab/FakeI2V-Bench 获取。

## 关键词

#深度伪造 #视频检测 #基准测试 #图像级检测器
