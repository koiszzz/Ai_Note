# TriCLE: Tri-Modal Vision-Language Reasoning for Edge-Deployed Fine-Grained Clustering

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Kishor Datta Gupta, Md. Mahfuzur Rahman, Fahad Rahman, Ahmed Rafi Hasan, Faysal Mehrab Chowdhury, Mohd Ariful Haque, Roy George　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04175)

------

arXiv:2608.04175v1 Announce Type: new

Abstract: Edge platforms used for aerial observation must interpret aircraft imagery under limited memory, limited compute, and intermittent connectivity. This setting is difficult for standard RGB-only recognition models and general-purpose vision-language models, especially when calibrated thermal and LiDAR aircraft data are unavailable. We present TriCLE, an application-oriented tri-modal vision-language system for aircraft taxonomic grouping under edge constraints. From a single RGB aircraft image, TriCLE generates a structure-preserving FLIR-style thermal view and a pseudo-LiDAR depth projection, then fuses the aligned views with task instructions in a compact Qwen3-VL backbone. The model is aligned to an expert aircraft taxonomy based on propulsion, airframe family, size, design era, and configuration, so its outputs reflect engineering-relevant similarity rather than only surface appearance. We evaluate supervised fine-tuning, rotation-preserving SFT, and three policy-alignment strategies: GRPO, GSPO, and DAPO. Sequence-level GSPO gives the strongest validation performance, reaching 88.33\% validation accuracy and 0.91 weighted F1 on valid aircraft outputs. On a held-out aircraft test partition, GSPO achieves 78.00\% accuracy and 0.793 weighted F1 while preserving 94.00\% parseable output formatting. After 4-bit quantization and attention-memory optimization, the aligned 4B model fits an 8GB deployment target and processes each tri-modal triplet in 1.48 seconds. These results support TriCLE as a practical prototype for interpretable, edge-feasible aircraft grouping, while emphasizing the need for further validation on real aligned thermal and LiDAR sensor streams.
