# Bias Analysis of L2 Speaking Assessment Systems Using Concept Activation Vectors

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Arya Labroo, Mengjie Qian, Kate Knill　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.06300)

------

arXiv:2608.06300v1 Announce Type: new

Abstract: Automatic speaking assessment systems are increasingly deployed in high-stakes settings to mark second language (L2) learners' speaking tests, making it critical to show that their scores depend on speaking proficiency rather than irrelevant speaker attributes such as first language (L1) or age. Transformer-based foundation models have improved the accuracy of these L2 speaking graders, but their black-box representations make fairness and interpretability analysis more difficult. Building on prior work that used Concept Activation Vectors (CAVs) to detect bias towards unwanted attributes (`concepts') in feature-based graders, we extend CAV-based analysis to two neural speaking assessment systems: a text-based BERT grader and a speech-and-text multimodal grader based on Whisper. CAVs represent human-interpretable concepts as directions in a model's activation space, allowing us to distinguish between whether a concept is encoded in a model's internal representations and whether it influences the predicted score, the latter quantified using a gradient-based sensitivity metric. Since CAVs rely on linear separability, which is less likely in complex neural embedding spaces, we also investigate whether sparse autoencoders (SAEs) provide cleaner concept directions by learning CAVs in a sparse latent space and mapping them back to activation space. Our analysis shows that concept recoverability depends strongly on the representation and architecture being probed, rather than on the concept alone. Sensitivity to concepts is also architecture-dependent. SAEs make concepts more linearly recoverable, but attenuate the original activation-space sensitivity, especially in low-dimensional layers. These findings highlight the need to distinguish concept recoverability from concept influence when auditing bias in speaking assessment systems.
