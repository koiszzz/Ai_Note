# Omega-S: A Functional Resilience Index for LLM Fine-Tuning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Alberto Acedo　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03887)

------

arXiv:2608.03887v1 Announce Type: new

Abstract: Fine-tuning a large language model on new data degrades what it previously learned. We present Omega-S, a drop-in penalty computed from the weight matrix alone: it needs no previous-task data, no Fisher matrix and no stored copy of the old weights. It is three lines in an existing training loop and adds under 4% to the cost of a step.

Retention. On Llama-3-8B with LoRA, fine-tuned from code to prose and measured by HumanEval over ten seeds, Omega-S retains more of the original capability than no regularisation on 9 of 10 seeds (0.173 -> 0.238 absolute pass@1; sign test one-sided p=0.011, Wilcoxon p=0.006), as a retention ratio, 62.9% -> 84.1%. It also beats tuned weight decay on 10 of 10 seeds (p=0.002) and tuned EWC on 8 of 10 (p=0.014), every arm re-measured in the same session.

Mechanism, measured rather than asserted. Omega-S is topological by construction, its objective built from Tr(A^3), but we measured which of its four factors actually moves and three do not: their elasticity with respect to the weights is at or below 1e-4, against 9e-3 for the degree-variance term. As implemented, the composite reduces to a penalty on the variance of node degrees, which means row magnitude in square modules and directional alignment in non-square ones. We report this because a method whose name promises one thing and whose gradient does another should say so. We also enumerate the open design choices, including a contrast-preserving construction that does what it was designed to do and makes retention worse on all ten seeds.

Repeating an identical configuration, same seed and same hardware, gives a standard deviation of 0.104 in retention ratio. We have not found this quantified for low-rank fine-tuning of language models, and it bounds every seed-paired comparison in this literature, ours included.

Code, per-seed results and the full record of negative results are available.
