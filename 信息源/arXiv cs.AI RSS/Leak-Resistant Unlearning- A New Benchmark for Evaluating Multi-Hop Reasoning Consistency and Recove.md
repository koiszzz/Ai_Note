# Leak-Resistant Unlearning: A New Benchmark for Evaluating Multi-Hop Reasoning Consistency and Recovery Robustness

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Haoting Qian, Qingjie Zhang, Zhicong Huang, Cheng Hong, Han Qiu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04519)

------

arXiv:2608.04519v1 Announce Type: new

Abstract: Benchmarking machine unlearning methods is critical to understand whether sensitive knowledge is removed from large language models (LLMs) or not. Current unlearning benchmarks include mainly single-hop questions and a narrow set of multi-hop questions. Although effective, they still face two challenges. (1) Knowledge is not isolated, whereby diverse multi-hop reasoning paths can potentially induce knowledge leakage than normal queries. (2) Unlearning may be fragile: unlearned knowledge can be partially recovered through recovery attacks such as lightweight post-unlearning adaptation, making static evaluation insufficient. Therefore, in this paper, we introduce \unlearning as a novel benchmark to understand robust LLM knowledge removal across diverse reasoning paths and recovery attacks. We experiment with this benchmark on 3 models, 6 unlearning methods, and 2 carefully curated datasets. Results show that existing methods are vulnerable to multi-hop reasoning paths and recovery attacks. We further explore the trade-off among forget quality, robustness, and model utility for LLM unlearning.
