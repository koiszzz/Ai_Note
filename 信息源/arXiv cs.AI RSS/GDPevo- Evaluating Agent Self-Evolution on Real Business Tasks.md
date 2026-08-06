# GDPevo: Evaluating Agent Self-Evolution on Real Business Tasks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Leijun Zhou, Zhihao Liu, Xiang Qu, Chenxu Liu, Yifei Liu, Yanke Yu, Jingzhe Xu, Xuejun Wu, Buyue Qian, Xi Chen, Yaowei Zheng, Junhao Hu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03764)

------

arXiv:2608.03764v1 Announce Type: new

Abstract: Agent self-evolution updates an agent's persistent state from prior experience and reuses it to solve related tasks more effectively. Evaluating self-evolution is difficult: existing benchmarks provide limited coverage of economically valuable task domains, do not always design training and test tasks such that test-time gains can be attributed to training experience, and remain vulnerable to data contamination. We present GDPevo, an evolution-native benchmark grounded in GDP-related enterprise workflows, together with the fully automated data pipeline that generates it. Its core mechanism, rule hybridization, decomposes each enterprise workflow into atomic business rules, distributes subsets of these rules across training tasks, and recombines them in held-out test tasks so that test-time gains are attributable. GDPevo spans CRM, ERP, finance, healthcare, legal, and data-centric workflows. Its V1 release contains 120 tasks in 12 groups, with five training and five held-out test tasks per group. Full automation enables the pipeline to expand the suite to 240 tasks in 24 groups (V2) within two days, providing a practical response to contamination. Using GDPevo, we evaluate four agents, each comprising a harness and a model, under four supervision types. Self-evolution consistently improves held-out accuracy by up to 16.44 percentage points. But the best evolved agents remain far below the fully informed oracle ceiling of 91.6%, indicating that the self-evolution ability of current agents remains far from fully realized. We publicly release the pipeline, benchmark, and full evaluation results at https://github.com/Prism-Shadow/GDPevo.
