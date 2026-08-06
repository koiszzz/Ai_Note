# SPOT: Sparse Probing and Outcome Calibration for On-Policy Distillation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zikun Qu, Min Zhang, Mingze Kong, Zhiwei Shang, Yikun Ban, Shuang Qiu, Zhongxiang Dai　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04419)

------

arXiv:2608.04419v1 Announce Type: new

Abstract: On-policy distillation (OPD) provides dense teacher supervision on student-generated trajectories, but standard reverse-KL training can assign insufficient probability to other plausible continuations. Teacher entropy alone does not reveal whether uncertainty is concentrated among a few plausible next tokens or dispersed over a long probability tail, nor whether the student already represents those candidates well. Moreover, local teacher probabilities may not predict downstream success. We introduce Sparse Probing and Outcome-calibrated Targets OPD (SPOT), which addresses two coupled decisions, where to probe and what to distill, through an acquisition--exploration--exploitation procedure. During acquisition, a position-level score combines normalized teacher entropy, the probability mass captured by a small top-$k$ candidate set, and student--teacher mismatch to allocate a limited probing budget. During exploration, SPOT evaluates teacher-proposed candidates through verifier-scored student continuations. During exploitation, these outcomes produce a closed-form, KL-regularized target that favors candidates with better downstream outcomes while remaining anchored to the teacher distribution. Extensive experiments across multiple student models and reasoning benchmarks demonstrate the effectiveness of SPOT in improving reasoning performance while balancing solution quality and coverage.
