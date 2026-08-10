# OrchestraBench: Evaluating Multi-Agent Orchestration Failure Modes, Recovery, and Decomposition Quality

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yidian Chen, Yingzi Gu, Natan Vidra, Spurthi Setty, Sharon Zheng　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05263)

------

arXiv:2608.05263v1 Announce Type: new

Abstract: Multi-agent orchestration frameworks are moving from demos to production, yet benchmarks typically report task accuracy without diagnosing why a pipeline failed, where a cascade began, or which routing decision caused the breakdown. OrchestraBench evaluates failure, recovery, and decomposition through a controlled, seed-reproducible failure-injection harness over templated enterprise workflows. It introduces cascade radius and per-failure-mode recovery as primary metrics and compares routing policies with bootstrap confidence intervals and paired tests. On a 26-case gold-labelled diagnostic, a keyword/flag router scored 0% on adversarial cases with misleading or missing surface flags, whereas an intent-reasoning model router scored 100%, matching the oracle. Controlled mechanism probes with a real Claude agent over a verifiable arithmetic dependency chain revealed three failure-handling tiers across five MAST modes: tool faults recovered fully (1.0), ambiguous delegation recovered partially (0.30), and three latent or semantic modes never recovered (0.0). This ordering persisted when the computation was reframed as a loan-approval workflow and across Sonnet, Opus, and Haiku, although absolute rates shifted with context. Blind retry reproduced latent faults and increased time to detection, indicating that detection and attribution are necessary for containment. Cascade radius increased with pipeline depth (mean 0.9 to 4.7 across depths 3-7). A trusted-state repair ablation showed that apparent containment gains primarily came from the trusted-state signal rather than autonomous detection. These results are controlled-chain mechanism probes, not domain-workload claims.
