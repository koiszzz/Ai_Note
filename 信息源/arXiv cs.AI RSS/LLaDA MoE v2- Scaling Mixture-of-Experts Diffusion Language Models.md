# LLaDA MoE v2: Scaling Mixture-of-Experts Diffusion Language Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Fengqi Zhu, Shaoxuan Xu, Jingyang Ou, Zebin You, Yipeng Xing, Huabin Liu, Xiaolu Zhang, Jun Zhou, Zhenzhong Lan, Yankai Lin, Wayne Xin Zhao, Jianguo Li, Chongxuan Li, Ji-Rong Wen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03457)

------

arXiv:2608.03457v1 Announce Type: new

Abstract: Diffusion language models (dLLMs) offer an alternative to autoregressive (AR) language modeling, yet the scaling behavior of Mixture-of-Experts (MoE) dLLMs remains poorly understood. We systematically characterize how optimization hyperparameters, compute allocation, and architecture scale for MoE dLLMs, identifying quantitative differences from scaling trends previously reported for AR models. Specifically, for optimization, the optimal nominal batch size grows faster, while the optimal learning rate decays more rapidly with compute. For model--data allocation, IsoFLOP analysis reveals a slight data-side tilt: the optimal token budget grows faster than activated model-side computation. For MoE architecture, larger scales increasingly favor larger expert pools at fixed activated capacity, while moderate expert granularity remains consistently effective and the preferred fraction of activated capacity assigned to shared experts remains stable across scales. Guided by these findings, we train LLaDA MoE v2, a 30B-A3B dLLM, from scratch on 23.5T tokens. With approximately 65\% as many pretraining tokens as Qwen3, LLaDA MoE v2 approaches Qwen3 on several knowledge, reasoning, and coding benchmarks. After supervised fine-tuning alone, it outperforms SDAR Chat on seven of eight reasoning and coding benchmarks and remains close to Qwen3 on several tasks. These results establish practical scaling laws and design principles for MoE dLLMs.
