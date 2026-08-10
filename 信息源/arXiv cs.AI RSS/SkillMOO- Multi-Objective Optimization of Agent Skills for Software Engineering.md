# SkillMOO: Multi-Objective Optimization of Agent Skills for Software Engineering

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jingzhi Gong, Ruizhen Gu, Zhiwei Fei, Yazhuo Cao, Lukas Twist, Alina Geiger, Shuo Han, Dominik Sobania, Federica Sarro, Jie M. Zhang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2604.09297)

------

arXiv:2604.09297v3 Announce Type: replace-cross

Abstract: Agent skills are increasingly used to configure coding agents for software engineering (SE) tasks, yet current practice treats them as static, hand-crafted assets, or evolved on pass rate alone. This is insufficient: a skill can improve task success while substantially raising token cost, or introducing misleading guidance. We argue that SE agent skill bundles can be treated as multi-objective search objects and present SkillMOO, a framework that evolves skill bundles through LLM-proposed edits and NSGA-II Pareto selection on pass rate and inference cost. Evaluated across all 16 SkillsBench SE tasks, SkillMOO achieves the top pass rate rank on 11 of 12 non-zero-pass tasks while achieving cost reductions of up to 31.7% over static bundles, with pass rate gains up to 21 percentage points. Analysis of 38 skill edits shows that pruning and substitution dominate successful operations, offering actionable principles for skill bundle design. Thereby, the current practice of deploying skills without cost-aware validation leaves better skill configurations unexplored, motivating a new class of cost-aware, search-based skill engineering.
