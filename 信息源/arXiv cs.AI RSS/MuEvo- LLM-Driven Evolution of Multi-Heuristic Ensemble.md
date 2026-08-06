# MuEvo: LLM-Driven Evolution of Multi-Heuristic Ensemble

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Haoze Lv, Ning Lu, Shengcai Liu, Shaofeng Zhang, Ke Tang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.NE　|　原文：[打开链接](https://arxiv.org/abs/2608.03636)

------

arXiv:2608.03636v1 Announce Type: cross

Abstract: Large language model-based automated heuristic design (LLM-AHD) has shown strong potential in discovering effective heuristics for combinatorial optimization problems. However, existing methods primarily optimize a single heuristic, whereas practical optimization frameworks often rely on multiple interacting components. Directly extending single-heuristic methods is challenging because early component selection can overlook components with late potential, while independent evolution ignores inter-component dependencies. We propose MuEvo, an LLM-driven framework for evolving heuristic ensembles under ensemble-level feedback. MuEvo combines Dynamic Component Management, which uses short-budget probing and a reversible lifecycle to revise component priorities throughout the search, with LLM-Driven Co-Evolution, which coordinates component populations through Multi-Ensemble Evaluation, Cross-Component Information Sharing, Relation-Guided Pair Evolution, and Adaptive Budget Allocation. We evaluate MuEvo on selection hyper-heuristics and componentized ant colony optimization across four combinatorial optimization domains. Results show that MuEvo consistently improves human-designed frameworks and outperforms representative multi-component extensions of state-of-the-art LLM-AHD methods, demonstrating its effectiveness across both controller-mediated heuristic pools and functionally differentiated algorithmic components.
