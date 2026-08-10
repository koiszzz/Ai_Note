# TruthLens: Object Hallucination Detection via Self-Evaluating Truthfulness Scores in LVLMs

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yanqi Wu, Runhe Lai, Xinhua Lu, Qichao Chen, Zhiping Zhou, Jia-Xin Zhuang, Weijiang Yu, Ruixuan Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05616)

------

arXiv:2608.05616v1 Announce Type: new

Abstract: Despite the remarkable progress of large vision language models (LVLMs), object hallucination remains a fundamental challenge that hinders their trustworthy deployment. A key finding motivates our work: real and hallucinated object tokens are clearly separable in hidden representations, yet this separability is largely lost at the language-modeling (LM) head. We propose TruthLens, a self-evaluation framework that teaches the LM head to expose a per-object truthfulness signal without any auxiliary model or additional inference cost. Concretely, a rarely-used special token is repurposed as a reference token. For each object-token position, we extract the log-probability assigned to this special token by the LM head, and define its difference from a predefined constant as the truthfulness score. The model is then fine-tuned with an MSE objective that drives scores toward 1 for real objects and 0 for hallucinated ones, while a divergence constraint preserves the original generation capability. Despite being trained on only a limited set of object categories, TruthLens generalizes effectively to benchmarks with substantially larger label spaces. Extensive experiments across multiple LVLMs demonstrate state-of-the-art performance; notably, on Qwen2.5-VL-7B, TruthLens outperforms the previous best method on MS-COCO by over 17\% in AUROC. Our code is available at https://github.com/wyqstan/TruthLens.
