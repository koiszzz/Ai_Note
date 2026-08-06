# Diagnosing Tool-Selection Reasoning in LLM Agents with Canary Tools

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Atul Anand, Sourav Chattaraj　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04719)

------

arXiv:2608.04719v1 Announce Type: new

Abstract: Agent evaluations tell us that a model picked the wrong tool, but rarely why. We introduce canary tools: diagnostic probe tools planted in an agent's Model Context Protocol (MCP) tool set, each engineered to probe one specific tool-selection weakness. A six-type taxonomy (semantic decoys, parameter traps, capability mirages, prerequisite blindness, temporal decoys, and granularity traps) turns a single "wrong tool" outcome into a multi-dimensional profile of how a model reasons about tools. We evaluate eight models -- six hosted and two 8B open-weight -- spanning three capability tiers, on 120 tasks across three canary-density conditions and three seeds (8,640 runs), plus a 2,880-run subtlety ablation. Task success is graded by a provider-independent judge, corroborated by a second independent judge (Cohen's kappa = 0.75). We report three findings. First, susceptibility drops sharply as models get more capable: the per-task canary susceptibility rate (CSR) ranges about 36x across models, lowest for Claude Opus 4.8 and highest for Llama 3.1 8B. Second, capability tier alone does not predict safety: the most susceptible hosted model is mid-tier, and within a provider the cheaper model can be the safer one. Third, the taxonomy is capability-stratified: capability mirages most reliably trap frontier models, while the other types are largely inert on strong models but fire on small open models, so they discriminate by capability rather than being weak. Softening each canary's give-away phrase leaves frontier CSR essentially unchanged, evidence that the probes measure reasoning, not phrase-spotting. Susceptibility also predicts task failure (Spearman rho = -0.34), while the most robust models are not significantly degraded by canary pressure. We release the framework, canary schemas, tasks, and logs.
