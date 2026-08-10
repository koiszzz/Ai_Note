# From Sports to Safety: Benchmarking Proactive Risk Inference in MLLMs

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Jiawei Qiu, Yichen Xu, Jianzhe Ma, Mingyang Yu, Wenbin Zhu, Yang Han, Pinzheng Lv, Wenxuan Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05560)

------

arXiv:2608.05560v1 Announce Type: cross

Abstract: Timely anticipation of physical hazards is essential for real-world safety, yet existing MLLM evaluations focus on harmful content or general risks, leaving proactive physical hazard prediction underexplored. Sports provide a well-suited testbed: accident causes span diverse injury dimensions and pre-accident spatiotemporal cues draw on reasoning capabilities shared with broader safety domains such as autonomous driving and fall detection. We introduce SPRINT (Sports Proactive Risk INference Testbed), a benchmark of 2,888 real-world sports videos (2,440 accident, 448 safe controls) spanning 14 sports and 3 environmental settings. Accident videos feature fine-grained annotations of early hazard cues, accident timing, and hierarchical causes; safe videos are manually verified as accident-free and serve to diagnose prompt-induced false alarms. Evaluating state-of-the-art MLLMs under diverse prompts and temporal windows reveals a sharp gap between hazard sensitivity and understanding: the best model exceeds 95% in signaling hazards yet falls below 50% in identifying their causes. Diagnostic experiments further show that explicit danger queries trigger severe false alarms even on hazard-free videos. These findings indicate that current MLLMs exhibit only superficial proactive safety, lacking stable, cause-grounded early warning, and underscore the need for reliable proactive safety in dynamic physical environments. Data and code will be open-sourced upon acceptance.
