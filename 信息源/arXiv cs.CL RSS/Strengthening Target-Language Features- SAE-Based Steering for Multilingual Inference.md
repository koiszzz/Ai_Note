# Strengthening Target-Language Features: SAE-Based Steering for Multilingual Inference

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Hongsheng Wang, Phlipp Koehn　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04904)

------

arXiv:2608.04904v1 Announce Type: new

Abstract: Multilingual large language models exhibit substantial performance differences across languages, while existing adaptation methods often require parameter updates and considerable multilingual training data. We propose an inference-time multilingual steering method that uses pretrained sparse autoencoders to identify and strengthen target-language-related features. Using multilingual parallel sentences, we compare SAE activations across languages and select a small number of layer-specific features associated with each target language. These features are decoded into steering signals and injected into the model's hidden states without additional training. Experiments with Gemma-3-12B-it show average accuracy improvements of 10.9 percentage points on XCOPA, 5.3 points on XNLI, and 1.9 points on MGSM.
