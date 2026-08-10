# Vorch-IR: Long-Form Unified Multimodal Identity Replacement Video Generation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yaole Wang, Xiaoyu Chen, Xin Ma, Yang Ding, Gang Yue, Jingjing Chen, Lin Ma, Yaohui Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05648)

------

arXiv:2608.05648v1 Announce Type: new

Abstract: Video identity replacement seeks to transfer the identities of one or more subjects while preserving the motion, expressions, and temporal structure of a driving video. Existing methods largely target single-person settings and often require task-specific structural controls, such as masks or pose representations, limiting their flexibility in general multimodal editing systems. Progress on multi-person replacement is further constrained by the scarcity of paired training data. We present Vorch-IR, a unified framework that supports single- and dual-person identity replacement, with optional background replacement, in a single model. Built on LTX2, Vorch-IR jointly conditions on a driving video, indexed reference images, and a textual editing instruction. The reference images need not match the pose, layout, or spatial configuration of the driving video: their roles as subject or background references are specified through the instruction. Dense visual conditions are fused through self-attention, while a vision-language context establishes semantic correspondence through cross-attention. We further develop an automatic data construction pipeline that synthesizes paired supervision for all four editing settings. Experiments using automatic metrics and pairwise human evaluation demonstrate strong identity preservation, motion fidelity, and temporal coherence across diverse scenarios. A temporal overlapping inference strategy additionally extends the short-clip model to minute-long generation without autoregressive continuation.
