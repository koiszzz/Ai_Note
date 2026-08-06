# MetaVideoAgent: Automated Video-Agent Evolution for Long-Form Video Understanding

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Benlei Cui, Ruize Wang, Junjie Li, Jinhao Chen, Longtao Huang, Yinghao Chen, Yuwen Zhai, Jingqun Tang, Ruijian Jia, Weiwei Wu, Pengfei Sun, Haiwen Hong　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04587)

------

arXiv:2608.04587v1 Announce Type: new

Abstract: Long-form video understanding requires locating sparse, question-relevant evidence in long, multimodal videos. Real-world video distributions differ in modality-specific information density, content structure, and evidence patterns, causing fixed video-agent designs to incur redundant processing or fail when mismatched. Extending automated agent evolution from text to video is challenging because full long-video execution makes candidate validation expensive, failures propagate across coupled evidence-processing stages, and complex preprocessing, perception tools, and localization strategies make code-level updates difficult to implement reliably.

We introduce MetaVideoAgent, a framework that automatically evolves a video agent for a target distribution. It profiles information density and evidence requirements from sparsely sampled frames and associated queries to guide initial design, then compresses localized failures into independently executable minimal validation tasks. It constructs evidence-grounded Gold Paths, audits Student trajectories, aggregates recurring failures across samples, and attributes them to responsible modules. A modular agent representation constrains each update to the primary responsible module and its necessary dependencies.

We further introduce VA-EvoBench, covering eight video distributions with separate evolution and held-out splits. With four evolution iterations per distribution, MetaVideoAgent improves every initial agent and raises macro-average accuracy from 38.44% to 51.47%, at an average evolution cost of 3.54M tokens per distribution. The evolved agents outperform the strongest prior fixed-design video agent by 6.39 percentage points while using the fewest tokens and video frames per question among the compared video agents. We will release all code and data to support reproducible research.
