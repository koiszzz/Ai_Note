# FocusMem: Factorizing Content, Readout, and Trust in Latent GUI Memory

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zhuoran Zhang, Bowen Li, Jingcheng Ju, Yang Shi, Qixun Wang, Haotian Wang, Wei Chen, Tengjiao Wang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04530)

------

arXiv:2608.04530v1 Announce Type: new

Abstract: GUI agents must remember both useful experience from earlier tasks and unfinished progress in the current interaction. Latent memory offers a compact solution by compressing multimodal trajectories into a few continuous tokens. Existing methods, however, usually map each trajectory to one fixed memory block and train it mainly through next-action supervision. This creates three practical problems: important details may be lost during compression, the same memory block must serve different decision stages, and irrelevant retrieved trajectories may still mislead the agent. We introduce FocusMem, which separates these responsibilities within a compact latent-memory interface. A role-aware content basis encourages episodic memory to retain reusable experience and working memory to retain task progress. A state-conditioned readout generates a decision-specific view of the same stored evidence, while a lightweight trust gate can suppress memory blocks that appear irrelevant to the current step. All components are trained while the GUI policy remains frozen. Across five GUI-agent benchmarks, FocusMem consistently outperforms a fully matched action-only fixed-memory baseline and prior latent memory adaptations. Further analysis shows that semantic and functional supervision preserve complementary information, state-conditioned readout is more robust as surrounding trajectory context grows, and the trust gate reduces the harm caused by injected irrelevant episodic evidence. These results show that effective latent memory depends not only on compressing past interaction, but also on what is retained, what is exposed, and what is allowed.
