# Internalizing Academic Writing Workflows for Introduction Generation via Struct-Aware Policy Learning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Meicong Zhang, Tiancheng Su, Jiahao Cheng, Guoxiu He, Xinqi Tao, Dejia Song　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03138)

------

arXiv:2608.03138v1 Announce Type: cross

Abstract: Generating a rigorous paper introduction with large language models (LLMs) remains challenging, since it requires coordinating background, gap identification, method and contribution within a coherent narrative. Existing solutions externalize this process as multi-stage prompts or agent workflows which are expensive and vulnerable to cross-stage drift. We propose StructPO, a struct-aware policy learning framework that internalizes the entire multi-stage writing workflow into a single-pass policy controlled by explicit stage tokens. StructPO introduces struct-aware credit assignment to decouple local stage quality from global coherence and refinement-guided optimization to internalize revision behavior into the first-pass policy. Experiments show that StructPO improves semantic alignment, structural rationality and inference efficiency over workflow-based baselines, generalizes to out-of-domain settings, and remains competitive with GPT-5.1 in human evaluation when scaled to Qwen3-32B. These results show that internalizing academic writing workflows through fine-grained policy optimization offers a viable alternative to costly external orchestration.
