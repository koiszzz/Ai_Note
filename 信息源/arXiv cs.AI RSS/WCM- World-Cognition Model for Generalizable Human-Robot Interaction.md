# WCM: World-Cognition Model for Generalizable Human-Robot Interaction

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yuzhen Chen, KC Zhou　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2607.22999)

------

arXiv:2607.22999v2 Announce Type: replace-cross

Abstract: Language agents can now interact fluently with users in software, but robots still struggle to bring comparable interaction to physical tasks. Current robot-control paradigms, including vision-language-action policies and world-model-based planners, are mainly optimized for instruction execution, leaving users with little visibility into why an action is chosen and few mechanisms to redirect, correct, or teach the robot through interaction. To solve this problem, we present the World-Cognition Model (WCM), a human-centered embodied agent built on the SLAK architecture (Sensing, Logic, Action, and Knowledge) and an asynchronous runtime. SLAK separates perception, reasoning, control, and memory, while the runtime allows reasoning, dialogue, and execution to proceed concurrently. WCM further introduces a human-in-the-loop teaching mode that enables users to interactively teach the robot difficult or long-horizon tasks. Teaching episodes and autonomous task rollouts are refined into chain-of-thought supervision to continually improve the model. WCM achieves a 73.8% average success rate across nine real-world human-robot interaction tasks, including tasks held out from CoT fine-tuning and a long-horizon task learned through teaching.
