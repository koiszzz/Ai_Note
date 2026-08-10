# Failing Gracefully: Mitigating Impact of Inevitable Robot Failures

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Duc M. Nguyen, Saad A. Ghani, Andrew Marshall, Allison Andreyev, Gregory J. Stein, Xuesu Xiao　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.05313)

------

arXiv:2608.05313v1 Announce Type: cross

Abstract: Service robots operate in household environments shared with humans, pets, and everyday objects, where they are highly susceptible to failures such as software crashes, hardware degradation, or unpredictable interactions. While roboticists strive to minimize failures, some remain inevitable, making it critical to mitigate their potential consequences for safe and reliable deployment. This paper introduces a novel safety formulation that evaluates both the probability of impactful interactions between robots and surrounding entities during failures, and the severity of their outcomes. By quantifying the impact of failures on different entities, our approach enables robots to make informed planning decisions that balance safety with task efficiency. To support systematic evaluation, we also present FailBench, a MuJoCo-based simulation framework for studying robot-environment interactions under diverse failure modes, including sensing issues and actuator malfunctions. Together, our safety formulation and FailBench provide a foundation for developing safer and more robust motion plans and learned policies in real-world household environments.
