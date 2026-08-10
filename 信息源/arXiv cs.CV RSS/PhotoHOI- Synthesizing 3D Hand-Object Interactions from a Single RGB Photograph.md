# PhotoHOI: Synthesizing 3D Hand-Object Interactions from a Single RGB Photograph

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zhenhao Zhang, Jiajun Zhang, Wei Min, Yebin Liu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.01905)

------

arXiv:2608.01905v2 Announce Type: replace

Abstract: Hand-object interaction (HOI) is a fundamental human behavior with broad applications in AR/VR, digital humans, and embodied interaction. Existing methods typically require predefined object geometry, object trajectories, or task-specific conditions, limiting their use with natural real-world inputs. To address this, we study a more practical problem of synthesizing 3D hand-object interaction sequences from a single RGB photograph and an open-vocabulary language instruction, and introduce PhotoHOI. PhotoHOI first uses a vision-language model to parse the input image and instruction into a structured task specification, including the interaction object, target region, and spatial relation. It then recovers a compact task-relevant 3D scene and plans a smooth collision-aware object trajectory based on the recovered object states, support relations, and surrounding scene geometry. To synthesize hand motion that generalizes to real-world photographs and unseen objects, it learns transferable task-conditioned contact and contact-conditioned grasp priors from large-scale affordance and HOI data. The grasp is further refined in a learned latent space, constraining the optimization to a plausible hand-pose manifold. Experiments on GRAB and H2O demonstrate improved contact quality and reduced penetration over representative baselines. Results on real-world photographs further demonstrate higher task success and scene consistency, together with generalization to unseen objects and open-vocabulary instructions.
