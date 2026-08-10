---
published: 2026-08-07
title: "SR-JEPA：在 3D 场景中学习预测性潜状态"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/SR-JEPA- Learning Predictive Latent State in 3D Scenes.md"
source_note: "[[信息源/arXiv cs.CV RSS/SR-JEPA- Learning Predictive Latent State in 3D Scenes]]"
source_sha256: f691dedad5a042a27b11465ae287a01cdeec0c84b00c947a537aaaa6e731f73e
original_url: "https://arxiv.org/abs/2608.05774"
processed: 2026-08-07
language: zh-CN
---

# SR-JEPA：在 3D 场景中学习预测性潜状态

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zihan Zhou, Qifu Wen, Xi Zeng
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05774)

## 摘要

- 联合嵌入预测架构通过学习预测缺失观测的潜表征，但许多掩码 JEPA 主要通过其产生的编码器评估；研究询问训练好的预测通路本身在原生 3D 场景中整个实体缺失时会推断什么。
- 引入 SR-JEPA：面向场景级点云的点原生 JEPA，其冻结预测通路可在提供位置处查询；评估时移除对象每点再以质心处相同无形状 32 点查询替换；训练仅用自包含 3D EMA 目标：无重建、无语义标签、无语言、无提升 2D 特征。
- 5953 个保留 ARKitScenes 对象上，插补潜达到 43.13% 语义身份宏观准确率，高于最强下限 22.18 点；随机化预测路径移除 9.78 点，替换匹配供体上下文移除 21.98 点。
- 8570 个 Sr3D 支持对上，完整潜达 41.15 AP；从缺失对象潜解码的身份结合锚点身份与几何达 39.37 AP，留下未解决的 1.78 点残差；结果揭示可查询、组合的 3D 预测状态：模型补全上下文依赖的实体内容，下游计算将其与度量几何结合。

## 正文

联合嵌入预测架构（joint-embedding predictive architectures, JEPAs）通过学习预测缺失观测的潜表征进行学习，然而许多掩码 JEPA 主要通过它们产生的编码器评估。研究询问：当原生 3D 场景中整个实体缺失时，训练好的预测通路本身会推断什么？研究引入 SR-JEPA，一个面向场景级点云的点原生 JEPA，其原始冻结预测通路可在提供的位置处查询。评估时，一个对象的每个点在编码前都被移除，并在其质心处替换为相同的无形状 32 点查询。训练仅使用自包含的 3D EMA 目标：无重建、无语义标签、无语言、无提升的 2D 特征。在 5,953 个保留 ARKitScenes 对象上，插补潜达到 43.13% 的语义身份宏观准确率，高于最强下限 22.18 点。随机化预测路径移除 9.78 点，而替换匹配的供体上下文移除 21.98 点。在 8,570 个 Sr3D 支持对上，完整潜达到 41.15 AP；从缺失对象潜解码的身份，结合锚点身份与几何，达到 39.37 AP，留下未解决的 1.78 点残差。这些结果揭示一个可查询、组合的 3D 预测状态：模型补全上下文依赖的实体内容，下游计算将其与度量几何结合。

## 关键词

JEPA、3D 场景、点云、预测潜状态、自监督
