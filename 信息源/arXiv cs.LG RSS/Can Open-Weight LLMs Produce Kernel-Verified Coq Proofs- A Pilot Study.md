# Can Open-Weight LLMs Produce Kernel-Verified Coq Proofs? A Pilot Study

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ahmed Ryan, Md Erfan, Akond Ashfaque Ur Rahman, Md Rayhanur Rahman　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LO　|　原文：[打开链接](https://arxiv.org/abs/2608.05420)

------

arXiv:2608.05420v1 Announce Type: cross

Abstract: Large language models (LLMs) can generate text that resembles a mathematical proof, but resemblance does not establish correctness. A formal proof checker verifies whether each proof step follows established logical rules. Coq bases its rules on the Calculus of Inductive Constructions, a logical framework that defines which proof steps the system may accept.

This pilot study evaluated six open-weight LLMs on the same 100 theorems from CoqStoq, a benchmark derived from real Coq projects. Each LLM received one attempt per theorem with the temperature set to 0, and Coq checked every proposed proof in the theorem's original project environment. We counted a proof as successful only if the Coq kernel accepted it.

Gemma 4 verified 12 of 100 theorems, Llama 3.3 verified 8, and DeepSeek Coder V2 Lite verified 1. Qwen 3.5, Mistral Small 3.1, and GPT-OSS verified none. The 21 successful model-theorem results covered 15 distinct theorems, 11 of which were not solved by a baseline of standard Coq tactics. All verified theorems had short or medium human-written reference proofs; no model verified a theorem with a long reference proof. Because the proof-length analysis was exploratory, this pattern does not establish that proof length caused the difference.

For the three models with at least one success, the total generation cost per verified proof ranged from 741 to 36,193 output tokens, 14.9 to 178.0 seconds, and 0.0167 to 0.2000 aggregate GPU hours. We could not calculate these ratios for models with no verified proofs. Across 600 attempts, the models produced 21 kernel-verified proofs, giving an overall success rate of 3.5%. The study reports descriptive differences among the models but does not statistically test whether one model outperforms another. Therefore, the results do not establish a universal ranking of the six models.
