# Radar4D-VLM: Proposal-Grounded Temporal 4D Radar Reasoning Across Frozen Language Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jiaju Han, Xuemeng Sun, Qike Zhang, Xiang Chen, Luwei Yang, Jiahuan Long, Yiwei Wei, Jiujiang Guo, Chengyin Hu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04130)

------

arXiv:2608.04130v1 Announce Type: new

Abstract: Vision-language models for autonomous driving primarily rely on cameras and LiDAR, leaving 4D radar largely unexplored as a standalone perceptual modality despite its robustness to adverse visibility and direct measurement of radial velocity. We introduce Radar4D-VLM, a radar-only temporal vision-language model that reasons from ten consecutive 4D-radar point-cloud sweeps without camera or LiDAR input. Radar4D-VLM extracts geometrically grounded object proposals and organizes radar evidence into a compact hierarchy of object, scene, and kinematic tokens. A parameter-efficient projector maps these tokens into frozen language backbones, while auditable prediction heads jointly model object count, spatial distribution, motion state, collision risk, semantic category, and radial velocity. Radar4D-VLM combines proposal-grounded temporal object tokenization, global scene context, and explicit kinematic tokens within a unified frozen-backbone interface. On sequence-isolated K-Radar development validation, its Top-64 proposal recall reaches 98.13% at 4 m, exceeding fixed-lattice and uniform-random controls by 6.40 and 22.83 percentage points, respectively. We further evaluate 24 matched runs spanning eight frozen Qwen, Phi, Mistral, Llama, and Gemma backbones under an identical adaptation budget. The radar-token interface remains compatible across all five language-model families, while matched aligned, permuted, and no-language controls show sensor dependence but no stable direct-head gain from aligned language supervision. These results establish a reproducible foundation for radar-only multimodal scene and motion reasoning while separating interface compatibility from the benefit of language supervision.
