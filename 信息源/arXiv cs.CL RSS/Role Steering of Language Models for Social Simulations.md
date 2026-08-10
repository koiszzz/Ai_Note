# Role Steering of Language Models for Social Simulations

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Isaac Song, Mohammed Rehan Parwani, Glenn Matlin, Emile Anand, Akhil Theerthala, Arjun Chatterjee, Anthony Wen-Ming Zang, Maria Kostylew, Yonadav G. Shavit, Sebastien Krier, Mark Riedl　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.00023)

------

arXiv:2608.00023v2 Announce Type: replace

Abstract: Social simulations built from language-model agents need role-conditioned behavior that can be checked before agents are placed into a simulated population. We introduce an activation-steering screening workflow for role-conditioned agents: define a role profile, extract a role-specific direction, sweep four steering coefficients, evaluate role-profile alignment, and pass or flag each candidate configuration. On OLMo-3-7B-Instruct, we apply the workflow to a mixed 275-role inventory with 228 role-agnostic questions, GPT-4.1-mini prompted role references, and GPT-4.1-mini judges. Role-specific directions receive higher judged role-profile alignment than an assistant-axis directional control from prior persona-vector work, with mean overall scores of 63.2 versus 41.1 across the tested grid. They also preserve high lexical diversity, while the control drops sharply at larger coefficients. The role-level screen is the main practical output: most roles improve as steering increases, but 38 roles decline across all six measured dimensions, showing why simulation builders should choose coefficients per role rather than deploy a uniform high-strength setting. We make our code and evaluation artifacts available at https://anonymous.4open.science/r/anonymous-research-code-5F03/.
