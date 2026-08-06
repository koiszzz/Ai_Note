# NuclearDiffusion: Text-to-Image Foundation Models for Learning Nuclear Energy Concepts

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mohammed I. Radaideh, Jeremy Moon, Andre Gala-Garza, Emma Son, Yug Shah, Majdi I. Radaideh　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.GR　|　原文：[打开链接](https://arxiv.org/abs/2608.04030)

------

arXiv:2608.04030v1 Announce Type: cross

Abstract: Generative artificial intelligence (AI) has transformed text-to-image synthesis, yet its ability to represent specialized engineering domains remains largely unexplored. As an exmaple in nuclear engineering, general-purpose foundation models frequently generate physically incorrect or conceptually inconsistent images because they lack domain-specific knowledge. This work presents one of the first systematic studies of domain adaptation for nuclear text-to-image generation through fine-tuning of open-source diffusion models. We curate a dataset of 1,000 captioned nuclear energy images spanning reactors, fuel cycles, radiation, and related concepts, and use it to fine-tune three state-of-the-art open-source models: Stable Diffusion XL (SDXL), SD-v3.5-Medium, and the flow-matching Flux.1 model. Their performance is evaluated using both quantitative image-similarity metrics and qualitative expert assessment against the corresponding zero-shot models. Fine-tuning substantially improves the fidelity of SDXL, provides only limited gains for SD-v3.5-Medium, and yields no measurable improvement for Flux.1, demonstrating that adaptation effectiveness depends strongly on the underlying generative architecture rather than model scale alone. We further compare the fine-tuned models against three leading commercial systems--GPT-Image-2, Gemini-3.1-Flash-Image, and Midjourney. Although GPT-Image-2 and Gemini generate convincing images for broad nuclear concepts, they frequently fail on specialized engineering prompts, where the fine-tuned open-source models produce more accurate and technically consistent outputs. These results establish domain-specific fine-tuning as a practical pathway for developing trustworthy generative AI tools for domain-specific applications.
