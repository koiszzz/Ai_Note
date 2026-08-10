# Revisiting Black-Box Model Ownership Verification through Information Theory

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Aoting Hu, Yanzhi Chen, Renjie Xie, Xinwei Zhang, Wei Xu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2409.06130)

------

arXiv:2409.06130v2 Announce Type: replace-cross

Abstract: Modern machine learning models require substantial computational resources and data to train, making them valuable intellectual property. Model watermarking has emerged as a practical solution for black-box ownership verification, but existing methods suffer from a persistent trade-off between robustness and predictive utility. In this work, we analyze this limitation from an information-theoretic perspective and identify a fundamental capacity crisis: relying solely on predicted labels provides insufficient capacity to embed robust ownership signals without degrading accuracy. To deal with it, we propose a new black-box ownership verification framework that leverages the top-k output. By exploiting this richer output space, our approach increases the effective capacity available for watermarking while preserving predictive performance. Extensive experiments across image, text, and tabular domains demonstrate that our method achieves a more favorable robustness--utility trade-off than existing approaches, while remaining practical for real-world deployment.
