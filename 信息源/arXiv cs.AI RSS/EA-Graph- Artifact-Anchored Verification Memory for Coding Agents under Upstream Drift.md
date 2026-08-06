# EA-Graph: Artifact-Anchored Verification Memory for Coding Agents under Upstream Drift

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Hwai-Jung Hsu, Cheng-Jan Chi, Hanna Everett　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2608.04278)

------

arXiv:2608.04278v1 Announce Type: cross

Abstract: Coding agents increasingly work across sessions, but prose notes can preserve a conclusion without the program state that supported it. After an upstream change, a repository may still build even though earlier verification claims are no longer valid. EA-Graph is an artifact-anchored memory for verification claims. It represents artifacts at sub-path granularity, resolves aliases to leaf definitions, anchors each claim to the content used to establish it, and keeps evidence strength separate from freshness. When replacement content is unavailable, the claim becomes unprovable rather than guessed.

EA-Graph is evaluated on generated repositories whose behavior-to-artifact ground truth is known by construction. The task is to classify prior claims as unaffected, affected, or unprovable after value drift, logic drift, and deliberately withheld upstream content. The analysis covers 42 sessions across seven clean worlds, 14 model-world instances, three memory conditions, and two model tiers. In the Haiku round, artifact-anchored memory outscored prose notes and no persistent memory in all seven worlds; each exact paired Wilcoxon comparison yielded p = 0.0156. In the Sonnet round, the anchored condition was perfect, but frequent control ceilings left the preregistered contrasts non-significant. No session fabricated withheld content. These results support a bounded claim: artifact-anchored memory improved the smaller model's provability judgments in this testbed. An exploratory comparison further suggests that structured claim memory may narrow a capability gap by externalizing in-session re-derivation, but it does not establish cross- model equivalence. The study makes no claim about efficiency or repair quality.
