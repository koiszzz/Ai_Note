# NeuMoSync: End-to-End Neuromodulatory Control for Plasticity and Adaptability in Continual Learning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Seyed Roozbeh Razavi Rohani, Khashayar Khajavi, Wesley Chung, Mandana Samiei, Mo Chen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04358)

------

arXiv:2608.04358v1 Announce Type: new

Abstract: Continual learning (CL) requires models to learn tasks sequentially, yet deep neural networks often suffer from plasticity loss and poor knowledge transfer, which can impede their long-term adaptability. Drawing high-level inspiration from global neuromodulatory mechanisms in the brain, we introduce Neuromodulation and Synchronization (NeuMoSync), a novel architecture that integrates dynamic, neuron-specific modulation into deep neural networks to enhance their adaptability and plasticity. NeuMoSync extends standard neural network architectures with learnable feature vectors for each neuron that track network-wide historical context and with a module operating at a higher level of abstraction. This module synthesizes neuron-specific signals, conditioned on both current inputs and the network's evolving state, to adaptively regulate activation dynamics and synaptic plasticity. Evaluated on diverse CL benchmarks, including memorization (Random Label CIFAR-10 and Random Label MNIST), concept drift (Shuffle CIFAR-10 and Shuffle Mini-ImageNet), class-incremental learning (Class Split ImageNet and Class Split CIFAR-100), and domain-incremental learning (Permuted MNIST), NeuMoSync demonstrates strong performance in retaining plasticity and achieves improvements in both forward and backward adaptation compared with existing methods. Ablation studies validate the necessity of each component, while analysis of the learned modulatory signals reveals interpretable coordination patterns across tasks. Our work underscores the potential of integrating global coordination mechanisms into deep learning systems to advance robust, adaptive continual learning. The code is publicly available at https://github.com/RoozbehRazavi/NeuMoSync.
