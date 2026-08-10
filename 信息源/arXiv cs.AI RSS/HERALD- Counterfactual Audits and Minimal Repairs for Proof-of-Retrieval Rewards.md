# HERALD: Counterfactual Audits and Minimal Repairs for Proof-of-Retrieval Rewards

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhuowen Liu, Bohan Cui, YinShang Guo, Yuting Wang, Hao Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.06012)

------

arXiv:2608.06012v1 Announce Type: new

Abstract: Search-agent rewards mix answer quality, citation grounding, tool cost, and anti-hacking terms; a high score therefore need not imply that cited evidence was retrieved, and added penalties can cancel. We introduce HERALD, an offline audit that applies exact same-question interventions, separates candidate-visible from oracle information, and enumerates detector contracts before policy optimization. On four Qwen3-8B pools from HotpotQA, 2WikiMultiHopQA, and MuSiQue, $R_0$ rejects search deletion and fake IDs, but a label-free citation-laundering attack succeeds. A complete $2^3$ ablation identifies targeted strengthening of $L$---citing a corpus passage absent from the retrieved evidence---as the observed inclusion-minimal repair: $R[L]$ has zero empirical ASR with a 0.50% one-sided cluster upper bound. The gap persists across pool rules, a visible BM25 attacker, and four models; broader hardening remains vulnerable when the attack removes an oracle support-ID penalty. Under strict 5M-token matched training evaluated on 256 paired questions per benchmark, $R[L]$ meets the EM non-inferiority gate on HotpotQA and 2Wiki but not MuSiQue. Equal-suite citation precision and support recall improve by 2.02 and 1.46 points, unsupported citations fall by 1.69, and laundering attackability falls on 2Wiki and MuSiQue. Natural $L$ is not reduced, and the detector appears in only 18 of 58,368 training trajectories. HERALD thus separates robust scoring, sparse learning signal, and policy transfer.
