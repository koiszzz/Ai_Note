# Learning Compression Rules for Network Traffic

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Quentin Lampin (Orange Research), \'Eloi Sainte-Beuve (Orange Research, Universit\'e Grenoble Alpes), Louis-Adrien Dufr\`ene (Orange Research), Guillaume Larue (Orange Research), Massih-Reza Amini (Universit\'e Grenoble Alpes)　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04545)

------

arXiv:2608.04545v1 Announce Type: new

Abstract: We study the problem of learning compact rule-based compressors for structured network traffic. Each packet is a record of header fields that are highly redundant within a flow, and a compressor is a small set of rules matching such records and replacing predictable fields with short codes. We cast rule learning as a two-stage problem: (i) an unsupervised structure-discovery stage that recursively partitions training packets using a normalized entropy-ratio criterion robust to small samples, and (ii) a constrained selection stage that uses dynamic programming to pick the rule subset maximizing expected compression gain under a hard budget on the number of installable rules. We instantiate the framework on Static Context Header Compression (SCHC), the IETF standard for rule-based header compression in constrained networks, and evaluate it on four real-world Internet-of-Things and 5G core-network datasets. Our method, Robust Entropy Clustering for Adaptive comPression (RECAP), surpasses expert-engineered rule sets with a small number of learned rules and removes the need for manual rule design.
