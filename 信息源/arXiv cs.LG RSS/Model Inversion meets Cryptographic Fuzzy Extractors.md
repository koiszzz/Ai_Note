# Model Inversion meets Cryptographic Fuzzy Extractors

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mallika Prabhakar, Louise Xu, Prateek Saxena　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2510.25687)

------

arXiv:2510.25687v4 Announce Type: replace-cross

Abstract: Model inversion attacks pose an open challenge to privacy-sensitive applications that use machine learning (ML) models. For example, face authentication systems use modern ML models to compute embedding vectors from face images of the enrolled users and store them. If leaked, inversion attacks can accurately reconstruct user faces from the leaked vectors. A fuzzy extractor (FE) is a cryptographic primitive with properties that can help defend against model inversion, offering attack-agnostic security without requiring any re-training of the ML model it protects.

To date, no systematic cryptanalysis of existing FE schemes that tolerate $\ell_2$ noise, as needed in modern ML-based face recognition systems, has been conducted. We perform the first in-depth security analysis of existing $\ell_2$-FE schemes showing that they offer weak security. We also show end-to-end inversion attacks that achieve high success rates in recovering original faces that are meant to be protected by FE schemes. We then offer a simple but new candidate scheme and prove its security formally. Our construction offers the first design point that offers practical runtime, stronger security, and usable accuracy for use in commodity ML-based face authentication.
