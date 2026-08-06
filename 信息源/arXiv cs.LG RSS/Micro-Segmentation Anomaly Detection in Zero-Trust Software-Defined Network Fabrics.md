# Micro-Segmentation Anomaly Detection in Zero-Trust Software-Defined Network Fabrics

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ashly Joseph　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02627)

------

arXiv:2608.02627v1 Announce Type: cross

Abstract: Zero Trust Architecture (ZTA) principles need rigorous network segmentation and ongoing verification to reduce implicit trust and lateral threat propagation. This paper investigates anomaly detection in software-defined networking (SDN) systems by micro-segmentation, using deep learning models to detect harmful actions that evade traditional coarse-grained monitoring. Two models are developed: a Vision Transformer (ViT) and a 1D Convolutional Neural Network (1D-CNN), which are used to both raw and micro-segmented network flow data. Experimental findings from a simulated zero-trust SDN dataset indicate that micro-segmentation substantially improves detection accuracy. The models trained on segmented input demonstrate enhanced accuracy and F1-scores (F1 = 0.95) compared to those utilizing unsegmented raw data (F1 = 0.90). The ViT-based detector marginally surpasses the 1D-CNN, particularly in recognizing nuanced lateral movement patterns that are unnoticed in unprocessed data. These findings highlight the significance of including micro-segmentation inside zero-trust networks to enhance intrusion detection efficacy. Future efforts will broaden this methodology to include extensive real-world network datasets and dynamic online segmentation techniques.
