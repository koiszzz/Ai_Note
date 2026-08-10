# DASH: Decoupled Adaptive Surrogate - Acquisition Harness for Automated Bayesian Optimization

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Changquan Zhao, Yuxiang Sun, Ruihao Zhu, Cheng Hua, Yulian He　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.00641)

------

arXiv:2608.00641v2 Announce Type: replace

Abstract: Bayesian optimization (BO) relies on a surrogate model and an acquisition function, yet the most suitable choices vary across tasks and optimization stages. Automated Bayesian optimization (AutoBO) addresses this variability by adapting BO components online. However, existing AutoBO methods either adapt one component, leaving the other mismatched and creating a bottleneck, or jointly select surrogate--acquisition pairs under a shared criterion, overlooking their distinct roles: surrogate selection depends on predictive reliability, whereas acquisition adaptation should respond to campaign context.In this paper, we propose DASH, a Decoupled Adaptive Surrogate--Acquisition Harness for large-language- model (LLM)-enhanced AutoBO. DASH selects surrogates by predictive reliability, uncertainty calibration, and ranking consistency; its two-stage acquisition controller periodically reallocates quotas across acquisition functions, builds a BO shortlist accordingly, and delegates final selection to an LLM. DASH also incorporates an integrated harness, consisting of knowledge-guided warm start and structured memory, to ground optimization in domain knowledge and accumulated feedback. Across four chemical optimization tasks, DASH outperforms the best AutoBO baseline by 12.51% in trajectory-level Acceleration Factor and 5.00% in endpoint Enhancement Factor. Results remain strong across LLM backbones, and ablations verify the complementary contributions of all components. Full-table and behavioral contamination checks find no detectable evidence that direct benchmark memorization or source-cell leakage explains these gains.
