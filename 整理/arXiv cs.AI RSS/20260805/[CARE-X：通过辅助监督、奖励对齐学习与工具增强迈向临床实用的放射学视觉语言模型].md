---
published: 2026-08-05
title: "CARE-X：通过辅助监督、奖励对齐学习与工具增强迈向临床实用的放射学视觉语言模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CARE-X- Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning.md"
source_note: "[[信息源/arXiv cs.AI RSS/CARE-X- Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning]]"
source_sha256: d6d72cb761cb58dc9533bb1621e66b430ee83baeccd639aa39cedb5dacd141df
original_url: "https://arxiv.org/abs/2608.03890"
processed: 2026-08-05
language: zh-CN
---

# CARE-X：通过辅助监督、奖励对齐学习与工具增强迈向临床实用的放射学视觉语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03890)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CARE-X- Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning|查看原始文件]]

## 摘要

- 临床实用的胸部 X 光系统不能只生成流畅报告，还应使用可调决策阈值对发现进行分类、进行空间定位，并推导许多诊断所依赖的解剖测量值。
- 当前视觉语言模型通常把这些任务分开处理，甚至完全不处理，因此在放射科医生需要的能力与生成式模型提供的能力之间存在缺口。
- 论文提出 CARE-X，通过统一辅助判别监督与奖励对齐生成来缩小这一缺口。
- CARE-X 在生成骨干上增加焦点损失分类头和复合损失定位头，与语言建模目标共同训练；辅助监督产生带可调阈值的判别式诊断预测和精确空间定位，同时提升报告质量。
- 解耦裁剪与动态采样策略优化（DAPO）进一步利用任务专属奖励信号，优化报告生成、视觉问答（VQA）和空间定位，直接针对临床实践中的质量指标。
- CARE-X 在四个报告生成基准的大多数指标上达到当前最优，在 ReXVQA 上达到 94.0% 的 VQA 准确率，比次优基线高 6.0 个百分点；生成式空间解码接近专用检测头的表现。
- 将 Qwen3-VL-4B-Instruct 与确定性测量工具的原生工具调用结合，在五种依赖测量的疾病条件上，平均 F1 比仅感知基线高 43.6 个百分点。

## 正文

临床实用的胸部 X 光系统不能只生成流畅的报告。它还应当能够使用可调节的决策阈值对影像发现进行分类，进行空间定位，并推导许多诊断所依赖的解剖测量值。当前视觉语言模型往往把这些问题分开处理，或者根本不处理，因此在放射科医生需要的能力与生成式模型能够提供的能力之间存在缺口。

本文提出 CARE-X，通过统一辅助判别监督和奖励对齐生成来缩小这一缺口。CARE-X 在生成式骨干上增加焦点损失分类头和复合损失定位头，并与语言建模目标共同训练。辅助监督能够产生带可调决策阈值的判别式诊断预测和精确的空间定位，同时也改善报告质量，说明结构化预测与生成可以相互促进。

在此基础上，解耦裁剪与动态采样策略优化（Decoupled Clip and Dynamic Sampling Policy Optimization，DAPO）利用任务专属奖励信号，针对报告生成、视觉问答（VQA）和空间定位进行优化，直接优化临床实践中重要的质量指标。CARE-X 在四个报告生成基准的大多数指标上达到当前最优，在 ReXVQA 上取得 94.0% 的 VQA 准确率，比次优基线高 6.0 个百分点；其生成式空间解码的表现也接近专用检测头。

为处理依赖测量的诊断，作者另外将 Qwen3-VL-4B-Instruct 与原生工具调用能力结合，使模型能够调用确定性测量工具，同时保留对图像的完整视觉访问。在五种依赖测量的疾病条件上，这种混合推理相比仅感知基线使平均 F1 提高 43.6 个百分点。

## 关键词

#放射学 #胸部X光 #视觉语言模型 #医学影像 #辅助监督 #工具调用
