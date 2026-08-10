# Causal Episodic Memory for Feedback-Driven Agent Repair

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Khang Nhat Hoang Vo, Tam Minh Chu, Anh Trac Duc Dinh, Thuyen Vinh Ha Bui, Tho Quan　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05906)

------

arXiv:2608.05906v1 Announce Type: new

Abstract: LLM agents that repair failures often discard successful corrections, forcing later episodes to rediscover similar solutions. We study whether finalized repair outcomes can improve subsequent Text-to-SQL episodes without parameter updates. We introduce MERIT, a training-free agent that maintains an online dual-polarity memory of oracle-verified corrections and observed unsuccessful directions. Under oracle-assisted benchmark feedback, only memories from earlier finalized episodes are eligible for retrieval. A deterministic classifier assigns a coarse failure type, which conditions a hybrid lexical-dense retriever before the frozen model generates each revision. Using Qwen2.5-7B-Instruct with identical initial predictions and repair budgets, MERIT improves execution accuracy over stateless iterative repair from \(66.34\%\) to \(69.79\%\) on Spider and from \(47.35\%\) to \(48.44\%\) on BIRD. Paired analyses provide clear evidence for the Spider gain but weaker evidence on BIRD. MERIT is not reliably separated from untyped dynamic retrieval on either benchmark, while Reflexion-style memory reaches \(51.24\%\) on BIRD at substantially higher inference cost. Ablations show that negative memory contributes modestly, the value of type conditioning and lexical--dense ranking is dataset dependent, and schema-local experience provides the most consistent benefit. These results clarify when causal cross-query memory improves repair and when broader memory representations remain preferable.
