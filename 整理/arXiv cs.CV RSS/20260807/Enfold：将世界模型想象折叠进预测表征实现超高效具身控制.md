---
published: 2026-08-07
title: "Enfold：将世界模型想象折叠进预测表征实现超高效具身控制"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Enfold- Folding World Model Imagination into Predictive Representations for Ultra-Efficient Embodied.md"
source_note: "[[信息源/arXiv cs.CV RSS/Enfold- Folding World Model Imagination into Predictive Representations for Ultra-Efficient Embodied]]"
source_sha256: bff75e7965d54a46b97f1c41311a08ef610294cc1b19b481c8a17fc377a906ad
original_url: "https://arxiv.org/abs/2607.26657"
processed: 2026-08-07
language: zh-CN
---

# Enfold：将世界模型想象折叠进预测表征实现超高效具身控制

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Weili Zeng, Yitong Xing, Fulong Liu, Chengqun Yang, Antao Xiang, Feng Tian, Jingnan Gao, Jisong Cai, Xin Wang, Xiaomin Wu, Yao Mu, Xiaokang Yang, Yichao Yan
> - **发布时间**：2026-08-07
> - **分类**：cs.RO
> - **原文**：[打开链接](https://arxiv.org/abs/2607.26657)

## 摘要

- 世界生成模型通常通过其产生的东西使用：渲染的未来、视频条件动作或昂贵生成分支计算的潜上下文；论证其更可复用的资产是构建未来的计算。
- 生成器将损坏未来转为连贯轨迹时，其中间状态在抽象层次组织外观、空间布局与交互；该未来生成计算能否内化在仅从当下推断的表征中？
- 提出 Enfold：将此计算迁移到从当前视觉上下文与语言指令预测的表征中；训练中，生成器处理观测未来时暴露的多级状态监督仅当前编码器；学习表征被反馈以条件化未来生成，并被任务头读取，不允许任务梯度重塑编码器；部署时动作预测不再执行生成器。
- LIBERO、RoboTwin2.0 与真实机器人任务上 Enfold 支持强控制，动作延迟相对 Fast-WAM 降低 3.7 倍，Enfold-Flash 达 10.1 倍；表征分析显示抑制干扰变化、优先捕捉更长视界涌现的变化；人类干预改变当前场景时生成延续与执行动作都适应，与固定轨迹重放不一致。

## 正文

世界生成模型通常通过它们产生的东西被使用：一个渲染的未来、一个视频条件动作，或由昂贵生成分支计算的潜上下文。研究论证它们更可复用的资产是构建一个未来的计算。当生成器将一个损坏的未来转化为连贯轨迹时，其中间状态在抽象层次上组织外观、空间布局与交互。这种未来生成计算能否被内化在一个仅从当下推断的表征中？研究提出 Enfold，将此计算迁移到一个从当前视觉上下文与语言指令预测的表征中。训练期间，生成器处理观测未来时暴露的多级状态监督一个仅当前（current-only）编码器。学习到的表征被反馈以条件化未来生成，并被任务头读取，而不允许任务梯度重塑编码器。部署时，动作预测不再执行生成器。跨 LIBERO、RoboTwin2.0 与真实机器人任务，Enfold 支持强控制，同时相对 Fast-WAM 将动作延迟降低 3.7 倍；Enfold-Flash 达到 10.1 倍。表征分析显示它抑制干扰变化，并优先捕捉在更长视界中涌现的变化。当当前场景被人为干预改变时，生成的延续与执行的动作都会适应，这与固定轨迹重放不一致。这些结果将一个世界生成器重新定位为预测控制表征的来源：如果其内部结构可以折叠进当下，其未来不必在每一步被物化。

## 关键词

世界模型、预测表征、具身控制、动作延迟、蒸馏
