# A Graph Signal Processing Perspective on Numerical Sequence Representations in LLM In-Context Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jiajun Bao, Zihao Qi, Toni J. B. Liu, Gurbir Arora, Rapha\"el Sarfati, Nicolas Boull\'e, Christopher J. Earls　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03015)

------

arXiv:2608.03015v1 Announce Type: new

Abstract: Pretrained large language models (LLMs) have demonstrated in-context learning (ICL) capabilities for numerical inference over sequences serialized as text. Prior work has identified and characterized this form of numerical inference primarily through output-level evaluations such as prediction error. However, how numerical information is organized within LLM representations remains much less understood. To study this internal organization, we adopt a graph signal processing perspective in which attention induces a weighted graph over tokens, while token hidden states define signals on its nodes. Quantitative graph-spectral diagnostics and qualitative token-graph visualizations reveal that representations become more clearly differentiated by input dynamical complexity as context length increases. Simpler inputs produce attention-induced token graphs with stronger global connectivity and smoother, spectrally concentrated hidden-state signals, whereas more complex inputs produce more localized graphs and hidden-state signals with broader spectral support and greater high-frequency energy. Together, these findings point to systematic, context-dependent internal signatures associated with numerical ICL that are conserved across model families.
