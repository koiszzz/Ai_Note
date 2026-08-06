# HomoEnsNER: Does Language Alignment Outperform Architectural Complexity in Gujarati Named Entity Recognition?

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Chandrakant K. Bhogayata　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03105)

------

arXiv:2608.03105v2 Announce Type: replace

Abstract: Named Entity Recognition (NER) for Gujarati remains underexplored, hindered by the absence of capitalization cues, rich morphology, lexical ambiguity, and free word order. Prior ensemble work has emphasized architectural diversity by combining heterogeneous classifiers, multilingual encoders, or classical sequence models, rather than exploiting language-aligned monolingual pretraining. This study asks whether, for a low-resource, morphologically rich language like Gujarati, a homogeneous ensemble of a single monolingual encoder outperforms such architectural diversity. We propose HomoEnsNER, a homogeneous ensemble of five independently fine-tuned GujaratiBERT models combined via majority voting, evaluated against a single GujaratiBERT baseline and six heterogeneous alternatives, including combinations with MuRIL-base, MuRIL-large, IndicBERT, mBERT, BiLSTM, CRF, and a stacked BiLSTM-CRF-GujaratiBERT architecture. All eight models were trained under a consistent budget and evaluated using entity-level F1 on the Naamapadam Gujarati test split. HomoEnsNER achieved the highest F1 (0.8442), surpassing the baseline (0.8347) and every heterogeneous alternative (lowest: 0.7855), indicating that language alignment is a more effective, budget-conscious ensembling strategy than architectural complexity for low-resource Indian language NER.
