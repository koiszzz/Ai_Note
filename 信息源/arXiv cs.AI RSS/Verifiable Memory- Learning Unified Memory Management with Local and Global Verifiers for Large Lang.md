# Verifiable Memory: Learning Unified Memory Management with Local and Global Verifiers for Large Language Model Agents

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xiaolong Sun, Qichao Wang, Hangyu Li, Liang Chen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03137)

------

arXiv:2608.03137v1 Announce Type: new

Abstract: Large language model (LLM) agents must retain reusable information, control a bounded active context, and recover earlier evidence during long-horizon interaction. Existing methods commonly optimize long-term memory (LTM) and short-term memory (STM) separately, while unified policies are often trained primarily with trajectory-level feedback, which provides weak credit for individual memory decisions. We present Verifiable Memory (VerMem), a framework that represents LTM, active context, and episodic history as distinct states and controls them with one memory operation policy. Seven atomic operations let the policy add, revise, or soft-delete LTM entries; retrieve LTM into the active context; filter or summarize the active context; and restore selected episodic fragments. VerMem is initialized by supervised fine-tuning and trained with a three-stage reinforcement-learning curriculum. The local verifier scores executable memory transitions, and a global verifier assesses evidence coherence and terminal-memory consistency after task completion. These scores are combined with programmatically computed task, evidence-recall, efficiency, and constraint signals through hierarchical credit assignment. The verifiers are used only during training. Across five benchmarks and two LLM backbones, VerMem achieves the best result on the vast majority of reported metrics and consistently outperforms strong memory baselines. Under controlled online-token budgets on three interactive benchmarks, it also achieves the strongest efficiency--performance frontier among the compared methods. Code is available at https://github.com/Sun-SYSU-24/VerMem.
