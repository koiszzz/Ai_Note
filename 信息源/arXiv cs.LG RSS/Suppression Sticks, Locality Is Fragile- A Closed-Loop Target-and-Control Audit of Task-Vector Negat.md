# Suppression Sticks, Locality Is Fragile: A Closed-Loop Target-and-Control Audit of Task-Vector Negation in VLA Policies

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Shaoguang Wang, Weiyu Guo, Rushi Dai, Yiren Zhao, Yandong Guo, Hui Xiong　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.04692)

------

arXiv:2608.04692v1 Announce Type: cross

Abstract: Task-vector arithmetic offers a closed-form way to modify a model, yet its behavioral locality remains unclear in closed-loop robot control. We present a target-and-control audit of per-skill task-vector subtraction from multitask vision-language-action (VLA) policies. Across all ten LIBERO-Goal skills, subtraction produces three qualitatively different regimes: target-control separation for five skills, resistance for three, and global collapse for two. On held-out initial states, the five suppressible targets remain at 0% success; however, mean baseline-normalized control retention is only 52%, and each target-suppressing edit materially harms at least one nominally unrelated control. Additional Goal panels show separation across tested policies with continuous-regression, discrete-token, and flow-matching action heads, whereas we observe no clean separation on Spatial and control collapse on the tested Object and Long-horizon panels. Mean task-vector cosine does not account for this variation. A matched-norm control identifies a local sign asymmetry around one Goal anchor, while multi-vector outcomes vary with anchor and scale. Retain-aware gradient baselines provide data-dependent comparators but require removal-time data and optimization; subtraction is data- and gradient-free only at edit time, assuming precomputed expert deltas. Finally, a single-skill relearning probe is consistent with behavioral masking, not certified unlearning. These results characterize task-vector subtraction as a fast but brittle intervention and underscore the need for closed-loop target-and-control evaluation when assessing locality in embodied model editing.
