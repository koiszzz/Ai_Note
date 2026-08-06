# AudioDER: A Deduplication-Enhanced Reasoning Dataset for Post-Training Large Audio-Language Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Hui Geng, Yi Su, Zijian Gao, Tianjiao Wan, Qisheng Xu, Jiaxin Chen, Hengzhu Liu, Kele Xu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.SD　|　原文：[打开链接](https://arxiv.org/abs/2606.14591)

------

arXiv:2606.14591v2 Announce Type: replace-cross

Abstract: Recent advances in pretrained large audio-language models (LALMs) have demonstrated strong capabilities across speech, sound, and music. To adapt these models to downstream tasks without the cost of pretraining from scratch, post-training has become a widely adopted paradigm. However, the effectiveness of post-training depends critically on the quality of the training corpus. We observe that existing post-training corpora, often constructed by aggregating public audio datasets, suffer from substantial acoustic redundancy, as many of these datasets are sourced from overlapping media platforms. Such redundancy leads to repeated exposure to similar acoustic patterns, causing diminishing returns in performance despite increased data volume. address this issue, we propose a three-stage data construction pipeline that performs acoustic redundancy filtering, converts retained samples into a unified multiple-choice question-answering format with chain-of-thought generation, and finally applies quality verification and filtering. Using this pipeline, we construct AudioRE, a post-training dataset of approximately 286k instances spanning sound, speech, and music. Supervised fine-tuning on AudioRE consistently improves the performance of Qwen2-Audio-7B-Instruct across diverse audio understanding and reasoning benchmarks, outperforming models trained on the unfiltered raw corpus with substantially more instances. These results validate the effectiveness of our redundancy-aware data construction pipeline and the resulting AudioRE dataset, and further highlight the importance of minimizing acoustic redundancy in audio-language post-training. To facilitate future research, we will release both the AudioRE and the fine-tuned Qwen2-AudioRE checkpoint.
