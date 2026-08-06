# Moving the Safety Barrier: Dynamic Routing Adaptive Alignment Against White-Box Attacks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Shangze Li, Chuancheng Shi, Simiao Xie, Lingzhi He, Cheng Ji, Zifeng Cheng, Fei Shen, Chao Wu, Tat-Seng Chua　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02674)

------

arXiv:2608.02674v1 Announce Type: cross

Abstract: With the widespread deployment of large foundation models (LFMs) in open environments, safety threats are shifting from black-box jailbreaks toward white-box attacks that directly identify and disrupt internal safety neurons or routes. However, existing safety defenses often rely on static safety units or fixed refusal pathways, leaving models highly vulnerable to targeted route-level white-box attacks. For that, we propose dynamic routing adaptive alignment (DRAA), a framework that introduces dynamic compensatory routes to preserve robust refusal behavior when the safety route is compromised. Specifically, we first identify and localize the model's safety route by contrasting internal activations between safe and unsafe calibration samples. DRAA then masks this safety route to induce causal failure cases and selectively mines the resulting defense failures, thereby constructing failure-aware preference pairs. Extensive experiments demonstrate that DRAA effectively restructures the underlying pathway dependence of model safety, substantially improving robustness against route-level white-box attacks, while preserving general utility.
