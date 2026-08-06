# On the Effectiveness of Adaptation Strategies for VLM-Based Federated Learning in Remote Sensing

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Simon L\"osche, Bar{\i}\c{s} B\"uy\"ukta\c{s}, Mathis Adler, Angelos Zavras, Ioannis Papoutsis, Beg\"um Demir　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04791)

------

arXiv:2608.04791v1 Announce Type: new

Abstract: Federated learning (FL) enables collaborative training of deep learning models across decentralized image archives without requiring data centralization. This paradigm is particularly relevant in remote sensing (RS), where legal regulations, privacy concerns, and bandwidth constraints restrict data sharing. However, the presence of training data heterogeneity across clients (known as non-IID data) can impede convergence and limit the generalization capability of the aggregated global model. To mitigate the adverse effects of training data heterogeneity, vision-language models (VLMs) can be leveraged in FL due to their transferable representations, which have demonstrated robustness under distribution shifts. However, their large parameter size may substantially increase communication overhead and local computational complexity in federated settings. Therefore, it is crucial to select an appropriate VLM adaptation strategy that balances the generalization ability with the communication and computational constraints. To address this issue, in this paper, we present the first comparative study of VLM adaptation strategies for FL in the context of RS image classification. We investigate full fine-tuning, encoder-specific fine-tuning, prompt learning, and low-rank adaptation (LoRA) tuning, and analyze them with respect to three criteria: 1) generalization capability under non-IID data, 2) communication overhead, and 3) local computational complexity. Experiments on BigEarthNet-S2, EuroSAT, RESISC45, and ImageNet reveal distinct trade-offs between task specialization, cross-domain generalization, and efficiency. Based on our findings, we derive a guideline for the selection of an appropriate VLM adaptation strategy in FL for RS image classification under different operational constraints. The code of this work is publicly available at https://git.tu-berlin.de/rsim/FL-RS-VLM.
