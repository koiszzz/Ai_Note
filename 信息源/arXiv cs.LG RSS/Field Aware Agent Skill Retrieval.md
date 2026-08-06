# Field Aware Agent Skill Retrieval

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Paimon Goulart, Liang Wu, Kelly Wan, Evangelos E. Papalexakis, Liangjie Hong　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.IR　|　原文：[打开链接](https://arxiv.org/abs/2608.02880)

------

arXiv:2608.02880v1 Announce Type: cross

Abstract: As lifelong learning agents accumulate lifelong growing skill banks, retrieving the correct skill becomes an increasingly important bottleneck. Most current skill retrieval methods treat each skill as one flat document by concatenating fields such as the name, description, and body. However, skills are naturally structured, multi-field objects, where each field provides different information about when and how the skill should be used. In this work, we study whether preserving this structure improves skill retrieval. We represent each skill as its separate components, and compute sparse and dense similarities for each field independently, exposing a naturally tensorized, field-aware representation of the skill bank. We then combine these field-level scores either with uniform weights or with a small learned MLP. Across two different skill retrieval benchmarks, SkillRet and SRA-Bench, we find that keeping fields separate improves hybrid retrieval, and learning over the field-level scores gives the strongest and most consistent results. Our field-aware MLP reaches $77.95$ Recall@10 on SkillRet and $83.78$ Recall@10 on SRA-Bench, outperforming the corresponding concatenated learned baselines. We also find that the advantage grows as the skill bank becomes larger, suggesting that field-aware skill retrieval becomes especially useful in the setting where retrieval is most difficult. Our results show that skill representation itself matters, and that simply preserving the structure already present in skill files can substantially improve retrieval.
