# Right Knowledge, Wrong Answer: Characterizing Parametric Temporal Conflict in Open-Weight Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Elias Hossain, Sourav Saha, Tasfia Nuzhat Ornee, Sanjeda Sara Jennifer, Umesh Chandra Biswas, Shubhashis Roy Dipta, Rajib Rana, Niloofar Yousefi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2606.20959)

------

arXiv:2606.20959v3 Announce Type: replace

Abstract: Language models may encode both outdated facts and their newer replacements. We introduce Parametric Temporal Conflict (PTC), where the newer fact is present and recoverable, but the default forward pass prefers the outdated one. We release a deterministically verified benchmark of 8,746 Wikidata position-holder transitions and evaluate four open-weight language models across three families. A date-prefix prompt recovers the newer fact in 61-81% of PTC cases. Activation patching flips predictions in 72-85% of cases and localizes the preference to model-specific upper-layer regions. Residual-stream steering outperforms norm-matched random directions, indicating direction-specific representations. These results show that PTC reflects a localized representational preference rather than missing knowledge. Recovery is measured on oracle-identified conflicts because automatic detection remains unreliable. We release the benchmark, code, and statistics.
