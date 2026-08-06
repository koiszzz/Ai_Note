---
published: 2026-08-05
title: "Fretiq：基于工程频谱特征与留出自由演奏评估的浏览器原生电吉他弦分类"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Fretiq- Browser-Native Electric Guitar String Classification via Engineered Spectral Features and He.md"
source_note: "[[信息源/arXiv cs.LG RSS/Fretiq- Browser-Native Electric Guitar String Classification via Engineered Spectral Features and He.]]"
source_sha256: b7e2fa7d9fd91e33de374286b2b9977971815e728194c2f113ef07cfaa1ba4db
original_url: "https://arxiv.org/abs/2607.18303"
processed: 2026-08-05
language: zh-CN
---

# Fretiq：基于工程频谱特征与留出自由演奏评估的浏览器原生电吉他弦分类

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Aadi Garg
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.18303)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Fretiq- Browser-Native Electric Guitar String Classification via Engineered Spectral Features and He.|查看原始文件]]

## 摘要

- 提出 Fretiq，一个初步的单乐器、单人浏览器端弦分类系统：识别单音电吉他音频中某一音高来自哪根弦；采用 26 维特征表示（频带能量、频谱统计量与 13 个梅尔频率倒谱系数）。
- 五个随机种子下，打乱帧级验证划分取得 97.25±0.32% 的准确率；消融研究发现 MFCC 是准确率的主要驱动因素（去除 MFCC 后为 92.09±0.50%）。
- 引入"对比训练"（Comparison Training）数据采集方法：以刻意交替的方式在相邻弦上录制同音高配对；初始打乱划分比较未发现净收益，但被不同条件下不可比较的验证集混淆。
- 修正后的匹配评估（使用一个完全留出、不参与训练与模型选择的相同录音会话）显示：加入对比会话数据使准确率提升 25.78±1.46 个百分点；按规模匹配的对照实验表明这不能仅用训练集规模解释。
- 录音会话留出评估取得 86.53±1.23% 的准确率，与独立采集的自由演奏评估（87.8%）接近，两者均远低于打乱划分数字，说明打乱验证在此场景下显著高估真实泛化能力。
- 以 Python 与 TypeScript 双实现特征提取流水线以保证训练—推理一致性，并记录了两个实现失败模式；系统完全在浏览器内运行，无需专用硬件。

## 正文

论文编号：arXiv:2607.18303v2（更新类型：replace-cross）。以下为摘要全文翻译。

识别单音电吉他音频中某一给定音高由哪根弦产生是一个分类难题：单个音高常常可以在多根弦上奏出，而音色差异对未经训练的人类来说基本难以察觉。我们提出 Fretiq，一个初步的单乐器、单人浏览器端弦分类系统，采用由频带能量、频谱统计量与 13 个梅尔频率倒谱系数组成的 26 维特征表示。在五个随机种子上，打乱的帧级验证划分取得 97.25±0.32% 的准确率；消融研究确定 MFCC 是准确率的主要驱动因素（去除 MFCC 后为 92.09±0.50%）。我们引入"对比训练"，一种以刻意交替方式在相邻弦上录制同音高配对的数据采集方法。初始打乱划分比较未发现净收益，但该结果被不同条件下不可比较的验证集所混淆。一项修正后的匹配评估使用一个从训练与模型选择中完全留出的相同录音会话，结果显示加入对比会话数据可将准确率提升 25.78±1.46 个百分点；一个按规模匹配的对照实验表明这不能仅归因于训练集规模。录音会话留出评估取得 86.53±1.23% 的准确率，与独立采集的自由演奏评估（87.8%）高度接近，两者都远低于打乱划分的数字，表明打乱验证在此处显著高估了真实泛化能力。我们以 Python 和 TypeScript 描述特征提取流水线以保证训练—推理一致性，并记录了两个实现失败模式。该系统完全在浏览器中运行，无需任何专用硬件。

## 关键词

#电吉他 #音频分类 #频谱特征 #MFCC #浏览器端推理
