---
published: 2026-08-06
title: EEG运动想象解码中的受试者级异质性：大规模基准与基于组合的搜索空间缩减
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Subject-Level Heterogeneity in EEG Motor Imagery Decoding- A Large-Scale Benchmark and Portfolio-Bas.md
source_note: "[[信息源/arXiv cs.LG RSS/Subject-Level Heterogeneity in EEG Motor Imagery Decoding- A Large-Scale Benchmark and Portfolio-Bas]]"
source_sha256: c1c713af5c11a88f08d56ddaec36966ee0fd001e6dd3ac7d45d4d4acdac21e17
original_url: https://arxiv.org/abs/2607.22778
processed: 2026-08-07
language: zh-CN
---

# EEG运动想象解码中的受试者级异质性：大规模基准与基于组合的搜索空间缩减

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.22778)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Subject-Level Heterogeneity in EEG Motor Imagery Decoding- A Large-Scale Benchmark and Portfolio-Bas|查看原始文件]]

## 摘要

- 基于三个公开数据集（Cho2017、PhysionetMI、Zhou2016）构建大规模标准化会话内解码流水线基准，共分析 216,714 行原始评估数据。
- 协方差切空间投影（cov-tgsp）与共空间模式（CSP）是最强的方法族，但最优流水线呈现显著受试者级异质性。
- 紧凑组合策略下，Top-K Mean 给出最佳权衡：K=12 时 oracle 保留率升至 96.5%（Cho2017）与 90.0%（PhysionetMI），使个性化更可行。

## 正文

稳健的 EEG 运动想象解码仍受到强烈的个体间差异的限制，这使得难以确定能跨用户泛化的流水线。我们在三个公开数据集上提出了一个大规模、标准化的会话内解码流水线基准：Cho2017（52 名受试者）、PhysionetMI（109 名受试者）和 Zhou2016（4 名受试者）。使用共同的 MOABB LeftRightImagery 设置、两个频带（8–15 Hz 和 8–30 Hz）以及特征提取、预处理和分类步骤的广泛组合，我们分析了 216,714 行原始评估数据，经过结构化聚合后分别得到 44,928、109,000 和 4,192 个受试者级观测。

协方差切空间投影（cov-tgsp）和共空间模式（CSP）一致地构成了最强的方法族，尽管它们的相对排序取决于数据集。在 Cho2017 上，最佳方法族级平均准确率来自 8–30 Hz 的 cov-tgsp（0.712 ± 0.140），而 Zhou2016 更偏好 CSP（8–15 Hz 下为 0.832 ± 0.121）。这些聚合排名掩盖了显著的受试者级异质性：在 52 名 Cho2017 受试者中有 42 个不同的获胜流水线，在 109 名 PhysionetMI 受试者中有 93 个。

然后我们将该基准用作经验性能景观，来构建大小为 K 的紧凑流水线组合。比较了若干构建过程，包括基于排名的 Top-K Mean 启发式方法和基于搜索的策略。结果大致一致，Top-K Mean 给出了最佳权衡。单一最佳全局流水线在 Cho2017 中已保留了 oracle 的 94.2%，在 PhysionetMI 中保留了 81.8%；在 K = 12 时，oracle 保留率上升到 96.5% 和 90.0%。因此，该景观是依赖受试者的，这种异质性可以通过紧凑组合加以利用，使个性化更加可行。

## 关键词

#EEG #运动想象 #基准测试 #共空间模式 #个性化 #流水线组合
