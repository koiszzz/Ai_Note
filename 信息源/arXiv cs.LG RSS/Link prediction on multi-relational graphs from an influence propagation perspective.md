# Link prediction on multi-relational graphs from an influence propagation perspective

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zidu Yin, Yuankai Qi, Dong Gong, Ehsan Abbasnejad, Kun Yue, Javen Qinfeng Shi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.SI　|　原文：[打开链接](https://arxiv.org/abs/2608.05016)

------

arXiv:2608.05016v1 Announce Type: cross

Abstract: Predicting the existence and type of links (edges) between nodes in a multi-relational graph is key for applications from social interaction prediction to knowledge relationship identification. Enhancing local features with relevant global information is crucial for accurate link prediction, yet it remains challenging. We address this by modeling the relationship between node pairs as node influence. That is, whether the node influence can be propagated and what type of influence is propagated indicates where and what type the edge is, which will be the most relevant local and global information to predict the edges. To this end, we extend the Susceptible-Infectious-Recovered (SIR) epidemic model to capture the influence propagation of nodes on a large scale through sub-graph structures. Subsequently, these sub-graphs are compressed using virtual edges, thereby substantially reducing the computation associated with utilizing the global graph structure. Finally, we propose the Influential Graph Neural Predictor, referred to as IGNP, a link prediction framework guided by influence propagation. Extensive experiments demonstrate the superiority of the proposed method, which outperforms strong baselines by a large margin on the widely used and real-world datasets.
