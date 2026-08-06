# A Model Merging Approach for Continual MLLM Unlearning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yuhang Wang, Linlin Zhang, Haoxuan Ji, Xianmin Ye, Zhenxing Niu, Haichang Gao　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04548)

------

arXiv:2608.04548v1 Announce Type: cross

Abstract: Multimodal large language model (MLLM) unlearning methods have been proposed to remove private, sensitive, or proprietary information from well-trained models. However, most existing MLLM unlearning methods are designed for one-shot requests and fail to adequately address continual scenarios, as repeatedly applying one-shot operations leads to cumulative utility degradation, unlearning rebound, and retention drift. We introduce Merging for Continual Unlearning (MCU), an approach that dynamically merges multiple one-shot unlearning adapters into a unified adapter upon receiving each new unlearning request.Through a leave-one-out merging analysis, we reveal that these unlearning adapters exhibit strong cross-task dependencies. Such dependencies have two contrasting effects: they can facilitate cross-task unlearning transferability, but they can also introduce severe interference that degrades unlearning effectiveness and compromises retained knowledge. To address this challenge, MCU projects the adapters into a shared representation space, preserves their dominant directions, suppresses over-concentrated coordinates, and reconfigures cross-task dependencies to mitigate interference while enhancing transferability. Experiments on ICU-Bench and MLLMU-Bench demonstrate that MCU achieves superior unlearning effectiveness while preserving both retained knowledge and general multimodal utility.
