# DAC-Pose: Dual-Agent Collaborative Framework for Pose-Guided Human Generation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Haotian Yang, Zhile Yang, Huiyu Zhou, Xin Sun　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04622)

------

arXiv:2608.04622v1 Announce Type: new

Abstract: AI agents have emerged as a powerful new paradigm in generative image synthesis, enabling systems to perform complex semantic reasoning rather than passive pixel-level mapping. In pose-guided human generation, conventional methods inevitably produce severe visual artifacts under drastic viewpoint shifts, fundamentally because they lack the cognitive capacity to logically deduce unseen regions and model complex spatial deformations. To bridge this gap, we propose DAC-Pose, a novel agent-driven multimodal framework that reformulates single-view human generation as a collaborative dual-agent system. DAC-Pose integrates two complementary components, namely, the Prior Semantic Reasoning (PSR) agent and the Discrepancy-Aware Visual Encoding (DAVE) agent. Functioning as a cognitive engine, PSR utilizes collaborative reasoning to deduce the fine-grained attributes of unseen regions. Concurrently, acting as a specialized visual perception agent, DAVE quantifies and encodes viewpoint-induced spatial misalignments, continuously feeding robust spatial constraints back into the generative process. This autonomous feedback loop between semantic deduction and visual perception ensures high-fidelity detail synthesis. Extensive experiments on the DeepFashion and Market-1501 benchmarks validate the superiority of our agent-driven paradigm. Notably, DAC-Pose excels in preserving texture alignment and identity consistency under drastic viewpoint changes. The code is available at https://github.com/AIVRC/DAC-Pose.
