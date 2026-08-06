# Perception Before Reasoning: Dynamic Latent Reasoning for Video Understanding and Question Answering

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Haotian Xia, Zilin Xiao, Junbo Zou, Vicente Ordonez, Hanjie Chen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04124)

------

arXiv:2608.04124v1 Announce Type: cross

Abstract: Video question answering requires models to ground language queries in visual evidence and, when necessary, reason over that evidence across time. Existing methods typically rely on long textual chain-of-thought rationales, even though many questions can be answered as soon as the relevant object, action, or frame is localized. We propose Dynamic Latent Reasoning (DyLaR), which first grounds a question in a short block of perception latents (continuous hidden states that encode query-relevant visual evidence), and then adaptively decides whether to append reasoning latents (continuous thoughts that reason over this evidence in latent space) before answering. DyLaR learns this behavior by grounding perception latents in verified visual evidence and distilling verified rationales into reasoning latents, followed by reinforcement learning that further refines when to reason. Across nine video benchmarks and four multimodal language model backbones, DyLaR improves average accuracy over same-backbone baselines while generating fewer than 20 tokens per query. On Qwen3-VL-4B, for example, DyLaR improves average accuracy over Qwen3-VL-4B-Thinking from 54.0 to 58.2 while reducing response length from 1,220.7 to 18.5 tokens per query. Ablations further show that grounded perception latents, rationale-supervised reasoning latents, and adaptive routing each improve accuracy.
