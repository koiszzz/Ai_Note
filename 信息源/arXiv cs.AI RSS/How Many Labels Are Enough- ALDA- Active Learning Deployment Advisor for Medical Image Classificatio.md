# How Many Labels Are Enough? ALDA: Active Learning Deployment Advisor for Medical Image Classification

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Julia Machnio, Mads Nielsen, Mostafa Mehdipour Ghazi　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03511)

------

arXiv:2608.03511v1 Announce Type: cross

Abstract: Active learning (AL) promises to reduce the cost of medical imaging projects by lowering the number of clinical labels required. However, practical deployment requires committing to a sampling strategy before the full annotation budget is spent, and choosing the wrong strategy can increase rather than decrease costs. We propose Active-Learning Deployment Advisor (ALDA), a deployment-oriented framework for AL method selection under clinical performance constraints. Given a short pilot phase, ALDA fits a parametric learning-curve model to each candidate strategy, estimates whether that strategy is expected to reach a required clinical performance target, and predicts the number of expert annotations needed to do so. In addition to absolute annotation cost, ALDA introduces a deployment window that quantifies the sensitivity of this cost estimate to uncertainty in the clinical threshold. The final recommendation follows a risk-aware rule: among strategies with near-optimal predicted cost, ALDA prefers the strategy with the narrowest deployment window, the most robust to threshold revisions. Experiments on four medical imaging classification domains show that ALDA predicts the deployment-optimal method from a pilot of 15-30% of the intended budget and reduces annotation costs by up to 82% compared with a poor strategy choice. Rather than introducing a new sampling heuristic, ALDA provides a practical decision layer that answers a deployment-critical question: how many labels are enough?
