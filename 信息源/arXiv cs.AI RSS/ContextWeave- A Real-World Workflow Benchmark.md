# ContextWeave: A Real-World Workflow Benchmark

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Bo Wang, Yuqian Yao, Enxi Wang, Luozhijie Jin, Yang Liu, Yiran Suo, Yuxuan Cai, Enyu Zhou, Yufei Gao, Honglin Guo, Tianyu Huai, Li Ji, Zhikai Lei, Bufan Li, Lizhi Lin, Jinxiu Liu, Jie Yang, Jiazheng Zhou, Maosen Zhou, Pengfang Qian, Shichun Liu, Guanshan Liu, Hao Zheng, Yunhao Yu, Hang Yan, Jihua Kang, Xinchi Chen, Xipeng Qiu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04830)

------

arXiv:2608.04830v1 Announce Type: new

Abstract: Memory is essential as language agents move from isolated tasks to long-horizon, stateful workflows, yet existing evaluations often reduce it to retrieval or question answering. We introduce ContextWeave, a longitudinal benchmark that evaluates whether recalled experience improves downstream agent performance in realistic office-work streams. ContextWeave reconstructs privacy-preserved, multi-month workflows of 14 participants into 1,005 executable tasks, including 568 core evaluation tasks, with instructions, containerized environments, trajectories, and task-specific rubrics. It measures workspace quality and alignment with participant-specific preferences, complemented by diagnostics of relevance, continuity, solvability, and robustness to misleading recall. Across six memory components under a fixed model, the strongest configuration raises Workspace Score from 68.08 to 78.20 and Preference Score from 41.50 to 70.60. With a fixed memory component, recall improves both outcomes for all five tested base models, although gains vary substantially. Our analysis shows that actionable, experience-rich memory supports workflow continuation and reduces redundant exploration more effectively than compact summaries, while it can also be more susceptible to misleading recall. These findings motivate memory systems that optimize not only retrieval relevance but also reliable use during execution.
