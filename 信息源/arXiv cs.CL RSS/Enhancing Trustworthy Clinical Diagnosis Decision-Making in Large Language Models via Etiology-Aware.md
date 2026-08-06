# Enhancing Trustworthy Clinical Diagnosis Decision-Making in Large Language Models via Etiology-Aware Attention Supervision

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Peixian Li, Yu Tian, Ruiqi Tu, Chengkai Wu, Jingjing Ren, Jingsong Li　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2508.00285)

------

arXiv:2508.00285v2 Announce Type: replace

Abstract: Objective: Large Language Models (LLMs) have demonstrated strong capabilities in medical text understanding and generation. However, their trustworthiness in diagnosis-oriented medical tasks remains constrained by the lack of structured guidance on how clinically relevant diagnostic evidence is internally attended to and utilized during model learning. Method: We propose an Etiology-Aware Attention Supervision framework that introduces structured etiological information as an external supervisory signal for training large language models. Specifically, we construct Clinical Etiology Schema (CES) derived from authoritative clinical guidelines for three acute abdominal conditions: acute appendicitis, acute pancreatitis, and acute cholecystitis. Based on CES annotations, we develop an Etiology-Aware Head Identification strategy to identify attention heads that consistently align with etiological evidence. Building on this analysis, we design a structure-guided parameter-efficient fine-tuning approach that steers attention distributions toward clinically relevant evidence through an additional supervision loss, without modifying the base model architecture. Result: Experiments conducted on a Consistent Diagnosis Cohort demonstrate that the proposed framework improves average diagnostic accuracy by 15.65% compared with baseline models. Attention-based metrics, including Inference Focus Score and Inference Attention Frequency, show more concentrated attention on etiologically relevant evidence. External evaluation on a Discrepant Diagnosis Cohort further confirms the robustness of diagnostic performance improvements under real-world clinical inconsistencies.
