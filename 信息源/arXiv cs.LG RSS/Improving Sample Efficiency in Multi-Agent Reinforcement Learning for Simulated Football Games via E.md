# Improving Sample Efficiency in Multi-Agent Reinforcement Learning for Simulated Football Games via Exploration

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Amir Baghi, Jens Sj\"olund, Joakim Bergdahl, Linus Gissl\'en, Alessandro Sestini　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2503.13077)

------

arXiv:2503.13077v2 Announce Type: replace

Abstract: Multi-agent reinforcement learning has shown promise in learning cooperative behaviors in team-based environments. However, such methods often demand extensive training time, which inhibits their application for game-AI in standard game development. For instance, the state-of-the-art method TiZero takes 40 days to train high-quality policies for a football environment. In this paper, we hypothesize that better exploration mechanisms can improve the sample efficiency of multi-agent methods. Thereby, we propose utilizing a random network distillation bonus within the multi-agent TiZero framework, aiming to promote exploration. Additionally, we introduce architectural modifications to the original algorithm to enhance TiZero's computational efficiency. We evaluate the sample efficiency of our approach against original TiZero through extensive experiments. Our results show that random network distillation improves the sample efficiency per training phase by 13.3% compared with the original TiZero, enhancing generalization and adaptability to previously difficult scenarios. This highlights the better applicability of our variant in practical game development settings. Lastly, we qualitatively evaluate the gameplay of the produced models against a heuristic AI. We find that random network distillation leads to a higher accuracy in shooting, and it achieves higher behavioral stability as shown by the lower standard deviation achieved in gameplay metrics. The code is available at https://github.com/electronicarts/marling.
