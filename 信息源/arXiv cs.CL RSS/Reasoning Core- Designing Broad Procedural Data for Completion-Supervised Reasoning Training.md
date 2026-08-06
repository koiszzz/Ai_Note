# Reasoning Core: Designing Broad Procedural Data for Completion-Supervised Reasoning Training

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Damien Sileo, Valentin Lacombe, Dimitri Kachler　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05148)

------

arXiv:2608.05148v1 Announce Type: new

Abstract: Procedural generators produce useful verifiable reasoning problems at scale, but have received less attention as data for completion-supervised fine-tuning. We introduce Reasoning Core, a collection of 50 generators spanning mathematics, logic, planning, state tracking, formal languages, structured data, games, causality, and code, with semantic scorers, difficulty controls, and task evaluators. Under a matched completion-supervised protocol, we compare Reasoning Core with Procedural Warmup, Reasoning Gym, and SynLogic across four base-model settings and multiple training durations. In the primary 3B comparison, Reasoning Core achieves the highest mean scores on DROP, LogiQA, and ARC-Challenge, exceeding both the baseline without procedural data and all three alternative procedural collections. Task-level analyses show that semantic validity alone does not ensure training utility, highlighting compact targets and calibrated difficulty as important design factors. We ran audits combining model-assisted review, human adjudication, and regression testing. Applied throughout Reasoning Core development and to the other collections, they reveal subtle mismatches among generation, rendering, targets, and scoring, a reminder that procedural generation alone does not guarantee correctness. The library, generated datasets, and audit material are publicly available.
