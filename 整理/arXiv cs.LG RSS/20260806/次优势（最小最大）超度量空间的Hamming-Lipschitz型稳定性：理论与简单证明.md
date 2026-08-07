---
published: 2026-08-06
title: 次优势（最小最大）超度量空间的Hamming-Lipschitz型稳定性：理论与简单证明
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/On Hamming-Lipschitz Type Stability of the Subdominant (Minmax) Ultrametric- Theory and Simple Proof.md
source_note: "[[信息源/arXiv cs.LG RSS/On Hamming-Lipschitz Type Stability of the Subdominant (Minmax) Ultrametric- Theory and Simple Proof]]"
source_sha256: 948a324b9657073b75304fdeece884e957c1cd84531933e9a45113abd923f415
original_url: https://arxiv.org/abs/2608.04014
processed: 2026-08-07
language: zh-CN
---

# 次优势（最小最大）超度量空间的Hamming-Lipschitz型稳定性：理论与简单证明

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04014)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/On Hamming-Lipschitz Type Stability of the Subdominant (Minmax) Ultrametric- Theory and Simple Proof|查看原始文件]]

## 摘要

- 为次优势（minmax）超度量算子建立 `\ell_0` 型稳定性理论，适配仅改变少数成对距离的稀疏扰动
- 稀疏编辑仅通过最小生成树（MST）传播，产生逐编辑暴露切割得分与仅依赖树的全局包络，导出可改变超度量条目数量的 Hamming-Lipschitz 界限
- 证明紧致性：严格切割分离下树边界限被精确达到；存在显式族使一条被编辑的距离改变 `\Theta(n^2)` 个超度量条目
- 多重编辑下满足条件性近似可加性原理；深度嵌入图实验表明结构得分可用于层次表示脆弱性诊断

## 正文

次优势（minmax）超度量是相异度矩阵的规范树结构摘要，等价于单链接聚类所诱导的超度量。虽然其经典稳定性理论通常以 `\ell_\infty` 或 Gromov-Hausdorff 术语表述，但这类界限不适合只改变少数成对距离的稀疏扰动。我们为该算子发展了一套 `\ell_0` 型稳定性理论。我们的分析表明，稀疏编辑只通过最小生成树（MST）传播：一个成对超度量值只有在树的路径穿过被编辑的边，或穿过由被编辑的树外边新暴露的切割时才会改变。这产生一个尖锐的逐编辑暴露切割得分（exposed-cut score）和一个仅依赖树的全局包络，从而得到可改变的超度量条目数量的 Hamming-Lipschitz 界限。我们还证明尖锐性结果，表明这种对树几何的依赖不可避免：在严格切割分离下，树边界限被精确达到；对于树外编辑，存在显式族使得一条被编辑的距离改变 `\Theta(n^2)` 个超度量条目。此外，我们证明在多重编辑下，若每个编辑改变区域较大且有认证且总体重叠可忽略，则满足一个条件性近似可加性原理。在深度嵌入图上的实验表明，所得的结构得分能为层次表示提供有用的脆弱性诊断。

## 关键词

#超度量 #最小生成树 #稳定性 #聚类 #谱分析
