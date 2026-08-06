# Communication-Enhanced Tutoring for Efficient Decentralized Multi-Agent Reinforcement Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Maciej Wojtala, Bogusz Stefa\'nczyk, Dominik Bogucki, {\L}ukasz Lepak, Pawe{\l} Wawrzy\'nski　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2508.13661)

------

arXiv:2508.13661v4 Announce Type: replace

Abstract: Centralized Training with Decentralized Execution (CTDE) is the dominant paradigm in multi-agent reinforcement learning (MARL), enabling agents to act independently at test time while leveraging additional information during training. However, the most prominent methods within CTDE, based on value decomposition, are limited in learning efficiency and final performance by partial observability in both training and execution. To overcome this limitation, in this work, we propose the framework of tutoring: In training, the agents share information in their latent space to develop well-informed policies that achieve strong performance. Then, to recover decentralized execution, these policies concurrently adjust to anticipate lack of communication, and they are distilled into counterparts that rely solely on local observations. We demonstrate the effectiveness of our approach on Hallway, which, to the best of our knowledge, has not been solved before without test-time communication, SMAC under settings more difficult than the standard ones, and SMACv2.
