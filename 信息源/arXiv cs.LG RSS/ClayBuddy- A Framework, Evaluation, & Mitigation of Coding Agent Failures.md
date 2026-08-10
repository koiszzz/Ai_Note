# ClayBuddy: A Framework, Evaluation, & Mitigation of Coding Agent Failures

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kenneth Ge, Andre Assis　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2606.19380)

------

arXiv:2606.19380v4 Announce Type: replace-cross

Abstract: Software engineering and deployment are increasingly delegated to AI coding agents. The scale of their adoption is surfacing rare, but highly destructive, failure modes. In this paper, we study these failure modes as stemming from three distinct mechanisms: underspecification, where default model behavior is unsafe; capability errors, where the safe action is available but the model does not adhere to it due to bias or capability limitations; and agent harness errors, where the model fails to execute the safe action through the harness. We assess these across 8 different evaluations, each inspired by real-life deployment failures, totaling 20 coding environments and 59 synthetic transcript templates. These evaluations act as controlled stress tests for isolating our failure mechanisms. Based on this evaluation, we propose ClayBuddy, a harness modification that molds to user preferences and can be modified by the model in-session, to mitigate these errors. By adding tools for the agent to edit its own context, an extended system prompt, a customizable command classifier, and deterministic guardrails, we show that ClayBuddy is safer across a statistically significant number of samples. Thus, we suggest concrete mitigations for current coding agents and a design philosophy for future agent harness features.
