# PURPOSE: Poisoning Conflict Resolution in RAG via Proxy-Fact-Grounded Updates

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zijian Wang, Yubo Zhu, Muzhi Dong, Yanjun Lou, Yisheng Li, ZiLiang Zhang, Wei Tong, Yuan Zhang, Jingyu Hua, Sheng Zhong　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04756)

------

arXiv:2608.04756v1 Announce Type: cross

Abstract: In Retrieval-Augmented Generation (RAG), post-retrieval conflict resolution arbitrates among noisy or contradictory retrieved passages. However, the robustness of this safeguard against knowledge poisoning has not been adequately studied. Existing black-box poisoning methods all assert the target answer in frontal contradiction with what the resolver treats as settled, the very signal these methods are built to detect. We propose PURPOSE, a strict black-box poisoning attack that reframes the injection as an update that minimizes conflict, rather than as a counter-claim. PURPOSE extracts query-related facts approximating the resolver's possible reference, then grounds a pivot event in them to keep the injection consistent with what the resolver might verify while steering the generator toward the target answer. Across three QA benchmarks, five generators, and three conflict-resolution methods, PURPOSE attains the highest attack success rate (ASR) in 35 of 45 settings and exceeds the strongest prior attack with +9.7 mean ASR points. These results show that our poisoning method is effective against conflict resolution in RAG and identify non-contradicting injection as a practical mode to enhance poisoning attack.
