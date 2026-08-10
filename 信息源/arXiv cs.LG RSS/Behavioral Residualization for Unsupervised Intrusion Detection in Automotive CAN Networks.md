# Behavioral Residualization for Unsupervised Intrusion Detection in Automotive CAN Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Chandan Hegde, Mukundh R Reddy　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.05548)

------

arXiv:2608.05548v1 Announce Type: cross

Abstract: Modern vehicles rely on the Controller Area Network (CAN) bus, whose design prioritizes low cost and real-time performance but provides no message authentication or encryption. An attacker with physical or remote access can therefore inject arbitrary frames, making intrusion detection an important defense-in-depth mechanism.

Most published CAN intrusion detection systems rely on presence-based features, such as novel arbitration IDs, frozen payload bytes, or anomalous DLC values. These features perform well on public datasets containing easily separable attacks but fail when attackers reuse legitimate arbitration IDs. We present per-ID behavioral residualization, a CAN-specific representation that extracts fourteen temporal, protocol, and payload features from sliding windows and residualizes them against each arbitration ID's normal baseline. Our central claim is that this representation, rather than any individual detector, drives the performance gains.

Across six unsupervised detectors and two datasets, residualization improves mean F1 in the majority of evaluations (21/24 on HCRL and 30/36 on ROAD across five seeds). On the more realistic ROAD dataset, where attacks reuse legitimate IDs, the representation achieves recall >= 0.99 with high ROC-AUC on targeted signal-manipulation attacks. Two limitations are explicitly quantified: novel-ID flooding (HCRL DoS, F1 = 0.02) and cross-ID fuzzing (ROAD, F1 = 0.27), defining the measured coverage boundary of the proposed representation.
