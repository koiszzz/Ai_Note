# Moral Hazard in Multi-Agent Language Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Dane Malenfant　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.MA　|　原文：[打开链接](https://arxiv.org/abs/2607.23982)

------

arXiv:2607.23982v3 Announce Type: replace-cross

Abstract: Cooperation can fail when socially valuable effort is costly, weakly observable, and mainly benefits others. Drawing on Holmstr\"om's team moral-hazard model, we introduce the Dialogue Moral Hazard Game, a controlled textual game that operationalizes this hidden-action structure for language agents. In each episode, an agent can preserve an immediate local reward or pay a query cost to reveal a hidden safety fact that primarily helps another agent's downstream decision. We evaluate nine open-weight language models and one frontier API model, decomposing behavior into query use, realized information transfer, local-reward preservation, unsafe choice, format validity, and team success. Base open-weight models commonly preserve local reward without team success or query without communicating information that changes the final decision. GPT-5.6 Sol reaches ceiling behavior in the primary setting, and autonomous sweeps respond strongly to query cost and team reward. In a 3,015-decision incentive-isolation experiment with scripted partners, its empirical query threshold tracks the Holmstr\"om-derived private-share boundary across nine query costs with mean absolute error 0.013. We then use supervised fine-tuning, RLOO, sequential SFT+RLOO, and GEPA prompt optimization as diagnostic update mechanisms where coverage permits. Their effects are heterogeneous: SmolLM3-3B and OLMo-7B show the clearest mechanism-consistent weight-level improvements, whereas GEPA sometimes improves team success while reducing or eliminating costly queries. Thus, optimization can shift aggregate reward without recovering the designated cooperative mechanism, motivating evaluations that report mechanism-level behavior rather than team success alone.
