# Distributionally Robust Transfer Learning with Structurally Missing Covariates, with Application to Cross-National Cardiac Arrest Prediction

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Siqi Li, Chuan Hong, Ziye Tian, Benjamin Sieu-Hon Leong, Koshi Nakagawa, Hideharu Tanaka, Sang Do Shin, Khuong Quoc Dai, Do Ngoc Son, Marcus Eng Hock Ong, Nan Liu, Molei Liu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：stat.AP　|　原文：[打开链接](https://arxiv.org/abs/2605.24212)

------

arXiv:2605.24212v2 Announce Type: replace-cross

Abstract: Deploying clinical prediction models across healthcare systems often fails when key training covariates are unavailable at deployment and labeled outcomes are limited in the target domain. For example, high-performing models for out-of-hospital cardiac arrest (OHCA) rely on detailed prehospital measurements routinely collected in high-resource settings but unavailable in many international registries. Existing methods either discard missing covariates, sacrificing predictive information, or rely on untestable assumptions about their target distribution. We propose DRUM (\underline{D}istributionally \underline{R}obust \underline{U}nsupervised transfer learning with structurally \underline{M}issing covariates), a framework that transfers prediction models to target populations where certain covariates are structurally absent and outcome labels are unavailable. DRUM partitions covariates into shared components ($X$), observed across all settings, and missing components ($A$), observed only in the source. Rather than imputing missing covariates, DRUM optimizes worst-case predictive performance over the unknown target distribution of $A \mid X$ using a neural network generator, with a robustness parameter controlling allowable deviation from the source conditional. We further develop a bias correction procedure that reduces sensitivity to nuisance estimation error. Simulations show substantial improvements in both mean and worst-case prediction error under distribution shift. Applied to cross-national OHCA prediction, transferring models from a US registry to multiple Asian registries where prehospital variables are unrecorded, DRUM yields better-calibrated predictions and improved clinical classification performance across sites.
