# BulkPR-Bench: Benchmarking Queue-Level Governance of Interacting Pull Requests

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zetong Xiong, Qiao Zhao, Jun Zhang, Xueying Lyu, Zhi Li, Yixiang Tu, Xiaowen Yang, Yunjie Zhang, Yufeng Wang, Zhe Zhang, Kaize Yu, Hanwen Du, Zhongkai Sun, Zhuoxin Liu, Zekun Lin, Jianwen Yang, Ruining Chen, Ying Zhang, Tingxuan Pan, Ke Chen, Shubin Han, Chuanhao Sun, Yehua Yang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2608.02685)

------

arXiv:2608.02685v1 Announce Type: cross

Abstract: Coding-agent benchmarks increasingly cover long-horizon, end-to-end, and interactive development, but typically retain one requested outcome or a fixed change sequence. Sequential policies can process a pull-request (PR) queue one candidate at a time, but when queued PRs interact, maximizing safe delivery can require jointly deciding which changes to merge and in what order. We introduce BulkPR-Bench, an executable benchmark in which an agent must recover consequential PR relations and return a large safe subset in executable order under a rolling-release protocol. The suite contains 581 newly authored candidate PRs on frozen snapshots of 18 real repositories. Registered state-by-state repository execution, including hidden safety checks, validates the gold relation graph; an exact oracle then computes the largest safe subset. Our primary metric, Relational Delivery Score (RDS), scores safe delivery and correct rejection over relation groups from the realized merge trace; Global Safety-Gated Yield (Global-SGY) separately measures strict delivery of the realized whole-queue plan. Under the buffered primary protocol with batch size $K=32$, the three highest RDS estimates among the six models are 66.6%, 62.0%, and 57.9%, compared with 53.1% for the strongest sequential baseline. Only 8 of 324 model runs complete a queue exactly. Critical-relation recall ranges from 35.2% to 57.7%, and diagnostic runs supplied with the gold relations show substantial remaining headroom. Gains on relation groups therefore do not yet translate into dependable whole-queue governance.
