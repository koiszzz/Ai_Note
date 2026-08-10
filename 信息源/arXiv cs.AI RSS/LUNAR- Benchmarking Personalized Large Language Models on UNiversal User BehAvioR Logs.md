# LUNAR: Benchmarking Personalized Large Language Models on UNiversal User BehAvioR Logs

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jiahao Zhang, Yongzhi Tong, Zelin Fu, Pengde Zhao, Yanmei Jiang, Jiang Feng, Min Yang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05246)

------

arXiv:2608.05246v1 Announce Type: new

Abstract: Existing personalized LLM benchmarks primarily rely on textual personas or isolated behavioral signals, providing limited evaluation of cross-domain behavioral personalization, where responses must be grounded in heterogeneous daily-life activities. To address this gap, we introduce LUNAR, the first benchmark for evaluating how LLMs personalize responses from longitudinal app interaction histories across universal daily-life domains, including clothing, food, housing, and mobility. To support scalable benchmark construction while mitigating data sparsity and privacy concerns, LUNAR uses a multi-stage coarse-to-fine synthesis pipeline grounded in real-world behavioral patterns. Fidelity analyses show closer alignment with real behavioral distributions than other synthetic benchmarks. Experiments on 19 mainstream LLMs show that access to behavioral logs is necessary but not sufficient for deep personalization: neither more context nor larger models guarantees better performance; effective personalization depends on selecting and integrating relevant evidence across domains. Direct retrieval of fine-grained behavioral records consistently outperforms compressed memory, while stronger personalization can come at the cost of privacy protection. These findings identify evidence selection, cross-domain integration, and privacy control as key challenges for personalized LLMs.
