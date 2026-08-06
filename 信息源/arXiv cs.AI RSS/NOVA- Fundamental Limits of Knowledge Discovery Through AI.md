# NOVA: Fundamental Limits of Knowledge Discovery Through AI

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Salman Avestimehr, Ken Duffy, Muriel M\'edard　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2605.15219)

------

arXiv:2605.15219v3 Announce Type: replace

Abstract: Can AI systems discover new knowledge through iterative self-improvement, and at what cost? We introduce NOVA, which models the ``generate, verify, accumulate, retrain'' loop as an adaptive sampling process over a knowledge space. We give sufficient conditions for accumulated genuine knowledge to cover a finite domain and show how violations produce contamination, forgetting, exploration failure, and acceptance failure.

We then analyze how adaptive generation arises from recursive retraining. In an explicit distribution-level model where accepted artifacts influence the next generator, we identify a recursive-feedback phase transition. Unanchored feedback can lock generation onto early accepted artifacts and leave initially reachable valid artifacts undiscovered with positive probability. Anchoring updates to a persistent base distribution prevents unbounded distortion and guarantees continued exposure.

Under imperfect verification, we identify a contamination trap: as easy knowledge is exhausted, even small false-positive rates can admit invalid artifacts faster than genuine discoveries. We show that Good--Turing estimation is a local batch-diversity diagnostic, not an estimator of the historically undiscovered valid mass governing long-term progress. Under a Zipf tail with exponent $\alpha>1$, the cumulative generation cost of obtaining $D$ distinct genuine discoveries satisfies $R_{\rm cum}(D)=\Theta(c_{\rm gen}D^\alpha)$. When the valid base distribution has such a tail, anchored retraining preserves the exposure needed for this scaling law. Finally, we show how human guidance, generation, and verification can redirect or expand discovery when autonomous sampling stalls because of repetition, vanishing exposure, or unreliable verification.
