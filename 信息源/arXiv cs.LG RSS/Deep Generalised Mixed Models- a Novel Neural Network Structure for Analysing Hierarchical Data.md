# Deep Generalised Mixed Models: a Novel Neural Network Structure for Analysing Hierarchical Data

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Nina van Gerwen, Dimitris Rizopoulos, Manon Hillegers, Loes Keijsers, Sten Willemsen　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.05930)

------

arXiv:2608.05930v1 Announce Type: cross

Abstract: The experience sampling method (ESM) is a longitudinal research design where participants report their thoughts, emotional states and behaviours multiple times a day. Our work is motivated by such data collected by the GrowIt! app, which was released to investigate daily emotions among adolescents during the COVID-19 pandemic. Current procedures to analyse ESM data face various challenges. While standard statistical techniques may not scale well to a high-dimensional setting, machine learning procedures can give biased results due to selection bias introduced by missingness. In our motivating dataset, adolescents dropped out due to previous strong feelings of negative emotions. Hence, the implied missing data are of the missing-at-random type that standard machine learning procedures cannot accommodate. We develop a novel neural network architecture that generalises mixed effects models to deep learning to overcome these challenges. It allows semi-parametric and flexible modelling of data's mean and correlation structure through fixed and random effects. For estimation, we use an adaptation of variational auto-encoders and a Bayesian data augmentation algorithm. Through this approach, the model can accommodate longitudinal outcomes following generic distributions, scale well to high-dimensional settings and provide valid inference when data are missing-at-random. We applied the Deep Generalised Mixed Model to the GrowIt! study and various simulations. The results show potential for the Deep Generalised Mixed Model, yet suboptimal performance due to model instability.
