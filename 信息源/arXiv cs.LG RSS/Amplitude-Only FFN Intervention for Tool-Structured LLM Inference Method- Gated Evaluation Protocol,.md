# Amplitude-Only FFN Intervention for Tool-Structured LLM Inference Method: Gated Evaluation Protocol, and Cross-Model Empirical Results

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Sheng Xu, Zhen Chen, Junhua Wang, Boyuan Huang, Ke Jia, Jiadun Zhu, Yiming Xu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2607.11183)

------

arXiv:2607.11183v3 Announce Type: replace-cross

Abstract: Large language models increasingly operate as tool-using agents, where small format, argument, or function-call errors can invalidate otherwise plausible responses. We study inference-time feed-forward network (FFN) intervention as a way to improve structured outputs without retraining model weights. An earlier project-specific approach, Orthogonal Residual Projection (ORP), exposed sensitive SwiGLU FFN sites and non-monotonic energy effects, but its direction-changing operation produced more regressions than repairs in a key diagnostic. We therefore propose Amplitude Gating (AG), which preserves pretrained FFN weight directions and modulates activation magnitudes during decoding. AG separates candidate generation, ranking, and a prospective acceptance/fallback decision. We also introduce Per-Sample Fix-Harm Evaluation (PFHE), a paired reporting protocol that complements native task metrics with fixes, harms, preserved-correct cases, and preserved-wrong cases. On the only cross-position union that passes source-alignment audit, an exploratory offline mixed selector raises the descriptive heterogeneous-scorer Qwen3.5-9B tool-route micro-average from 38.66% to 42.92% (+4.27 percentage points); two Hermes function-call endpoints improve by +7.64 and +7.62 points. The same-output PFHE-format view records 48 fixes, 26 harms, 294 preserved-correct cases, and 2,188 preserved-wrong cases over 2,556 units, with positive paired bootstrap intervals for native and strict effects. Protocol-separated Qwen3-8B and Qwen2.5-7B analyses retain oracle headroom but no positive train-selected fixed tool route. A grouped five-fold RF diagnostic suggests weak nonlinear ranking signal but forces intervention, lacks baseline fallback and paired uncertainty, and is not deployment evidence. The results support model- and task-specific selection with strict fallback, not a universal AG switch.
