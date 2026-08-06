# Think Fast: Estimating No-CoT Task-Completion Time Horizons of Frontier AI Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Dewi Gould, Francis Rhys Ward, Anders Cairns Woodruff, Rauno Arike, Josh Hills, Alex Serrano, Ida Caspary, Jason Ross Brown, Jo J. Jiao, Patrick Leask, Twm Stone, Ram Potham, Ionut Gabriel Stan, Harry Mayne, Simeon Hellsten, Shubhorup Biswas, Ariana Azarbal, William L. Anderson, Elle Najt, Ryan Greenblatt, Julian Stastny　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2606.07157)

------

arXiv:2606.07157v4 Announce Type: replace

Abstract: Many efforts to ensure frontier AI models are safe rely on monitoring their chain-of-thought (CoT) reasoning. If models become able to perform sufficiently complex reasoning internally, without explicit thinking tokens, this would undermine such oversight. We measure how well frontier models reason without CoT across a suite of over 30,000 questions spanning 43 benchmarks in domains including math, coding, puzzles, causality, theory-of-mind, and strategic reasoning. To compare models against humans, we estimate the $50\%$-task-completion time horizon (TH): the human time required for tasks a model completes with $50\%$ success rate. We complement this with a $50\%$ reasoning token horizon: the minimum number of o3-mini reasoning tokens needed for tasks a model solves with $50\%$ success rate. We find that the no-CoT $50\%$ TH of frontier models has been doubling roughly every year over the past six years, with GPT-5.5's TH reaching over 3 minutes and reasoning token horizon exceeding 1,500 tokens. Our median estimates predict that frontier no-CoT THs could exceed 7 minutes by 2028, and 25 minutes by 2030, though these projections carry substantial uncertainty. We recommend frontier developers track this explicitly.
