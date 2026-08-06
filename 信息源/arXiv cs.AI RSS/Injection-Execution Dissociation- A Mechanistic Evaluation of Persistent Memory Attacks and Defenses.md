# Injection-Execution Dissociation: A Mechanistic Evaluation of Persistent Memory Attacks and Defenses in Stateful LLM Agents

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jun Wen Leong　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2605.08442)

------

arXiv:2605.08442v5 Announce Type: replace-cross

Abstract: We discover that prompt-injection success and tool-execution success are separable safety properties: defenses that block injection do not necessarily block execution, and vice versa. We call this the injection-execution dissociation. In LLM agents with persistent memory, malicious instructions are stored at rates exceeding 97.5%, yet downstream execution ranges from 0% to 95% with no correlation to storage rate. This reframes the threat model: preventing storage alone is insufficient, and blocking execution requires structurally enforcing authority boundaries between memory ingestion and action execution.

We substantiate this through a 5,040-run factorial experiment across nine open-source models (N=40 per condition), evaluating six defenses at four architectural layers against delayed-trigger attacks that persist across session boundaries via RAG retrieval. Defense effectiveness is governed by where a defense sits relative to the attack's authority boundary, not by classifier quality. Only Memory Sandbox -- a tool-layer defense that structurally isolates recalled memory from executable context -- reduces attack success to 0% for eight of nine models. A reasoning-mode ablation reveals a double dissociation: no single schema-layer intervention is safe across both reasoning and non-reasoning model classes.

A loaded-corpus frontier evaluation (21 models, 3 providers; N=40 base, headline models topped up to N=172) reveals vendor-correlated patterns: Anthropic blocks predominantly at injection, OpenAI blocks at execution with variable generational hardening, and a pre-release Gemini endpoint exfiltrates in the majority of runs. Stored-but-dormant payloads constitute a compositional supply-chain risk in shared-memory deployments.
