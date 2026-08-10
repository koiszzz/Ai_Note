# HERA: Historical Evidence Routing Adapter for Physical Prediction in Latent World Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yuanruyi, Yue Cao, Haojia Gao, Guanqiu Guo, Ziyuezhang, Shangqin, Junbo Tan, Bokui Chen, Zhuo Zou, Xueqian Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05523)

------

arXiv:2608.05523v1 Announce Type: new

Abstract: Predictive video models have emerged as promising world models by learning latent visual dynamics from large-scale video. Yet these models remain challenged by physical events under occlusion, where later predictions may depend on object evidence that is no longer available in the current view. Addressing this challenge requires historical evidence not only to be preserved but also to remain accessible when it becomes relevant to a subsequent prediction. Existing approaches mainly enlarge the temporal context, cache generic video features, or impose explicit object-centric states, thereby improving the capacity or structure of retained history. However, they do not directly address how relevant historical evidence can be selectively retrieved and integrated into a pretrained predictor without interfering with its native latent workspace. Accordingly, we introduce HERA (Historical Evidence Routing Adapter), a framework for routing retained historical evidence into a frozen latent predictor, and instantiate it with Register-Routed Patch Memory (RRPM), a lightweight adapter comprising a Structured Memory Bank, Memory Registers, and Workspace Registers. On the IntPhys2 Main split, HERA with RRPM improves the pairwise AvgSurprise accuracy of V-JEPA 2-G from 52.57% to 54.35%. Subgroup analysis shows particularly strong improvements on fixed-camera continuity, from 46.15% to 57.69%, and fixed-camera immutability, from 46.15% to 63.46%. These results support historical evidence routing as a practical adaptation strategy for physical prediction in latent world models.
