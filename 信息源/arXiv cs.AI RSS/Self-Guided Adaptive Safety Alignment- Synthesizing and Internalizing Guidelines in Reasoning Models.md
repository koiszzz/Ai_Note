# Self-Guided Adaptive Safety Alignment: Synthesizing and Internalizing Guidelines in Reasoning Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yuhang Wang, Yanxu Zhu, Jiaming Zhang, Dongyuan Lu, Jitao Sang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2511.21214)

------

arXiv:2511.21214v4 Announce Type: replace-cross

Abstract: Explicit safety policies can improve reasoning-model safety, but their effective coverage may lag behind evolving jailbreak strategies. We study whether a reasoning model can synthesize and internalize a task-specific safety guideline from a small set of harmful and benign examples. We introduce Self-Guided Adaptive Safety Alignment (SGASA). The model generates a guideline, refines it on its own errors, and selects a version by self-evaluation, which can then be applied in context or distilled into the model for guideline-free inference. Across two adversarial prompt datasets and three Qwen3 scales, in-context guidelines improve a combined safety and non-over-refusal score by 20.0-45.5 points on the 8B and 14B models. Self-evaluation selects the externally best refinement round in five of six settings, while guideline generation and utilization show distinct scaling patterns. Using alignment supervision derived only from WildJailbreak, internalized models retain 13.3-14.1 point gains on WildJailbreak without an inference-time guideline. These results support self-generated guidelines as a useful intermediate representation for low-resource safety adaptation.
