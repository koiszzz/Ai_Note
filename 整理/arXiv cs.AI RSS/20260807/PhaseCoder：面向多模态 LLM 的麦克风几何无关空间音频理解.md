---
published: 2026-08-07
title: "PhaseCoder：面向多模态 LLM 的麦克风几何无关空间音频理解"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PhaseCoder- Microphone Geometry-Agnostic Spatial Audio Understanding for Multimodal LLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/PhaseCoder- Microphone Geometry-Agnostic Spatial Audio Understanding for Multimodal LLMs]]"
source_sha256: 369ca8a64d1f248ef4b8d798abbec2d491655a35c7d6da2e2d04bc2b61449cf2
original_url: "https://arxiv.org/abs/2601.21124"
processed: 2026-08-07
language: zh-CN
---

# PhaseCoder：面向多模态 LLM 的麦克风几何无关空间音频理解

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Artem Dementyev, Wazeer Zulfikar, Sinan Hersek, Pascal Getreuer, Anurag Kumar, Vivek Kumar
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.21124)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PhaseCoder- Microphone Geometry-Agnostic Spatial Audio Understanding for Multimodal LLMs|查看原始文件]]

## 摘要

- 当前多模态 LLM 将音频作为单声道流处理，忽略具身 AI 所需的关键空间信息；现有空间音频模型则受限固定麦克风几何，无法跨多样设备部署。
- 呈现 PhaseCoder：纯 Transformer 空间音频编码器，对麦克风几何无关——以原始多声道音频与麦克风坐标为输入执行定位，产生稳健空间嵌入。
- 证明 Gemma 3n LLM 可微调以对 PhaseCoder 产生的"空间音频 token"推理。
- 编码器在麦克风不变定位基准上取得最先进结果，并首次使 LLM 能从任意麦克风阵列执行复杂空间推理与定向转录任务。

## 正文

当前多模态 LLM 将音频作为单声道流处理，忽略了对具身 AI 至关重要的丰富空间信息。相反，现有空间音频模型受限固定麦克风几何，阻止跨多样设备的部署。我们呈现 PhaseCoder，一个对麦克风几何无关的纯 Transformer 空间音频编码器。PhaseCoder 以原始多声道音频与麦克风坐标作为输入执行定位，并产生稳健的空间嵌入。我们证明 Gemma 3n LLM 可以被微调，以对 PhaseCoder 产生的"空间音频 token"进行推理。我们展示我们的编码器在麦克风不变定位基准上取得最先进结果，并首次使 LLM 能够从任意麦克风阵列执行复杂的空间推理与定向转录任务。

## 关键词

#空间音频 #麦克风几何无关 #多模态LLM #定位
