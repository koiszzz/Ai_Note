# Q-CueGraph: Query-Conditioned Visual Evidence Graphs for Multimodal Reasoning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Pengcheng Pan, Xinfang Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04452)

------

arXiv:2608.04452v1 Announce Type: cross

Abstract: High-resolution pixels and crop or zoom tools give multimodal large language models the ability to inspect an image, but they do not provide a reliable task-conditioned policy for deciding where to inspect. Q-CueGraph makes this decision explicit. It maps a question and an image representation to budgeted, coordinate-level observations for a frozen reader. Text-rich images use a reusable OCR/layout graph; natural-image search instantiates query-conditioned visual nodes behind the same selection, composition, and budgeting interface. Optional utility refinement learns which candidate crops the frozen reader can use from training-answer correctness, without region-box supervision. With a frozen Qwen2.5-VL-7B reader, Q-CueGraph reaches 0.833 accuracy on V*Bench versus 0.696 for full-image inference from a 19% image-area budget, and reaches 92% of full-image ANLS on InfographicVQA from about half the image area. Across six benchmarks, explicit observation is most valuable when evidence is localizable, the question discriminates its location, and resolution limits full-image reading.
