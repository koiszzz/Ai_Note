# When Drafts Evolve: Speculative Decoding Meets Online Learning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yu-Yang Qian, Hao-Cong Wu, Yichao Fu, Hao Zhang, Peng Zhao　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2603.12617)

------

arXiv:2603.12617v2 Announce Type: replace-cross

Abstract: Speculative decoding has emerged as a widely adopted paradigm for accelerating large language model inference, where a lightweight draft model rapidly generates candidate tokens that are then verified in parallel by a larger target model. However, due to limited model capacity, drafts often struggle to approximate the target distribution, resulting in shorter acceptance lengths and diminished speedup. A key yet under-explored observation is that speculative decoding inherently provides verification feedback that quantifies the deviation between the draft and target models at no additional cost. This process naturally forms an iterative "draft commits-feedback provides-draft adapts" evolving loop, which precisely matches the online learning paradigm. Motivated by this connection, we propose OnlineSPEC, a unified framework that systematically leverages interactive feedback to continuously evolve draft models. Grounded in dynamic regret minimization, we establish a formal link between online learning performance and speculative system's acceleration rate, and develop novel algorithms via modern online learning techniques, including optimistic online learning that adaptively reuses historical gradients as predictive update hints, and online ensemble learning that dynamically maintains multiple draft models. Our algorithms are equipped with theoretical justifications and improved acceleration rates, achieving up to 24% speedup over seven benchmarks and five foundation models.
