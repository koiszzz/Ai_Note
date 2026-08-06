# Beyond Either-Or Reasoning: Transduction and Induction as Cooperative Problem-Solving Paradigms

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Janis Zenkner, Tobias Sesterhenn, Christian Bartelt　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.PL　|　原文：[打开链接](https://arxiv.org/abs/2505.14744)

------

arXiv:2505.14744v3 Announce Type: replace-cross

Abstract: Traditionally, in Programming-by-example (PBE) the goal is to synthesize a program from a small set of input-output examples. Lately, PBE has gained traction as a few-shot reasoning benchmark, relaxing the requirement to produce a program artifact altogether which allows transductive methods to directly the missing output sample. Transduction and induction are complementary reasoning modes--where induction derives general rules from examples, transduction leverages the examples directly to infer specific outputs without intermediate generalization. Yet existing approaches either treat them as mutually exclusive or couple them in hybrid structures where one paradigm dictates a fixed trajectory for the other -- undermining the latter's reasoning potential and creating cascading errors. We move away from these hierarchical models and introduce cooperative transductive-inductive problem solving: by interleaving both reasoning modes and ensuring neither unconditionally dominates the other, we preserve the search autonomy and reasoning capacity of each paradigm. We instantiate this concept in TIIPS. Across three PBE domains, TIIPS consistently outperforms state-of-the-art baselines and generates programs that more closely mirror ground-truth trajectories in both syntax and semantics, indicating a better match to the intended program behavior. Our findings highlight cooperative reasoning as a promising new direction for harnessing the full power of symbolic, inductive and neural, transductive reasoning.
