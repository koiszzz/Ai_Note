# Towards Interpretable Foundation Models for Retinal Fundus Images

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Samuel Ofosu Mensah, Camila Roa, Kerol Djoumessi, Philipp Berens　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2603.18846)

------

arXiv:2603.18846v4 Announce Type: replace-cross

Abstract: Foundation models are used to extract transferable representations from large amounts of unlabeled data, typically via self-supervised learning (SSL). However, many of these models rely on architectures that offer limited interpretability, a critical issue in high-stakes domains such as medical imaging. We propose DualIFM, a foundation model that is interpretable-by-design via a BagNet backbone whose small receptive fields generate class evidence maps that are faithful to the model's decision-making process. Additionally, DualIFM incorporates a $2D$ projection layer during pretraining that enables direct visualization of the representation space, providing a dataset-level view of the learned structure including meaningful clinical clusters as well as potential spurious correlations. We trained DualIFM on over 800,000 color fundus photographs from various sources to learn generalizable representations for different downstream tasks. Our model achieves performance comparable to RETFound, which has $16\times$ more parameters, while providing interpretable predictions on out-of-distribution data. These results suggest that large-scale SSL pretraining paired with inherent interpretability can lead to robust representations for retinal imaging. Code and pretrained models are available at github.com/berenslab/interpretable_FM.
