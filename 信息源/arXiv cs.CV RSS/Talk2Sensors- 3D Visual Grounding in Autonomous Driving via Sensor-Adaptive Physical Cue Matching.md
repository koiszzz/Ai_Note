# Talk2Sensors: 3D Visual Grounding in Autonomous Driving via Sensor-Adaptive Physical Cue Matching

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Runwei Guan, Di Tian, Ningwei Ouyang, Ruixiao Zhang, Shaofeng Liang, Haocheng Zhao, Lianqing Zheng, Xiaokai Bai, Guotao Wang, Daizong Liu, Henghui Ding, Hui Xiong　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04568)

------

arXiv:2608.04568v1 Announce Type: new

Abstract: As a key capability for embodied intelligence, 3D visual grounding (3DVG) has been predominantly studied in indoor scenes with RGB-D or point-cloud inputs, while existing outdoor extensions largely rely on monocular images alone. Both settings fall short of real-world outdoor perception, where heterogeneous sensors capture complementary yet distinct physical properties, such as visual texture, 3D geometry, and object kinematics, that are indispensable for flexible and robust query-adaptive grounding but remain under-exploited. To bridge this gap, we introduce Talk2Sensors, the first multi-sensor 3D visual grounding dataset built upon camera, LiDAR, and 4D radar. It contains 8,682 language instructions and 20,558 referred objects, with diverse prompts explicitly aligned with sensor-specific physical cues. Furthermore, we propose TSFormer, a unified Transformer-based framework for language-guided 3D visual grounding in autonomous driving. TSFormer adopts a coarse-to-fine property-aware fusion strategy: the Language-Routed Property Sampler first performs coarse text-conditioned feature retrieval by modulating sensor sampling weights with query-level linguistic cues, while the subsequent Sparse-Preserving Modality Arbiter module conducts fine-grained modality arbitration and text-guided refinement to determine the precise referred spatial location. This design enables dynamic routing of appearance, geometry, and motion cues according to the semantic requirements of each prompt, preventing dense modalities from overwhelming sparse but critical sensor signals. Extensive experiments demonstrate that TSFormer achieves state-of-the-art performance across multiple benchmarks: it improves over the strongest baseline by 8.05 mAP on Talk2Sensors, and transfers to the monocular Mono3DRefer benchmark with 53.05\% Acc@0.5.
