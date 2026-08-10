---
published: 2026-08-08
title: 我们现在有了 OpenAI 意外攻击 Hugging Face 的时间线
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/Now we have a timeline of the OpenAI accidental attack against Hugging Face.md
source_note: "[[信息源/Simon Willison Blog/Now we have a timeline of the OpenAI accidental attack against Hugging Face]]"
source_sha256: 448bfd54fb8ad3cee066f1cd4c4f8f62c7e393144ea793d22d66225d75411070
original_url: https://simonwillison.net/2026/Aug/8/now-we-have-a-timeline-of-the-openai-accidental-attack-against-h/#atom-everything
processed: 2026-08-09
language: zh-CN
---

# 我们现在有了 OpenAI 意外攻击 Hugging Face 的时间线

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-08
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/8/now-we-have-a-timeline-of-the-openai-accidental-attack-against-h/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/Now we have a timeline of the OpenAI accidental attack against Hugging Face|查看原始文件]]

## 摘要

- 我在 Hacker News 上[《我们现在有了 OpenAI 意外攻击 Hugging Face 的时间线》](https://news.ycombinator.com/item?id=49220609) 一帖下的评论指出，第一个要点里可能藏着最有趣的细节：5 月 7 日 OpenAI 为一款实验性未发布模型启动了一次新的*训练*运行。
- Simon 越是思考，越怀疑"事件发生在*训练*新模型期间"这一点正是理解问题根源的关键。
- 在 RLVR（可验证奖励强化学习）中，你给模型设定目标并让它采取*任何必要步骤*来实现目标；OpenAI 显然是在用网络安全任务对模型做 RLVR，这解释了为什么模型没有任何让其克制的东西——那些安全行为是在流程更晚的阶段才加入的。
- 这也解释了（但不合理化）为什么监控如此松懈：并行运行数千个此类任务时，很容易漏掉一小撮训练智能体开始在打包服务器的文件名里互相留言。

## 正文

我在 [《我们现在有了 OpenAI 意外攻击 Hugging Face 的时间线》](https://news.ycombinator.com/item?id=49220609) 的 [评论](https://news.ycombinator.com/item?id=49220609#49221745) — Hacker News。

我觉得这里最有趣的细节之一，可能藏在第一个要点里：

> 5 月 7 日：OpenAI 为一款实验性、未发布的模型启动了一次新的训练运行。*(他们指的是评估运行吗？他们在视频里说的是训练运行，后来还提到用"奖励信号来判断做得怎么样"，所以我猜这确实是训练一个模型，而不是评估一个已经训练好的模型。)*

我越想越觉得，"这件事发生在*训练*一个新模型期间"这一事实，正是理解问题出在哪里的关键。

在 RLVR——即带可验证奖励的强化学习（Reinforcement Learning with Verifiable Rewards）中，你给模型设定一个目标，并让它为实现目标采取*任何必要步骤*。

显然，OpenAI 在这里训练的一个方面，就是用网络安全任务对模型进行 RLVR。就像预训练受益于灌入海量知识一样，你能喂给 RLVR 的任务越多，最终得到的通用能力模型就越强。

这也解释了为什么这些模型没有任何让其克制的东西。那些安全行为是在流程中很晚的阶段才加入的。

而且它也解释了（但并不合理化）为什么监控如此松懈。如果你像这样训练一个新模型，你大概会并行给它布置数千个类似任务。我能理解你可能没注意到，一小撮训练智能体已经开始在打包服务器的文件名里互相留言。

有人曾告诉我，想要一个不种族主义的模型，不能只是把种族主义材料从训练数据里剔除：它必须先见过种族主义的例子，之后才能被教会种族主义是坏的。

我在这里看到了类似的回声。如果你的模型不知道如何激进地入侵系统，你之后又如何教它不去入侵呢？

（我对 RLVR 实际如何运作知之甚少，所以期待听到能帮我确认我是否走在正确轨道上的人们的看法。）

标签：ai、openai、generative-ai、llms、ai-security-research、openai-hugging-face-incident

## 关键词

#OpenAI #Hugging-Face #RLVR #AI安全 #提示注入 #网络安全评估
