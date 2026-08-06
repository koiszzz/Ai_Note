# Mamba with Hierarchical Memory: Solving Representation Bottleneck in Long Sequence Modeling

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Qinwen Wang, Jieping Luo, Aoxiang Qin, Ruoyu Zhao, Jianxiong Tang, Wei Zhang, Zhichao Lu, Luziwei Leng　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.02347)

------

arXiv:2608.02347v2 Announce Type: replace

Abstract: Recurrent linear attention models (RLAs) such as Mamba offer efficient linear-time sequence modeling as an alternative to Transformers, yet their fixed-capacity recurrent states limit long-sequence modeling. Drawing inspiration from hierarchical human memory, we propose Hierarchical Memory Mamba (HMM) to address this limitation. Building upon a pre-trained Mamba backbone, HMM integrates a lightweight working memory that extracts slow paragraph-level semantics (PLS) from the fast sensory memory embedded in the backbone's hidden states. The PLS is subsequently compressed into persistent long-term memory for task-relevant retrieval. The hierarchical processing of semantic information overcomes the representation bottleneck of RLAs and endows HMM cross-task generalization through parametric learning, which is not observed in other long-context enhanced Mamba variants. Evaluations on Passkey Retrieval and LongBench-E tasks demonstrate that HMM improves retrieval success by 34.3--37.1% and reasoning accuracy by 1.6--14.2% over strong Mamba-based models, while adding only 2% extra parameters and with minimal training overhead.
