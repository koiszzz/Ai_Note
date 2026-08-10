# HyTBE: Hyperbolic Target-Background Expert Model for Cross-Domain Infrared Small Target Detection

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Aohua Li, Jin Kuang, Yubing Lu, Pingping Liu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05771)

------

arXiv:2608.05771v1 Announce Type: cross

Abstract: Infrared small target detection (IRSTD) has achieved substantial progress under domain-consistent evaluation, yet detector performance often degrades markedly when generalizing to unseen infrared domains. Existing methods primarily improve detection by enhancing target responses and suppressing background interference. However, when trained on only a limited set of source domains, their learned decision rules are inevitably established from a restricted range of source-domain target-background relation patterns. We formulate this cross-domain failure as target-background relation shift: unseen domains may exhibit relation patterns that are not observed during training, thereby weakening the discriminative capability learned from the source domains. To address this problem, we propose HyTBE, a Hyperbolic Target-Background Expert model that expands source-domain relation patterns and adaptively adjusts visual representations using explicit relation cues. The Target-Background Relation Intervention selectively perturbs either targets or backgrounds, broadening the observable relation patterns during training while maintaining valid supervision. Subsequently, the Hyperbolic Relation Modeling maps multi-scale visual cues into a Poincar\'e ball and characterizes the target-background relation of each feature token according to its relative distances to the target and background anchors. The Hyperbolic-guided MoE Adapter further uses these hyperbolic relation representations to calibrate multi-scale visual features and aggregate expert-specific feature corrections for different relation patterns. Leave-one-domain-out experiments on NUAA-SIRST, NUDT-SIRST, and IRSTD-1K demonstrate that HyTBE achieves stronger cross-domain generalization than competitive baselines.
