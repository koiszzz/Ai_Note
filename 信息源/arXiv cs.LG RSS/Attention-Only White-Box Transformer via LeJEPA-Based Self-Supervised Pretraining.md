# Attention-Only White-Box Transformer via LeJEPA-Based Self-Supervised Pretraining

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yang Bai, Linyuan Wang, Haoyang Jiang, Nuolin Sun, Libin Hou, Bin Yan　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04213)

------

arXiv:2608.04213v1 Announce Type: new

Abstract: Existing studies on self-supervised learning for white-box networks typically decouple the derivation of white-box networks via optimization algorithms from self-supervised learning paradigms. In this work, we instead revisit the two components from a joint perspective. The LeJEPA-based self-supervised framework assumes an isotropic Gaussian distribution as the optimal embedding distribution for downstream tasks, which is conceptually equivalent to the expansion term $R(Z)$ in the sparse rate reduction objective guiding white-box Transformer optimization. Building on this observation, we use the LeJEPA self-supervised paradigm to optimize $R(Z)$, and derive the remaining terms $R^{c}(Z\mid U_{[K]})+\lambda\lVert Z\rVert_{0}$ via the alternating direction method of multipliers (ADMM) into an attention-only Transformer that dispenses with the ISTA structure or MLP layers of the original design. Experimental results demonstrate that our attention-only white-box Transformer achieves classification accuracies of $88.88\%$ on CIFAR-10 and $63.54\%$ on CIFAR-100 at the Base scale under the LeJEPA self-supervised paradigm, while the original white-box Transformer CRATE achieves classification accuracies of $89.18\%$ on CIFAR-10 and $63.56\%$ on CIFAR-100. Our model achieves competitive performance while reducing the parameter count by roughly $31\%$. Beyond the white-box setting, we further investigate standard ViTs and find that replacing all MLP blocks with ReLU activations under knowledge distillation removes approximately 66\% of the parameters while preserving competitive accuracy, motivating further investigation into the potential redundancy of MLP modules in standard ViT architectures.
