# Pixel-TTS: Image based Text Rendering for Robust Text-to-Speech

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Adarsh Arigala, Arjun Gangwar, S Umesh, Yova Kementchedjhieva　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：eess.AS　|　原文：[打开链接](https://arxiv.org/abs/2606.14750)

------

arXiv:2606.14750v2 Announce Type: replace-cross

Abstract: Recent advances in pixel-based text modeling show that representing text as images enables models to exploit visual cues for language understanding. Grounding text in its visual form allows structurally similar characters with different Unicode encodings to produce similar embeddings, benefiting cross-lingual and zero-shot scenarios. Conventional text-based approaches treat each character independently, limiting generalization to unseen characters and requiring embedding expansion during cross-lingual adaptation. We propose Pixel-TTS, a text-to-speech framework for visually grounded speech synthesis. It renders text as images and projects them through a 2D convolutional layer to generate embeddings. This design eliminates embedding matrix expansion during fine-tuning while improving robustness to unseen characters and orthographic variations. Extensive experiments show Pixel-TTS achieves competitive performance with strong baselines, faster convergence and robust zero-shot generalization.
