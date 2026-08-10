# Big, Bright, or Invisible: A Frozen-Feature Benchmark of 3D CT Foundation Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Maulik Chevli, Johannes Brandt, Rickmer Braren, Daniel Rueckert, Philip M\"uller　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05960)

------

arXiv:2608.05960v1 Announce Type: cross

Abstract: Routine CT interpretation is inherently comprehensive, capturing incidental findings across the entire scan volume. 3D CT foundation models could assist this process by providing generalizable representations of anatomy and pathology. To evaluate their diagnostic breadth, we benchmark ten frozen CT encoders across three cohorts of thoracic CT scans, including an unseen internal clinical dataset, using $k$-nearest neighbors, zero-shot prompting, and linear probing. We find no universal state-of-the-art, with rankings fluctuating significantly depending on the evaluation context. While models combining fine-grained image tokenization with vision-language alignment generally perform best, a lightweight supervised encoder remains highly competitive, demonstrating that explicit labels can effectively substitute for scale. Crucially, rather than model architecture, we observe that the primary determinant of performance is a physical bottleneck: a finding's detectability scales with its contrast against surrounding tissue and its spatial extent. Through controlled within-organ comparisons, we empirically demonstrate that widespread or high-contrast abnormalities, such as devices and effusions, are reliably recovered. Conversely, small, low-contrast focal lesions remain a persistent challenge across all evaluated encoders. We attribute this to the inherent limitations of globally pooled embeddings, suggesting that accurately representing small, low-contrast structures will require region- or lesion-level pretraining.
