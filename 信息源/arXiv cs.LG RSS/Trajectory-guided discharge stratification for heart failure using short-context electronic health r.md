# Trajectory-guided discharge stratification for heart failure using short-context electronic health record sequence modeling

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Falk Dippel, Yinan Yu, Annika Rosengren, Martin Lindgren, Christina E. Lundberg, Erik Aerts, Martin Adiels, Helen Sj\"oland　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2511.16839)

------

arXiv:2511.16839v4 Announce Type: replace

Abstract: Purpose: Heart failure (HF) discharge planning depends on identifying patients at risk of deterioration or death, yet accurate prediction from routinely collected electronic health records (EHRs) remains challenging. Methods: We develop trajectory-guided discharge stratification for heart failure (TGDS-HF), a methodology that reads the patient in-hospital trajectory of diagnoses, vital signs, laboratories, medications, and procedures end-to-end with a compact short-context autoregressive Transformer, and uses it to stratify one-year risks of clinical instability (a rehospitalization phenotype) or mortality for discharge care. We instantiate TGDS-HF on a Swedish HF cohort (N = 42,820) to predict one-year clinical instability or mortality at the initial HF diagnosis in-hospital. TGDS-HF has three components: category-level tokenization, recency-weighted temporal representation, and sequence model configuration. We run ablations on these components to show the effectiveness of TGDS-HF. Results: Against traditional eXtreme gradient boosting machine (XGBoost) and bidirectional encoder representations from Transformers (BERT)-based EHR sequence-modeling baselines, TGDS-HF (Llama backbone) achieved area under the precision-recall curves (AUPRCs) with 95% confidence intervals of 0.555 (0.535-0.575) and 0.574 (0.550-0.599) across the two tasks at the method default, with robust calibration. A task-specific refinement using daily aggregation of repeated continuous events improves the mortality task to 0.582 (0.558-0.608). Further, TGDS-HF maintains strong performance under reduced clinical concept availability and limited training data. Conclusion: Combined predictions of instability and mortality from TGDS-HF may support personalized discharge planning, ranging from follow-up in primary care to specialist-led management and, when appropriate, palliative care.
