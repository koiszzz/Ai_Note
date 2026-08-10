---
published: 2026-08-07
title: "CourseGraph：发现各大学计算机科学课程的重叠与差异"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CourseGraph- Finding overlaps and differences in Computer Science courses across universities.md"
source_note: "[[信息源/arXiv cs.AI RSS/CourseGraph- Finding overlaps and differences in Computer Science courses across universities]]"
source_sha256: 4504542aa402780f49ae2182831277e5358fb1a9445d8f6a1b7f46cdc0f83624
original_url: "https://arxiv.org/abs/2608.05910"
processed: 2026-08-07
language: zh-CN
---

# CourseGraph：发现各大学计算机科学课程的重叠与差异

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Arthur Nijdam, Paul Stankovski Wagner, Sara Ramezanian
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05910)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CourseGraph- Finding overlaps and differences in Computer Science courses across universities|查看原始文件]]

## 摘要

- Erasmus+ 等学生流动项目使学生能在他校修课、拓展学术与文化视野，但灵活性也带来实际挑战：确保学生不会在他处修读与本校课程大量重叠的课程。
- 提出 CourseGraph：一种基于课程管理人员评估课程纳入学位课程所遵循流程洞见的自动化外部课程评估方法论；从课程网页提取课程标题、描述与学习成果等信息，用基于 BERT 的语言模型语义表示后计算课程两两相似度。
- 随机森林分类器用该信息判断候选海外课程是否与学生的课程重叠。
- 用两个数据集评估：埃因霍温理工大学计算机科学项目（含大量重叠课程信息）与隆德大学计算机科学学生六个获批国际项目（含课程管理员对应决策）；实验表明 CourseGraph 为识别重叠课程、支持跨大学课程对齐提供有效方法。

## 正文

Erasmus+ 等学生流动项目使学生能够在其他大学修读课程，拓展其学术与文化视野。然而，这种灵活性也带来了实际挑战：确保学生不会在别处修读与本校课程大量重叠的课程。在本工作中，我们提出 CourseGraph，一种基于课程管理人员评估课程纳入学位课程所遵循流程洞见的自动化外部课程评估方法论。CourseGraph 从课程网页提取课程标题、描述与学习成果等信息。然后，这些信息使用基于 BERT 的语言模型进行语义表示，之后可计算课程之间的两两相似度。随后，随机森林分类器使用该信息确定候选海外课程是否与学生课程中已有的课程重叠。我们使用（1）埃因霍温理工大学（Eindhoven University of Technology）的计算机科学项目（包含具有大量重叠课程的信息）与（2）隆德大学（Lund University）计算机科学专业学生六个获批国际项目（包括课程管理员所做的相应决策）评估 CourseGraph。实验结果表明，CourseGraph 为识别重叠课程与支持跨大学课程对齐提供了有效方法。

## 关键词

#课程评估 #语义相似度 #学生流动 #教育技术
