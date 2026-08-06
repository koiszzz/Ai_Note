# Solver-Aware Decompositions for Programming-by-Example: When Dividing Requires Knowing how to Conquer

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Janis Zenkner, Tobias Sesterhenn, Tim Grams, Christian Bartelt　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03461)

------

arXiv:2608.03461v1 Announce Type: new

Abstract: Decomposition-based Programming-by-example (PBE) scales performance by splitting tasks into subtasks that a learned synthesizer solves: a decomposer predicts intermediate subgoals, and a synthesizer generates programs conditioned on them. Current approaches train the decomposer to imitate ground-truth ( GT) subgoals, implicitly treating decomposition quality as intrinsic to the task. We challenge this assumption: for bounded solvers with fixed inductive biases, GT decompositions reflect the annotator's factorization choices - not the solver's search dynamics. A decomposer trained to match GT decompositions may therefore propose subgoals that are logically valid yet intractable for the solver. We propose Solver-Aware Decomposition (SAD), a training framework that retains supervised training on GT subgoals as a structural scaffold, while additionally optimizing the decomposer via direct feedback from a frozen synthesizer. Subgoals are rewarded based on the synthesizer's loss on the target program - a signal of subtask difficulty that encourages decompositions the solver can act on. Our experiments reveal an accuracy paradox: higher agreement with GT decompositions does not improve synthesis success - even though the synthesizer was trained on the very same GT data the decomposer is optimized to mimic. SAD instead learns decompositions that trade GT alignment for solver tractability, yielding consistent gains in synthesis and end-to-end task accuracy across two PBE domains. Moreover, SAD solves tasks that a GT decomposition oracle fails - empirical evidence that GT decompositions are not universally optimal for bounded solvers, and that decomposition quality is solver-relative, not intrinsic.
