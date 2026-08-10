# Ordered Diffusion for 3D Human Registration

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Mattia Masiero, Ilya A. Petrov, Daniel Cremers, Gerard Pons-Moll, Riccardo Marin　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05804)

------

arXiv:2608.05804v1 Announce Type: new

Abstract: 3D human registration has historically been treated as a regression task, assuming a unique ground-truth alignment exists between the template and an input point cloud. In reality, acquisition noise, occlusions, and unknown soft tissue dynamics introduce inherent ambiguity into human scans. Regression-based methods consequently converge to an average prediction, often failing to represent a plausible geometry. In our work, we embrace such uncertainty by modeling the registration as a distribution of alignments. We propose ODin, which formulates registration as a 3D diffusion process that generates a point cloud aligned with the target geometry while preserving template semantics through consistent point ordering. To achieve this, ODin relies on global, local, and positional conditioning, guiding each point to its correct location. Our experiments demonstrate that such a generative formulation not only outperforms its regression-based baseline, but also establishes a new state of the art, surpassing highly engineered methods while reducing the registration time by two-thirds. Pre-trained models and code are available at https://riccardomarin.github.io/odin/.
