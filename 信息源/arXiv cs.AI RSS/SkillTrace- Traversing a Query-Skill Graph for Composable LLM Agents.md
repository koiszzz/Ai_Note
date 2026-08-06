# SkillTrace: Traversing a Query-Skill Graph for Composable LLM Agents

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yue Yao, Shengyuan Wang, Xin Chen, Minke Zhang, Jia He, Bingjun Luo, Tom Gedeon　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.02356)

------

arXiv:2608.02356v2 Announce Type: replace

Abstract: Large language model agents increasingly solve complex tasks by composing reusable skills from a library. To address this, the key challenge is not merely to retrieve individually relevant skills, but to identify a complete and executable skill composition. In this paper, we argue that this problem can be solved in a graph with three levels: compositional relations among skill queries, similarity between queries and candidates in the skill library, and the dependencies among the selected candidates. We introduce SkillTrace, which organizes the user query into a semantic hierarchy, matches skill queries and candidates, and propagates over the skill dependencies. Experiments on SkillsBench and ALFWorld demonstrate that SkillTrace achieves state-of-the-art performance, reaching a success rate of 53.17% on SkillsBench and 91.43% on ALFWorld. SkillTrace also delivers consistent improvements across different backbone language models, demonstrating the generality and robustness of graph-based skill retrieval.
