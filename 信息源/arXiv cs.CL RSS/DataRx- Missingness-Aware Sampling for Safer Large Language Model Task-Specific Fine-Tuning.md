# DataRx: Missingness-Aware Sampling for Safer Large Language Model Task-Specific Fine-Tuning

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Junbo Zhang, Qianli Zhou, Xinyang Deng, Wen Jiang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04322)

------

arXiv:2608.04322v1 Announce Type: new

Abstract: Task-specific fine-tuning can improve the performance of large language models (LLMs) on downstream tasks. However, our study reveals that task-specific fine-tuning can also weaken the safety guardrails of aligned LLMs. A widely adopted strategy for preserving safety during fine-tuning is to incorporate safety data. Although previous studies have shown that randomly mixing safety data can alleviate safety degradation, the underlying principle determining why some safety examples are more effective than others still remains unclear. In this paper, we propose DataRx, a missingness-aware sampling method for selecting safety-critical examples. DataRx is based on the hypothesis that a safety sample is more effective when the selected examples provide safety signals that fill the missing parts of LLMs' safety capabilities. DataRx's key insight is leveraging high-dimensional hidden representations rather than discrete tokens to quantify the safety signal gap between the target model's native response and the safety reference response. The results show that, with only 1% additional safety samples from BeaverTails, DataRx reduces the average attack success rate of Llama3-8B-Instruct across seven downstream tasks from 59.23% under random sampling to 13.70%. In addition, DataRx can be combined with the existing safety data synthesis method to further enhance safety defenses during fine-tuning. We hope that DataRx will inspire more data-centric defense research.
