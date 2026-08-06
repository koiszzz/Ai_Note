# SiMDex: Mining Similar Egocentric Videos for Cross-Embodiment Dexterous Manipulation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Nie Lin, Takehiko Ohkawa, Sijin Chen, Ruoshi Wen, Zhuohang Li, Liqun Huang, Zhengming Zhu, Yiming Bao, Yunfei Li, Minjie Cai, Xiao Ma, Wei Xu, Yoichi Sato　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.04196)

------

arXiv:2608.04196v1 Announce Type: cross

Abstract: Recent years have witnessed an explosive trend of scaling ego-centric human videos for robot manipulation, yet it remains unclear which data actually benefits dexterous manipulation. We present SiMDex, a similarity-based data mining framework that casts human data selection for VLA post-training in dexterous manipulation as a recommendation problem. For each robot demonstration, SiMDex employs a three-layer recall-ranking-re-ranking pipeline to extract task-relevant subsets from a pool of ~32M egocentric human samples, operating in a morphology-agnostic action space that requires no changes to VLA architecture or training. Against a strong baseline trained with an equal amount of randomly sampled human data, SiMDex uses only ~1.49M mined samples (<5% of the pool) yet improves the overall success rate from 47.7% to 61.1%, showing that selective curation outperforms indiscriminate data mixing.
