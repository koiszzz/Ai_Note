---
published: 2026-08-05
title: "哪个模态说了算：多模态 LLM 的反事实模态归因"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Which Modality Decides- Counterfactual Modality Attribution for Multimodal LLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/Which Modality Decides- Counterfactual Modality Attribution for Multimodal LLMs]]"
source_sha256: cfe9f590c42bb4ab4f40360f36c68473e345d5d2387454c6c3f8a971b54c32a8
original_url: "https://arxiv.org/abs/2608.00076"
processed: 2026-08-05
language: zh-CN
---

# 哪个模态说了算：多模态 LLM 的反事实模态归因

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Vahidin Hasic、Chao Wang、Luis C. Garcia-Peraza-Herrera 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00076)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Which Modality Decides- Counterfactual Modality Attribution for Multimodal LLMs|查看原始文件]]

## 摘要

- 把模态归因表述为多模态基础模型的互补可解释性目标，提出反事实模态归因（CMA），首个量化 MLLM 模态级贡献的框架：用耦合扩散先验生成仅图像、仅文本与联合多模态反事实，并通过基于 Shapley 值的合作博弈公式转化为原则性模态归因分数。
- 多模态大语言模型（MLLM）日益通过组合图像与文本互补信息支持高风险决策；现有可解释性方法识别有影响图像区域或文本 token，却无法回答根本问题：哪个模态驱动预测？模型因此可能产出正确输出却依赖错误证据来源，掩盖捷径学习与不安全推理。
- 在已知真值模态依赖的受控合成基准与真实世界多模态临床数据集上评估：CMA 在 98% 受控案例中正确识别决策驱动模态，一致优于基线，揭示仅预测准确率不可见的跨模态推理失败。
- 结果把模态归因确立为超越特征归因的可解释性互补维度，为安全关键应用审计多模态基础模型提供原则性框架。

## 正文

论文编号：arXiv:2608.00076v2（更新类型：replace-cross）。以下为摘要全文翻译。

多模态大语言模型（MLLM）日益通过组合图像与文本的互补信息支持高风险决策。虽然现有可解释性方法识别有影响的图像区域或文本 token，它们无法回答一个根本问题：哪个模态驱动一个预测？因此，一个模型可能产出正确输出，却依赖错误的证据来源，掩盖捷径学习与不安全推理。我们把模态归因表述为多模态基础模型的一个互补可解释性目标，并提出反事实模态归因（Counterfactual Modality Attribution，CMA），第一个量化 MLLM 模态级贡献的框架。CMA 使用耦合扩散先验生成仅图像、仅文本与联合多模态反事实，并通过基于 Shapley 值的合作博弈公式把它们转化为原则性的模态归因分数。我们在已知真值模态依赖的受控合成基准与一个真实世界多模态临床数据集上评估 CMA。CMA 在 98% 的受控案例中正确识别决策驱动模态，并一致优于基线，揭示仅预测准确率不可见的跨模态推理失败。我们的结果把模态归因确立为超越特征归因的可解释性互补维度，为安全关键应用审计多模态基础模型提供原则性框架。

## 关键词

#模态归因 #MLLM #反事实 #Shapley值
