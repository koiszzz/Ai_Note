# AdaBoosting Text Prompts for Vision-Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Seokhee Jin, Changhwan Sung, Sunung Mun, Hoyoung Kim, Jungseul Ok　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.00684)

------

arXiv:2607.00684v2 Announce Type: replace

Abstract: The classification accuracy of pretrained Vision-Language Models (VLMs) relies on the quality of the text prompts. Handcrafted templates and Large Language Model (LLM)-generated descriptions not only make predictions more interpretable, but also enable reuse of the same prompts across heterogeneous VLMs. Recent works construct task-adapted text prompts with a small number of labeled images. However, existing few-shot text prompting methods do not explicitly focus on misclassified examples during prompt construction, leading to only marginal improvements even as more shots become available. To fully exploit few-shot supervision, we propose Text Prompt Boosting (TPB), an AdaBoost-inspired framework that treats each text-prompt-based classifier as a weak learner and sequentially aggregates them into a strong ensemble by explicitly targeting hard, misclassified examples. Extensive experiments show that TPB preserves task-intrinsic, model-agnostic cues in text space, enabling robust cross-model transfer. Across eleven classification benchmarks, TPB improves accuracy on the source model and preserves shot-driven gains when transferred to larger, more capable VLMs, where existing methods struggle to sustain such improvements.
