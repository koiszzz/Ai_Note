# ECHO: A Locally-Deployable Agentic Health Assistant with Temporal Memory, Safety Guardrails, and Speech Assessment

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Abdulkadir K\"ul\c{c}e, Alihan Esen, Ca\u{g}la Fikir, Berke Kurt, Kuzey Arar, G\"okhan Ercan, Faik Boray Tek　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.06110)

------

arXiv:2608.06110v1 Announce Type: new

Abstract: This paper presents ECHO (Enhanced Care \& Health Observer), a locally-deployable conversational health assistant for long-term chronic care management. ECHO integrates three complementary software modules developed under shared supervision as a unified system. The core module is an agentic chatbot built on a ReAct loop orchestrated via LangGraph, equipped with 17 clinical tools and a temporal knowledge graph for persistent cross-session memory; it achieves a 94.9\% tool-execution pass rate across a 59-scenario benchmark with GPT-5 Mini. A two-stage hybrid safety layer intercepts all incoming queries: a rule-based layer handles explicit crisis signals and jailbreak attempts in under 1ms, while a signed graph neural network (GNN) with APPNP-style propagation classifies boundary cases by clinical intent, achieving 88.8\% accuracy and 90.6\% unsafe recall on a 2,537-query annotated Turkish health dataset while outperforming zero-shot LLM baselines including Llama 3.3 70B. A multimodal speech assessment module combining Whisper acoustic encoding and BERT text encoding with cross-attention fusion estimates emotion, depression, and pain, reaching a mean macro F1 of 0.652. The full system is implemented as a web application that can run entirely on consumer hardware, with no patient data transmitted to external services, supporting compliance with GDPR and KVKK.
