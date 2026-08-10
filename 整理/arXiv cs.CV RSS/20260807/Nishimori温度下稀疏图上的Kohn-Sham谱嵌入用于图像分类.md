---
published: 2026-08-07
title: "Nishimori 温度下稀疏图上的 Kohn-Sham 谱嵌入用于图像分类"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Kohn-Sham Spectral Embedding on Sparse Graphs at the Nishimori Temperature for Image Classification.md"
source_note: "[[信息源/arXiv cs.CV RSS/Kohn-Sham Spectral Embedding on Sparse Graphs at the Nishimori Temperature for Image Classification]]"
source_sha256: 4effa032d886d7e85af5a515188e45bc89757443911668e968259e65046f2a0e
original_url: "https://arxiv.org/abs/2607.28428"
processed: 2026-08-07
language: zh-CN
---

# Nishimori 温度下稀疏图上的 Kohn-Sham 谱嵌入用于图像分类

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：V. S. Usatyuk, D. A. Sapozhnikov, S. I. Egorov
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2607.28428)

## 摘要

- 提出 Kohn-Sham 谱嵌入（KSSE）：基于能量的模型，用相关随机键伊辛模型 Nishimori 温度的稀疏图谱嵌入替换卷积网络顶层分类器（谱可检测阈值，类结构在该处与无序勉强可区分）。
- 将预训练特征映射到准循环低密度奇偶校验图，构造正则拉普拉斯（Bethe-Hessian）作为有效 Kohn-Sham 哈密顿量，产生 D 个独立谱问题（每特征通道一个），经循环块上 FFT 在 O(N log N + k_mode²N) 时间内可解，附低模 Rayleigh-Ritz 精化。
- 星域手术优化图：边移动在码字周围创建经认证的凸性并留有界残差挫折，多尺度分形认证（盆 D2<1 vs 粗糙景观 D2>3）；理论含广义 Ihara-Bass 恒等式、非回溯增长三分类、陷阱集谱检验等。
- ImageNet-1000 冻结 EfficientNet-B4 特征（D=1792）转导协议下 88.93% Top-1 准确率、约 2124 万参数，超越 Swin-L（197M，86.4–87.3%），匹配 ViT-H/14 低端（632M，88.0–89.5%），参数少 10 倍与 30 倍。

## 正文

研究提出 Kohn-Sham 谱嵌入（KSSE），一个基于能量的模型：用相关随机键伊辛模型 Nishimori 温度下的稀疏图谱嵌入替换卷积网络的顶层分类器——即谱可检测阈值，类结构在该处与无序勉强可区分。将预训练特征映射到准循环低密度奇偶校验图，研究构造正则拉普拉斯（Bethe-Hessian）作为有效 Kohn-Sham 哈密顿量，产生 D 个独立谱问题（每特征通道一个），经循环块上的 FFT 在 O(N log N + k_mode²N) 时间内可解，附低模 Rayleigh-Ritz 精化（k_mode=5）。物理上，这是一维环晶体上的 k.p 有效质量约化：循环支撑是完美晶体，数据权重是缓变杂质势，Nishimori 交叉是带边的费米能级。星域手术（star-domain surgery）优化图：不消除所有挫折环（不破坏码字就无法做到），边移动在码字周围创建经认证的凸性并留有界残差挫折，附多尺度分形认证（盆 D2<1 对比粗糙景观 D2>3）。理论包括广义 Ihara-Bass 恒等式与锐谱阈值、以挫折为规范不变 Z2 通量的非回溯增长三分类、陷阱集谱检验、精确通道可分离性与杯积障碍，以及环级数、凸性、手术与准平稳界。在冻结 EfficientNet-B4 特征（D=1792）、转导协议的 ImageNet-1000 上，KSSE 达到 88.93% Top-1 准确率，约 2124 万参数——超越 Swin-L（197M，86.4–87.3%），匹配 ViT-H/14 低端（632M，88.0–89.5%），参数少 10 倍与 30 倍。

## 关键词

谱嵌入、Kohn-Sham、伊辛模型、图拉普拉斯、ImageNet
