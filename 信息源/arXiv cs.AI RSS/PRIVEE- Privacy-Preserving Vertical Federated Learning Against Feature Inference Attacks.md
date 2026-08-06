# PRIVEE: Privacy-Preserving Vertical Federated Learning Against Feature Inference Attacks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Sindhuja Madabushi, Haider Ali, Ahmad Faraz Khan, Rui Ning, Hongyi Wu, Chunsheng Xin, Ali. R. Butt, Jin-Hee Cho　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2512.12840)

------

arXiv:2512.12840v2 Announce Type: replace-cross

Abstract: Vertical Federated Learning (VFL) enables collaborative model training across organizations that share common user samples but hold disjoint feature spaces. Despite its potential, VFL is susceptible to feature inference attacks, in which adversarial parties exploit shared confidence scores (prediction probabilities) during inference to reconstruct private input features of other participants. To counter this threat, we propose PRIVEE (PRIvacy-preserving Vertical fEderated lEarning), a novel defense mechanism named after the French word priv\'ee, meaning "private." PRIVEE obfuscates confidence scores while preserving critical properties such as relative ranking and inter-score distances. Rather than exposing raw scores, PRIVEE only shares transformed representations, mitigating risk of reconstruction attacks without degrading model prediction accuracy. Extensive experiments show that PRIVEE achieves up to a 30 times increase in reconstruction error (MSE) against feature inference attacks, compared to the strongest competing defense, while preserving full predictive performance against advanced feature inference attacks.
