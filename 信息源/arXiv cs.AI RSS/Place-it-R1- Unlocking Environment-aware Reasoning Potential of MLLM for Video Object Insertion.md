# Place-it-R1: Unlocking Environment-aware Reasoning Potential of MLLM for Video Object Insertion

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Bohai Gu, Taiyi Wu, Dazhao Du, Jian Liu, Shuai Yang, Xiaotong Zhao, Alan Zhao, Song Guo　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2603.06140)

------

arXiv:2603.06140v2 Announce Type: replace-cross

Abstract: Video object insertion is fundamental to video editing, yet existing diffusion methods often produce visually plausible but physically inconsistent results. We present Place-it-R1, an end-to-end framework for physically plausible video object insertion driven by environment-aware MLLM reasoning. Rather than treating reasoning as a generic text prompt, Place-it-R1 uses the MLLM to analyze the target environment, infer object-scene interactions, and determine where an insertion is physically valid. The resulting reasoning is translated into two complementary forms of guidance for video diffusion: semantic guidance that describes the intended physical interaction and spatial guidance that provides a valid insertion region in each frame. To further align generation with local physical realism, we introduce Spatial Direct Preference Optimization, which leverages an MLLM to rank generated candidates, and introduces a region-aware preference objective that explicitly localizes physical-violation penalties to the inserted-object region. Place-it-R1 further offers flexible and standard modes to trade off environment adaptation and scene preservation. Extensive experiments show that Place-it-R1 produces more physically coherent and visually natural insertions than state-of-the-art methods and achieves competitive results against commercial systems.
