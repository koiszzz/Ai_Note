# When Oracle Conditioning Misleads Deployment: Conditioning-Availability Bias in Echocardiographic Segmentation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Dang P. M. Cao, Hieu D. Pham, Hieu Pham　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03342)

------

arXiv:2608.03342v1 Announce Type: cross

Abstract: Conditional segmentation models may be trained and evaluated with auxiliary signals cleaner than those available at deployment. We study this protocol-level manifestation of shortcut learning and auxiliary-variable shift in phase-conditioned echocardiographic segmentation. The complementary gap pair measures loss on the deployable oracle-estimated pathway and probes sensitivity on the oracle-random pathway. On held-out CAMUS data, one strong-cyclic, oracle-selected run fails severely with estimated phase, while sensitivity to incorrect phase persists across three runs. On EchoNet-Dynamic, the current estimator remains usable, but random-phase testing reveals strong latent sensitivity. Deployment-aware checkpoint selection and phase perturbation reduce both gaps with little change in mean Dice. Exploratory subgroup analyses quantify variation across measured strata, and a downstream ejection fraction (EF) audit shows that recovering segmentation does not necessarily recover EF error or signed bias. Together, the gaps test whether oracle-conditioned performance survives the inference pathway actually available at deployment.
