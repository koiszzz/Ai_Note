# Cardiac MRI Through-Plane Super-Resolution Guided by Reference and Memory

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Shaoming Pan (University of Texas at Arlington), Chenchuhui Hu (University of Texas at Arlington), Leon Axel (New York University Grossman School of Medicine), Meng Ye (University of Texas at Arlington)　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2607.07581)

------

arXiv:2607.07581v2 Announce Type: replace

Abstract: Clinical cardiac MRI is commonly acquired with high in-plane resolution but coarse through-plane resolution to reduce scan time and accommodate breath-hold and cardiac-motion constraints, which limits 3D analysis and diagnostic accuracy. We propose STRMSR, a reference- and memory-guided through-plane super-resolution (SR) framework that reconstructs high-resolution (HR) cardiac volumes by leveraging HR reference views acquired from the same subject and intermediate SR results as the memory. Our method uses coarse-to-fine contextual matching to establish robust correspondence between low-resolution target and reference/memory images under spatial misalignment. A learnable patch-wise dynamic feature aggregation module predicts content-adaptive mixture weights for each local patch, effectively fusing dynamic information while suppressing unreliable feature transfers. The intermediate SR results stored in the memory bank ensure slice-to-slice consistency for the super-resolved 3D volume. Experiments on the WHS cardiac MRI dataset under two reference protocols, orthogonal-plane views and long-axis chamber views, demonstrate consistent improvements over baselines at 4x and 8x upsampling factors.Code is available at https://github.com/030108ming/STRMSR
