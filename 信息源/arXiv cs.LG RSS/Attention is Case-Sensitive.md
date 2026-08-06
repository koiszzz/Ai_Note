# Attention is Case-Sensitive

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Maximilian Dillitzer, Tin Stribor Sohn, Jason J. Corso, Michael Auerbach　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03711)

------

arXiv:2608.03711v1 Announce Type: cross

Abstract: In human visual perception, uppercase lettering serves as a natural salience cue that captures attention within lowercase text. In this paper, we present a systematic empirical characterization study revealing that Large Language Models (LLMs) exhibit an analogous property: letter casing modulates internal attention allocation. Through analysis across 13 models, nine LLMs and four Vision-Language Models (VLMs), with diverse tokenization schemes, we show that formatting target information in alternating or uppercase against a lowercase context concentrates attention on those textual spans. In text this effect is universal, holding across every evaluated non-reasoning model. We frame it as a previously under-explored latent property of pretrained transformers rather than a prescriptive method. Our investigation reveals a central attention-performance divergence: while this "casing effect" robustly shifts attention, its impact on downstream accuracy is non-trivial, increased concentration does not inherently improve task accuracy and, in high-entropy contexts like alternating case, can degrade it. We further identify a boundary condition: the deliberative "thinking" phase in reasoning models acts as a semantic buffer that mitigates typographic sensitivity in text. Extending the study to VLMs, we find the effect transfers partially: the same prompt-side casing reorganizes cross-modal attention along two coupled axes, predominantly a macroscopic disengagement from the image toward the text prompt, and secondarily a concentration of the residual visual attention on the target region. By isolating casing as a zero-shot mechanism for attention steering that requires no model access or fine-tuning, we provide a new foundational understanding of how pretraining internalizes typographic emphasis.
