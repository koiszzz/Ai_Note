# M$^3$R-Bench: A Unified Benchmark for Evidence-Grounded Multimodal Metaphor Understanding

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Hong Jiang, Junnan Zhu, Jingwang Huang, Xiao Sun, Yuming Yang, Jiang Zhong, Ruirui Chen, Jingman Shi, Hao Wu, Nayu Liu, Xinyi Jiang, Kaiwen Wei　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05817)

------

arXiv:2608.05817v1 Announce Type: new

Abstract: Metaphor enables the understanding of abstract concepts through cross-domain mappings while conveying affective attitudes. In multimodal scenarios, visual and textual information jointly construct Target--Source mappings, requiring both conceptual understanding and cross-modal reasoning. However, existing benchmarks mainly evaluate metaphor understanding through isolated subtasks and lack evidence-grounded explanations, making it difficult to assess whether models establish mappings grounded in visual and textual cues.To address these limitations, we introduce M$^3$R-Bench, a unified and evidence-grounded benchmark containing 1,000 image--text instances with human-verified annotations. Guided by Conceptual Metaphor Theory and theories of nonliteral language understanding, M$^3$R-Bench provides joint annotations for metaphor occurrence, Target--Source mapping, sentiment, and stage-wise explanations following ``evidence identification--mapping establishment--sentiment inference.''Evaluations on M$^3$R-Bench reveal that existing models often overlook visual evidence, rely on superficial textual cues, and produce inaccurate Target--Source mappings, exposing a cross-modal evidence--mapping mismatch. To address this mismatch, we propose M$^3$R-Reasoner, which combines curriculum-based reasoning supervision with task-aware reinforcement learning to align model reasoning with metaphor interpretation. Experiments show that, with only an 8B-parameter backbone, M$^3$R-Reasoner outperforms larger proprietary MLLMs across four unified-task metrics and improves Visual Evidence and Sentiment Justification scores over GPT-5.5 by 28.45 and 30.11 points, respectively, while surpassing Claude-Sonnet-4.6 by 8.00 points in mean rubric score. The dataset and code are available at https://github.com/hongshi4/M3R-Bench.
