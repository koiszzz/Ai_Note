# To Call or Not to Call: A Framework to Assess and Optimize LLM Tool Calling

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Qinyuan Wu, Soumi Das, Mahsa Amani, Arijit Nag, Seungeon Lee, Krishna P. Gummadi, Abhilasha Ravichander, Muhammad Bilal Zafar　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2605.00737)

------

arXiv:2605.00737v3 Announce Type: replace

Abstract: Agentic AI architectures augment LLMs with external tools, unlocking strong capabilities but potentially incurring substantial costs. Moreover, tool use is not always beneficial: redundant or low-utility calls can even harm task performance. Effective tool use, therefore, hinges on a core LLM decision: whether to call or not call a tool when performing a task. We introduce a principled framework inspired by decision-making theory to understand tool-use decisions along three key factors: necessity, utility, and affordability. Our analysis combines two complementary lenses: a normative perspective that infers true need and utility for optimal tool calls, and a descriptive perspective that infers the model's self-perceived need and utility from their observed behaviors. We evaluate six open models and a proprietary OpenAI model across native and customized harnesses, two tools, and six tasks. Models' perceived need and utility remain misaligned with their true values, particularly under budget constraints. This misalignment produces both costly overuse and performance-degrading calls. To improve the tool decisions, we train lightweight latent estimators of need (LNEs) from model hidden states. LNEs generally predict true need more accurately than model self-reports and improve budgeted tool allocation across model scales and tool types. Code and dataset available at https://github.com/QinyuanWu0710/ToCall_or_NotToCall.
