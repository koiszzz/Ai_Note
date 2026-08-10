---
published: 2026-08-07
title: "用一张纸劫持机器人：VLM 控制机器人中物理提示注入的系统研究"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Hijacking Robots with a Piece of Paper- A Systematic Study of Physical Prompt Injection in VLM-Contr.md"
source_note: "[[信息源/arXiv cs.AI RSS/Hijacking Robots with a Piece of Paper- A Systematic Study of Physical Prompt Injection in VLM-Contr]]"
source_sha256: 337c5d1711c45f615a9b601f357bb7056f6463ecfbdf070fd53dd7690e3aa732
original_url: "https://arxiv.org/abs/2608.05715"
processed: 2026-08-07
language: zh-CN
---

# 用一张纸劫持机器人：VLM 控制机器人中物理提示注入的系统研究

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：S. M . Bhagya P. Samarakoon, M. A. Viraj J. Muthugala, W. K. R. Sachinthana, Mohan Rajesh Elara
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05715)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Hijacking Robots with a Piece of Paper- A Systematic Study of Physical Prompt Injection in VLM-Contro|查看原始文件]]

## 摘要

- 视觉-语言模型（VLM）日益作为机器人系统中的规划器部署，将自然语言命令翻译为接地于视觉场景理解的可执行动作；感知与指令遵循的紧密耦合引入新攻击面：机器人视野中的对抗文本可充当对 VLM 推理栈的间接提示注入。
- 呈现对 VLM 控制分拣的物理提示注入攻击的系统研究，引入四类分类法——间接标志、任务重定义、权威冒充与冲突注入——实例化为 20 个攻击提示的基准，在三个物理场景布局与三种命令表述（目标特定性与规则显式性不同）中评估。
- 在三个前沿 VLM（GPT-4o、Gemini 2.5 Flash、Qwen3-VL-32B）的 5,670 次试验中，攻击分别以 27.0%、29.4% 与 5.0% 成功，权威冒充与否定攻击跨全部三个模型迁移。
- 推理轨迹分析显示成功入侵几乎总是有意识的（99.9% 承认率），模型通过结构不同的机制防御：Gemini 显式拒绝、GPT-4o 感知疏忽；评估三种简单缓解：基于提示的防御（75-100% 有效，依赖模型）、两阶段验证（85-100%）与预处理文本掩蔽（100%）。
- 发现表明 VLM 控制的操作对可读物理标志有意义地脆弱，简单防御大幅降低风险，但防御选择涉及权衡；防御在基准中保留一般任务能力，但可能损害需要读取场景内标签的任务。

## 正文

视觉-语言模型（VLMs）日益作为机器人系统中的规划器部署，它们将自然语言命令翻译为接地于视觉场景理解的可执行动作。感知与指令遵循之间的紧密耦合引入了一个新攻击面：机器人视野内的对抗文本可以充当对 VLM 推理栈的间接提示注入。我们对 VLM 控制分拣呈现物理提示注入攻击的系统研究，引入一个四类分类法——间接标志（indirect signage）、任务重定义（task redefinition）、权威冒充（authority impersonation）与冲突注入（conflict injection）——实例化为一个 20 个攻击提示的基准，在三个物理场景布局与三种命令表述（目标特定性与规则显式性不同）中评估。在三个前沿 VLM（GPT-4o、Gemini 2.5 Flash、Qwen3-VL-32B）的 5,670 次试验中，攻击分别以 27.0%、29.4% 与 5.0% 成功，权威冒充与否定攻击跨全部三个模型迁移。推理轨迹分析揭示成功入侵几乎总是有意识的（99.9% 承认率），且模型通过结构不同的机制防御：Gemini 显式拒绝，GPT-4o 感知疏忽。我们评估三种简单缓解：基于提示的防御（75-100% 有效，依赖模型）、两阶段验证（85-100%）与预处理文本掩蔽（100%）。我们的发现表明，VLM 控制的操作对人类可读的物理标志有意义地脆弱，简单防御大幅降低风险，尽管防御选择涉及权衡。防御在我们基准中保留一般任务能力，但可能损害需要读取场景内标签的任务。

## 关键词

#提示注入 #VLM #机器人安全 #物理攻击
