# OncoTriad-QA: A Patient-Level Radiology-Pathology-Genomics Benchmark for Pan-Cancer Reasoning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ahnaf Munir, Dannong Wang, Michael W. McDonald, Mubarak Shah, Pegah Khosravi, Yu Tian　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.02615)

------

arXiv:2608.02615v1 Announce Type: cross

Abstract: Cancer diagnosis and characterization require integrating complementary evidence from radiology, pathology, genomics, and clinical metadata. However, most medical large language model (LLM) and vision-language model (VLM) benchmarks focus on isolated modalities or narrow image-text tasks, leaving patient-level oncology assessment across multiple evidence streams largely untested. We introduce OncoTriad-QA, a patient-level radiology-pathology-genomics benchmark for pan-cancer question answering. OncoTriad-QA contains 86.1k semantic questions across 9,281 TCGA patient cases from 32 cancer cohorts, aligning CT/MRI radiology, whole-slide histopathology, somatic mutations, copy-number alterations, DNA methylation, bulk RNA-seq, and clinical metadata. Case-specific annotations are constructed through a source-grounded LLM-assisted pipeline using curated labels, diagnostic reports, molecular profiles, and modality-derived evidence as primary sources of truth, with automated consistency checks and clinician review. We also introduce OncoVLM, a reference multimodal model that maps modality-native radiology, pathology, DNA methylation, and RNA-seq evidence into an LLM interface through learned projectors. Experiments show that existing general-purpose and medical LLMs remain limited on comprehensive pan-cancer QA, especially when questions require integrating imaging findings, tumor morphology, and molecular evidence. After fine-tuning on OncoTriad-QA, OncoVLM exceeds MedGemma-4B by an average of 10.7 points when using MCQ accuracy and BERTScore-F1, with consistent gains across multiple-choice and open-ended questions under radiology-only, pathology-only, and all-available settings. These results demonstrate the benchmark's value for training and evaluating models for integrated cancer question answering.
