# DVAR: Adversarial Multi-Agent Debate for Video Authenticity Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Hongyuan Qi, Feifei Shao, Ming Li, Hehe Fan, Jun Xiao　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.16987)

------

arXiv:2604.16987v2 Announce Type: replace

Abstract: The rapid evolution of video generation technologies poses a significant challenge to media forensics, as conventional detection methods often fail to generalize beyond their training distributions. To address this, we propose DVAR (Debate-based Video Authenticity Reasoning), a training-free framework that reformulates video detection as a structured multi-agent forensic reasoning process. Moving beyond the paradigm of pattern matching, DVAR orchestrates a competition between a Generative Hypothesis Agent and a Natural Mechanism Agent. Through iterative rounds of cross-examination, these agents defend their respective explanations against abnormal evidence, driving a logical convergence where the truth emerges from rigorous stress-testing. To adjudicate these conflicting claims, we apply Occam's Razor through the Minimum Description Length (MDL) framework, defining an Explanatory Cost to quantify the "logical burden" of each reasoning path. Furthermore, we integrate GenVideoKB, a dynamic knowledge repository that provides high-level reasoning heuristics on generative boundaries and failure modes. Extensive experiments demonstrate that DVAR achieves competitive performance against supervised state-of-the-art methods while exhibiting superior generalization to unseen generative architectures. By transforming detection into a transparent debate, DVAR provides explicit, interpretable reasoning traces for robust video authenticity assessment.
