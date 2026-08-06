# CoCo-IR: Contextual Composed Image Retrieval

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Shengcao Cao, Tanmaya Shekhar Dabral, Zhongli Ding, Madhuri Shanbhogue, Kaifeng Chen, Zhe Li, Mojtaba Seyedhosseini, Yu-Xiong Wang, Liang-Yan Gui　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05149)

------

arXiv:2608.05149v1 Announce Type: new

Abstract: Current instruction-based image retrieval systems are powerful but limited to single-turn interactions, failing to capture the iterative nature of complex, real-world visual searches. To overcome this limitation, we introduce Contextual Composed Image Retrieval (CoCo-IR), a novel task that enables users to progressively refine search results through interactions. We address this new task by proposing a new model based on a Large Multimodal Model (LMM) that functions as a context-aware reasoner for CoCo-IR. Our model interprets the entire interaction history to generate Transformable Image Embeddings (TIE) that evolve across turns. To fuel the model training without expensive human annotations, we develop a fully autonomous, scalable data engine that leverages LMMs to generate high-quality contextual retrieval data, and uses model-guided verification to mine challenging hard negatives. Extensive experiments demonstrate that our approach establishes new state-of-the-art performance: We achieve 39.4 mAP@5 on the challenging single-turn benchmark CIRCO; furthermore, on our new CoCo-IR benchmark, our model maintains robust performance with 44.1 R@1 on 4-turn dialogues, dramatically outperforming existing methods (28.2 4-turn R@1) that fail to handle multi-turn context. Project page: https://CoCo-IR.github.io.
