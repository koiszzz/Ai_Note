---
published: 2026-08-05
title: "虚拟患者，真实收益：用于多任务肺结节分析的基于数字孪生的模拟 CT"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Virtual Patients, Real Gains- Digital Twin-Based Simulated CT for Multitask Lung Nodule Analysis.md"
source_note: "[[信息源/arXiv cs.LG RSS/Virtual Patients, Real Gains- Digital Twin-Based Simulated CT for Multitask Lung Nodule Analysis.]]"
source_sha256: 28ebd6f77f8e2d5b974c6a27430ff2fbd894aa8dc62fca2eb2ca20a41c99c191
original_url: "https://arxiv.org/abs/2502.21187"
processed: 2026-08-05
language: zh-CN
---

# 虚拟患者，真实收益：用于多任务肺结节分析的基于数字孪生的模拟 CT

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Fakrul Islam Tushar、Lavsen Dahal、Paul Segars、Joseph Y. Lo
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2502.21187)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Virtual Patients, Real Gains- Digital Twin-Based Simulated CT for Multitask Lung Nodule Analysis.|查看原始文件]]

## 摘要

- AI 肺癌筛查受稀缺、有标注 CT 数据约束，尤其罕见结节表现。
- 研究基于物理、解剖知情的模拟 CT 能否改善三个肺结节任务的 AI 性能：检测、分割与恶性分类。
- 用虚拟肺筛查试验框架生成 174 个数字人体孪生（XCAT3），嵌入 512 个程序控制结节（X-Lesions，4–30 毫米），在两种扫描仪配置下模拟 CT（DukeSim），产生 1,044 个有标注扫描。
- 与临床数据结合，这些训练了检测（MONAI）、分割（VISTA3D、nnU-Net）与分类（Med3D）模型，在外部测试集评估。
- 检测灵敏度在 1 FP/扫描时从 0.37 升到 0.56（p<0.001）；分割适度改善（Dice 0.61 到 0.64、0.66 到 0.69）；分类 AUC 从 0.78 升到 0.87（p<0.001）。
- 基于物理的虚拟成像试验可帮助解决医学 AI 中的数据稀缺。

## 正文

论文编号：arXiv:2502.21187v4（更新类型：replace）。以下为摘要全文翻译。

基于 AI 的肺癌筛查受稀缺、有标注 CT 数据的约束，尤其罕见结节表现。我们研究基于物理、解剖知情的模拟 CT 能否改善三个肺结节任务的 AI 性能：检测、分割与恶性分类。使用虚拟肺筛查试验框架，我们生成 174 个数字人体孪生（XCAT3），嵌入 512 个程序控制的结节（X-Lesions，4–30 毫米），并在两种扫描仪配置下模拟 CT（DukeSim），产生 1,044 个有标注扫描。与临床数据结合，这些训练了用于检测（MONAI）、分割（VISTA3D、nnU-Net）与分类（Med3D）的模型，并在外部测试集上评估。检测灵敏度在 1 FP/扫描时从 0.37 上升到 0.56（p < 0.001）；分割适度改善（Dice 从 0.61 到 0.64、0.66 到 0.69）；分类 AUC 从 0.78 上升到 0.87（p < 0.001）。基于物理的虚拟成像试验可以帮助解决医学 AI 中的数据稀缺问题。

## 关键词

#肺结节 #数字孪生 #模拟CT #医学影像 #数据稀缺
