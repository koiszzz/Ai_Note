# Rethinking Self-Evolving Agent Skills: Feedback Dynamics over Multiple Rounds

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yuxuan Liu, Zhaochen Su, Yuhao Zhang, Jiahe Guo, Zhongwei Xie, Huihao Jing, Lingyun Xie, Qing Zong, Yauwai Yim, Zhixiong Zhang, Haoran Li, Yangqiu Song　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2608.02636)

------

arXiv:2608.02636v1 Announce Type: cross

Abstract: Self-evolving skill systems promise to improve agents by turning execution feedback into persistent skill updates without changing the underlying model. Yet it remains unclear when further evolution helps, how successful and failed trajectories shape revision, and whether extra test-time computation can recover the same gains. To address these questions, we present a controlled evaluation framework across five benchmarks and three models. Our primary study contains 42 feedback runs across 14 supported model-benchmark settings. Within each setting, we hold the executor and optimizer configuration, revision procedure, validation rule, and round budget fixed, while varying only the feedback shown to the optimizer: successes and failures (Normal), failures only, or successes only. Evolution is sparse: only 55 of 388 candidates establish byte-distinct validation bests. Validation-based selection chooses an evolved skill in 11 of 14 settings, nine of which improve released-test performance. All 11 selections come from feedback conditions that include failed trajectories, although the relative ranking of Normal and Fail-only varies across settings. Validation and downstream evaluations on test, robustness, and transfer sometimes favor different feedback views. A broader SearchQA analysis covering eight models shows similarly sparse, feedback-dependent dynamics. In the GPT-5.5 test-time-scaling controls, oracle Parallel Sampling comes within 0.43 points of the evolved SearchQA skill but remains 30.96 points behind on SpreadsheetBench; Sequential Refinement recovers neither gain. Overall, persistent skill self-evolution is better understood as sparse, validation-filtered search with model- and benchmark-dependent returns, rather than steady improvement from additional rounds. The implementation is available at https://github.com/HKUST-KnowComp/rethinkskill.
