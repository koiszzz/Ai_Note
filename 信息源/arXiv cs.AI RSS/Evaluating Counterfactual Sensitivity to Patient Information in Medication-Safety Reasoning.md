# Evaluating Counterfactual Sensitivity to Patient Information in Medication-Safety Reasoning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhitian Hou, Yuhang Liu, Pengkai Wang, Zeyu Liu, Guanghao Zhu, Zheng Liu, Shuo Cai, Congkai Xie, Zhijie Sang, Kun Zeng, Hongxia Yang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03028)

------

arXiv:2608.03028v1 Announce Type: new

Abstract: Applying a valid medication-safety rule when its patient-specific conditions are not met can produce an incorrect decision. Existing medical evaluations largely use isolated and fixed scenarios. A model may therefore answer correctly by recalling a drug-risk association without showing that it used patient information to decide whether the rule applies. To address this gap, we introduce MedPIC-Bench, a benchmark of source-verifiable recommendations and expert-validated questions for patient-specific medication-safety reasoning. It combines guideline-following questions with paired counterfactual questions in which a controlled change in patient information changes whether a rule applies. The benchmark contains 467 questions annotated along six clinical and reasoning dimensions. Across 28 medical-specific, general, and proprietary LLMs, every model performs worse on counterfactual questions, with mean accuracy falling from 63.6\% to 45.1\%. Models perform well when an explicit patient attribute directly signals a familiar contraindication, but struggle when patient information must narrow or withdraw a safety warning. Model rationales often acknowledge the changed patient information, yet the final answers retain the previous safety judgment. This vulnerability persists among medical-specific LLMs, whose average CF performance trails that of general LLMs. MedPIC-Bench therefore makes conditional rule application measurable and highlights the limitations of static medication-safety accuracy for assessing patient-specific reliability.
