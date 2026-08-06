# Efficient Training of Boltzmann Generators Using Off-Policy Log-Dispersion Regularization

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Henrik Schopmans, Christopher von Klitzing, Pascal Friederich　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2602.03729)

------

arXiv:2602.03729v3 Announce Type: replace

Abstract: Sampling from unnormalized probability densities is a central challenge in computational science. Boltzmann generators are generative models that enable independent sampling from the Boltzmann distribution of physical systems at a given temperature. However, their practical success depends on data-efficient training, as both simulation data and target energy evaluations are costly. To this end, we propose off-policy log-dispersion regularization (LDR), a novel regularization framework that builds on a generalization of the log-variance objective. We apply LDR in the off-policy setting in combination with standard data-based training objectives, without requiring additional on-policy samples. LDR acts as a shape regularizer of the energy landscape by leveraging additional information in the form of target energy labels. The proposed regularization framework is broadly applicable, supporting unbiased or biased simulation datasets as well as purely variational training without access to target samples. Across all benchmarks, LDR improves both final performance and data efficiency, with sample efficiency gains of up to one order of magnitude.
