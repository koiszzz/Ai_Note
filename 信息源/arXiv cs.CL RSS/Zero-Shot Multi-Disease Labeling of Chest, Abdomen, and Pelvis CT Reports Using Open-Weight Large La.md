# Zero-Shot Multi-Disease Labeling of Chest, Abdomen, and Pelvis CT Reports Using Open-Weight Large Language Models: The Effect of Labeling Conventions

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Michael E. Garcia-Alcoser, Mobina Ghojoghnejad, Fakrul Islam Tushar, David Kim, Kyle J. Lafata, Geoffrey D. Rubin, Joseph Y. Lo　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2506.03259)

------

arXiv:2506.03259v3 Announce Type: replace

Abstract: Purpose: To compare five lightweight open-weight large language models (LLMs) with a rule-based algorithm (RBA) and fine-tuned RadBERT for zero-shot labeling of chest-abdomen-pelvis (CAP) CT reports, and to examine how labeling conventions affect measured performance.

Materials and Methods: In this retrospective study, 40,833 CAP CT reports from 29,540 patients examined between 2012 and 2017 were analyzed; age and sex were unavailable. Five LLMs were prompted zero-shot to assign 15 labels across three organ systems and compared with an RBA and fine-tuned RadBERT. Inter-model agreement was assessed with Cohen kappa ($\kappa$) on 12,197 held-out reports. Macro-averaged F1 was computed against 1,789 radiologist-supervised annotations, the same annotations simplified to disregard clinical actionability, and the CT-RATE dataset. Nonoverlapping bootstrapped 95% CIs indicated relevant differences.

Results: MedGemma 27B and MedGemma-1.5 4B showed the highest median agreement ($\kappa$ = 0.90). Against manual annotations, Gemma-3 27B achieved the highest macro-averaged F1 (0.82 [95% CI: 0.80, 0.83]) versus 0.66 for RadBERT and 0.64 for the RBA; a majority-vote ensemble scored 0.84. Scores were lowest averaged across models for subjective classes, kidney lesion (0.44) and atelectasis (0.67). Relabeling raised F1 for all models on kidney lesion, but for atelectasis only for the LLMs; the RBA and RadBERT declined. F1 against CT-RATE exceeded that against manual annotations for all models, reflecting its more literal convention.

Conclusion: Lightweight open-weight LLMs outperformed rule-based and fine-tuned BERT labeling of CAP CT reports with zero-shot prompting. Models and annotators disagreed largely because they applied different labeling criteria.
