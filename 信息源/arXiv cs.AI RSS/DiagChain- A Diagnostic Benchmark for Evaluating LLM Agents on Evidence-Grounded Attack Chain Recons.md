# DiagChain: A Diagnostic Benchmark for Evaluating LLM Agents on Evidence-Grounded Attack Chain Reconstruction

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xuyang Liu, Yibin Han, Zhenwei Zhang, Kai Chang, Zhiwei Xu, Tian Qiu, Weixian Deng, Jiabao Gao, Xiaolin Peng, Hai Wan, Xibin Zhao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.03591)

------

arXiv:2608.03591v1 Announce Type: cross

Abstract: Large Language Model (LLM) agents offer a promising approach to attack chain reconstruction by retrieving and interpreting heterogeneous telemetry to infer ordered attacker actions. However, existing benchmarks mainly evaluate final outputs or aggregate accuracy, providing limited insight into how errors arise and propagate across intermediate reasoning stages. We present DiagChain, a diagnostic benchmark for evidence-grounded attack chain reconstruction that enables stage-wise evaluation of LLM agents. DiagChain includes MAIN-69, a suite of 69 scenarios spanning multiple operating systems, evidence noise levels, and chain lengths. It further introduces Evidence-Centric Retrieval-Augmented Generation (ECRAG), which couples evidence retrieval with an evolving structured representation of the reconstructed chain. Five complementary metrics are introduced to assess distinct stages of the reconstruction process and support systematic failure diagnosis. Based on evaluations using 6 LLMs, DiagChain reveals that even the strongest configuration succeeds on only 39.6% of the 849 reference steps in MAIN-69. Our analysis further shows that smaller models struggle with the more basic task of incorporating retrieved evidence into their outputs, whereas larger models can proceed to later steps, where correctly ordering that evidence becomes the main bottleneck. These results validate the importance of diagnostic evaluation beyond end-to-end accuracy and provide actionable insights for improving evidence-grounded cybersecurity agents.
