# Single Canonical Prompts Underestimate LLM Safety's Surface-Form Sensitivity

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yongxi Zhou, Junwei Yao, Yuanzhe Liu, Zihan Dong, Wenbo Ye, Jiaxi Wen, Lai Yun Choi　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02665)

------

arXiv:2608.02665v1 Announce Type: cross

Abstract: A benchmark score is a measurement instrument, yet most benchmarks read each item at a single canonical surface form. We ask whether that reading is faithful: when an item's intent is held fixed and only its meaning-preserving surface form varies, does the canonical-form score estimate model behavior well, and how much of any variation is decoding/judge noise rather than signal? We instantiate this in safety, a high-stakes setting with no gold label to average toward. To avoid prior confounds, we pre-author the reformulations (refusal-free, mostly non-LLM: machine back-translation and a Matrix-Language-Frame code-switch generator) so an identical surface form reaches every model, score all responses with one human-anchored, vendor-neutral judge (Claude, kappa = 0.86 vs. human on unsafe compliance, stable across languages, cross-checked by GPT-4o), and verify intent preservation. On 370 seeds x 5 surface forms x 5 models, no single transformation is uniformly most dangerous (6 of 20 per-transformation McNemar tests survive correction, most protective). Yet evaluating only the canonical prompt underestimates unsafe compliance: the union of unsafe outcomes across forms exceeds even the worst single form by 3.3-12.9 pp, with bootstrap 95% CIs excluding zero for all five models, and 5-13% of seeds safe on canonical are unsafe under some reformulation -- above a zero stochasticity floor (canonical resampled five times at temperature 0 gives 0/370 new exposures). The size of this gap is model-dependent (largest on Gemini 2.5 Pro). One form recovers only ~53% of a model's observed unsafe surface and about three reach 85% -- a redundancy characterization of this form set, not of a defined population. A benign control (XSTest) suggests the instability is bidirectional, though the benign and harmful pools are not item-matched. We release the dataset, code, and per-response labels.
