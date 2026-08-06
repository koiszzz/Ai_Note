# Don't Walk the Line: Boundary Guidance for Filtered Generation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Sarah Ball, Andreas Haupt　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2510.11834)

------

arXiv:2510.11834v3 Announce Type: replace

Abstract: Generative models are increasingly paired with safety classifiers that filter harmful or undesirable outputs. A common strategy is to fine-tune the generator to reduce the probability of being filtered, but this can be suboptimal: it often pushes the model toward producing samples near the classifier's decision boundary, increasing both false positives and false negatives. We propose Boundary Guidance, a reinforcement learning fine-tuning method that explicitly steers generation away from the classifier's margin. On a benchmark of jailbreak, ambiguous, and longcontext prompts, Boundary Guidance improves both the safety and the utility of outputs, as judged by LLM-as-a-Judge evaluations. Comprehensive ablations across model scales and reward designs demonstrate the robustness of our approach.
