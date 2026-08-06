# Inferring Relative Consequences of Mechanical Ventilation from Observational Data Using Game-Based Comparisons

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：David J. Albers, Tell D. Bennett, Jana de Wiljes, George Hripcsak, Bradford J. Smith, Peter D. Sottile, J. N. Stroh　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：q-bio.QM　|　原文：[打开链接](https://arxiv.org/abs/2510.15127)

------

arXiv:2510.15127v4 Announce Type: replace-cross

Abstract: Identifying the effects of mechanical ventilation (MV) protocols in critical care requires analyzing data from heterogeneous patient-ventilator systems in the clinical decision-making environment. Multiscale interactions among these coupled components generate a high-dimensional state space that remains sparsely sampled despite extensive data collection. Analysis of existing data is essential for understanding current respiratory management practices and generating testable hypotheses about improvement. The scale and complexity of available data motivate the use of reinforcement learning (RL) to explore data-consistent counterfactual trajectories. However, formulating RL in practical applications requires a spatiotemporally dependent reward process that defines state-to-consequence relationships, their context dependence, and the delays over which consequences emerge. These poorly understood elements are not known \emph{a priori} and inferred from data via hypotheses. To that end, categorized observed states are contrasted according to their relative consequences by solving a game-based inverse problem that identifies a comparison model required for downstream probabilistic and stochastic methods such as reinforcement learning for seeking MV optimization and personalization. The inverted-game inference is validated on synthetic data to reveal potential caveats before proceeding to real-world ICU data applications that expose complexities of the data-generating process. Clinical data applications revealed that both breath-type consequences and their relative ordering are inherently context- and time-dependent, varying across patient subgroups, time, and comparison quantities, and effect timescale. The discussion includes potential developments toward a state transition model for simulating the effects of MV management actions using empirical data and game-inferred comparisons.
