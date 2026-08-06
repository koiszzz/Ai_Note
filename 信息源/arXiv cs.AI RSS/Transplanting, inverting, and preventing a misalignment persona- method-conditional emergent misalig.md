# Transplanting, inverting, and preventing a misalignment persona: method-conditional emergent misalignment in Qwen2.5

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Lyndon Drake (University of Oxford), Zandi Eberstadt (University of Oxford)　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2607.04510)

------

arXiv:2607.04510v2 Announce Type: replace-cross

Abstract: Emergent misalignment (EM) --- the broad misbehaviour a language model acquires after fine-tuning on narrow harmful data --- is mediated in Qwen2.5 models by a latent persona direction, and that direction is causal in open weights. Transplanting it into a model that shares only pretraining with its source induces broad EM (2.83 $\pm$ 0.26\% misaligned against a random-direction floor of $\sim$1.1\%), and ablating a model's own direction roughly halves an overt inducer's broadcast (21\% to 10\%). The transplant doubles as a measurement method, causally assaying directions that a source model represents but cannot itself express. Whether a fine-tune recruits this persona depends on method and capacity, and since low-rank PEFT is the cheaper regime at scale, the recruiting method is also the economical one. On Qwen2.5-32B, LoRA at low ranks on insecure code recruits it (3.4\% misaligned) while full SFT on identical data does not (0.3\%) and moves against the persona axis (drift--persona cosine $+0.17$ at rank 1 to $-0.10$), the far-inducer, high-capacity exception consistent with a representational-distance $\times$ capacity account. The persona's causal role is itself conditional. Steering a bad-medical SFT run away from the direction during training raises the broadcast from ${\sim}24\%$ to ${\sim}50\%$ while matched random controls stay at or below baseline, replicated across three training seeds, so removing the direction is no blanket recipe. Because recruitment is a loss-reducing shortcut that capacity renders redundant, it can be screened for and prevented in the tested instances. Persona loss-relevance at the SFT solution orders four inducers' broadcasts rank-perfectly within Qwen2.5, inoculation removes recruitment selectively (4.75\% to 0.0\%, code coherence 65\% to 87\%), and fine-tuning orthogonal to the single behaviour-derived axis reduces it persona-specifically.
