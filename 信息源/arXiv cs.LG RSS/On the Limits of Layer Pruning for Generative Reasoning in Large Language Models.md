# On the Limits of Layer Pruning for Generative Reasoning in Large Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Safal Shrestha, Anubhav Shrestha, Minwu Kim, Aadim Nepal, Keith Ross　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2602.01997)

------

arXiv:2602.01997v3 Announce Type: replace

Abstract: Recent work has shown that layer pruning can effectively compress large language models (LLMs) while retaining strong performance on classification benchmarks, often with little or no finetuning. In contrast, generative reasoning tasks, such as GSM8K and HumanEval\textsuperscript{+}, exhibit substantially weaker recovery. We show that beyond surface-level text degradation, pruning leads to a loss of key algorithmic capabilities, including arithmetic computation and balanced parenthesis generation. Under realistic post-training constraints, using a single 80GB GPU and without access to pretraining-scale data or compute, we evaluate a simple recovery strategy based on supervised finetuning with self-generated responses. This approach recovers up to 90\% of baseline performance on classification tasks, but recovery for generative reasoning remains limited. We further find that this gap persists even under a favorable task-aligned recovery setting, where pruned models are fully finetuned on self-generated GSM8K responses, suggesting that the degradation is not merely due to generic instruction data or parameter-efficient tuning. As complementary evidence, we analyze a depth-pruned model trained with nearly 100B post-pruning tokens and find that deficits persist even on simple arithmetic tasks that do not require multi-step generation. Overall, we characterize practical recovery limits of layer pruning for generative reasoning and provide guidance on when depth reduction is effective under constrained post-training regimes.
