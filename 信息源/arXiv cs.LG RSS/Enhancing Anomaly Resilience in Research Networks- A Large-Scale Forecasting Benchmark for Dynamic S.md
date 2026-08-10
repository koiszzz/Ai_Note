# Enhancing Anomaly Resilience in Research Networks: A Large-Scale Forecasting Benchmark for Dynamic Security Baselining

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mohammad Arafath Uddin Shariff, Byrav Ramamurthy　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.05605)

------

arXiv:2608.05605v1 Announce Type: cross

Abstract: Research and Education Networks (RENs) serve as critical infrastructure for scientific discovery, yet they face a unique security paradox: their normal traffic patterns which are characterized by massive, bursty "elephant flows" are statistically indistinguishable from volumetric attacks such as DDoS to conventional monitoring systems. This similarity leads to high false-positive rates in anomaly detection, blinding security operators to genuine threats. In this paper, we propose and evaluate a high-fidelity traffic forecasting framework designed to establish dynamic security baselines for RENs. Leveraging an exclusive 57-day Internet2 dataset spanning ten backbone routers (13.7 billion packets), we perform the first large-scale benchmark of anomaly-aware forecasting models in this domain. We systematically evaluate six model families, from SARIMA to state-of-the-art long-sequence architectures (TiDE, PatchTST), across 960 experimental configurations. Our results demonstrate that these advanced architectures, particularly TiDE, reduce baseline prediction error by 30-42% compared to traditional methods ($p < 0.001$), significantly improving the distinction between legitimate scientific bursts and potential anomalies. Furthermore, we introduce a novel anomaly-integration strategy that improves model robustness by 3.3% in the presence of noise. This work provides the first statistically validated framework for distinguishing scientific workflows from network attacks, enabling more autonomous and resilient network security operations.
