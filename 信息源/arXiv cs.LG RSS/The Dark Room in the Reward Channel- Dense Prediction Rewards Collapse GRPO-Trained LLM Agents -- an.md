# The Dark Room in the Reward Channel: Dense Prediction Rewards Collapse GRPO-Trained LLM Agents -- and The Channel, Not the Content, Decides What Works

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yu Wang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.21273)

------

arXiv:2607.21273v2 Announce Type: replace

Abstract: Dense per-step supervision is the standard remedy for sparse-reward long-horizon LLM agents: reward the policy for predicting its next observation, which looks provably safe under potential-based shaping. Published prediction-reward and auxiliary-loss variants report both successes and instabilities; we supply the controlled account: 74 preregistered arms dissect one fixed prediction signal under GRPO across ALFWorld, WebShop, a synthetic POMDP, and Qwen3-1.7B/4B/8B, varying only the delivery mechanism. (1) Every run sustaining this difference-form reward under untouched std normalization (no filtering, dynamic-sampling, or decoupling mitigations) collapses: eleven runs across scales, coefficients, group sizes, and groupings (the floor-bound synthetic environment stalls instead); ALFWorld runs end in an absorbing state (prediction accuracy -> 1.0, success -> 0): the optimizer builds the "dark room". The algebra is one line: in all-fail groups z-scoring cancels the shaping coefficient; removing only std normalization restores baseline parity. (2) A signal's danger is set by its within-group variance trajectory, plus hackability as a second axis; it retrodicts every reward-channel collapse and survives preregistered prospective tests. (3) The same signal as a teacher-forced auxiliary loss is harmless on ALFWorld at 4B, but the gain is not the signal's: content-free placebos as a class match or beat gold at both matched seeds (s0: 78.8 vs 68.6; s42: 67.9 vs 57.9); the auxiliary update is the regularizer. (4) At 8B the recipe turns bistable: gold full-weight locks two of three seeds; every content-free or reduced-weight arm stays healthy. No ALFWorld or WebShop reward-channel variant measurably beats its matched-normalization baseline and no gold signal measurably outperforms its content-free placebo: the delivery channel, not the content, decides; which channel is safe is regime-dependent.
