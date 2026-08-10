# THBKG: A Temporal Biomedical Knowledge Graph for Decision-Aligned Clinical Advancement Prediction

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Pui Chung Siu, Claudia Cabrera, Mani Mudaliar, Arkaitz Zubiaga　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05982)

------

arXiv:2608.05982v1 Announce Type: new

Abstract: Inadequate target--disease linkage accounts for 40--50\% of Phase~II efficacy failures, so anticipating which programmes will advance would let sponsors back the hypotheses most likely to reach patients. What a programme can be judged on is the evidence that supported its linkage \emph{when it entered the clinic}. No existing biomedical knowledge graph allows that evidence profile to be assembled as of a past date. We present the Temporal Heterogeneous Biomedical Knowledge Graph (THBKG), which describes and predicts therapeutic target--disease links through time: 110,396 entities and 11.1M edges across nineteen relation types, each edge carrying the year its evidence changed, so a pair's profile can be recovered as it stood when its own decision fell due. On this graph we define a decision-aligned benchmark that predicts, for a target--disease pair entering Phase~II, whether it advances to Phase~III on evidence datable before that decision. Graph propagation over the THBKG outranks every direct-evidence reference scored under the same decision-aligned protocol, reaching a relative success of 4.3--4.5 at the top ten pairs per therapeutic area. The gain concentrates on the 72.8\% of pairs with no direct target--disease evidence at their decision point, where a direct-edge model has nothing to read: the encoders still rank five- to sixfold above chance, recovering the signal by propagating over the intervening biology. Adapting a path-based explainer to the decision-time subgraph decomposes each prediction into the evidence landscape behind the hypothesis for explainable prediction. We release the THBKG as a continually updated substrate for studying therapeutic target hypotheses by retrospective validation.
