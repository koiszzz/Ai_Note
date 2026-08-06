# Delta-Diffusion: Modeling Longitudinal Brain Amyloid-PET Trajectories via Conditional Poisson Diffusion Bridge

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yongheng Sun, Minhui Yu, Mengqi Wu, Maureen Kohi, Mingxia Liu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：eess.IV　|　原文：[打开链接](https://arxiv.org/abs/2606.22216)

------

arXiv:2606.22216v2 Announce Type: replace-cross

Abstract: While longitudinal brain PET imaging is the gold standard for quantifying the spatiotemporal accumulation of Beta-amyloid, its widespread clinical utility is constrained by high operational costs and cumulative radiation risks. Recent deep generative models show promise in longitudinal image synthesis; however, they often fail to capture subtle pathological progression due to identity drift and a persistent bias toward trivially replicating baseline signal intensities rather than modeling temporal transition. To this end, we propose Delta-Diffusion, a novel progression-aware framework that redefines longitudinal PET synthesis as a conditional Poisson Diffusion Bridge (PDB) process. Unlike standard diffusion models that start from Gaussian noise, our PDB formulation is mathematically anchored to the subject's baseline PET, effectively transforming the generative task into a conditional distribution transition of the amyloid trajectory. To handle heteroscedastic nature of PET imaging, we introduce a physically-grounded Poisson perturbation within a Diffusion Transformer (DiT). This architecture uses adaptive scale-shift modulation to precisely calibrate the synthesis with the elapsed clinical interval and structural MRI context. A volume-of-interest balanced objective is designed to emphasize sparse, high-risk regions of amyloid accumulation. Validated on two cohorts with 542 subjects, Delta-Diffusion demonstrates superior performance in capturing longitudinal variations in amyloid deposition compared to state-of-the-art methods, offering a robust computational framework for tracking disease progression.
