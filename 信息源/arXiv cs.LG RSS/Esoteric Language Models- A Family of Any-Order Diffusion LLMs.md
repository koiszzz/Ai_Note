# Esoteric Language Models: A Family of Any-Order Diffusion LLMs

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Subham Sekhar Sahoo, Zhihan Yang, Yash Akhauri, Johnna Liu, Deepansha Singh, Zhoujun Cheng, Zhengzhong Liu, Eric Xing, John Thickstun, Arash Vahdat　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2506.01928)

------

arXiv:2506.01928v5 Announce Type: replace-cross

Abstract: Diffusion-based language models offer a compelling alternative to autoregressive (AR) models by enabling parallel and controllable generation. Within this family, Masked Diffusion Models (MDMs) currently perform best but still underperform AR models in perplexity and lack key inference-time efficiency features, most notably KV caching. We introduce Eso-LMs, a new family of models that fuses AR and MDM paradigms, smoothly interpolating between their perplexities while overcoming their respective limitations. Unlike prior work, which uses transformers with bidirectional attention as MDM denoisers, we exploit the connection between MDMs and Any-Order autoregressive models and adopt causal attention. This design lets us compute the exact likelihood of MDMs for the first time and, crucially, enables us to introduce KV caching for MDMs while preserving parallel generation for the first time, significantly improving inference efficiency. Combined with an optimized sampling schedule, Eso-LMs establish a new state of the art on the speed-quality Pareto frontier for unconditional generation. We provide the code, model checkpoints, and the video tutorial on the project page: https://s-sahoo.com/Eso-LMs.
