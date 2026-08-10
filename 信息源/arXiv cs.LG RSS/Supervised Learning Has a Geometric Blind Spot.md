# Supervised Learning Has a Geometric Blind Spot

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Vishal Rajput　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2604.21395)

------

arXiv:2604.21395v3 Announce Type: replace

Abstract: Ordinary supervised training minimises the task loss and then stops. It never pays for how far the representation moves when the input is nudged along directions that helped fit training labels---including directions that are nuisance at deployment. We call that leftover sensitivity the geometric blind spot of empirical risk minimisation. In a Gaussian linear model where the nuisance enters the label conditional and the decoder has finite Lipschitz constant, population MSE forces a floor on linearised representation drift. The same distinction predicts a failure mode of adversarial training: Jacobian magnitude can fall while clean class geometry worsens. We track that dissociation with a class-layout score and study isotropic encoder matching---penalising the squared distance between phi(x) and phi(x+delta) for Gaussian delta under a task-loss cap---when nuisance axes are unknown. On a Vision Transformer trained from scratch on CIFAR-10, projected gradient descent attains the smallest Jacobian Frobenius yet the worst clean layout score (1.353+/-0.020 over three seeds), above task-only training (1.093); isotropic matching attains the best (0.904). The drift floor is proved for the linear-Gaussian case; deep nets and cross-task orderings are protocol empirics. Design rule: report class-layout geometry beside the task score; prefer isotropic encoder matching when axes are unknown.
