# Splat-Based Metal Artifact Reduction in Cone-Beam CT via Compact Attenuation Modeling

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Kiseok Choi, Jaemin Cho, Inchul Kim, Min H. Kim　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04764)

------

arXiv:2608.04764v1 Announce Type: new

Abstract: X-ray computed tomography (CT) suffers from severe metal artifacts when high-attenuation objects such as dental fillings or orthopedic implants are present. These artifacts originate from the polychromatic nature of X-rays, where attenuation varies strongly with photon energy and material composition, breaking the monochromatic assumption used by conventional reconstruction algorithms. Recent neural rendering approaches attempt to address this mismatch through differentiable polychromatic projection models, but they still struggle with smoothness bias, loss of fine structures, and prohibitive computation when extended to large-scale cone-beam CT. We introduce a splat-based metal artifact reduction framework that incorporates a physically grounded polychromatic forward model into a continuous Gaussian representation for cone-beam CT. Each Gaussian encodes the energy-dependent attenuation of the underlying material using a compact material parameterization, which enables efficient joint optimization of geometric and material properties without relying on a metal mask. This compact attenuation formulation captures the essential variation across biological tissues and metallic implants, allowing our model to explain metal-induced nonlinearity while preserving high-frequency structure. Experiments on simulated and real cone-beam CT scans show that our method converges significantly faster and suppresses metal artifacts more effectively than existing reconstruction and neural field-based approaches.
