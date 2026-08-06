# $\pi$-Attention: Online Efficient Sparse Transformers for Long-Context Modeling

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Pike D. Liu, Chang Liu, Yanxuan Yu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2511.10696)

------

arXiv:2511.10696v3 Announce Type: replace-cross

Abstract: Sparse attention is crucial in long-context Transformers, which restricts each token to a limited neighborhood and thereby reduces the quadratic cost of full self-attention. Local windows capture nearby context effectively, yet they induce a receptive-field bottleneck for dependencies beyond the window, limiting long-range modeling under moderate depth. In this paper, we propose $\pi$-Attention, an \emph{online efficient} sparse attention operator: as tokens arrive, each step maintains a streaming working set of local neighbors plus a $\pi$-indexed long-range fetch, fused by an adaptive prior under a shared softmax. Rather than materializing a global sparse mask in advance, $\pi$-Attention computes attention on the live working set with hierarchy-aware IO. We analyze causal reachability and minimum depth under this online rule, and show per-step cost remains $\mathcal{O}(k)$. Experiments on language modeling, Long Range Arena, and efficiency profiling---across 4K--32K context lengths---show consistent gains over local-window and other sparse baselines, approaching dense attention quality at linear cost.
