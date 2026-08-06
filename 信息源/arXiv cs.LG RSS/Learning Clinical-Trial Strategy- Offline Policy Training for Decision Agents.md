# Learning Clinical-Trial Strategy: Offline Policy Training for Decision Agents

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：William Bolton, Philip Torr　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03606)

------

arXiv:2608.03606v1 Announce Type: cross

Abstract: Clinical development is sequential decision-making under uncertainty, where a sponsor must plan a portfolio of experiments from heterogeneous evidence. We study this setting by framing oncology clinical development as an offline decision-making problem in which an agent predicts the next six-month trial portfolio of an oncology drug program from information available at the decision date. To support this, we construct a temporal dataset that combines 31.7k heterogeneous public data records, including trial registries, regulatory reviews, sponsor filings, utilization data, and epidemiology, into 881 offline decision episodes across 45 historical programs. We compare four offline objectives: behavioral cloning, reward-weighted behavioral cloning, learned-reward training, and value-based implicit Q-learning against four frontier LLM agents that share a common date-gated retrieval scaffold across held-out drug, sponsor, drug-class, and temporal splits. Models trained offline outperform the non-fine-tuned baselines, particularly in the post-August 2025 contamination-clean holdout. Reward-weighted behavioral cloning performs the best, obtaining 46.2% indication F1 and 14.2% strict F1 against 25.0% and 2.1%, respectively, for the best-performing tool agent on each metric. These results suggest that structured offline learning can teach agents to plan clinical experiments.
