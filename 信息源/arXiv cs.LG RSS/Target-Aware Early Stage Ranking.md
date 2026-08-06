# Target-Aware Early Stage Ranking

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Juhee Hong, Meng Liu, Shengzhi Wang, Jin Zhou, Xiaoheng Mao, Zhao Zhu, Ruochen Liu, Huihui Cheng, Leon Gao, Christopher Leung, Chandra Mouli Sekar, Yijia Liu, Boyang Yu, Tuan Trieu, Dawei Sun, Jeet Kanjani, Rui Li, Jing Qian, Xuan Cao, Minjie Fan, Mingze Gao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2511.21095)

------

arXiv:2511.21095v2 Announce Type: replace

Abstract: Early Stage Ranking (ESR) in large-scale recommendation systems is dominated by ''user--item decoupling'' Two Tower architectures, which scale efficiently but cannot capture fine-grained, target-aware user--item interactions directly. We propose Target-Aware Early Stage Ranking (TESR), which augments the Two Tower with a Mixture of Attention (MoA) module trained as a request-level sequence modeling over user history. MoA combines (i) Hard Matching Attention (HMA) to capture explicit categorical-ID level overlap signals between user history and candidate item, (ii) target-aware HSTU attention for implicit affinities conditioned on the candidate, and (iii) target dependent and independent cross-attention for symmetric user-item contextualization. On top of this, a Multi-Logit Parameterized Gating (MLPG) head amplifies these signals at scoring time. To keep latency within ESR budgets, we co-design the architecture with FP8 quantization, custom kernels, and a Torch Inductor compilation path. On a production deployment, TESR delivers consistent offline NE wins and online topline gains, and is, to our knowledge, the first deployment of full target-aware attention sequence modeling in an ESR stage at this scale.
