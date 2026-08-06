# Scaling an Autoregressive Transformer for Single-Cell Generation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Aleksandr Sharipov, Yusif Mukhtarov, Igor Molybog　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02961)

------

arXiv:2608.02961v1 Announce Type: new

Abstract: We study a self-supervised generation task for single-cell gene expression vectors: given a set of vectors from a cell type, we aim to generate additional gene expression vectors of that cell type. For this task we characterize both the biological fidelity of the generated gene expression vectors and the scaling behavior of the pretraining loss. The model is a causal transformer paired with a learned quantized VAE tokenizer, trained with a cross-entropy loss. To evaluate the model, we condition it on held-out gene expression vectors of a cell type and generate vectors of gene expression, comparing the resulting distribution over gene expression vectors to the ground truth distribution of that cell type. We study the scaling properties of the proposed architecture by varying the number of trained parameters and the amount of training data. To our knowledge, we find the first jointly-fit two-exponent scaling law and compute-optimal frontier for a single-cell foundation model. Finally, we discuss how this pretrained model could be finetuned for perturbation response prediction.
