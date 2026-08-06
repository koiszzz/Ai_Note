# ScoreField: Neural Inverse Scattering with Score-Based Generative Priors

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Wenhan Guo, Yuan Gao, Yu Sun　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：eess.IV　|　原文：[打开链接](https://arxiv.org/abs/2608.02937)

------

arXiv:2608.02937v1 Announce Type: cross

Abstract: Designing an effective electromagnetic inverse-scattering solver requires faithful enforcement of nonlinear full-wave physics together with an expressive prior on the unknown permittivity contrast. We propose ScoreField, a neural inverse scattering framework that integrates coupled implicit neural representations (INRs) with a pretrained score-based generative prior. ScoreField employs two INRs to parameterize the permittivity contrast and the induced current fields, and jointly optimize them under the Lippmann-Schwinger equations. In addition to the implicit regularization by the INR architecture, the score model provides a learned prior gradient on the contrast, which is propagated to the contrast INR through the chain rule. This formulation enables ScoreField to effectively handle strong multiple scattering, where nonlinear wave interactions require accurate modeling of the coupled full-wave physics. We evaluate ScoreField on simulated weak- and strong-scattering benchmarks, the canonical Austria phantom, and experimental Fresnel measurements. We note that ScoreField significantly improves reconstruction fidelity and suppresses artifacts relative to classical full-wave methods and deep learning baselines, achieving an average PSNR improvement of $1.8 \, \mathrm{dB}$ over the best competing method on real Fresnel data.
