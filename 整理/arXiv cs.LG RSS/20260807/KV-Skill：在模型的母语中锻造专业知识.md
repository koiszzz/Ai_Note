---
published: 2026-08-07
title: "KV-Skill：在模型的母语中锻造专业知识"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/KV-Skill- Forging Expertise in the Model's Native Language.md"
source_note: "[[信息源/arXiv cs.LG RSS/KV-Skill- Forging Expertise in the Model's Native Language]]"
source_sha256: f312b1729d6dd2661bfb6fa3e761099f3d7850a36647a0754fa3d47bc56a8d6e
original_url: "https://arxiv.org/abs/2608.05475"
processed: 2026-08-07
language: zh-CN
---

# KV-Skill：在模型的母语中锻造专业知识

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Zhaowei Han, Xiang Zhang, Bing Han, Kai Liu, Danqi Hu, Jie Liu
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05475)

## 摘要

- 任务知识通常以提示文本或模型权重更新存储；文本模块化但每次使用需解释，权重适配使能力难以独立加载、移除或共享。
- 引入 KV-Skill：冻结语言模型经轻量接口读取的外部因子化算子设计空间；支持两条互补路径：注册（将撰写的文本技能转为文本派生算子并训练共享逐骨干接口）与奖励学习（直接从任务结局开发紧凑潜算子，可带或不带撰写技能）。
- 两条路径都不向提示添加位置；十个基准、三个模型家族四个骨干上，将文本转为 KV-Skill 一致使相同程序性知识更有效；Qwen3.5-4B LiveMath 上注册达 77.2 准确率（源文本技能 23.4、SkillOpt 52.0、SoftSkill 64.5）。
- 匹配奖励训练与参数预算下，KV-Skill 在 8 个匹配设定中的 7 个取得最佳结果（对照软前缀、前缀调优与 LoRA）；事后秩分析显示文本派生算子几乎保留全部收益（每注入层一个任务对齐方向），随机方向失败；一个共享接口保留三个独立可加载 KV-Skill 无显著遗忘。

## 正文

任务知识通常以提示中的文本或模型权重更新存储。文本模块化，但每次使用都必须被解释；权重适配则使所得能力难以独立加载、移除或共享。研究引入 KV-Skill，一个冻结语言模型经轻量接口读取的外部因子化算子设计空间。KV-Skill 支持两条互补路径。注册（Registration）将撰写的文本技能转为文本派生算子，并训练共享的逐骨干接口。奖励学习（Reward learning）直接从任务结局开发紧凑的潜算子，可带或不带撰写技能。两条路径都不向提示添加位置。在跨三个模型家族、四个骨干的十个基准上，将文本转为 KV-Skill 一致使相同的程序性知识更有效。在 Qwen3.5-4B 的 LiveMath 上，注册达 77.2 准确率，而源文本技能为 23.4、SkillOpt 为 52.0、SoftSkill 为 64.5。在匹配的奖励训练与参数预算下，KV-Skill 在 8 个匹配设定中的 7 个相对软前缀、前缀调优与 LoRA 取得最佳结果。事后秩分析进一步显示，文本派生算子每注入层用一个任务对齐方向就保留其几乎全部收益，而匹配的随机方向失败。最后，一个共享接口保留三个独立可加载的 KV-Skill 而无显著遗忘。这些结果表明任务知识可从文本或经验获取、压缩为外部算子，并独立于骨干部署。代码见 https://github.com/shawnzhg/KV-Skill。

## 关键词

技能学习、外部算子、提示工程、冻结模型、参数高效
