---
published: 2026-08-06
title: 感知种族与性别对警察用语的影响：来自VR模拟的实验证据
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/The Effect of Perceived Race and Gender on Police Language Use- Experimental Evidence from VR Simula.md
source_note: "[[信息源/arXiv cs.AI RSS/The Effect of Perceived Race and Gender on Police Language Use- Experimental Evidence from VR Simula]]"
source_sha256: 932c7fe03215205e3ac45b277701ad61a78ef56df6a3dba33548abec7feaede2
original_url: https://arxiv.org/abs/2608.05050
processed: 2026-08-07
language: zh-CN
---

# 感知种族与性别对警察用语的影响：来自VR模拟的实验证据

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05050)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/The Effect of Perceived Race and Gender on Police Language Use- Experimental Evidence from VR Simula|查看原始文件]]

## 摘要

- 在 VR 模拟中研究警察如何对表现为黑人成年男性的虚拟角色说话，以因果推断视角评估（边际）平均处理效应 ATE 对警官语句敬语程度的影响
- 发现多数警官对黑人男性角色说话时敬语程度更低，唯独白人、双种族及多种族女性警官例外，尤其在 VR 角色已知是嫌疑人时
- 边际 ATE 可造成语气敬语程度的显著变化（0-10 量表上相差 2 到数分），并可能促成对话崩溃，对公众与警察双方都构成危险
- 对 LLM 辅助 ATE 估计的方法比较表明：对含文本的多层数据，推荐混合效应模型结合基于逆倾向得分加权（IPTW）的方法

## 正文

在美国警察与公众互动中暴力事件频发的背景下，我们探索警察在虚拟现实（VR）模拟中如何以不同的敬语程度对表现为黑人成年男性的虚拟角色说话。我们通过因果推断的视角评估看到这些角色并与之交流的效果，其中黑人男性角色被分配给某位警官及某场模拟即为处理变量（treatment variable）。我们的（边际）平均处理效应（ATE）衡量了该角色对警官每一轮对话语句敬语程度的社会影响。

令人警醒的是，我们发现大多数警官对黑人男性角色说话时敬语程度较低，唯独白人、双种族及多种族女性警官例外，尤其是在 VR 角色已知是嫌疑人的情境中。在一个典型 VR 场景的完整对话中，这些边际 ATE 可导致语气敬语程度的显著变化（在 0-10 的量表上相差 2 到数分），远超单纯感知到黑人男性角色所带来的初始效应。更令人不安的是，这可能促成对话崩溃，从而潜在地对公众和警察双方造成暴力或危险。

我们还探索了大语言模型（LLM）在 ATE 估计上的能力。通过方法比较分析（包括针对合成数据进行的模型验证），我们为 LLM 辅助的 ATE 估计方法提供了独特的科学洞见。因此，对于具有文本的多层数据的 ATE 估计，我们推荐使用混合效应模型结合逆倾向得分加权（IPTW）方法，其中利用 LLM 进行文本特征创建。我们还测试了用 LLM 微调预测模型以最终用于 ATE 估计，但结论是这些方向有待进一步开发和完善。

## 关键词

#arXiv #因果推断 #VR #警务 #LLM
