# EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Unggi Lee, Sookbun Lee, Yeil Jeong, Eunjoo Lee, Minchul Shin, Hoilym Kwon　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CY　|　原文：[打开链接](https://arxiv.org/abs/2608.03206)

------

arXiv:2608.03206v1 Announce Type: cross

Abstract: Large language models (LLMs) power educational applications from tutoring to essay scoring, but each is a point solution to a single task, and only recently have these point solutions been integrated into agents operating over a learning management system (LMS). Yet tutoring is long-horizon, since a learner improves over days and weeks rather than in a single turn, and no benchmark evaluates an agent tutor across a sustained relationship. We introduce EduClaw-Bench, a benchmark that places an agent tutor in a continuous 30-day relationship with a simulated learner grounded in knowledge tracing (KT), whose knowledge-concept mastery, from a KT model trained on real-student data, drives its answers and is probed for learning gain across 55 scenarios. Each agent is scored on three primary axes (learning gain, responsiveness, and helpfulness) and two curriculum-design axes (Gagn\'e and Rosenshine), with helpfulness and the curriculum axes judged by a cross-family panel of three LLM judges. Evaluating 10 agent adapters over three base-model tiers yields two findings that single-tier, single-session evaluation cannot reach. First, tutoring quality belongs to the base model and the agent harness together rather than either alone. Second, almost no combination sustains good tutoring over the full horizon. A calibration check ($\text{ECE}=0.049$) and a live-classroom field study confirm that the simulated learner and its measurements track reality. Our work is a step toward trustworthy AI tutors for future education.
