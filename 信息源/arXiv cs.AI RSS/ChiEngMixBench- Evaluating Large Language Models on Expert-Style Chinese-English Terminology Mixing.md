# ChiEngMixBench: Evaluating Large Language Models on Expert-Style Chinese-English Terminology Mixing

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Qingyan Yang, Tongxi Wang, Yunsheng Luo　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2601.16217)

------

arXiv:2601.16217v2 Announce Type: replace-cross

Abstract: Large language models increasingly mediate multilingual professional communication, where useful generation requires adapting to community conventions about which expressions are retained, translated, or mixed. Existing benchmarks rarely isolate such community-conditioned choices. We introduce ChiEngMixBench, a controlled benchmark for Chinese AI/CS discourse, where Chinese frames routinely incorporate established English technical terms. Built from public technical discussions, it contains 1,706 source-derived candidate pairs covering 1,344 non-empty normalized terms, including a 1,167-pair strict subset that fixes the Chinese prefix and syntactic position while varying only the terminology form. The benchmark combines paired likelihood comparisons with a transparent reference-profile diagnostic for open-ended responses. Across nine open-weight models, Chinese equivalents receive higher likelihood on most pairs, revealing a gap between source-attested usage and model preference. Specialized terms show a small directional lift that is not robust after frequency and length controls and multiple-comparison correction. Human evaluation and baseline analyses show that reference-profile conformity is informative under the intended mixed-style rubric but does not reliably predict holistic response preference. ChiEngMixBench provides a reusable testbed for community-specific multilingual conventions with explicit diagnostic boundaries.
