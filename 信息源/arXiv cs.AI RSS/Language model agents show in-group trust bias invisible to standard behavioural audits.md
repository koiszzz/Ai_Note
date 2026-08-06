# Language model agents show in-group trust bias invisible to standard behavioural audits

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Messi H. J. Lee　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2605.28114)

------

arXiv:2605.28114v2 Announce Type: replace

Abstract: Language-model agents are moving from single-user assistants into persistent networks that build trust and reputation with one another, and the same models increasingly control physically embodied robots as well as software. Here we show that five widely used open-weight reasoning models develop an in-group trust bias the moment group membership becomes visible to them, even when the groups are arbitrary labels with no real-world meaning: in a 20-agent simulation, agents direct 53.6-54.6% of their trust-building actions toward in-group targets against a 47.4% base rate expected by chance, a shift present in every model tested and confirmed by three independent statistical checks and an instruction-rewording robustness test. This bias is easy for current evaluation practice to miss, because it operates through which agent receives an action rather than which action is chosen - a channel invisible to the aggregate behaviour-log audits that are the standard way multi-agent AI systems are evaluated today. A resource-scarcity manipulation, intended to test whether competition intensifies the bias, instead reduced it in three of five models; we trace this to an artifact of how scarcity was enforced, not to a failure of the underlying mechanism. Group-contingent social dynamics are therefore already present in the models multi-agent AI systems are built from, and auditing practice built around single-model, single-decision evaluation cannot detect them.
