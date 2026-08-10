# ALTER: Modeling Longitudinal Changes via Regional Differencing for 3D CT Report Generation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Dongchen Li, Jitao Liang, Wei Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05615)

------

arXiv:2608.05615v1 Announce Type: new

Abstract: Computed tomography (CT) is widely used for clinical diagnosis and longitudinal follow-up, yet automatically generating accurate and complete radiology reports from three-dimensional (3D) CT remains challenging. Existing methods improve fine-grained correspondence between images and text by modeling anatomical regions, but remain centered on the current examination. Consequently, patient-specific longitudinal changes within individual regions remain insufficiently modeled. Meanwhile, interval changes are often distributed across multiple anatomical regions, complicating a coherent assessment of the overall longitudinal state. We propose Anatomically Localized Temporal Evidence Representation (ALTER) to address these limitations. Global Prior Integration (GPI) incorporates the prior CT and report to establish historical context for the current examination. Regional Proxy Differencing (RPD) enables each current anatomical region to retrieve a historical proxy from a single shared encoding of the prior volume and to derive localized interval evidence. Interval Change Fusion (ICF) further combines current abnormality states with region-distributed differences, converting their joint representation into change-aware soft prompts that guide report generation. ALTER achieves state-of-the-art results on most evaluation metrics across the RadGenome-ChestCT validation and CTRG-Chest-548K test sets. Code and data preprocessing details are available at https://github.com/peytonkarlie/ALTER/tree/main.
