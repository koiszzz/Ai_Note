# Example-Guided Prompting for Document-Level Text Simplification

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Marina Litvak, Ariel Perstin, Ilan Shtilman, Michael F\"arber　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05447)

------

arXiv:2608.05447v1 Announce Type: new

Abstract: Document-level text simplification requires large language models (LLMs) to rewrite complex documents while preserving meaning, readability, and discourse coherence. Although prompt-based LLMs have shown promising performance, they often produce inconsistent simplifications because textual instructions alone provide limited guidance for complex document-level transformations. We investigate whether retrieved document-simplification examples can improve document-level generation by augmenting prompts with examples selected from a parallel simplification corpus. This example-guided prompting approach enables LLMs to exploit relevant simplification patterns without task-specific fine-tuning. Experiments on the OneStopEnglish corpus using multiple state-of-the-art LLMs show that incorporating retrieved examples consistently improves simplification quality over prompt-only generation and achieves competitive or superior performance compared with representative supervised (T5) and planning-based (PlanSimp) document simplification systems. Furthermore, we find that the benefits of example-guided prompting vary across LLMs, suggesting that effective use of retrieved examples depends on a model's ability to integrate contextual information during generation.
