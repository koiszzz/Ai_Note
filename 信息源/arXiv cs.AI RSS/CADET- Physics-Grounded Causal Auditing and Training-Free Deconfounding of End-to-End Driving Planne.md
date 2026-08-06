# CADET: Physics-Grounded Causal Auditing and Training-Free Deconfounding of End-to-End Driving Planners

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zikun Guo, Yuanyuan Li, Rongjin Zou　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2606.14438)

------

arXiv:2606.14438v3 Announce Type: replace-cross

Abstract: End-to-end (E2E) autonomous-driving planners trained by imitation are prone to statistical shortcuts: they associate scene elements that merely co-occur with expert actions (a roadside object, a building facade) with driving decisions, rather than the variables that causally determine them. Such causal confusion silently compromises reliability in long-tail scenarios, and it is difficult to detect, because prevailing open-loop metrics (L2 displacement and collision rate) are dominated by ego status and do not indicate whether a planner depends on spurious cues. Existing remedies based on causal-intervention training require retraining large models and cannot audit a planner that is already deployed. We present CADET, a training-free framework that audits, benchmarks, and repairs spurious reliance in pretrained E2E planners without any parameter update.
