# Understanding Fault Tolerance of Adversarially Robust Pruned Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Manali Dangarikar, Cory Merkel　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04173)

------

arXiv:2608.04173v1 Announce Type: new

Abstract: Deep neural networks (DNNs) deployed on resource-constrained neuromorphic hardware face three concurrent challenges: the need for model compression through pruning, vulnerability to adversarial input perturbations, and susceptibility to hardware-induced weight faults such as stuck-at-zero errors. While each of these factors has been studied in isolation, their combined effects on model reliability have received little attention. This paper presents an empirical investigation of how pruning, adversarial training, and hardware fault injection interact to affect the robustness of convolutional neural networks. Using a compact three-layer CNN trained on MNIST, we conduct three experiments: (1) comparing the fault tolerance of naturally and adversarially trained models under simultaneous hardware faults and adversarial attacks, (2) evaluating how pruning affects adversarial robustness, and (3) characterizing the joint accuracy surface across fault rates, adversarial perturbation magnitudes, and pruning levels. Our results show that adversarial training improves robustness against input perturbations but increases sensitivity to stuck-at-zero weight faults. Contrary to intuition, pruning did not significantly increase fault sensitivity, and varying the pruning level had little effect across fault rates and attack strengths. These results highlight the need to jointly consider adversarial robustness and hardware reliability.
