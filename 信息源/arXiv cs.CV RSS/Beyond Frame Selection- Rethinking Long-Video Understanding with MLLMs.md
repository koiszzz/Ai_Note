# Beyond Frame Selection: Rethinking Long-Video Understanding with MLLMs

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Ziling Huang, Shin'ichi Satoh　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05592)

------

arXiv:2608.05592v1 Announce Type: new

Abstract: Multimodal Large Language Models (MLLMs) have achieved strong progress in video understanding, yet it remains challenging because the token limitation makes MLLMs difficult to capture temporally sparse evidence. Existing methods typically rely on uniform sampling, or frame selection, but these strategies usually optimize either broad temporal coverage or local relevance, making it difficult to preserve both global storyline context and fine-grained evidence. We propose VideoRouter(VR) that rethinks long-video understanding as coordinating complementary evidence views rather than selecting a single subset of frames. It first organizes each video into a question-agnostic temporal hierarchy, which partition the video into coarse-to-fine temporally coherent segments. In this hierarchy, upper-level nodes capture broad storyline context and event progression, while lower-level nodes preserve fine-grained local details and evidence-bearing moments. This naturally gives rise to two complementary views: a global view for coverage-oriented reasoning and a local view for detail-oriented evidence recovery. We further introduce a verification-guided router to determine which view is better supported by the selected evidence and select the final answer. We validate the effectiveness of the proposed design through extensive experiments, showing that the verification-guided router effectively coordinates global and local reasoning, and that, on VideoMME, our method outperforms state-of-the-art frame selection methods by 2.9 points, respectively, under the LLaVA-Video-7B backbone. We will release the code.
