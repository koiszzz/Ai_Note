# Energy-Tweedie: Score meets Score, Energy meets Energy

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Andrej Leban　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2512.23818)

------

arXiv:2512.23818v2 Announce Type: replace-cross

Abstract: Denoising and score estimation are classically linked through Tweedie's formula, which relates the posterior mean under Gaussian noise to the Stein score of the noisy marginal. In this work, we extend this perspective beyond Gaussian noise to a broad class of Gibbs (energy-based) noise distributions, with the generalized Gaussian family as the running example. We derive the Energy-Tweedie identity: when the denoising posterior is viewed through the lens of scoring rules, the path derivative of a kernel scoring rule defined by the noise potential recovers the Stein score of the noisy marginal. The rule's propriety is determined by the noise potential alone. Thus, the familiar correspondence between Gaussian noise, posterior means, squared loss, and Tweedie's formula is lifted to a distributional correspondence between Gibbs noise distributions, full posterior laws, kernel scoring rules, and the Energy-Tweedie identity, yielding one Tweedie-style relation for each noise potential. Among its consequences, this identity gives a posterior-samples-to-score route to score estimation, yields a principled criterion for estimating unknown noise parameters, and enables diffusion-style sampling along user-chosen paths through the noise-parameter space, supplying the score-based perspective on recent generative methods trained with scoring rules.
