# LC-Implicit-QAOA: Active-Workspace-Capped Exact Objective-and-Gradient Evaluation for Training over Bounded QUBO Light Cones

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Chih-Chung Hsu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.ET　|　原文：[打开链接](https://arxiv.org/abs/2608.05610)

------

arXiv:2608.05610v1 Announce Type: cross

Abstract: QAOA training repeatedly queries an objective and all shared gradients, making exact evaluation a feasibility bottleneck even when QUBO terms have bounded causal cones. Building on established causal-cone restriction and adjoint differentiation, LC-Implicit-QAOA profiles cone structure and induced-edge counts before local-amplitude and named-workspace allocation, then jointly selects equal-size microbatches and checkpoint schedules under a named active-evaluator workspace budget. "Implicit" means omitting both global state and global cost table, not implicit differentiation; infeasible requests are rejected before those allocations. An independently implemented complex128/float64 dense adjoint agrees with LC over 1,800 graph-angle comparisons, with a worst relative gradient error of 1.56 x 10^-13. LC completes all 104 target requests in a p=2 bounded-cone grid; under a prespecified n <= 24 validation cap, the matched state-plus-cost reference is executed for 28 requests and deliberately not run on 76. Across 80 budgeted requests, measured allocated evaluator memory stays within budget, reaching at most 0.797 of it. On 3-regular n=512, p=2, the adjoint reaches the same finite-budget endpoint in 101 objective-equivalent calls and 189 s, versus 909 calls and 1,565 s for central differences. LC targets fixed-depth one- and two-local diagonal QUBO costs with a transverse-field mixer; it provides neither global states, sampling, nor a hardware-independent fastest-backend rule.
