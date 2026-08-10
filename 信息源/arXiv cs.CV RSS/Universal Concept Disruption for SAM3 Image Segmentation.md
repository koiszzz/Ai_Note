# Universal Concept Disruption for SAM3 Image Segmentation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Hao Wang, Yuxuan Zhang, Wei Yang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05983)

------

arXiv:2608.05983v1 Announce Type: new

Abstract: SAM3 extends promptable segmentation from geometry-driven mask prediction to open-vocabulary concept segmentation, where a text-conditioned grounding model decides whether a concept is present and segments all matching instances. While this presence-gated design improves concept-level prediction, its adversarial robustness remains unexplored. In this paper, we introduce Universal Concept Disruption (UCD), the first universal cross-concept adversarial attack tailored to SAM3 image segmentation. UCD learns a single bounded image perturbation from (image, noun-phrase) pairs and attacks SAM3 as an integrated concept-grounding system. It jointly disrupts the text-conditioned input path, maximizes divergence in prompt-shared visual features, suppresses the final presence-gated concept scores, and corrupts the spatial validity of retained masks through area collapse and clean-mask Dice disruption. Across SACo-Gold, LVIS, RefCOCO, PhraseCut, and OpenImages datasets, UCD consistently outperforms all baselines under a matched evaluation protocol, reducing average mask AP from 59.43 to 18.73 and average cgF1 from 50.32 to 20.49. The learned perturbation also transfers to SAM3.1 and to SAM3 video inference without re-optimization, while prompt ensembling, lightweight head fine-tuning, and temporal filtering provide limited recovery.
