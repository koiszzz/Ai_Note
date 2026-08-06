# A Comprehensive Evaluation of Code Language Models for Security Patch Detection

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Nils Loose, Joseph Bienh\"uls, Kristoffer Hempel, Felix M\"achtle, Thomas Eisenbarth　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2605.13138)

------

arXiv:2605.13138v2 Announce Type: replace-cross

Abstract: Automated detection of vulnerability-fixing commits (\vfcs) is critical for timely security patch deployment, as advisory databases lag patch releases by a median of 25 days and many fixes never receive advisories. Code language models are increasingly adopted for identifying VFCs, yet whether they can recognize a security fix from the code change itself remains unclear, as reported performance is shaped by commit messages, project-level data leakage, and uncertain data quality. We present a rigorous re-evaluation that jointly controls these factors through a unified framework consolidating 20 fragmented datasets spanning more than 180000 commits. Training 270 models from 125M to 80B parameters, we isolate the code signal under group-stratified code-only evaluation and assess the impact of model capacity and additional code context, ranging from intra-procedural enrichment to inter-procedural repository context. Model capacity yields clear but insufficient gains, and the evaluated context signals provide no reliable improvement under strict false positive budgets. At a false positive rate of 0.5%, every evaluated fine-tuned code-only model misses at least 80% of vulnerability fixes. A manual expert audit further shows that label error concentrates in commits lacking CVE association and primarily distorts evaluation. We derive concrete recommendations for evaluating on aggregated VFC datasets and release our unified framework and evaluation suite.
