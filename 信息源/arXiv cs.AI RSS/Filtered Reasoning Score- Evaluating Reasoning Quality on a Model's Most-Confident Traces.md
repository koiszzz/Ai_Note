# Filtered Reasoning Score: Evaluating Reasoning Quality on a Model's Most-Confident Traces

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Manas Pathak, Xingyao Chen, Shuozhe Li, Amy Zhang, Liu Leqi　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2604.11996)

------

arXiv:2604.11996v5 Announce Type: replace-cross

Abstract: Should we trust Large Language Models (LLMs) with high accuracy? LLMs achieve high accuracy on reasoning benchmarks, but correctness alone does not reveal the quality of the reasoning used to produce it. This highlights a fundamental limitation of outcome-based evaluation: models may arrive at correct answers through flawed reasoning, and models with substantially different reasoning capabilities can nevertheless exhibit similar benchmark accuracy, for example due to memorization or over-optimization. In this paper, we ask: given existing benchmarks, can we move beyond outcome-based evaluation to assess the quality of reasoning itself? We seek metrics that (1) differentiate models with similar accuracy and (2) are robust to variations in input prompts and generation configurations. To this end, we propose a reasoning score that evaluates reasoning traces along dimensions such as faithfulness, coherence, utility, and factuality. A remaining question is how to aggregate this score across multiple sampled traces. Naively averaging them is undesirable, particularly in long-horizon settings, where the number of possible trajectories grows rapidly, and low-confidence correct traces are more likely to be coincidental. To address this, we introduce the Filtered Reasoning Score (FRS), which computes reasoning quality using only the top-K% most confident traces. Evaluating with FRS, models that are indistinguishable under standard accuracy exhibit significant differences in reasoning quality. Moreover, models with higher FRS on one benchmark tend to perform better on other reasoning benchmarks, in both accuracy and reasoning quality. Together, these findings suggest that FRS complements accuracy by capturing a model's transferable reasoning capabilities. We open source our evaluation codebase: https://github.com/Manas2006/benchmark_reproducibility.
