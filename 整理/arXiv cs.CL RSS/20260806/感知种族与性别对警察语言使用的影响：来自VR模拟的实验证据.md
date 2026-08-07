---
published: 2026-08-06
title: 感知种族与性别对警察语言使用的影响：来自 VR 模拟的实验证据
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/The Effect of Perceived Race and Gender on Police Language Use- Experimental Evidence from VR Simula.md
source_note: "[[信息源/arXiv cs.CL RSS/The Effect of Perceived Race and Gender on Police Language Use- Experimental Evidence from VR Simula]]"
source_sha256: ae7567b9d95756846ba2e615e3d9d1637bfd7a7fc0c8d361bb917c06f03821ce
original_url: https://arxiv.org/abs/2608.05050
processed: 2026-08-07
language: zh-CN
---

# 感知种族与性别对警察语言使用的影响：来自 VR 模拟的实验证据

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05050)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/The Effect of Perceived Race and Gender on Police Language Use- Experimental Evidence from VR Simula|查看原始文件]]

## 摘要

- 在警察与公众互动暴力事件频发的背景下，本文研究警察在 VR 模拟中对呈现为黑人成年男性的虚拟角色说话时的礼貌程度（deference），以因果推断视角评估看到并与之交流这些角色的效果。
- 令人警醒的是，多数警察对黑人男性角色说话更不礼貌，仅白人、双种族及多种族女警例外，尤其是在 VR 角色被设定为嫌疑人的场景中；整场典型 VR 对话中，边际 ATE 可在 0–10 量表上造成 2 到数分的语气礼貌差异。
- 方法学比较后，作者推荐对带文本的多层级数据使用结合逆倾向处理加权（iptw）的混合效应模型进行 ATE 估计（利用 LLM 创建文本特征），并认为用 LLM 微调预测模型用于 ATE 估计仍是需要进一步发展的方向。

## 正文

在美国警察与公众互动中暴力事件的背景下，我们探讨警察在虚拟现实（VR）模拟中如何礼貌地对被呈现为黑人成年男性的虚拟角色说话。我们以因果推断的视角评估看到这些角色并与之交流的效果，其中将黑人男性角色分配给某位警察和某场模拟视为处理变量。我们的（边际）平均处理效应 ATE 衡量角色对警察言论礼貌程度的社会影响，并按对话的每一轮测量。令人警醒的是，我们发现大多数警察对黑人男性角色说话时礼貌程度更低，白人、双种族和多种族女警除外，尤其是在 VR 角色已知为嫌疑人的场景中。在一场典型 VR 场景的完整对话中，这些边际 ATE 可在语气礼貌程度（0–10 量表）上造成 2 到数分的显著变化，超出最初感知黑人男性角色本身的效果。更令人不安的是，这可能促成对话中断，进而潜在地导致对公众和警察双方的暴力或危险。我们还探索了大语言模型（LLM）在 ATE 估计中的能力。通过包括针对合成数据的模型验证在内的方法比较分析，我们为 LLM 辅助的 ATE 估计方法提供了独特的科学见解。因此，对于带文本的多层级数据的 ATE 估计，我们推荐采用结合逆倾向处理加权（iptw）方法的混合效应模型，该方法利用 LLM 进行文本特征创建。我们也测试了用 LLM 微调预测模型以最终用于 ATE 估计，但结论是这仍是需要进一步发展和完善的领域。

## 关键词

#警察语言 #VR模拟 #因果推断 #ATE #种族偏见 #LLM辅助估计 #社会计算
