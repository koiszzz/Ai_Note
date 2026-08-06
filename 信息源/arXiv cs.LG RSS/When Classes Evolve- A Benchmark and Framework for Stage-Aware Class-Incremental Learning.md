# When Classes Evolve: A Benchmark and Framework for Stage-Aware Class-Incremental Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zheng Zhang, Tao Hu, Xueheng Li, Yang Wang, Rui Li, Jie Zhang, Chengjun Xie　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2602.00573)

------

arXiv:2602.00573v2 Announce Type: replace

Abstract: Class-Incremental Learning (CIL) aims to sequentially learn new classes while mitigating catastrophic forgetting of previously learned knowledge. Conventional CIL approaches implicitly assume that classes are morphologically static, focusing primarily on preserving previously learned representations as new classes are introduced. In practice, however, instances of the same semantic class may undergo substantial morphological evolution, such as a larva turning into a butterfly. Consequently, a model must both discriminate between classes and adapt to evolving appearances within a single class. To systematically address this challenge, we formalize Stage-Aware CIL (Stage-CIL), a paradigm in which each class is learned progressively through distinct morphological stages. We further introduce Stage-Bench, a 10-domain, two-stage benchmark and protocol for evaluating both inter-class forgetting and stage-level degradation within classes. Finally, we propose STAGE, an evolution-aware reference baseline that disentangles semantic identity from evolution dynamics through a fixed-size memory pool, enabling stage-aware prediction of later morphological forms from earlier representations. Extensive experiments show that conventional CIL reductions and existing continual-learning baselines remain insufficient under Stage-CIL, while STAGE consistently outperforms strong competitors, demonstrating the promise of explicit evolution-aware modeling for this new setting.
