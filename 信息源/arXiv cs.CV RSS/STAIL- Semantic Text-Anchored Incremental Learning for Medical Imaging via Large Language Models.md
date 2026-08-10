# STAIL: Semantic Text-Anchored Incremental Learning for Medical Imaging via Large Language Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Songpan Gao, Yajie Zhang, Guanxing Chen, Jiayu Qian, Zhenzhen Liu, Shijun Li, Xiaowei Zhu, Yao Hu, Kay Chen Tan, Yu-An Huang, Shiqi Wang, Zhi-An Huang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05808)

------

arXiv:2608.05808v1 Announce Type: new

Abstract: Deep learning models applied to medical image analysis suffer from severe catastrophic forgetting when continually adapting to new clinical tasks in dynamic environments. Mainstream incremental learning methods typically mitigate this by rehearsing raw historical images. However, this pixel-level rehearsal incurs significant storage overhead, raises privacy concerns, and fails to adequately capture the true data distribution with sparse exemplars. Inspired by human cognitive mechanisms, we propose a novel framework termed Semantic Text-Anchored Incremental Learning (STAIL) for sequential clinical tasks. To overcome the rehearsal bottleneck, STAIL introduces an asymmetric semantic consolidation buffer (SCB). By incorporating a minimal set of image anchors and extensive textual descriptions, the SCB enables dense semantic reconstruction of old tasks at a minimal storage cost. Furthermore, we design an LLM-derived Semantic Anchoring Mechanism (LSAM) that leverages the stable semantic space of frozen large language models as developmental priors. This mechanism explicitly anchors evolving visual features to textual representations, guiding and constraining plasticity and stability at both macroscopic and microscopic levels. Extensive experiments across three heterogeneous medical datasets, covering fundus, ultrasound, and X-ray imaging, demonstrate that STAIL acts as a highly effective plug-and-play module. It comprehensively enhances the performance of various existing baselines, achieving average gains of 2.24\% in AAA-AUC for sustained performance and 3.55\% in BWT-AUC for reduced forgetting. Code is available.
