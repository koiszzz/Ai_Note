# Instruction Stacking Collapse: A Benchmark and the Capability-Dependent Value of Prompt Compilation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Atul Anand, Sourav Chattaraj　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2608.02639)

------

arXiv:2608.02639v1 Announce Type: cross

Abstract: Production prompts rarely carry a single instruction. One system message may require valid JSON, a word limit, three citations, and a fixed tone at the same time. We study how instruction-following degrades as such constraints accumulate. We introduce a benchmark that stacks 24 verifier-checked instructions, one to twenty at a time, and evaluate three production-tier LLMs (Claude Sonnet 4.6, GPT-5-mini, Gemini 2.5 Flash). Instruction-following degrades non-linearly: the follow rate falls from ~96% to as low as 20%, driven by a structured and reproducible set of pairwise conflicts. A single "output JSON" constraint, for example, is jointly unsatisfiable with nine others. We then evaluate a training-free remedy: an instruction compiler that rewrites the stacked prompt in a single LLM call and is reused across queries. Its benefit is capability-graded. It recovers up to +11 points of follow rate for weaker models, which are also the models most often deployed at scale, while leaving stronger models, which already internalise the same structure, essentially unchanged. Cluster-robust tests, same-baseline controls, and a within-family scaling ladder attribute the gain to the rewrite itself rather than to additional tokens, reordering, or measurement headroom. We release the benchmark, verifiers, and cached runs for full reproduction.
