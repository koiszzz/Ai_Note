# COSMO: Consensus-Driven Shift Modulation for Source-Free Domain Adaptation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Bo Li, Junjie Peng, Xiaohua Xie, Jianhuang Lai　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04604)

------

arXiv:2608.04604v1 Announce Type: new

Abstract: Source-free domain adaptation (SFDA) adapts a source-trained model to an unlabeled target domain without source data, a practical setting under privacy or storage constraints. Yet its self-generated supervision can reinforce source bias under substantial domain shifts. Pretrained vision-language models (VLMs) offer complementary semantic knowledge, but the relative reliability of the source model and VLM varies across target samples. Existing cross-model guidance does not explicitly account for this variation and may overwrite valid source-derived evidence under conflict, a failure we term source-derived evidence forgetting. We formulate VLM-guided SFDA as a sample-wise reliability-allocation problem and propose Consensus-Driven Shift Modulation (COSMO). COSMO replaces expert-to-expert guidance with co-adaptation through an anchored shared consensus. It first forms a sample-specific initial consensus that favors the more concentrated prediction. During adaptation, COSMO re-aggregates both branches' evolving evidence and regulates how far the resulting consensus moves from its initial anchor based on consensus uncertainty and training progress. This keeps the shared supervision anchored yet adaptive. Across four benchmarks, COSMO achieves state-of-the-art performance under matched VLM backbones. Further analyses indicate that it better balances the retention of valid source-derived evidence with the absorption of complementary VLM evidence.
