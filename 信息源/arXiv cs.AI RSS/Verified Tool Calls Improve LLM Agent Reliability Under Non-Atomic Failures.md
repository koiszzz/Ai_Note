# Verified Tool Calls Improve LLM Agent Reliability Under Non-Atomic Failures

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Isham Kalappurackal Mansoor, Abhishek Phadke, Pratip Rana　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2608.02645)

------

arXiv:2608.02645v1 Announce Type: cross

Abstract: Large Language Model (LLM) agents rely on external tools to perform multistage tasks. Existing agent frameworks typically assume that tool calls are atomic and return binary success or failure signals. However, real-world systems exhibit non-atomic behaviors such as timeouts after dispatch, delayed visibility, and partial state updates. These mismatches lead to reliability issues including duplicate actions, task success, and unnecessary tool executions. A lightweight, verification-aware tool wrapper is introduced that augments tool calls with postcondition verification, verify-before-retry logic, and idempotency keys. The approach is evaluated in a controlled simulated environment with injected non-atomic failures across multiple task templates. The results demonstrate that the proposed method significantly reduces duplicate actions, while maintaining comparable task success rates. Overall, the findings suggest that strengthening tool interaction semantics is a promising direction for improving LLM agent reliability without requiring modifications to the underlying language model.
