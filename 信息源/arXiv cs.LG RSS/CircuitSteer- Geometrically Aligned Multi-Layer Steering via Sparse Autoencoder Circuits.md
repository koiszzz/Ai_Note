# CircuitSteer: Geometrically Aligned Multi-Layer Steering via Sparse Autoencoder Circuits

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mehrshad Saadatinia, Parsa Razmara, Ardalan Aryashad, Ali Abbasi, Seyedarmin Azizi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05732)

------

arXiv:2608.05732v1 Announce Type: new

Abstract: Controlling the behavior of large language models (LLMs) remains a critical challenge for AI alignment. Existing steering methods, such as Contrastive Activation Addition (CAA), typically rely on fixed single-layer interventions derived from aggregate activation differences. These methods impose a single intervention across semantically diverse inputs and often fail to sustain consistent behavioral changes across layers, limiting the effectiveness of the steering. In this work, we introduce CircuitSteer, a novel framework that leverages Sparse Autoencoders (SAEs) to identify and manipulate coherent semantic circuits distributed across multiple layers. By constructing a feature flow circuit based on feature co-activation and the geometric alignment of decoder directions, we isolate the specific multi-layer subcircuits responsible for a target behavior. We then synthesize dense steering vectors from these sparse features and apply multi-point interventions to guide the model's internal semantic trajectory. We evaluate CircuitSteer using contrastive examples across a diverse set of tasks, including toxicity, emotion-intensity, sycophancy, and refusal, spanning two model families. Across all models and datasets, CircuitSteer is the only method to consistently produce fluency-preserving interventions; competing methods either sacrifice text quality or lack coverage, failing entirely on complex behaviors like sycophancy and refusal. These results demonstrate that multi-layer circuit steering, enabled by enforcing geometric alignment among selected features, yields strictly more robust and effective behavioral control than static single-point interventions. Code is available at https://github.com/mehrshad-sdtn/CircuitSteer.
