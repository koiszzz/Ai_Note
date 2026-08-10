# Bayesian adaptively-weighted ensembles for few-shot abdominal segmentation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Abbas Al-Sabbagh, Shalom F. Mushtaq, Tom\'as M. da Silva, Kushagra Soni, Binawei Gbamila, Sri Atluri, Qianye Yang, Yipeng Hu, Claire C. Villette, Shaheer U. Saeed　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05815)

------

arXiv:2608.05815v1 Announce Type: new

Abstract: Few-shot learning has emerged as a promising approach for anatomical segmentation when labelled data are scarce. However, different few-shot learning algorithms exhibit complementary strengths and weaknesses, with performance varying across anatomical targets and institutions. Existing few-shot segmentation ensembles, that combine predictions from multiple algorithms, typically employ fixed weighting schemes and therefore cannot adjust model contributions according to the target domain. In this work, we propose a Bayesian adaptively-weighted ensemble framework for segmentation under label scarcity and domain shift. Multiple few-shot segmentation algorithms are first adapted using a small labelled support set. Bayesian optimisation is then used to automatically identify ensemble weights that maximise segmentation performance on a target-domain validation set. The learned weights are subsequently fixed and applied to combine predictions on previously unseen query images from the target domain. The proposed framework is evaluated on the Cross-institution Male Pelvic Structures dataset using held-out anatomical structures and institutions to simulate simultaneous label scarcity and institutional domain shift. Results demonstrate statistically significant improvements over individual few-shot learners, fixed-weight ensembles, training-from-scratch baselines and recent state-of-the-art ensembling approaches. By adapting model contributions to the target anatomy and institutional domain, the proposed framework provides a practical mechanism for deploying segmentation systems to new clinical sites under severe annotation constraints.
