# Deformable Medical Image Registration with KAN-based Implicit Neural Representations

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Nikita Drozdov, Marat Zinovev, Dmitry Sorokin　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2509.22874)

------

arXiv:2509.22874v3 Announce Type: replace

Abstract: Deformable image registration (DIR) is central to medical image analysis, supporting spatial alignment for longitudinal studies and multi-modal fusion. Learning-based methods such as CNNs and transformers provide rapid inference but often require large training datasets and can underperform classical iterative methods for specific anatomies or modalities. Implicit neural representations (INRs) offer a data-efficient alternative by modeling deformation fields as continuous coordinate-to-displacement mappings, yet their per-pair optimization makes runtime efficiency and robustness to initialization essential. We introduce KAN-IDIR and RandKAN-IDIR, the first Kolmogorov--Arnold network (KAN)-based INR framework for pairwise-optimized, resolution-independent DIR, designed to improve seed stability and resource efficiency without dataset-level training. KANs use learnable activation functions that are well suited to continuous, physically structured deformation fields. RandKAN-IDIR further reduces cost through randomized basis sampling, preserving registration quality with fewer basis functions. We evaluate the methods on lung CT, brain MRI, and cardiac MRI datasets against pairwise INR approaches, dataset-trained deep models, and classical baselines. KAN-IDIR and RandKAN-IDIR achieve the highest accuracy among INR-based methods, with low computational overhead and superior stability across random initializations. RandKAN-IDIR slightly outperforms adaptive basis selection variants while avoiding their additional training-time complexity. This makes the approach practical for reproducible clinical research use. Source code is available at https://github.com/anac0der/KAN-IDIR.
