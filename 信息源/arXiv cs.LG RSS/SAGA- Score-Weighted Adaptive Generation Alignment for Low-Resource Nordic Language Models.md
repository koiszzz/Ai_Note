# SAGA: Score-Weighted Adaptive Generation Alignment for Low-Resource Nordic Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Hoda Fakharzadehjahromy, Emil Wiman, Andreas Bueff, Hafsteinn Einarsson, Fredrik Heintz　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06179)

------

arXiv:2608.06179v1 Announce Type: new

Abstract: Preference optimisation has proven effective for improving large language models but typically relies on costly human preference annotations. Extending these methods to morphologically rich, low-resource languages remains challenging because such annotations are scarce. We present SAGA (Score-weighted Adaptive Generation Alignment), a parser-guided preference optimisation framework that replaces human labels with dependency-parser supervision. SAGA converts parser judgements into preference pairs for delta-DPO, combines parser quality with lexical diversity in a composite reward, filters low-information pairs using a reward-gap criterion, and monitors reward hacking to maintain reliable supervision. Across Danish, Icelandic, and Norwegian Bokm{\aa}l using GPT-SW3-1.3B, SAGA consistently improves grammatical quality without requiring human preference labels. Danish parse success increases from 69.0% to 93.8%, Icelandic achieves a +4.5 percentage-point improvement on an independent Stanza evaluation (three-run mean +3.3 percentage points) while native speakers prefer SAGA outputs in 80% of pairwise comparisons, and Norwegian Bokm{\aa}l improves by +28 percentage points. These results demonstrate that parser-derived supervision is a practical alternative to human preference annotation for grammatical alignment in low-resource languages where high-quality dependency parsers are available.
