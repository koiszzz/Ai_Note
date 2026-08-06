# Steganalysis of Adaptive Covert Collusion in Tool-Using Agent Populations: A Black-Box, Cross-Principal Approach

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Mohamed Chahine Ghanem　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02698)

------

arXiv:2608.02698v1 Announce Type: cross

Abstract: Tool-using agents built on large language models (LLMs) are increasingly deployed not by a single operator but by many, side by side on shared infrastructure. This creates a population-level risk that single-agent safeguards miss: a handful of agents can quietly coordinate, rigging a market, boosting one another in a review process, or timing a joint data grab, while each one looks perfectly well-behaved. The difficulty is that the organisations running these agents cannot see inside one another's models, so any realistic detector must work from behaviour alone: black-box, trace-only, and often with only partial visibility. We treat covert coordination as an information-hiding problem and build a black-box steganalysis detector that combines cross-run mutual-information estimation, permutation tests, distributional-shift statistics, and timing and tool-call side channels, all calibrated to a fixed false-positive budget. Our central move is to stop testing against a single fixed code: we pit the detector against an adversary that continually rewrites its encoding to slip past whatever the detector has learned, and we run this red-versus-blue contest in tool-using, memory-carrying environments rather than toy games. Capacity theory then tells us what to expect, a detection-capacity frontier, a covert bit-rate below which black-box detection is provably no better than chance. We set out an experiment to map this frontier, report clearly labelled placeholder results pending measurement, and flag a practical evasion, spreading a payload across sessions, that current methods largely miss.
