# Geometry-Informed Parameter-Efficient Fine-Tuning of Pre-trained Molecular GNNs for Blood-Brain Barrier Permeability Prediction

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Marco Vieto Vega, Long D. Nguyen, Binh P. Nguyen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04257)

------

arXiv:2608.04257v1 Announce Type: new

Abstract: Blood-brain barrier permeability (BBBP) prediction is a critical screening task in central nervous system drug discovery, where candidate molecules must be assessed for whether they can cross, or should be prevented from crossing, the blood-brain barrier. However, this task remains challenging because of limited, class-imbalanced datasets and sensitivity to molecular structure. Recent advances in deep learning have established graph neural networks (GNNs) as a powerful approach for molecular representation learning, while pre-trained molecular GNNs provide transferable knowledge for downstream tasks. However, full fine-tuning is often parameter-inefficient and prone to overfitting, whereas existing parameter-efficient fine-tuning (PEFT) methods mainly adapt node features or the two-dimensional covalent graph, limiting their ability to capture three-dimensional geometry and second-order interactions. To address these limitations, we propose BBBP-GeoPEFT, a geometry-informed PEFT framework for pre-trained molecular GNNs. BBBP-GeoPEFT constructs distance-based graphs at multiple cutoffs and their corresponding line graphs from molecular conformers to capture spatial atom and second-order edge interactions. Lightweight auxiliary geometric graph encoders generate cutoff-specific representations, which are incorporated into each pre-trained layer through node-wise cutoff attention and gated residual connections. This design preserves pre-trained knowledge while incorporating permeability-relevant geometric information with a small trainable-parameter budget. Experiments on a curated BBBP dataset show that BBBP-GeoPEFT achieves competitive performance compared with full fine-tuning and representative PEFT baselines. Under both random and scaffold splitting, BBBP-GeoPEFT achieves competitive or improved ROC-AUC and accuracy in most experiments while updating only 10.1% of the model parameters.
