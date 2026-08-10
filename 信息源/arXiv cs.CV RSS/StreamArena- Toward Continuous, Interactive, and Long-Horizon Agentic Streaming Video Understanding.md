# StreamArena: Toward Continuous, Interactive, and Long-Horizon Agentic Streaming Video Understanding

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xichen Zhang, Guankai Li, Yinghao Zhu, Shijian Wang, Sitong Wu, Shaozuo Yu, Meng Chu, Yuan Lu, Jiaya Jia　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05703)

------

arXiv:2608.05703v1 Announce Type: new

Abstract: Deploying autonomous multimodal agents in continuous, real-world environments requires them to ingest unbounded audio-visual streams and maintain hour-scale memory. However, current evaluations predominantly rely on brief clips and multiple-choice formats. This design allows minimal baselines that process only the last four frames to match or surpass complex streaming models, while answer options also expose language shortcuts. We introduce StreamArena, a benchmark for hour-scale, interactive streaming video understanding. StreamArena contains 243 full-length videos averaging 88.8 minutes and 3,646 rigorously annotated, open-ended question-answer pairs that evaluate real-time perception, historical retrospection, proactive interaction, and multimodal tool utilization. Evaluation across diverse systems exposes a tension between continuous interaction and long-horizon multimodal comprehension. Methods that retain only recent frames cannot recover distant events, methods that convert past observations into text lose visual evidence, and methods that repeatedly compress visual memory struggle to preserve fine-grained details over time. We address this tension with StreamMind, a two-tier architecture that assigns latency-critical interaction and proactive monitoring to independently scheduled frontend workers, while backend workers asynchronously construct persistent multimodal memory and perform historical recall and external search. StreamMind outperforms existing streaming baselines across all four capabilities and reduces query-to-answer latency by reusing persistent state.
