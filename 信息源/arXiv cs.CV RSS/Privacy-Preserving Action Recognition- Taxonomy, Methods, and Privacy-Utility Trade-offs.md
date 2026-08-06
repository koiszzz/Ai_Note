# Privacy-Preserving Action Recognition: Taxonomy, Methods, and Privacy-Utility Trade-offs

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Sareer Ul Amin, Muhammad Ayaz, Muhammad Munsif, Sanghyun Seo　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04501)

------

arXiv:2608.04501v1 Announce Type: new

Abstract: Video surveillance in public safety, healthcare, and smart environments has made continuous human monitoring routine, raising real risks to personal identity and appearance. Privacy-preserving action recognition (PPAR) tackles the tension between the utility of video understanding and this exposure, and has drawn fast-growing interest. However, existing surveys remain narrow. Most catalog a single mechanism family, predate recent adversarial and hybrid work, or barely address evaluation. The result is a fragmented literature with incompatible threat models, inconsistent metrics, and no shared evaluation standard. We address this with a PRISMA-guided review of 32 peer-reviewed papers (2018--2026) drawn from 885 screened records. Methods sort into five families, namely adversarial learning (52%), skeleton-based (20%), cryptographic (12%), differential privacy (8%), and hybrid (8%), each with distinct privacy, utility, and efficiency trade-offs. Evaluation is the weak point. Only 10% of papers adopt a formal privacy definition, 65% rely on ad-hoc metrics, and 40% report an inconsistently defined cMAP. The trade-offs are steep. Skeleton methods reach about 85% accuracy but drop appearance, adversarial methods hold near 80% utility at moderate privacy (cMAP 0.9 to 0.3--0.5), and differential privacy often falls below 70%. Harder conditions stay under-tested, with fewer than 15% of papers checking cross-dataset generalization, under 10% testing adaptive attackers, and real-time edge deployment nearly untouched. We contribute a two-dimensional privacy-space taxonomy, a formal threat model, a comparative trade-off analysis, the PPAR Unified Evaluation Protocol, and a roadmap centered on benchmark standardization. With this grounding, we argue PPAR can move from prototypes toward deployment, with lessons extending to face recognition and medical imaging.
