# Not Truly Multilingual: Script Consistency as a Missing Dimension in VLM Evaluation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Prabhjot Singh, Bhushan Pawar, Madhu Reddiboina, Rajvee Sheth　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2606.17188)

------

arXiv:2606.17188v3 Announce Type: replace

Abstract: Current multilingual evaluations for Vision-Language Models (VLMs) assume a one-to-one mapping between language and orthography, overlooking billions of users of multi-script languages. We introduce PuMVR (Punjabi Multimodal Visual Reasoning), a benchmark of 1,000 strictly parallel image-text instances across Punjabi's three active scripts: Gurmukhi, Shahmukhi, and Roman. Evaluating 10 state-of-the-art VLMs, we expose a substantial and systematic Script Gap. Models frequently solve visual tasks in one script while failing identical tasks in another, with accuracy deltas reaching 16%. Crucially, visual input boosts absolute performance uniformly yet does not close the orthographic gap. Furthermore, cross-script in-context transfer is highly brittle, exposing script-locked knowledge representation. Supported by McNemar tests across all script pairs, our findings demonstrate that current "multilingual" VLMs are not truly multi-script. We propose the Script Consistency Rate (SCR), which falls as low as 24.8% on our benchmark, as a mandatory metric for script-agnostic evaluation to ensure equitable AI access. Data and code are available at: https://github.com/prabhjotschugh/Not-Truly-Multilingual-PuMVR.
