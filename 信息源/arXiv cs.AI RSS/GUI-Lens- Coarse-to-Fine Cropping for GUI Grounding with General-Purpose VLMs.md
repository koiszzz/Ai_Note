# GUI-Lens: Coarse-to-Fine Cropping for GUI Grounding with General-Purpose VLMs

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zichuan Fu, Shirong Wang, Wenlin Zhang, Guojing Li, Yimin Deng, Jingtong Gao, Junjia Qi, Hanyu Yan, Yefeng Zheng, Xiaopeng Li, Wanyu Wang, Xian Wu, Xiangyu Zhao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03270)

------

arXiv:2608.03270v1 Announce Type: cross

Abstract: GUI grounding maps natural-language instructions to click locations and is essential for reliable GUI agents. The task remains difficult on high-resolution, densely populated interfaces because a vision-language model (VLM) may recognize a requested control without locating it precisely enough for interaction. Most existing methods provide various forms of localization assistance, but still rely on a direct click prediction, allowing visual ambiguity or an inaccurate initial estimate to propagate to the final result. In this paper, we introduce GUI-Lens, a coarse-to-fine grounding framework that allows a general-purpose VLM to determine the target through active visual observations. Specifically, GUI-Lens extracts OCR text and detected UI components from the screenshot and presents their positions as coordinate references. Using the instruction, the current view, and these references, the VLM selects the region and scale of the next view, which is cropped and enlarged to provide finer visual details. This process continues over successively focused views until the target is determined. Proposed crops and clicks are checked against the instruction throughout the process, and the final local position is mapped back to the original screen coordinates. Experiments on four GUI grounding benchmarks and three general-purpose VLM backends show that GUI-Lens improves overall grounding accuracy by up to 24.9 percentage points and achieves state-of-the-art performance with GPT-5.5.
