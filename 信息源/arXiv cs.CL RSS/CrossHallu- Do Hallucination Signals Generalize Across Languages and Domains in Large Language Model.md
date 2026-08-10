# CrossHallu: Do Hallucination Signals Generalize Across Languages and Domains in Large Language Model's Internals?

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Aisha Alansari, Malak Alkhorasani, Hamzah Luqman　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2607.04029)

------

arXiv:2607.04029v2 Announce Type: replace

Abstract: Recent hallucination detection techniques in large language models (LLMs) focus on directly extracting features from a model's internal representations and training a classifier on these features to detect hallucinations, demonstrating promising results. Notwithstanding this advancement, most internal-state hallucination detection techniques have been explored predominantly in English, raising the question of whether such internal signals generalize across different languages and domains. To address this gap, we present CrossHallu, the first study to evaluate the cross-lingual and cross-domain generalization of hallucination detection using internal representations from six LLMs on the generative question-answering task. We conduct a systematic Arabic <-> English evaluation using TruthfulQA, an Arabic translated version of TruthfulQA, and HalluScore. This evaluation encompasses monolingual training and testing, cross-lingual transfer, cross-domain transfer, and combined cross-lingual and cross-domain transfer. The results reveal that internal-state hallucination signals in LLMs transfer across languages and domains for most models, with cross-lingual performance highly dependent on both class separability and language alignment in the feature space, whereas cross-domain transfer within Arabic varies depending on the training and testing datasets used for the hallucination detector. The code is publicly available at https://github.com/aishaalansari57/CrossHal.
