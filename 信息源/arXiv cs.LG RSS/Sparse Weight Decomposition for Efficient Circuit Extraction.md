# Sparse Weight Decomposition for Efficient Circuit Extraction

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Chuanhao Yan, Xuhan Huang, Yawen Duan, Zhenfei Yin, Hang Zhao, Bryan Dai, Jie Fu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03913)

------

arXiv:2608.03913v1 Announce Type: new

Abstract: Dense pretrained transformers do not naturally expose interpretable units for circuit extraction. Existing approaches obtain such units by learning auxiliary sparse representations or training sparse models, incurring substantial additional computation while potentially introducing a fidelity gap between the representation being analyzed and the original pretrained model. We propose Sparse Weight Decomposition (SWD), which reparameterizes pretrained linear projections by factorizing each weight matrix into two sparse factors whose shared intermediate coordinates serve as individually addressable circuit units. Without training a separate replacement network, this parametric representation supports the same scoring, selection, and ablation circuit extraction workflow used for methods that learn sparse features. Across single-matrix replacements, SWD matches the held-out fidelity achieved by Transcoder and other strong baselines while using less than 1% of the data that those baselines use to train their replacements. For matched replacement fidelity, SWD reaches the same circuit sufficiency and necessity targets with fewer active read/write edges and selected units across tasks on GPT-2, Qwen2.5, and Qwen3.5-27B. We further show that SWD remains effective for full-model replacement of all attention and MLP weight matrices after fine-tuning the nonzero factor values. Finally, SWD also features a zero-data variant, allowing broader use of mechanistic interpretability analysis (e.g., per-step analysis).
