# The Asymmetric Effects of Knowledge Distillation on Bias in Small Language Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Plawan Kumar Rath　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2607.28639)

------

arXiv:2607.28639v2 Announce Type: replace-cross

Abstract: We show that knowledge distillation (KD) in small instruction-tuned language models has asymmetric effects on bias, and that measuring them correctly requires accounting for where refusal mass moves and what the parser can legitimately score. On unambiguous tasks (BBQ-disambig), response-based distillation from a Mistral-7B teacher genuinely improves context-following for the most context-biased baseline (SmolLM2-1.7B-Instruct): among committed (non-abstaining) answers, the rate of overriding correct context with a stereotype falls from 44.5% to 37.2%, with accuracy rising from 0.55 to 0.61. On ambiguous tasks (BBQ-ambig), the same distillation degrades conditional refusal: 15% of the cases where the baseline correctly abstained instead receive stereotype answers (silence-loss), and the distilled refusal pattern only weakly preserves the baseline's (Spearman rho=0.44). The harm reproduces, aggravated, on a second student family (OLMo-2-1B-Instruct): silence-loss reaches 49% and filled-silence accounts for 95% of new bias. Two apparently stronger results are artifacts. An unconditioned override metric reports a 44% -> 23% improvement under a Gemma-2-9B teacher that shrinks to 44.5% -> 39.8% once conditioned on committed answers: the model abstains on 43% of items and its accuracy collapses from 0.55 to 0.35. An apparent cross-condition independence reverses to a positive correlation (rho=0.58, p<0.01) on the valid 19-configuration grid once parser-invalid logit-KD configurations are excluded and the parser is corrected. Aggregate metrics (CrowS-Pairs, overall BBQ Stereotype Reliance Score) average over both effects and conceal the per-item harm. We propose Per-Condition Calibration Diagnosis (PCCD), a three-step protocol evaluating refusal-pattern preservation, committed-answer context-following, and capability preservation. No configuration in our grid passes all three steps.
