# Contextual Information Policy Optimization for Search Agents

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xingyu Guo, Wei Chen, Linlin Yang, Baochang Zhang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.06128)

------

arXiv:2608.06128v1 Announce Type: new

Abstract: Search agents extend large language models beyond static parametric memory by enabling them to acquire and use ex ternal evidence during multi-step reasoning. For knowledge intensive tasks involving complex or evolving information, their reliability depends not only on retrieving relevant ev idence but also on using it to guide subsequent reasoning. However, existing methods primarily reward final-answer cor rectness or intermediate progress, without directly assessing whether post-retrieval actions are grounded in the retrieved evidence. This misalignment encourages prior-driven reason ing: agents form conclusions based on internal knowledge and use retrieval mainly to confirm them, resulting in confirma tion bias and inefficient evidenceuse.Toaddressthisissue, we propose Contextual Information Policy Optimization (CIPO), an evidence-oriented reinforcement learning framework that explicitly aligns policy optimization with external evidence use. CIPO assigns dense, turn-level credit to reasoning ac tions influenced by retrieved information, while combining this evidence-use signal with a global outcome reward to pre serveanswercorrectness.Withthismanner,CIPOdiscourages evidence-detached guesses and promotes reasoning trajecto ries in which retrieved facts can guide or revise subsequent reasoning. Importantly, CIPO requires neither human process annotations nor an additional reward model. Extensive exper iments on seven in-domain and out-of-domain benchmarks show that CIPO reduces the prevalence of prior-driven rea soning and achieves excellent performance on most tasks.
