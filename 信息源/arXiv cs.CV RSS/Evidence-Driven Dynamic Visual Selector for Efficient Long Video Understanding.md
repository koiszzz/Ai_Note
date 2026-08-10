# Evidence-Driven Dynamic Visual Selector for Efficient Long Video Understanding

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Bo Zhang, Wenxin Wang, Feng Chen, Zhihao Zhang, Zixuan Wang, Changsheng Li, Yinjie Lei　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05780)

------

arXiv:2608.05780v1 Announce Type: new

Abstract: Recent advancements in MLLM-based long-form video understanding have mitigated inference-time computational cost and limited context lengths by selecting query-relevant frames. However, existing approaches predominantly rely on external proxy scorers and rigid heuristic rules, inevitably suffering from misalignment with the target MLLM's intrinsic evidence and failing to accommodate the non-uniform spatiotemporal information density. In this paper, we propose a fine-grained dynamic visual selection framework named EviSelect, grounded in the target MLLM internal attention evidence. Our method efficiently probes visual evidence via sparse prefilling as a structured prior to guide distribution-aware dynamic sampling. Specifically, we efficiently approximate attention maps of the target MLLM using highly compressed visual inputs and sparse attention, well-aligned to the full counterpart. Conditioned on three complementary attention components derived from this prior, we design a lightweight selector that not only precisely locates query-relevant timestamps but also adaptively adjusts the local sampling rate and spatial resolution. To enable evidence-conditioned spatiotemporal sampling, we formulate the selector as a stochastic policy and optimize it via GRPO under a joint accuracy--efficiency reward. By rewarding correct predictions under lower visual cost through group-relative comparisons, our method encourages the policy to allocate computation dynamically according to the information density of each video. Across three long video understanding benchmarks, EviSelect achieves superior performance compared to existing methods while reducing selected visual tokens by about 50\% and achieving a 3.9x end-to-end speedup.
