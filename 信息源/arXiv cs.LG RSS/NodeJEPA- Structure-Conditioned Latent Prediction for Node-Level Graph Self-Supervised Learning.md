# NodeJEPA: Structure-Conditioned Latent Prediction for Node-Level Graph Self-Supervised Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Tinghe Zhang, Jian Xu, Jiaheng Chen, Jiaxing Li, Yucheng Xiao, Qiang Wang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04381)

------

arXiv:2608.04381v1 Announce Type: new

Abstract: Self-supervised learning on graphs is largely shaped by contrastive methods that depend on carefully designed augmentations, and by generative methods that reconstruct node attributes in the input space. Both paradigms can entangle representations with low-level input statistics rather than with relational structure. Joint-embedding predictive architectures (JEPA) instead learn by predicting latent targets rather than reconstructing inputs. Recent work has explored this idea for graph-level representation learning, but how to design JEPA-style objectives for node-level tasks, and which structural signals the predictor should condition on, remains less clear. We present NodeJEPA, a joint-embedding predictive architecture for node-level graph self-supervised learning. NodeJEPA masks structure-aware k-hop ego-subgraphs and trains a context encoder to predict the latent representations of the masked nodes. These targets come from an EMA-updated target encoder with stop-gradient. A structure-conditioned predictor integrates spectral and centrality descriptors through cross-attention. Variance, covariance, and Laplacian spectral regularizers help stabilize the embedding geometry, and an optional curriculum gradually increases masking difficulty during training. Because prediction occurs in latent space, NodeJEPA does not rely on input reconstruction or hand-crafted graph augmentations. We evaluate NodeJEPA on standard node classification benchmarks under linear probing and fine-tuning protocols, and conduct ablations on masking, prediction, and regularization design choices. Our study offers a practical recipe for node-level JEPA-style latent prediction on graphs, and clarifies when structural conditioning helps representation learning. Code, configurations, and evaluation scripts are publicly available at https://github.com/OliverZ-dot/Node-Jepa.
