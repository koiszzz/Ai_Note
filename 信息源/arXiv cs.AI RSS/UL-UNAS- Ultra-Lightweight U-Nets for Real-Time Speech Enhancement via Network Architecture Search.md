# UL-UNAS: Ultra-Lightweight U-Nets for Real-Time Speech Enhancement via Network Architecture Search

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xiaobin Rong, Leyan Yang, Dahan Wang, Yuxiang Hu, Changbao Zhu, Kai Chen, Jing Lu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：eess.AS　|　原文：[打开链接](https://arxiv.org/abs/2503.00340)

------

arXiv:2503.00340v2 Announce Type: cross

Abstract: Lightweight models are essential for real-time speech enhancement applications. In recent years, there has been a growing trend toward developing increasingly compact models for speech enhancement. In this paper, we propose an Ultra-Lightweight U-net optimized by Network Architecture Search (UL-UNAS), which is suitable for implementation in low-footprint devices. Firstly, we explore the application of various efficient convolutional blocks within the U-Net framework to identify the most promising candidates. Secondly, we introduce two boosting components to enhance the capacity of these convolutional blocks: a novel activation function named affine PReLU and a causal time-frequency attention module. Furthermore, we leverage neural architecture search to discover an optimal architecture within our carefully designed search space. By integrating the above strategies, UL-UNAS not only significantly outperforms the latest ultra-lightweight models with the same or lower computational complexity, but also delivers competitive performance compared to recent baseline models that require substantially higher computational resources. Source code and audio demos are available at https://github.com/Xiaobin-Rong/ul-unas.
