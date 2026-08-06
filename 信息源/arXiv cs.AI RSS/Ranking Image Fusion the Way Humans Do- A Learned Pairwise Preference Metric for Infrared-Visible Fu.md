# Ranking Image Fusion the Way Humans Do: A Learned Pairwise Preference Metric for Infrared-Visible Fusion Assessment

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Haoran Liu, Mingzhe Liu, Peng Li, Guibin Zan　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.01301)

------

arXiv:2608.01301v2 Announce Type: replace-cross

Abstract: Infrared-visible image fusion (IVIF) has no ideal fused reference, so fusion algorithms are routinely ranked by scalar objective metrics that formalize different proxies for information transfer, structure, or source similarity. These proxies often disagree with the judgment that ultimately matters: given the same sources, which of two fused results does a human prefer? Direct pairwise comparison is an established reference protocol for relative subjective assessment, but its cost grows quadratically with the number of algorithms, which prevents routine use. We present the Learned Perceptual Image Fusion Measure (LPIFM), a source-conditioned model that operationalizes the human A/B/Tie comparison protocol as a repeatable, scalable surrogate. LPIFM jointly observes the infrared source, the visible source, and two fused candidates, and predicts whether candidate A is better, candidate B is better, or the two are perceptually equivalent. Supervision comes from a new dense preference corpus that covers every unordered comparison among a broad pool of fusion methods on the scenes of a public benchmark, labeled under a blinded, randomized, two-stage protocol with expert adjudication. Across scene- and method-generalization settings, LPIFM tracks human pairwise decisions closely and reproduces the tie-aware Bradley-Terry rankings derived from human labels; on full method pools it surpasses the strongest conventional metric by a wide margin in both pairwise accuracy and ranking correlation. We release the annotated preference dataset, together with the LPIFM model weights, source code, and evaluation code, to support preference-aligned IVIF assessment. LPIFM offers a practical instrument for human-aligned method comparison and ranking at scale.
