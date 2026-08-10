# Ge$^\text{2}$mS-T: Multi-Dimensional Grouping for Ultra-High Energy Efficiency in Spiking Transformer

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zecheng Hao, Shenghao Xie, Kang Chen, Wenxuan Liu, Zhaofei Yu, Tiejun Huang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.NE　|　原文：[打开链接](https://arxiv.org/abs/2604.08894)

------

arXiv:2604.08894v2 Announce Type: replace-cross

Abstract: Spiking Neural Networks (SNNs) offer superior energy efficiency over Artificial Neural Networks (ANNs). However, they encounter significant deficiencies in training and inference metrics when applied to Spiking Vision Transformers (S-ViTs). Existing paradigms including ANN-SNN Conversion and Spatial-Temporal Backpropagation (STBP) suffer from inherent limitations, precluding concurrent optimization of memory, accuracy and energy consumption. To address these issues, we propose Ge$^\text{2}$mS-T, a novel architecture implementing grouped computation across temporal, spatial and network structure dimensions. Specifically, we introduce the Grouped-Exponential-Coding-based IF (ExpG-IF) model, enabling lossless conversion with constant training overhead and precise regulation for spike patterns. Additionally, we develop Group-wise Spiking Self-Attention (GW-SSA) to reduce computational complexity via multi-scale token grouping and multiplication-free operations within a hybrid attention-convolution framework. Experiments confirm that our method can achieve superior performance with ultra-high energy efficiency on challenging benchmarks. To our best knowledge, this is the first work to systematically establish multi-dimensional grouped computation for resolving the triad of memory overhead, learning capability and energy budget in S-ViTs. Code is available at https://github.com/hzc1208/Ge2mST.
