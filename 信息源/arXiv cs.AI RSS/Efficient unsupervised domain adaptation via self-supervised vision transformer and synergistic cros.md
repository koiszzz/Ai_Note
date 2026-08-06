# Efficient unsupervised domain adaptation via self-supervised vision transformer and synergistic cross-domain alignment

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ali Abedi, Q. M. Jonathan Wu, Ning Zhang, Farhad Pourpanah　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2407.21311)

------

arXiv:2407.21311v2 Announce Type: replace-cross

Abstract: Unsupervised domain adaptation (UDA) aims to mitigate domain shift, where the distribution of labeled source data differs from that of unlabeled target data. Despite recent advances, existing methods often rely on fine-tuning large backbone models, which leads to high computational cost and limits scalability in resource-constrained environments. This limitation highlights the need for parameter-efficient approaches that maintain strong performance with reduced training complexity. Self-supervised foundation models such as DINOv2 provide highly transferable representations and raise the question of whether effective domain adaptation can be achieved without full fine-tuning. To address this question, we propose Efficient Unsupervised Domain Adaptation (EUDA), a parameter-efficient framework that leverages a frozen DINOv2 backbone as a feature extractor and updates only a lightweight bottleneck and classification head. We also adopt a synergistic domain alignment loss (SDAL), which combines cross-entropy (CE) and maximum mean discrepancy (MMD) to promote both discriminative learning and cross-domain alignment. Experimental results on Office-Home, Office-31, VisDA-2017, and DomainNet demonstrate that EUDA achieves competitive performance across diverse domain complexities, while reducing the number of trainable parameters by 42 to 99.7%. These results show the suitability of the proposed method for resource-constrained and distributed environments.
