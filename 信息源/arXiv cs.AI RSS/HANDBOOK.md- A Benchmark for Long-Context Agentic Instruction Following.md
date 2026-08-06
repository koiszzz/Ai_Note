# HANDBOOK.md: A Benchmark for Long-Context Agentic Instruction Following

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Liudas Panavas, Sebastian Minus, Bradley Monton, Derek Ray, Suhaas Garre, Sushant Mehta, Edwin Chen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2607.25398)

------

arXiv:2607.25398v3 Announce Type: replace

Abstract: Language-model agents are increasingly deployed under standing instructions: a system prompt, a policy file, or a skills document is placed in context, and the agent is trusted to let that document govern every action that follows. Existing benchmarks rarely test this deployment pattern directly; they measure whether an agent can complete a task, not whether a long, binding policy document constrains its behavior over an extended tool-use horizon. We present HANDBOOK_md, a benchmark of 65 agentic tasks modeled on how employees follow company handbooks. Each task places an agent in a self-contained company environment (a file workspace with mock email, chat, calendar, issue-tracking, and commerce services exposed over the Model Context Protocol) and instructs it to carry out routine professional work governed by an expert-written standard operating procedure of 20-124 pages. Tasks span five domains (finance, medical billing, insurance, logistics, and HR) and 10 fictional companies. To resist memorization, every task modifies one of 10 base handbooks, altering the specific rules and thresholds on which grading depends, so no two tasks share the same set of policies. Grading is fully deterministic: each task carries a rubric of programmatic criteria (824 in total) that check both that required actions occurred and that prohibited actions did not. Under strict grading, where a trial passes only if every criterion is satisfied, the strongest evaluated model passes 36.2% of trials, and most frontier models remain below 25%. Failures follow consistent patterns: agents let a plausible but unauthorized in-environment request override the standing policy, perform a required check and then act against its result, lose rule details over long horizons, and report compliance they did not achieve. We release the tasks, environments, and evaluation harness.
