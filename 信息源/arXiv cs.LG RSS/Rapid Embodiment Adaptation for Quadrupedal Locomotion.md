# Rapid Embodiment Adaptation for Quadrupedal Locomotion

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Dichen Li, Bo Ai, Nico Bohlinger, Jan Peters, Hao Su, Henrik I. Christensen　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.01506)

------

arXiv:2608.01506v2 Announce Type: replace-cross

Abstract: Humans readily adapt their movements as their bodies change through aging, injury, or load carrying, but learning-based robot policies often break when hardware properties shift. We introduce an online embodiment adaptation framework for quadrupedal locomotion that infers embodiment parameters from short interaction histories and conditions control on the inferred hardware state. Our method pairs a generalist policy trained under embodiment randomization with a lightweight adaptation module that identifies physical changes within half a second. We evaluate two representative forms of embodiment variation: joint-range constraints and trunk-mass changes, corresponding to joint-level kinematic degradation and body-level dynamic variation. In simulation, the module accurately estimates these changes and enables closed-loop control that substantially outperforms policies conditioned directly on interaction history. On a real Unitree Go2 robot, our system maintains stable locomotion under severe instances of the evaluated changes, including a fully locked leg and a 5 kg payload, where non-adaptive methods fail. These results demonstrate the practicality of explicit online embodiment identification for rapid adaptation to joint-limit and payload-mass changes, and provide a step toward handling broader forms of uncertain, degraded, or changing robot hardware.
