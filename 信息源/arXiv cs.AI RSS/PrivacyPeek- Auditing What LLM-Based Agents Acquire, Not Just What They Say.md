# PrivacyPeek: Auditing What LLM-Based Agents Acquire, Not Just What They Say

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Mingxuan Zhang, Jiahui Han, Dadi Guo, Songze Li, Guanchu Wang, Na Zou, Dongrui Liu, Xia Hu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2606.00152)

------

arXiv:2606.00152v2 Announce Type: replace-cross

Abstract: LLM-based agents are rapidly advancing, autonomously invoking external tools to complete multi-step tasks for users. However, agents often acquire more sensitive information than the task requires. Existing privacy benchmarks audit what the agent's response or outgoing actions disclose, but overlook the acquisition stage where data first enters the agent's context. The over-acquired information is then one careless action or one attack away from an outright leak. To assess its prevalence, we introduce \emph{PrivacyPeek}, a benchmark for evaluating acquisition-stage privacy leakage of LLM-based agents, with $1{,}182$ cases across $7$ acquisition behaviours and $16$ application domains. Specifically, \emph{Acquisition Inspection} examines the agent's tool-call trajectory, both the tools it invokes and the data it receives, to detect when it acquires sensitive information beyond the task scope. \emph{Probe Elicitation} then issues a follow-up probe and measures how readily an attacker could elicit sensitive information the agent acquired but did not disclose. Our experiments on $10$ LLM-based agents across $4$ model families show that the unnecessary acquisition of sensitive information is widespread. In addition, we observe a correlation between the task-completion capability and acquisition-stage leakage. Prompt-level defences reduce only a small fraction of acquisition-stage leakage, leaving the majority unmitigated. These results make auditing acquisition-stage privacy both urgent and necessary. Our dataset and code are available at https://github.com/Xuan269/PrivacyPeek-Resource.
