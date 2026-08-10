# DTRNet: Dual Text-Radical Decoding for Handwritten Chinese Text Recognition with Faked Character Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Runrui Li, Lin Zhu, Hua Huang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05848)

------

arXiv:2608.05848v1 Announce Type: new

Abstract: In K-12 educational scenarios, handwritten Chinese text recognition should not only transcribe student writing, but also detect faked characters. However, existing recognition models are usually confined to a predefined set of normal characters and therefore cannot explicitly identify faked characters. Existing detection methods exhibit complementary limitations: character-level methods provide interpretable structural evidence but suffer from low efficiency, whereas line-level methods are efficient but rely heavily on confidence scores, making them prone to missed detections and lacking explicit structural evidence. Thus, the key challenge is to preserve character-structural evidence independent of contextual inference while maintaining line-level efficiency. To this end, we propose DTRNet, a dual Text-Radical decoding framework for line-level faked character detection. DTRNet decouples context-aware text recognition from character-wise structural verification, where the text branch performs line-level transcription and the radical branch predicts legal Ideographic Description Sequences (IDS) for lexicon-based faked character judgment. We further introduce IDS-Guided Confidence Adjustment (IGCA) to refine text predictions using structural evidence during inference. Experimental results demonstrate that DTRNet effectively detects faked characters while maintaining strong recognition performance and providing interpretable radical-level evidence. Code, checkpoints, and the processed dataset are publicly available at https://github.com/BNU-ERC-ITEA/DTRNet.
