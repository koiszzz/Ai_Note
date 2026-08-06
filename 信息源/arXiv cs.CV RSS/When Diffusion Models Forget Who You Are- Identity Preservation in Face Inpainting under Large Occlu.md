# When Diffusion Models Forget Who You Are: Identity Preservation in Face Inpainting under Large Occlusions

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Feng Ding, Shuhuai Xie, Yue Zhou, Yulan Zhang, Guopu Zhu, Mengyao Xiao　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04820)

------

arXiv:2608.04820v1 Announce Type: new

Abstract: Face inpainting with diffusion models has recently achieved impressive visual quality, yet preserving identity fidelity under significant occlusion and conflicting text guidance remains a major challenge. To address this issue, we present Reference Semantic Inpainting for Face (ReSem-Face), a cascaded diffusion framework that introduces an explicit identity-conditioned semantic prior for multi-reference face inpainting. Our approach distills representative identity features from multiple references to reconstruct missing semantic regions, which then guide the diffusion process through a multi-stream conditioning architecture. This design provides strong semantic constraints when pixels are absent and stabilizes identity reconstruction while remaining compatible with prompt-driven edits. Experiments on CelebAHQ-IDI-5 and VGGFace2 demonstrate that ReSem-Face yields more reliable identity-preserving completion under severe semantic masks and improves text-controlled editing quality compared with representative baselines.
