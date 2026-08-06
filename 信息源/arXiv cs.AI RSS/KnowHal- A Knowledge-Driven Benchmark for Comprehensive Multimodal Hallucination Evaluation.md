# KnowHal: A Knowledge-Driven Benchmark for Comprehensive Multimodal Hallucination Evaluation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ruihan Li, Jiyang Tan, Kailin Jiang, Huining Li, Hengyang Lu, Yu Huang, Qian Li, Yuntao Du　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03782)

------

arXiv:2608.03782v1 Announce Type: new

Abstract: Hallucination remains a critical challenge for developing trustworthy Multimodal Large Language Models (MLLMs). While existing benchmarks mainly focus on entity, attribute, and relation hallucinations, knowledge-related failures are often investigated separately, lacking a unified evaluation framework across different hallucination dimensions. To overcome this, we propose \textbf{KnowHal}, a benchmark that explicitly incorporates knowledge hallucination into multimodal hallucination evaluation spanning four dimensions: entity, attribute, relation, and knowledge. KnowHal constructs paired positive and negative questions over shared images and entities, enabling controlled comparisons among perceptual errors, knowledge-related errors, and false-premise acceptance. The benchmark contains 1,800 samples across 10 domains and 50 categories, constructed through a semi-automated pipeline combining LLM assistance, CLIP-based filtering, and human verification. We evaluate 14 representative MLLMs on KnowHal and conduct extensive analyses. Results show that the knowledge dimension consistently presents the greatest challenge for nearly all evaluated models, while most models exhibit substantial performance degradation on negative questions, revealing limited robustness to false premises. By unifying four hallucination dimensions with paired question design, KnowHal addresses an important gap in existing evaluation frameworks and enables a more comprehensive assessment of hallucinations in MLLMs.
