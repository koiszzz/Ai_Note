# When Modalities Fail to Tango: Conformal Backdoor Detection in Multimodal Contrastive Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yiming Chen, Kemou Li, Haiwei Wu, Jiantao Zhou　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04052)

------

arXiv:2608.04052v1 Announce Type: cross

Abstract: Backdoor attacks in multimodal contrastive learning (MCL) have garnered growing attention in recent years, as many downstream tasks critically depend on pre-trained MCL models. Existing detection-based defenses predominantly rely on the CLIPScore metric, under the assumption that poisoned pairs exhibit lower semantic similarity between the image and the caption. However, we identify two critical flaws remaining in existing methods: (1) the substantial overlap between CLIPScore distributions of benign and poisoned pairs undermines the reliability of this metric, and (2) fixed-threshold detection cannot provide statistical guarantees for ambiguous samples within overlapping regions. To overcome these limitations, we propose integrating conformal prediction (CP), a statistical framework that quantifies uncertainty through nonconformity scores (NCSs), to establish provable confidence bounds for detecting poisoned image-caption pairs. Building on CP, we introduce CASCADE, a novel two-stage Coarse-to-Fine Conformal Backdoor Detection framework. The coarse-grained stage uses cross-modality consistency to identify high-confidence benign and poisoned pairs. In the fine-grained stage, a reference set is constructed from high-confidence poisoned pairs, and instance-level NCSs based on text-space similarity are computed for each sample in the unidentified subset. These NCSs measure conformity to the poisoning distribution and enable precise identification of latent poisoned pairs within the unidentified subset. Extensive experiments on the large-scale CC3M dataset demonstrate that CASCADE achieves an average FPR of 5.79% at 100% TPR and an average AUROC of 0.9867 across diverse attacks, while remaining effective against adaptive attacks.
