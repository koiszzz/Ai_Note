# Beyond Average Performance: Dynamic Instance Clustering and Specialized Algorithm Design in LLM-Assisted Evolutionary Search

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Qinglong Hu, Qingfu Zhang, Fei Liu, Xialiang Tong, Kun Mao, Mingxuan Yuan　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03129)

------

arXiv:2608.03129v1 Announce Type: new

Abstract: Large Language Model-assisted Evolutionary Search (LES) has emerged as a powerful paradigm for automated algorithm design. However, existing LES methods primarily optimize for average performance, inherently directing search effort toward instances that contribute most to this metric while leaving others poorly served, resulting in weak tail robustness and limited real-world reliability. To address this limitation, we propose Dynamic Instance Clustering and Specialized Algorithm Design (DyCA), an LES framework with a feature-free, structure-aware mechanism for constructing reliable algorithm portfolios under heterogeneous instance distributions. DyCA treats instance clustering as a co-evolving component within the search process, reusing accumulated evaluation data as feature-free signals to progressively partition instances with similar algorithmic response patterns. The uncovered clusters decompose the mixed objective into a set of structure-aware sub-objectives, thereby enabling finer-grained and more adaptive guidance for specialized algorithm design. Experimental results across four algorithm design tasks with heterogeneous instances demonstrate that DyCA outperforms state-of-the-art LES baselines, improving tail robustness by an average of 15.2\% and overall performance by 7.1\% while maintaining competitive head performance.
