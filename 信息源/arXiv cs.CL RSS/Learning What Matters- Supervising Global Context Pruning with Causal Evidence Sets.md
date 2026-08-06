# Learning What Matters: Supervising Global Context Pruning with Causal Evidence Sets

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：James E. Allchin　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.21692)

------

arXiv:2607.21692v3 Announce Type: replace-cross

Abstract: Pruning a long context means committing to the blocks a model will keep, and the usual selector is distilled from a dense teacher's attention. That assumes attention shows which context the answer depends on. We test the assumption on retrieval tasks where the evidence is known exactly, by masking context and measuring whether the answer changes. Attention and causal dependence disagree, and selectors inherit the disagreement: teachers attend to outdated facts that answer-preserving restrictions drop, and attend differently across training runs that use the same evidence. In a two-step reference task, a selector distilled from attention routes at 36% to 98% depending on the training run, the same selector trained on causal evidence sets reaches 99% or better on every one, and dense accuracy does not say which teacher you have. On the topologies our estimator covers, the causal sets need no annotation: masking alone recovers them from the frozen teacher. Pretrained models show the same conflict. Qwen2.5-3B attends more to an outdated fact than its replacement on 58% of the examples it answers correctly (48% past a first-token attention sink), a causal router lifts Gemma-2-9B from 56% to 98%, and no readout we test recovers a two-hop chain that all three tested models solve. On our teachers a one-pass cross-layer trace supervises chains as well as the annotated sets, so the readout fails rather than the weights; interventions alone separate current from obsolete evidence, survive redundancy, and stay stable across training runs.
