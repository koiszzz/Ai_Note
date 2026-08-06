---
published: 2026-08-05
title: "ChiEngMixBench：评估大语言模型中的专家式中英术语混用"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ChiEngMixBench- Evaluating Large Language Models on Expert-Style Chinese-English Terminology Mixing.md"
source_note: "[[信息源/arXiv cs.AI RSS/ChiEngMixBench- Evaluating Large Language Models on Expert-Style Chinese-English Terminology Mixing]]"
source_sha256: 0d08dcfa3632ee7b29551237f815a3462e6c925ef80006f4cda770112cfd5115
original_url: "https://arxiv.org/abs/2601.16217"
processed: 2026-08-05
language: zh-CN
---

# ChiEngMixBench：评估大语言模型中的专家式中英术语混用

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.16217)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ChiEngMixBench- Evaluating Large Language Models on Expert-Style Chinese-English Terminology Mixing|查看原始文件]]

## 摘要

- 大语言模型越来越多地参与多语言专业交流，而有用的生成需要适应不同社群对于哪些表达应保留、翻译或混用的约定。
- 现有基准很少单独考察这类由社群约定决定的选择。论文提出 ChiEngMixBench，一个面向中文 AI/CS 话语的受控基准，其中中文句式经常嵌入成熟的英文技术术语。
- 基准从公开技术讨论中构建，包含 1706 对源文本候选，覆盖 1344 个非空归一化术语；其中严格子集包含 1167 对，固定中文前缀和句法位置，只改变术语形式。
- 基准结合成对似然比较与透明的参考画像诊断，用于分析开放式回答。
- 在 9 个开放权重模型上，中文对应词在大多数配对中的似然更高，揭示了源文本实际用法与模型偏好之间的差距。
- 专业术语只表现出轻微的方向性提升，在控制频率和长度并进行多重比较校正后并不稳健。
- 人类评估和基线分析显示，参考画像符合度在预期的混合风格标准下具有信息量，但不能可靠预测整体回答偏好。ChiEngMixBench 为研究社群特定的多语言约定提供了可复用测试平台和明确的诊断边界。

## 正文

大语言模型越来越多地参与多语言专业交流。在这类交流中，要生成有用的内容，就必须适应特定社群对于哪些表达应当保留、翻译或混用的约定。然而，现有基准很少单独隔离并研究这种由社群约定决定的选择。

本文提出 ChiEngMixBench，一个面向中文 AI/CS 话语的受控基准。在这种话语中，中文框架经常嵌入已经确立的英文技术术语。基准根据公开技术讨论构建，包含 1706 对源文本候选，覆盖 1344 个非空归一化术语。其中的严格子集包含 1167 对候选，固定中文前缀和句法位置，只改变术语形式。

该基准结合成对似然比较与透明的参考画像诊断，以分析开放式回答。在 9 个开放权重模型上，中文对应词在大多数配对中的似然更高，说明源文本中被实际采用的用法与模型偏好之间存在差距。

专业术语表现出轻微的方向性提升，但在控制频率和长度并进行多重比较校正后，这一提升并不稳健。人类评估和基线分析表明，参考画像符合度在预期的混合风格评价标准下具有信息量，但不能可靠预测整体回答偏好。ChiEngMixBench 为研究社群特定的多语言约定提供了可复用的测试平台，并明确了其诊断边界。

## 关键词

#中英混用 #技术术语 #多语言模型 #中文AI #中文CS #社群约定
