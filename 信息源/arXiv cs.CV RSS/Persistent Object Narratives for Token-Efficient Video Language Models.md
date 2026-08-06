# Persistent Object Narratives for Token-Efficient Video Language Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Junzhe Chen, Siyuan Meng, Xiaojie Guo　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04866)

------

arXiv:2608.04866v1 Announce Type: new

Abstract: Video large language models (Video-LLMs) have made strong progress in open-ended video understanding. However, their visual interfaces remain token-intensive and provide limited explicit structure for linking recurring object evidence across time. We introduce SlotNarrative, a slot-based interface that organizes a video into persistent object narratives represented by compact object-state tokens. Rather than compressing frame-wise features before establishing temporal correspondence, SlotNarrative first groups visual features into object-like slots and then associates recurring observations with clip-level object entries through a lightweight, parameter-free memory that integrates multiple complementary matching cues. Each retained entry is serialized into two token types: an identity token that summarizes persistent object appearance and a set of state tokens that encode segment-level appearance, geometry, visibility, and trajectory information. This design yields an interface of only 144 allocated visual-token positions for a frozen Video-LLM, independent of the number of sampled frames. Across multiple datasets, SlotNarrative achieves a favorable trade-off between accuracy and visual-token count compared with prior compact Video-LLM interfaces. Experimental results establish persistent object narratives as a compact, structured, and temporally organized visual interface for Video-LLMs. Our code will be made publicly available.
