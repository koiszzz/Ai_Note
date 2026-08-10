# Correct Answers from Sound Reasoning: Verifiable Process Supervision for Language Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Kyuyoung Kim, Kevin Wang, Yunfei Xie, Peiyang Xu, Peiyao Sheng, Chen Wei, Zhangyang Wang, Jinwoo Shin, Pramod Viswanath, Sewoong Oh　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2605.12519)

------

arXiv:2605.12519v2 Announce Type: replace-cross

Abstract: Training language models to produce both correct answers and sound reasoning remains an open challenge. Reinforcement learning with verifiable rewards typically optimizes only final outcomes, which can improve task accuracy at the expense of reasoning quality, producing inaccurate, incomplete, or inconsistent traces. We propose verifiable process supervision (VPS), a post-training framework that jointly optimizes prediction accuracy and reasoning quality by supervising structured intermediate claims. We first apply supervised fine-tuning to induce a structured reasoning format, enabling deterministic extraction and verification of intermediate claims for process-level rewards. To address the heterogeneous difficulty of reasoning subtasks, we introduce adaptive weighting that prioritizes components with the largest remaining errors, creating an implicit curriculum. We evaluate VPS on chess as a controlled testbed where reasoning steps can be deterministically verified against engine signals. While outcome-only RL improves move accuracy, it sharply degrades reasoning quality, increasing win-rate error by up to 112% and reducing internal consistency by up to 69%. In contrast, VPS preserves accuracy while significantly improving reasoning quality, reducing win-rate error by up to 30% and restoring consistency to near saturation. A reasoning-space analysis further shows that, without a structured prior, outcome-only RL converges to budget-dependent shortcuts rather than sound multi-step reasoning. Beyond chess, we observe the same phenomenon on math reasoning, where outcome-only RL improves accuracy while degrading step-level arithmetic and consistency, whereas VPS maintains both. These results show that VPS enables language models to reason both accurately and reliably in verifiable domains.
