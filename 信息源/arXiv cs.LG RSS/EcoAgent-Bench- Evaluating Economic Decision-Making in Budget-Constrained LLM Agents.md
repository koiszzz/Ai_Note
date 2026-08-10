# EcoAgent-Bench: Evaluating Economic Decision-Making in Budget-Constrained LLM Agents

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jie Wu, Ming Gong, Feixiang Cheng, Qinqin Zhao　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05519)

------

arXiv:2608.05519v1 Announce Type: cross

Abstract: Agent benchmarks usually measure task completion and treat resource use as an auxiliary statistic. In deployment, however, the choice among a local lookup, broad search, composite research tool, stronger model, or human escalation is part of the task itself. We introduce EcoAgent-Bench, in which every task specifies priced actions and an explicit budget. Its 304 real-derived tasks span five families adapted from GAIA, HotpotQA, and MuSiQue, and test four decisions: avoiding unnecessary escalation, escalating when local evidence is insufficient, selecting a model tier, and stopping on unsupported premises. We evaluate seven LLM agents in tool-API and workspace-CLI settings, together with four oracle scripted controls. Micro-averaged accuracy rewards one-sided policies: always-escalate controls achieve high micro success while failing save-oriented tasks. We therefore also report an economic-consistency score (the worse of accuracy on upgrade-oriented and save-oriented family groups) which exposes this failure. Tool-API agents attain only 3.9-24.0% micro strict success (at most 7.3% economic consistency), often either stopping before warranted escalation or overspending on cheap tasks. A threshold-crossing budget sweep changes GPT-5.4's escalation rate from 0% to only 3%. These results show that completion under a budget and economical action selection are distinct properties. We release the task bundle, transformation pipeline, frozen evaluation environments, and integrity-bound result artifacts needed to study both.
