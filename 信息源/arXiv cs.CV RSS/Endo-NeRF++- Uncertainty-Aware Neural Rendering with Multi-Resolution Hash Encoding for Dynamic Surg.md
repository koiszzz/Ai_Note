# Endo-NeRF++: Uncertainty-Aware Neural Rendering with Multi-Resolution Hash Encoding for Dynamic Surgical Scene Reconstruction

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Gousia Habib, Laura Ruotsalainen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：eess.IV　|　原文：[打开链接](https://arxiv.org/abs/2607.27825)

------

arXiv:2607.27825v2 Announce Type: replace-cross

Abstract: Reconstructing dynamic surgical scenes is crucial for robot-assisted minimally invasive surgery; however, it continues to be difficult because of tissue deformation, occlusions, specular reflections, and restricted viewpoints. In this study, we introduce Endo-NeRF++, a neural rendering framework that accounts for uncertainty in the reconstruction of dynamic surgical scenes. Expanding on EndoNeRF, the suggested approach incorporates multi-resolution hash-grid encoding, temporal feature merging, and uncertainty-informed adaptive sampling to enhance reconstruction accuracy and temporal coherence in deformable endoscopic scenes.The multi-resolution hash-grid representation within the framework effectively captures both coarse and fine anatomical details, while temporal feature blending ensures stable reconstruction during tissue deformation and surgical tool occlusions. Additionally, uncertainty-driven adaptive sampling assigns more samples to uncertain areas to enhance rendering quality and geometric coherence. Experiments on robotic surgical video sequences demonstrate that the proposed uncertainty-guided adaptive sampling improves PSNR by up to 1.22dB (4.3%), increases SSIM by up to 5.3%, and reduces LPIPS by up to 55.1% compared with the EndoNeRF baseline.
