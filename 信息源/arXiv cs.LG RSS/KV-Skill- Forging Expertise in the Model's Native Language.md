# KV-Skill: Forging Expertise in the Model's Native Language

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zhaowei Han, Xiang Zhang, Bing Han, Kai Liu, Danqi Hu, Jie Liu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05475)

------

arXiv:2608.05475v1 Announce Type: new

Abstract: Task knowledge is commonly stored either as text in the prompt or as an update to model weights. Text is modular but must be interpreted on every use, while weight adaptation makes the resulting capability difficult to load, remove, or share independently. We introduce KV-Skill, a design space of external factorized operators that a frozen language model reads through a lightweight interface. KV-Skill supports two complementary paths. Registration converts an authored text skill into a text-derived operator and trains a shared per-backbone interface. Reward learning develops a compact latent operator directly from task outcomes, with or without an authored skill. Neither path adds positions to the prompt. Across ten benchmarks and four backbones from three model families, converting text to a KV-Skill consistently makes the same procedural knowledge more effective. On Qwen3.5-4B LiveMath, registration reaches 77.2 accuracy, compared with 23.4 for the source text skill, 52.0 for SkillOpt, and 64.5 for SoftSkill. Under matched reward training and parameter budgets, KV-Skill gives the best result in seven of eight matched settings against soft prefixes, prefix tuning, and LoRA. A post-hoc rank analysis further shows that text-derived operators retain nearly all of their benefit with one task-aligned direction per injection layer, while matched random directions fail. Finally, one shared interface retains three independently loadable KV-Skills without measurable forgetting. These results show that task knowledge can be acquired from text or experience, compressed into an external operator, and deployed separately from the backbone. Code is available at: https://github.com/shawnzhg/KV-Skill
