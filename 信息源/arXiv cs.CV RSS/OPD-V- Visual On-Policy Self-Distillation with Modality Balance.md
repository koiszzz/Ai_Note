# OPD-V: Visual On-Policy Self-Distillation with Modality Balance

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Aniri, Jinhe Bi, Peng Liao, Zengjie Jin, Volker Tresp, Fei Shen, Yunpu Ma, Tat-Seng Chua　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05131)

------

arXiv:2608.05131v1 Announce Type: new

Abstract: On-Policy Self-Distillation (OPSD) has become a standard post-training approach for improving visual reasoning in multimodal large language models (MLLMs). Existing methods draw privileged information from diverse input sources to guide self-distillation. Yet these designs overlook Modality Imbalance, a challenge inherent to MLLM reasoning. When textual information dominates generation, the model cannot fully integrate its multimodal input. Consequently, carefully designed privileged information remains underused, limiting the effectiveness of OPSD. To examine this limitation, we construct a Positive Teacher with the Zoom-In Image and a Negative Teacher with the Mask Image, which exhibit different degrees of Modality Imbalance. Changes in their reasoning correctness and token logits reveal that Modality Balance can itself serve as privileged information. Motivated by this finding, we introduce OPD-V, a visual OPSD paradigm that instantiates such information through the Positive Teacher and Negative Teacher. Positive Modality-Balance Logits Margins define a Modality-Balance Trust Region that selects the on-policy tokens used for self-distillation. Experiments across 6 benchmarks, 4 MLLM backbones, and 5 post-training methods show that OPD-V consistently improves reasoning performance while reducing training cost.
