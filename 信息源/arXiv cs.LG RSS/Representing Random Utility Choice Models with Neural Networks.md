# Representing Random Utility Choice Models with Neural Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ali Aouad, Antoine D\'esir　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2207.12877)

------

arXiv:2207.12877v3 Announce Type: replace

Abstract: Motivated by the successes of deep learning, we propose a class of neural network-based discrete choice models, called RUMnets, inspired by the random utility maximization (RUM) framework. This model formulates the agents' random utility function using a sample average approximation. We show that RUMnets sharply approximate the class of RUM discrete choice models: any model derived from random utility maximization has choice probabilities that can be approximated arbitrarily closely by a RUMnet. Reciprocally, any RUMnet is consistent with the RUM principle. Our approach is closely related to ranking-based models and mixtures of multinomial logits proposed in previous literature, in a more general contextual setting. We derive an upper bound on the generalization error of RUMnets fitted on choice data, and provide theoretical insights on their ability to predict choices on new, unseen data depending on critical parameters of the dataset and architecture. The models are estimated by leveraging open-source libraries for training neural networks. We find that RUMnets are competitive against several choice modeling and machine learning methods in terms of predictive accuracy on two real-world datasets. We also conduct synthetic experiments that isolate the effects of each component of the architecture.
