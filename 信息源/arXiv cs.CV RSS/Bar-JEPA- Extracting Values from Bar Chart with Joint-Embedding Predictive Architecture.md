# Bar-JEPA: Extracting Values from Bar Chart with Joint-Embedding Predictive Architecture

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Poonam Poonam, Alexander Epple, Timo Ropinski　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06062)

------

arXiv:2608.06062v1 Announce Type: new

Abstract: Bar charts are commonly used in data visualization, and while they are easily understood by humans, it is non-trivial to extract the underlying data computationally. For a machine-learning-based approach, training chart de-rendering models usually requires labeled, real-world data. Labeling data is a time consuming task, which is why annotated data is scarce. Models can learn more efficiently when provided with features of high semantic quality, which a joint-embedding predictive architecture (JEPA) is designed to learn in a self-supervised manner. We present a per-bar, numerical value recovery pipeline for bar charts, where a JEPA encoder is used to produce semantically rich latent features. The decoder model consuming these features is simple and quick to train and outputs the coordinates of ticks and bars, which can be used to recover bar values. The effectiveness of self-supervised finetuning and quality of the extracted features is evident when comparing our model to end-to-end supervised baselines. Code, datasets and checkpoints are available on \href{https://github.com/dralois/Bar-JEPA}{GitHub}.
