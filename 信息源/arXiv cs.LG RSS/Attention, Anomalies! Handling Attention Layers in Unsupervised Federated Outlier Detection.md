# Attention, Anomalies! Handling Attention Layers in Unsupervised Federated Outlier Detection

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mihailo Ili\'c, Milo\v{s} Savi\'c, Vladimir Kurbalija, Mirjana Ivanovi\'c, Giancarlo Fortino, Du\v{s}an Jakoveti\'c　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04753)

------

arXiv:2608.04753v1 Announce Type: new

Abstract: Attention layers are the backbone of today's most powerful and impactful models. Models with multi-million and billion parameters rely on contextual knowledge provided by attention layers. However, their use goes well beyond just being the core component of large language models. One particularly interesting application is in Memory Augmented Autoencoders (MemAE), specifically for unsupervised representation learning in outlier detection tasks. It was shown that attention helps these models be more effective in centralized learning scenarios. Our work aims to address the lack of specialized aggregation techniques in Federated Learning (FL) when it comes to MemAE models. In this paper we analyze the intricacies of the architecture behind Memory Augmented Autoencoders, and propose novel, guided approaches to effectively aggregate these models in federated scenarios. We demonstrate our approach on non-IID datasets and show that these novel aggregation schemes are more robust when dealing with numerous edge nodes in environments with unbalanced datasets, specifically for unsupervised anomaly detection scenarios. This approach improves the performance of even very shallow autoencoders, allowing them to be used in resource constrained environments.
