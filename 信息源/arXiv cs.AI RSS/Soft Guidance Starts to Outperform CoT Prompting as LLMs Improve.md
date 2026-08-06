# Soft Guidance Starts to Outperform CoT Prompting as LLMs Improve

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Denys Pushkin, Albert Q. Jiang, Aryo Lotfi, Colin Sandon, Emmanuel Abb\'e　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03550)

------

arXiv:2608.03550v1 Announce Type: new

Abstract: Chain-of-Thought (CoT) prompting remains the standard baseline for evaluating models' reasoning abilities. Originally, this technique was introduced to elicit step-by-step reasoning from large language models (LLMs), which would otherwise tend to directly output the final answer. However, many modern LLMs produce CoT-style responses \textit{natively} when presented with reasoning tasks, which made us revisit the effectiveness of standard CoT prompting.

We evaluate several modern mid-sized language models on a math problem-solving task and find that models specialized for reasoning achieve better performance in a simple zero-shot setting than when using few-shot CoT examples - significantly surpassing officially reported results at no additional cost (e.g., from $\sim$77\% to $\sim$84\% for Mathstral on GSM8K). For the tested general-purpose model, a zero-shot CoT prompt is also sufficient to outperform a few-shot CoT baseline. We attribute this to a `guidance-distraction' tradeoff: standard CoT prompting also demands style adaptation, formatting compliance, and potentially undesired contextualization, which can distract models from the core reasoning task.

Our findings suggest that using standard CoT prompting increasingly acts as a source of distraction as models grow stronger.
