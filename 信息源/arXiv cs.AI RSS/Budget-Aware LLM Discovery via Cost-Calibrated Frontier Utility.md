# Budget-Aware LLM Discovery via Cost-Calibrated Frontier Utility

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yansen Zhang, Yilu Liu, Tianyu Liu, Jiamin Chen, Xiaokun Zhang, Kai Xie, Xue Liu, Yiyan Qi, Chen Ma　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.26828)

------

arXiv:2607.26828v3 Announce Type: replace-cross

Abstract: Large language models increasingly support scientific and algorithmic discovery through inference-time search over evaluated candidates. Existing adaptive discovery controllers assign credit based only on score progress, even though prompt length, retries, and guidance calls cause search actions to incur different token costs. We prove that cost-blind credit can forfeit all but a vanishing fraction of attainable quality as frontiers multiply and costs diverge. Under a fixed search-side token budget, the controller must decide which frontier is improving and whether its gain justifies the realized cost before the budget is exhausted. We introduce \textbf{CostAda}, a cost-calibrated adaptive controller built around \emph{cost-calibrated frontier utility}. The utility values frontier progress relative to realized action cost and conditions that credit on the remaining budget. CostAda uses this signal to control local exploration intensity, frontier allocation, and budgeted tactic intervention. Cost and remaining budget therefore shape the search rather than serving only as accounting variables or a stopping rule. CostAda reaches the strongest baseline's full-budget quality with at most half the budget on twelve of sixteen benchmark--backbone pairs while achieving the strongest mean final quality on all eight benchmarks under GLM-5 and GPT-5.4.
