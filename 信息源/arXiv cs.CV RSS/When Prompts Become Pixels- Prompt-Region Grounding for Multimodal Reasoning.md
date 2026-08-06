# When Prompts Become Pixels: Prompt-Region Grounding for Multimodal Reasoning

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yongxin Wang, Ruizhe Zhou, Yueling Tang, Yingying Zhu, Xuemin Zhao, Xiaojun Chang, Xiaodan Liang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04726)

------

arXiv:2608.04726v1 Announce Type: cross

Abstract: Multimodal large language models increasingly reason over screenshots and documents where the task itself may be written in pixels. Yet benchmarks usually place questions in text, leaving it unclear whether models use the same instruction equally well across channels. We introduce Visualized Task Semantics (VTS), a controlled intervention that moves the question into the image while keeping the source problem and answer fixed. Across six MLLMs and four benchmarks, accuracy drops in all 24 model-task pairs, by 17.8 points on average. Models often transcribe the visual question correctly yet fail to use it, exposing a semantic channel gap beyond OCR. To reduce this gap, we present prompt-region grounding, whose core design aligns the question region with typed semantics and recovers its clean representation from a masked view. At matched training cost, our method raises four-benchmark VTS accuracy from 58.0 to 66.3 while preserving accuracy on the original interface, and requires no OCR or region metadata at inference. Reading task-bearing text and grounding it as an instruction for reasoning are distinct capabilities.
