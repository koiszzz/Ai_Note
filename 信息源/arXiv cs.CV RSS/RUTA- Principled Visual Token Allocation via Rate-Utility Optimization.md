# RUTA: Principled Visual Token Allocation via Rate-Utility Optimization

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jian Zou, Xiaoyu Xu, Zhihua Wang, Yilin Wang, Balu Adsumilli, Kede Ma　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04132)

------

arXiv:2608.04132v1 Announce Type: new

Abstract: High-resolution images and long videos provide vision-language models with rich context for multimodal reasoning and fine-grained perception, but the resulting long visual token sequences make large language model-side computation and memory costly. Existing visual token reducers often operate at prescribed rates, while recent methods adapt token counts across inputs using method-specific learned thresholds or importance predictors. We introduce RUTA, a principled Rate-Utility Token Allocation method that performs pre-LLM reduction by jointly learning which tokens to retain and how many to allocate to each image-query pair. RUTA constructs query-conditioned candidate tokens and predicts a retention probability for each candidate. During training, these probabilities parameterize independent Bernoulli gates, while their sum provides a differentiable training-time estimate of the token count for each pair. Retained tokens serve as anchors that aggregate information from non-retained tokens according to semantic affinity and spatial proximity. RUTA is optimized with a penalized rate-utility objective that balances downstream task loss against expected token usage. Averaged across five benchmarks and measured relative to each backbone's full-token baseline, RUTA uses only $2.0\%$ and $4.2\%$ of visual tokens while preserving $88.2\%$ and $94.4\%$ of task performance on LLaVA-NeXT-7B and Qwen3-VL-8B, respectively.
