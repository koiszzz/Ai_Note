# HalluScope: Fine-grained Hallucination Diagnosis for Multimodal Large Language Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Weilin Jin, Mingyu Wang, Wenbo Li, Haoyang Huang, Yifan Wu, Ying Li, Gang Huang, Zhonghai Wu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2607.21105)

------

arXiv:2607.21105v2 Announce Type: replace

Abstract: Although Multimodal Large Language Models have achieved strong performance across a wide range of vision-language tasks, they still suffer from hallucinations, where model outputs become inconsistent with the visual content, textual context, or commonsense knowledge. Existing studies primarily address this problem through coarse-grained detection. However, these approaches often provide insufficient diagnostic information for understanding hallucination types and supporting downstream hallucination mitigation. To bridge this gap, we propose fine-grained hallucination diagnosis for MLLMs, a new unified task that jointly performs hallucination detection, classification, and interpretable explanation generation. We develop an automated data generation pipeline and construct HalluScope-30K, a large-scale diagnostic dataset covering eight sources and five task categories. Based on this dataset, we design a multi-granular joint reward function and train two diagnosis models, HalluScope-4B and HalluScope-8B, which achieve state-of-the-art performance on both the MHALO benchmark and our fine-grained hallucination classification benchmark. Notably, detection and classification are mutually beneficial under joint optimization. Furthermore, diagnosis-driven feedback experiments show that the fine-grained diagnostic explanations produced by our model effectively guide target models to correct their hallucinations, with full diagnosis substantially outperforming all baselines on both Qwen3-VL-8B-Instruct and LLaVA-1.5-7B. Our code, data, and models are available at https://github.com/wkinglin/HalluScope.
