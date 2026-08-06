# SurgNarrator: A Generative Retrieval Framework for Surgical Video Understanding

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yuqing Feng, Jiawei Ma, Kevin Qinghong Lin, Kun Yuan, Nicolas Padoy, Daniel S. Elson, Anh Nguyen, Stamatia Giannarou, Baoru Huang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04676)

------

arXiv:2608.04676v1 Announce Type: new

Abstract: Surgical procedures unfold as structured and recurring clinical events, whose real-time understanding via intraoperative surgical videos is critical for intraoperative decision-making and support. However, existing video understanding methods force a trade-off: autoregressive video-language models support comprehensive reasoning but are not practical for time-sensitive clinical applications, whereas contrastive models offer low latency but struggle with complex scene understanding. Recently, generative retrieval has been explored for general-domain video understanding, but transferring it to surgery is not trivial because near-identical visual appearances may indicate semantically distinct events, and the terminology involved is highly surgery-specific. To this end, we propose SurgNarrator, a new generative retrieval framework tailored for surgical video understanding. We construct a well-curated surgery-centric vocabulary from surgical captions to define a clinically meaningful retrieval space. We then adapt the pre-trained Qwen3-VL-Embedding-8B to learn discriminative clinical representations with a temporally-aware contrastive objective. During inference, a hierarchical, procedure-aware retrieval strategy narrows the search space to the relevant procedure type, delivering fast and effective responses. Our method is comprehensively evaluated on twelve benchmarks in a zero-shot setting and achieves consistent performance gains over state-of-the-art baselines, while reducing output-stage latency by more than two orders of magnitude compared with the generative baseline.
