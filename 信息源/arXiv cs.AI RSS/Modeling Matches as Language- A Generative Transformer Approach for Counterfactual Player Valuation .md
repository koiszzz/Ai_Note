# Modeling Matches as Language: A Generative Transformer Approach for Counterfactual Player Valuation in Football

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Miru Hong, Minho Lee, Geonhee Jo, Hyeokje Cho, Hyunsung Kim, Pascal Bauer, Sang-Ki Ko　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2603.15212)

------

arXiv:2603.15212v2 Announce Type: replace

Abstract: Evaluating football player transfers is challenging because player actions depend strongly on tactical systems, teammates, and match context. Despite this complexity, recruitment decisions often rely on static statistics and subjective expert judgment, which do not fully account for these contextual factors. This limitation stems largely from the absence of counterfactual simulation mechanisms capable of predicting outcomes in hypothetical scenarios. To address these challenges, we propose ScoutGPT, a generative model that treats football match events as sequential tokens within a language modeling framework. Utilizing a NanoGPT-based Transformer architecture trained on next-token prediction, ScoutGPT learns the dynamics of match event sequences to simulate event sequences under hypothetical lineups, demonstrating superior predictive performance compared to existing baseline models. Leveraging this capability, the model employs Monte Carlo sampling to enable counterfactual simulation, allowing for the assessment of unobserved scenarios. Experiments on K League data show that simulated player transfers lead to measurable changes in offensive progression and goal probabilities, indicating that ScoutGPT captures player-specific impact beyond traditional static metrics.
