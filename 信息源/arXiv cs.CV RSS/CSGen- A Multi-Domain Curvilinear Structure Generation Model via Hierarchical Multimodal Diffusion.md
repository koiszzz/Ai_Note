# CSGen: A Multi-Domain Curvilinear Structure Generation Model via Hierarchical Multimodal Diffusion

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zhe Shan, Ziming Yang, Lei Zhou, Wenwen Zhang, Cong Lin, Xia Xie　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04655)

------

arXiv:2608.04655v1 Announce Type: new

Abstract: Curvilinear structure analysis is an important and fundamental task in multimedia. However, the controllable generation of images with precise curvilinear structure objects remains an open challenge. To address this, we propose CSGen, a hierarchical multimodal diffusion model that synthesizes high-fidelity images precisely aligned with multiple control conditions. The CSGen is built upon three key innovations: 1) We construct a multi-domain and multimodal dataset, including over 24K samples from 5 domains and 7 different types of annotations, to train the unified generation model. 2) We propose a novel hierarchical progressive control strategy that decouples topology clues from visual context by a phased signal injection, mitigating semantic drift while ensuring the topological integrity of sparse structures. 3) We design a sparsity-aware loss re-weighting mechanism to address the extreme sparsity of curvilinear structures, significantly enhancing the attention on thin and fragile structures during optimization. Extensive experiments demonstrate that CSGen generates images with superior structure accuracy and visual realism, significantly improving downstream segmentation performance while maintaining robustness across diverse prompts. Our results confirm CSGen as a scalable, data-centric paradigm for the analysis of complex curvilinear structures in diverse multimedia applications. Code and dataset are available at https://github.com/ShanZard/CSGen.
