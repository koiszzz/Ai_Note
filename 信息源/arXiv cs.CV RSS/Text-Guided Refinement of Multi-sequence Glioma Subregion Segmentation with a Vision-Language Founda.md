# Text-Guided Refinement of Multi-sequence Glioma Subregion Segmentation with a Vision-Language Foundation Model

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zach Eidex, Yu-nong Lin, Mojtaba Safari, Sean Pitroda, Ralph Weichselbaum, Zhen Tian, Xiaofeng Yang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05389)

------

arXiv:2608.05389v1 Announce Type: new

Abstract: Background: Accurate glioma subregion delineation is important for radiotherapy planning and longitudinal monitoring, but manual contour correction is time-consuming. Models such as nnU-Net may generalize imperfectly and lack clinician-directed text correction.

Purpose: We investigated adapting a three-dimensional (3D) vision-language foundation model for text-guided brain tumor segmentation refinement.

Methods: We developed a lightweight VoxTell-based framework. Pretrained VoxTell generated initial masks. Oracle prompts derived from segmentation errors encoded target, action, location, imaging evidence, edit size, and preservation constraints. Frozen Qwen/VoxTell prompt embeddings were injected through trainable projections into its multiscale decoder conditioning; other weights remained frozen. Training, validation, and testing used 901, 100, and 250 BraTS-GLI cases. Cross-dataset transfer was evaluated on 100 meningioma, metastasis, pediatric tumor, and UPENN-GBM cases.

Results: On the internal test set using post-contrast T1-weighted input, correct instructions improved subregion Dice similarity coefficient (DSC; enhancing tumor, edema, and necrotic/non-enhancing core) from $0.774\pm0.158$ to $0.796\pm0.137$. They outperformed blank prompts ($0.762\pm0.155$; Holm-adjusted $p<0.001$, $d_z=0.71$) and contradictory prompts ($0.770\pm0.163$; $p<0.001$, $d_z=0.48$). In cross-dataset testing, correct instructions improved DSC from $0.527\pm0.287$ to $0.550\pm0.278$ and outperformed contradictory instructions ($0.504\pm0.275$; $p<0.001$, $d_z=0.43$).

Conclusion: A 3D vision-language foundation model can perform instruction-guided refinement of glioma subregion segmentations. Sensitivity to correct, blank, and contradictory prompts suggests text-dependent contour editing rather than nonspecific post-processing, supporting further evaluation as a clinician-in-the-loop tool.
