# MambaTS: Improved Selective State Space Models for Long-term Time Series Forecasting

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xiuding Cai, Xueyao Wang, Yaoyao Zhu, Yu Yao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2405.16440)

------

arXiv:2405.16440v2 Announce Type: replace-cross

Abstract: In recent years, Transformers have become the de-facto architecture for long-term time series forecasting (LTSF), yet they face challenges associated with the self-attention mechanism, including quadratic complexity and permutation-invariant bias. This raises an important question: \emph{do we truly need self-attention to model long-range dependencies in LTSF?} To address this, we propose MambaTS, a linear-scan-based framework that models global dependencies across time and variables via structured dependency modeling. Since explicit variable dependency structures are often unknown, we introduce Variable-Aware Scan along Time (VAST), which learns inter-variable relationships during training and determines an optimal scan order via a shortest-path-based decoding strategy during inference. MambaTS employs the latest Mamba model as its backbone. We suggest that the causal convolution in the vanilla Mamba is unnecessary due to the presence of independent variables, leading to the development of the Temporal Mamba Block (TMB). To mitigate model overfitting, we further incorporate a dropout mechanism for selective parameters in TMB. Extensive experiments conducted on eight public datasets demonstrate that MambaTS achieves competitive or state-of-the-art performance on most datasets. Code is available at this repository: \href{https://github.com/XiudingCai/MambaTS-pytorch}{https://github.com/XiudingCai/MambaTS-pytorch}.
