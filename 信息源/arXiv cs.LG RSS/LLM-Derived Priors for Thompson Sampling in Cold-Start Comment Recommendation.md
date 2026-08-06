# LLM-Derived Priors for Thompson Sampling in Cold-Start Comment Recommendation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Eugene Lee, Oseong Choi, Byungsoo Kang, Taeyeong Jang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.IR　|　原文：[打开链接](https://arxiv.org/abs/2608.03382)

------

arXiv:2608.03382v1 Announce Type: cross

Abstract: Multi-armed bandit algorithms, especially Thompson sampling, are widely used in online recommendation. Despite their ability to adapt from online feedback, these methods often suffer from cold-start limitations when newly introduced arms have little or no interaction history. In our setting, the candidate arms are user-generated textual comments, whose semantic content can reveal a title's appeal before sufficient interaction feedback is available. We therefore use large language models (LLMs) to extract semantic signals from comment text and convert them into informative Bayesian priors that warm-start Thompson sampling under sparse early-stage feedback. To account for aggregate segment-level differences in response patterns, we maintain and update posteriors separately for each gender-age segment. In a real-world online A/B/C test, we compare a uniform prior with two LLM-based designs: a Gender Prior for demographic-affinity cues and a Content Prior for title-specific identity cues. The results show that LLM-based priors are most beneficial in sparse-feedback regimes -- with the largest gains emerging once a small amount of interaction evidence has accumulated -- and that prior design leads to distinct funnel-level effects. We further analyze prior-reward alignment and demographic heterogeneity, finding that click-oriented alignment is strongest for the Gender Prior and that treatment effects vary substantially across demographic segments. These findings suggest that LLM-derived priors can serve as a practical warm-start mechanism for text-rich bandit recommendation, while also revealing deployment trade-offs.
