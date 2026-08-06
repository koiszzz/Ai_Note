# Calibrating Artificial Guilt: Neurally Grounded Reward Shaping for Prosocial Multi-Agent Reinforcement Learning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Aaditya Mehta, Arya Shah　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04663)

------

arXiv:2608.04663v1 Announce Type: new

Abstract: Cooperative multi-agent reinforcement learning often adds social terms to individual rewards, yet the scale of those terms is usually chosen by hand. We ask whether a guilt signal can instead be calibrated from human neural and behavioural data and transferred to artificial agents. Using the public SoDec responsibility fMRI dataset (40 participants), we fit a subject-fixed-effects regression of momentary-happiness changes on outcome-type counts and recover a guilt weight as the Partner-negative minus Social-negative contrast ($\hat{w}=1.118$, Cohen's $d=0.214$). We embed this weight in a two-agent Social Lottery environment and train independent Proximal Policy Optimization actor-critics under four shaping regimes: neurally calibrated, uniform constant, zero (selfish), and a unit-coefficient oracle. Across 1{,}000 evaluation episodes per condition, the calibrated agents track the human Social safe-choice rate most closely ($0.459$ vs.\ human $0.484$; $\mathrm{KL}=0.0012$), while the other three conditions deviate by one to three orders of magnitude in KL. Human neurobehavioural priors can therefore act as quantitative constraints on prosocial reward shaping.
