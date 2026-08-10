# BioAgent Bench: An AI Agent Evaluation Suite for Bioinformatics

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Dionizije Fa, Marko Culjak, Bruno Pandza, Mateo Cupic　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2601.21800)

------

arXiv:2601.21800v4 Announce Type: replace

Abstract: We introduce BioAgent Bench, an evaluation suite designed for measuring the performance and robustness of AI agents in common bioinformatics tasks. The suite consists of manually curated end-to-end tasks (e.g., RNA-seq, variant calling, metagenomics) accompanied by task-specific prompts and concrete output artifacts to support automated assessment. We evaluate frontier closed- and open-weight models across multiple agent harnesses, and use an LLM-based grader to score pipeline progress and outcome validity. We find that agents based on frontier LLMs can complete multi-step bioinformatics pipelines without elaborate custom scaffolding, often producing the requested final artifacts reliably. However, robustness tests reveal failure modes under controlled perturbations (corrupted inputs, decoy files, and prompt bloat), indicating that correct high-level pipeline construction does not guarantee reliable step-level reasoning. By releasing the code and the complementary resources constituting our suite, our primary goal is to accelerate the development of cost-effective yet reliable local agents, capable of handling complex bioinformatics workflows often involving sensitive patient data or unpublished intellectual property.
