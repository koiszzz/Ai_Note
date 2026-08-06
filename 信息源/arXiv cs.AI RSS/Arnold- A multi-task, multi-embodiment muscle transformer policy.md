# Arnold: A multi-task, multi-embodiment muscle transformer policy

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Boshi An, Alberto Silvio Chiappa, Merkourios Simos, Chengkun Li, Alexander Mathis　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2508.18066)

------

arXiv:2508.18066v2 Announce Type: replace-cross

Abstract: Controlling high-dimensional and nonlinear musculoskeletal models of the human body is a foundational scientific challenge. Recent machine learning breakthroughs have heralded in-silico policies that master individual skills like reaching, object manipulation and locomotion in musculoskeletal systems with many degrees of freedom. However, these agents are merely "specialists", achieving high performance for a single skill. In this work, we develop Arnold, a transformer-based musculoskeletal control policy that masters multiple tasks and embodiments. Arnold combines behavior cloning and reinforcement learning to address 14 challenging control tasks spanning dexterous object manipulation, reaching, and locomotion, matching or exceeding the performance of single-task specialist policies. A key innovation is Arnold's sensorimotor vocabulary, a compositional representation of the semantics of heterogeneous sensory modalities, objectives, and actuators. Arnold leverages this vocabulary via a transformer architecture to deal with the variable observation and action spaces across tasks. This framework supports efficient multi-task, multi-embodiment learning and facilitates rapid adaptation to novel tasks, while encouraging universal motor strategies such as action and kinematic smoothness. Finally, causal probing of the motor output reveals that low-dimensional muscle synergies remain largely task-specific and that variance-based analyses systematically underestimate functional control dimensionality, consistent with biological observations on the limited transferability of such synergies. Code and data are available here: https://github.com/amathislab/arnold
