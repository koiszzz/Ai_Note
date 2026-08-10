---
published: 2026-08-07
title: "CoCo：以代码为思维链的文本到图像预览与稀有概念生成"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CoCo- Code as CoT for Text-to-Image Preview and Rare Concept Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/CoCo- Code as CoT for Text-to-Image Preview and Rare Concept Generation]]"
source_sha256: f80876a570a9055b4bd7f0b76860c8154a552485f292f35587abb772af862791
original_url: "https://arxiv.org/abs/2603.08652"
processed: 2026-08-07
language: zh-CN
---

# CoCo：以代码为思维链的文本到图像预览与稀有概念生成

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Haodong Li, Chunmei Qing, Huanyu Zhang, Dongzhi Jiang, Yihang Zou, Hongbo Peng, Dingming Li, Yuhong Dai, ZePeng Lin, Juanxi Tian, Yi Zhou, Siqi Dai, Jingwei Wu, Pheng-Ann Heng
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.08652)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CoCo- Code as CoT for Text-to-Image Preview and Rare Concept Generation|查看原始文件]]

## 摘要

- 统一多模态模型（UMM）的近期进展显著推进文本到图像（T2I）生成，尤其通过思维链（CoT）推理的集成；但现有基于 CoT 的 T2I 方法 largely 依赖抽象自然语言规划，缺乏复杂空间布局、结构化视觉元素与密集文本内容所需的精度。
- 提出 CoCo（Code-as-CoT）：代码驱动推理框架，将推理过程表示为可执行代码，为图像生成提供显式可验证的中间规划。
- 给定文本提示，CoCo 首先生成指定场景结构布局的可执行代码，在沙箱环境执行代码渲染确定性草稿图像，随后模型通过细粒度图像编辑精炼草稿产生最终高保真结果。
- 构建 CoCo-10K 数据集（结构化草稿-最终图像对），教授结构化草稿构建与修正性视觉精炼；在 StructT2IBench、OneIG-Bench 与 LongText-Bench 上，CoCo 相对直接生成分别提升 68.83%、54.8% 与 41.23%，并优于其他 CoT 增强生成方法；可执行代码是精确、可控、结构化文本到图像生成的有效可靠推理范式。

## 正文

统一多模态模型（Unified Multimodal Models，UMMs）的近期进展显著推进了文本到图像（text-to-image，T2I）生成，尤其是通过思维链（Chain-of-Thought，CoT）推理的集成。然而，现有基于 CoT 的 T2I 方法 largely 依赖抽象自然语言规划，缺乏复杂空间布局、结构化视觉元素与密集文本内容所需的精度。在本工作中，我们提出 CoCo（Code-as-CoT），一个代码驱动推理框架：将推理过程表示为可执行代码，为图像生成提供显式且可验证的中间规划。给定文本提示，CoCo 首先生成指定场景结构布局的可执行代码。然后代码在沙箱环境中执行，渲染出确定性的草稿图像。随后，模型通过细粒度图像编辑精炼该草稿，产生最终的高保真结果。为支持这一训练范式，我们构建 CoCo-10K，一个包含结构化草稿-最终图像对的策划数据集，旨在教授结构化草稿构建与修正性视觉精炼。在 StructT2IBench、OneIG-Bench 与 LongText-Bench 上的实证评估显示，CoCo 相对直接生成分别提升 68.83%、54.8% 与 41.23%，同时也优于其他 CoT 增强生成方法。这些结果表明，可执行代码是精确、可控且结构化的文本到图像生成的有效且可靠推理范式。

## 关键词

#文本到图像 #思维链 #代码驱动 #图像生成
