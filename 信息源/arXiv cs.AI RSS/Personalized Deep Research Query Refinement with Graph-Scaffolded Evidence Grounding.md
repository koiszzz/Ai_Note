# Personalized Deep Research Query Refinement with Graph-Scaffolded Evidence Grounding

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Soojin Yoon, Dongha Lee　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05876)

------

arXiv:2608.05876v1 Announce Type: new

Abstract: User requests serve as research specifications for deep research agents, shaping what evidence to seek and how to synthesize it. In personalized deep research, these specifications must additionally reflect user goals, constraints, preferences, and evaluation criteria. User context can be incorporated either within the deep research pipeline or into the research specification provided as its input. We focus on the latter, refining the user request into a personalized research specification before passing it to an unchanged deep research agent. This requires resolving three coupled decisions: which framing factors are relevant, whether the available user context sufficiently supports them, and whether to retrieve user memory, ask the user, or stop and refine the query. For training, G-STEER organizes framing factors as elicitation targets in an Intent Elicitation Graph that captures their dependencies. It learns a clarification policy from graph-scaffolded trajectories spanning diverse factor dependencies and evidence conditions. The policy produces a refined query while balancing target coverage against the costs of evidence acquisition. Experiments show that G-STEER achieves the strongest overall weighted target coverage and the highest downstream report personalization across both evaluated DRAs, while asking roughly one third as many user questions as a strong clarification baseline.
