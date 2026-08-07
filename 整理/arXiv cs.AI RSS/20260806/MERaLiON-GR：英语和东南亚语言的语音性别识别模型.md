---
published: 20260806
title: "MERaLiON-GR：英语和东南亚语言的语音性别识别模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MERaLiON-GR- Speech Gender Recognition Model for English and SEA Languages.md"
source_note: "[[信息源/arXiv cs.AI RSS/MERaLiON-GR- Speech Gender Recognition Model for English and SEA Languages]]"
source_sha256: dd59335caf3462f5c52f439cfaedbb1cb1104df47c2510f9632fc1702c226a1c
original_url: "https://arxiv.org/abs/2608.04433"
processed: 2026-08-06
language: zh-CN

---

# MERaLiON-GR：英语和东南亚语言的语音性别识别模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Qiongqiong Wang, Ai Ti Aw, Nancy F. Chen, Ying Lay Chiu, Yang Ding, Yingxu He, Ridong Jiang, Zhuohan Liu, Yanfeng Lu, Yi Ma, Muhammad Huzaifah, Nabilah Binte Md Johan, Nattadaporn Lertcheva, Pham Minh Duc, Sailor Hardik Bhupendra, Siti Umairah Binte Mohammad Salleh, Shuo Sun, Tarun Kumar Vangani, Jeremy H. M. Wong, Jinyang Wu, Longyin Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04433)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MERaLiON-GR- Speech Gender Recognition Model for English and SEA Languages|查看原始文件]]

## 摘要

- 本文呈现 MERaLiON-GR，一个在英语和东南亚（SEA）语言上执行二元分类（女性/男性）的语音性别识别系统：微调 MERaLiON-SpeechEncoder-2（在广泛语音语料上预训练的大型 conformer 基础 Transformer），通过低秩适应（LoRA）参数高效微调使编码器适应性别识别任务，并附加带注意力池化和轻量线性分类器的多尺度 ECAPA-TDNN 下游网络。
- 跨多语言新加坡和东南亚语言（英语、中文、马来语、泰米尔语、泰语、越南语、印尼语和高棉语）的广泛评估显示，MERaLiON-GR 在整句和段级评估模式下持续超越最先进性别识别模型 Vox-Profile 和大型 Audio-LLM。
- 结果强调专用语音模型在实现准确副语言理解和强跨语言泛化中的价值。

## 正文

我们呈现 MERaLiON-GR，一个在英语和东南亚（SEA）语言上执行二元分类（女性/男性）的语音性别识别系统。模型微调 MERaLiON-SpeechEncoder-2——一个在广泛语音语料上预训练的大型 conformer 基础 Transformer——并通过低秩适应（LoRA）应用参数高效微调使编码器适应性别识别任务，附加带注意力池化和轻量线性分类器的多尺度 ECAPA-TDNN 下游网络。跨多语言新加坡和东南亚语言（英语、中文、马来语、泰米尔语、泰语、越南语、印尼语和高棉语）的广泛评估表明，MERaLiON-GR 在整句和段级评估模式下持续超越最先进性别识别模型 Vox-Profile 和大型 Audio-LLM。结果强调专用语音模型在实现准确副语言理解和强跨语言泛化中的价值。

## 关键词

#语音性别识别 #副语言 #东南亚语言 #LoRA #arXiv