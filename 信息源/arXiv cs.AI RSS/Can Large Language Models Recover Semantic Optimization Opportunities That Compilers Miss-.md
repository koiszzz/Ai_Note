# Can Large Language Models Recover Semantic Optimization Opportunities That Compilers Miss?

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Hailong Jiang, Feng Yu, Emran Hossain, Jianfeng Zhu, Mengfei Ren, Qiang Guan, Chunwei Xia　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.PL　|　原文：[打开链接](https://arxiv.org/abs/2608.03983)

------

arXiv:2608.03983v1 Announce Type: cross

Abstract: Optimizing compilers miss profitable transformations when their enabling semantics are absent from the analyzed program representation. We ask whether large language models (LLMs) can recover such semantics from heterogeneous C/C++ context and realize them as validated, contract-preserving artifacts. We introduce SeGaBench, an executable benchmark containing 100 synthetic and 20 source-backed cases spanning low-level assumptions, data-structure invariants, and high-level semantic lifting. Each case includes hidden enabling semantics, an oracle artifact, correctness and semantic validators, and a reproducible performance protocol. We evaluate five LLMs using five independent responses per case. The strongest model produces correct artifacts in 94.8% of responses, achieves at least 1.05x speedup in 83.3%, and obtains a performance success on 93.3% of cases. Nevertheless, correct artifacts often close only part of the oracle gap. These results show that LLMs can complement compiler analysis as speculative semantic proposers, provided that their artifacts are validated and evaluated.
