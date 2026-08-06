# LeanMem: Simple and Efficient Long-Term Memory for LLM Agents

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yuxin Liao, Le Wu, Min Hou, Hao Liu, Han Wu, Zishu Wang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03463)

------

arXiv:2608.03463v1 Announce Type: new

Abstract: Long-term memory is essential for LLM-based agents to sustain interactions and reliably leverage distant history. However, existing memory systems typically process heterogeneous dialogue content through a uniform summarization and retrieval pipeline, leading to either excessive token consumption or irreversible loss of fine-grained evidence. We argue that historical dialogue content should be handled differently according to its compressibility, temporal dynamics, and fidelity requirements. Based on this insight, we propose LeanMem, a lightweight long-term memory framework. LeanMem first filters out low-value content, then stores informative segments as compact profile memory, temporally structured event memory, or source-grounded record memory, depending on the nature of the information. During maintenance, only dynamically evolving event memories are selectively updated, avoiding redundant consolidation of stable profiles and immutable records. During inference, LeanMem dynamically selects memory types and allocates retrieval budgets according to query-specific evidence demands, assembling relevant evidence on demand. On LoCoMo and LongMemEval-S with GPT-4.1-mini and Qwen3-8B, LeanMem improves accuracy over the strongest memory-based baseline in every setting, by up to 15.1 points, at the lowest or near-lowest construction cost, inference tokens, and latency. The code and datasets are included in the supplementary materials.
