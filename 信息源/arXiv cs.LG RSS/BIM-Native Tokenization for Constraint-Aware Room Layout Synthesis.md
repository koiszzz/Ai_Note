# BIM-Native Tokenization for Constraint-Aware Room Layout Synthesis

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Manuel Ladron de Guevara, Jinmo Rhee, Ardavan Bidgoli, Vaidas Razgaitis, Michael Bergin　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2512.04832)

------

arXiv:2512.04832v3 Announce Type: replace-cross

Abstract: We present a BIM-native tokenization for room-level layout synthesis in Building Information Modeling (BIM) scenes. The core contribution is representational: we encode each room as a sequence of BIM-Token Bundles, realized as columns of a sparse attribute-feature matrix that unifies categorical and continuous attributes of walls, openings, and entities under wall-referenced (translation/scale-invariant) coordinates. A mixed-type embedding module produces a unified token vector from this matrix; a single Transformer backbone is then trained in two modes: encoder-only for room embeddings and retrieval, and encoder-decoder for autoregressive entity placement, which we call Data-Driven Entity Prediction (DDEP). On a controlled same-data benchmark with shared ontology and evaluation harness, DDEP outperforms ATISS and BLT baselines bridged into our representation, with ablations identifying joint continuous-feature embedding and entity ordering as primary drivers. Encoder embeddings cluster rooms by type more tightly than large general-purpose text encoders, which in turn retain an edge on within-type ranking. We frame this work as evidence that modestly sized, domain-specific sequence models over well-designed BIM tokenizations are a useful primitive for constraint-aware spatial generation, complementary to general-purpose LLMs/VLMs which we also benchmark.
