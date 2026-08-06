# OliveGemma: A 3 Billion Visual Language Model for Recognising the Mediterranean & European Diet

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Dimitrios I. Zaridis, Traianos Tsiokris, Vasileios C. Pezoulas, Daphni Plati, Eugenia Mylona, Eleni Georga, Nikos Tsiknakis, Antonis Sakellarios, Dimitrios I. Fotiadis　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03428)

------

arXiv:2608.03428v1 Announce Type: cross

Abstract: Image based dietary assessment offers a scalable alternative to self reported food diaries, yet fine-grained food recognition remains challenging due to high intra-class variability and visually similar dishes. This study presents OliveGemma, a vision language model for recognising and reasoning about Mediterranean and European cuisine. Built on the open-weight PaliGemma-2-3B architecture, OliveGemma is fine-tuned with LoRA on a unified corpus of 17,340 images from three European research project datasets (MedGR, ODIN, and VIPPSTAR), reconciled into a vocabulary of 216 composed dish categories and paired with 102,642 instruction style question-answer items covering dish recognition, likely and visible ingredients, class boundary discrimination, visual evidence and overall visual food understanding. Under a 3-fold cross-validation scheme, OliveGemma achieves a top-1 accuracy of 92.96% +/- 0.91%, exceeding the strongest CNN baseline (DenseNet-121) by 7.31% and outperforming zero-shot frontier models with exact instructions and bounded classes including Gemini Flash 3 and 3.5, GPT-5.4 Mini, and Claude Haiku 4.6 by 8%, 46%, and 64% respectively. Furthermore, OliveGemma demonstrates competitive performance on Top-3 and Top-5 accuracy, being second best across CNNs and frontier models, surpassed only by DenseNet-121. In addition, OliveGemma achieves 90.79% +/- 1.3% Exact-Set on the likely ingredients of the food categories. These results demonstrate that PEFT adaptation of a small VLM can surpass substantially larger proprietary models on specialised food recognition. The model is publicly available at https://huggingface.co/JamesZar/OliveGemma-3B and the experiments and results can be found at https://github.com/tsiokris/OliveGemma.
