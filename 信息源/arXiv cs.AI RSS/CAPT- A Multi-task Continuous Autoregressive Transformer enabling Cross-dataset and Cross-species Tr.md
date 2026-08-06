# CAPT: A Multi-task Continuous Autoregressive Transformer enabling Cross-dataset and Cross-species Transfer for Calcium Population Dynamics

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xinhong Xu, Yimeng Zhang, Yuanlong Zhang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2607.23258)

------

arXiv:2607.23258v2 Announce Type: replace

Abstract: Large-scale calcium imaging has created an opportunity to build foundation-style models for neural population dynamics, but a central question remains unresolved: \textbf{whether a model pretrained on one collection of recordings can generalize to new datasets, experimental paradigms, and even species.} Existing approaches are often designed for specific tasks and evaluated on a single dataset, making it unclear whether their learned representations are reusable for new calcium trace datasets. To tackle this gap, we present \textbf{CAPT}, a \textbf{C}ontinuous \textbf{A}utoregressive \textbf{P}opulation \textbf{T}ransformer for calcium population dynamics. CAPT models continuous calcium traces directly through a continuous patch tokenization strategy and is trained autoregressively, enabling end-to-end pretraining and adaptation to diverse downstream tasks. We first pretrain CAPT on a large-scale mouse calcium imaging dataset and evaluate its transferability across independent mouse, larval zebrafish, and \textit{C. elegans} datasets collected by different laboratories. In these transfer settings, the pretrained backbone is frozen and only adaptation modules are updated. Across neural population forecasting and behavior decoding tasks, CAPT consistently outperforms specialized and general-purpose baselines. Alongside predictive performance, multimodal analyses using NeuroPAL annotations in \textit{C. elegans} datasets show that CAPT embeddings form a shared functional space across datasets and capture anatomical cell-identity-related structure. These results suggest that the continuous autoregressive modeling opens up possibilities for a simple route towards general-purpose neural foundation models for calcium imaging, which can generalize across datasets, experimental paradigms, and species. Code is available at https://github.com/TSuXinH/CAPT.
