# ConWriter: Transition-Constrained Stateful Long-Form Story Generation with Lightweight Neuro-Symbolic Consistency Control

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Jindong Li, Yang Yang, Zihao Liu, Yutao Yue, Menglin Yang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05169)

------

arXiv:2608.05169v1 Announce Type: new

Abstract: Long-form story generation requires models to preserve narrative consistency across extended contexts, yet existing prompting-based methods often accumulate temporal, factual, character, commonsense, and stylistic errors as the story grows. We propose ConWriter, a training-free framework for consistency-aware long story generation. ConWriter writes stories incrementally at the scene level, guided by static story requirements, dynamic narrative memory, symbolic state reasoning, and uncertainty-aware risk signals. Rather than treating long-story generation as a single free-form decoding process, ConWriter maintains evolving story states, checks whether new scenes satisfy required narrative transitions, and uses uncertainty-aware risk signals to prioritize validation and localized repair. This enables consistency control during generation, before local errors propagate into later scenes. We evaluate ConWriter on ConStory-Bench, covering four long-story tasks: continuation, generation, expansion, and completion. Due to the high cost of long-form generation and evaluation, we use the first five cases from each task and test 3k, 6k, and 12k target lengths across Qwen3.5-Plus, DeepSeek-V4-Flash, and GPT-5 series. Experiments follow the official ConStory-Bench evaluation protocol.
