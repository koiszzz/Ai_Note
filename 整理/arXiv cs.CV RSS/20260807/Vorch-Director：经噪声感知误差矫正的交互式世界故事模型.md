---
published: 2026-08-07
title: "Vorch-Director：经噪声感知误差矫正的交互式世界故事模型"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Vorch-Director- Interactive World Story Model via Noise-Aware Error Rectification.md"
source_note: "[[信息源/arXiv cs.CV RSS/Vorch-Director- Interactive World Story Model via Noise-Aware Error Rectification]]"
source_sha256: 00eed6871f12bbe43a42f0c9de986477f7b46e00324ecac1186bb696485ed981
original_url: "https://arxiv.org/abs/2608.05776"
processed: 2026-08-07
language: zh-CN
---

# Vorch-Director：经噪声感知误差矫正的交互式世界故事模型

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Lisai Zhang, Yidi Wu, Qi Liu, Xin Ma, Yang Ding, Gang Yue, Siqian Yang, Jingyuan Chen, Lin Ma, Yaohui Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05776)

## 摘要

- 自回归延续为分钟级视听生成提供自然路径：反复扩展以先前生成视频与音频为条件的短窗口生成器；但模型在干净真值历史上训练，推理依赖自身生成历史——累积误差导致身份漂移、过度平滑与音视频失同步。
- 近期方法经复用预测残差作为合成损坏缓解该错配，但观察残差矫正有效性关键依赖产生残差的流匹配噪声水平。
- 提出 Vorch-Director：噪声水平感知残差矫正策略，将每个残差与其来源噪声水平关联，训练期间从匹配噪声机制注入残差；通过将注入误差与去噪过程对齐，Vorch-Director 产生更真实的自回归历史，同时保留高效教师强制训练。
- 构建于视听 LTX-2 扩散 transformer，Vorch-Director 进一步引入任务嵌入区分历史视频、参考图像与目标视频，实现长时程生成统一条件化；结合干净条件汇与混合任务训练，支持多镜头、多主体、参考引导视听长视频生成；ST-Bench 评估并引入新长时程视听基准（质量漂移与长程一致性度量）；大量实验显示相对强基线改进稳定性与视听保真度。

## 正文

自回归延续提供了一条通向分钟级视听生成的自然路径：通过反复扩展一个以先前生成的视频与音频为条件的短窗口生成器。然而，模型在干净的真值历史上训练，而推理依赖它们自己生成的历史——累积误差导致身份漂移、过度平滑与音视频失同步。近期方法通过复用预测残差作为合成损坏来减少这种错配，但研究观察到，残差矫正的有效性关键取决于产生残差的流匹配噪声水平。研究提出 Vorch-Director，一个噪声水平感知的残差矫正策略：将每个残差与其来源的噪声水平关联，并在训练期间从匹配的噪声机制注入残差。通过将注入误差与去噪过程对齐，Vorch-Director 产生更真实的自回归历史，同时保留高效的教师强制训练。构建于视听 LTX-2 扩散 transformer 之上，Vorch-Director 进一步引入任务嵌入以区分历史视频、参考图像与目标视频，为长时程生成实现统一条件化。结合一个干净条件汇与混合任务训练，Vorch-Director 支持多镜头、多主体、参考引导的视听长视频生成。研究在 ST-Bench 上评估 Vorch-Director，并引入一个新的长时程视听基准，带质量漂移与长程一致性度量。大量实验表明，相对强基线改进稳定性与视听保真度。

## 关键词

视听生成、自回归、残差矫正、噪声感知、长视频
