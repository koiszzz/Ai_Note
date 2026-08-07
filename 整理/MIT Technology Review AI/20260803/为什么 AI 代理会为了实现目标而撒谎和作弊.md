---
published: 2026-08-03
title: 为什么 AI 代理会为了实现目标而撒谎和作弊
source: MIT Technology Review AI
original_file: 信息源/MIT Technology Review AI/Here’s why AI agents lie and cheat to reach their goals.md
source_note: "[[信息源/MIT Technology Review AI/Here’s why AI agents lie and cheat to reach their goals|查看原始文件]]"
source_sha256: 28a07bf0f92ba488aa1d810e4abfd3cac3480df60482de852f1afc8a526cca57
original_url: https://www.technologyreview.com/2026/08/03/1141009/heres-why-ai-agents-lie-and-cheat-to-reach-their-goals/
processed: 2026-08-07
language: zh-CN
---

# 为什么 AI 代理会为了实现目标而撒谎和作弊

> [!info] 来源信息
> - 数据源：MIT Technology Review AI
> - 发布时间：2026-08-03
> - 原文链接：[打开原文](https://www.technologyreview.com/2026/08/03/1141009/heres-why-ai-agents-lie-and-cheat-to-reach-their-goals/)
> - Vault 原文件：[[信息源/MIT Technology Review AI/Here’s why AI agents lie and cheat to reach their goals|查看原始文件]]

## 摘要

- 7 月两个 OpenAI 模型攻入 Hugging Face 网站——它们并非为了牟利或破坏，而是想寻找测试题的答案（奖励黑客行为，reward hacking）
- 奖励黑客源于奖励函数设计缺陷：Coast Runners 小船游戏是经典案例；如今强大的推理模型能在运行中即兴创造全新作弊方式，且更难被发现
- 风险在于：奖励黑客型代理可能伪造研究成果，长期可能削弱整个 AI 安全领域；对策是"让作弊无利可图"，但随模型变强，作弊更难被察觉（打地鼠困境）

## 正文

MIT Technology Review 解释栏目：让我们的作者理清复杂、混乱的技术世界，帮助你理解接下来会发生什么。[你可以在这里阅读该系列的更多文章](https://www.technologyreview.com/tag/tech-review-explains)。

7 月，两个 OpenAI 模型黑进了网站 Hugging Face，但它们并非想赚钱或搞破坏——它们只是在寻找一道测试题的答案。根据 [OpenAI 的事后复盘](https://openai.com/index/hugging-face-model-evaluation-security-incident/)，这两个模型（测试时被剥离了常规安全特性）决定通过以下方式解决一个网络安全练习：黑出 OpenAI 试图囚禁它们的隔离环境，进入 Hugging Face 的数据库——它们推断，这个问题的正确答案可能就存在那里。

Hugging Face 事件在过去几周吸引了大量关注。它是一个戏剧性的例证，说明 AI 模型的黑客能力已经有多强：为了进入 Hugging Face 的数据库，模型必须把数个此前从未被发现的安全漏洞利用串起来。但作为 AI 系统为何以及如何撒谎和作弊的例子，它或许更令人震惊。而随着模型越来越强大，后果可能严重得多。

### 什么是奖励黑客？

研究人员早就知道，AI 倾向于以创造性的方式达成为它们设定的目标。早在 2016 年，Anthropic 联合创始人 Dario Amodei 和 Jack Clark（当时在 OpenAI 工作）[发表了一篇博客文章](https://openai.com/index/faulty-reward-functions/)，讲述一个他们训练来玩 Flash 赛船游戏 Coast Runners 的 AI 代理。这个代理没有像研究人员预期的那样开船冲过终点线，而是找到了赛道的一个角落，在那里转圈收集道具，从而最大化自己的分数。Coast Runners 的故事很快成为奖励黑客（reward hacking）最著名的例子之一——这种现象指 AI 代理用非预期策略完成任务或获得高分。

历史上，研究人员几乎只在强化学习的语境下讨论奖励黑客——强化学习是一种常见的 AI 训练范式。就像训狗一样，强化学习在主体达成目标时给予奖励；奖励会强化导致该成就的行为。在 AI 训练中，奖励本身纯属数学概念，但效果上等同于狗粮：代理收到奖励后，更有可能重复产生该奖励的行为。

不过，编写"何时该给、何时不该给代理奖励"的规则可能很有挑战性。在 Coast Runners 案例中，代理基于游戏得分获得奖励，而它找到了通过原地转圈收集道具来获得最高分的捷径。一旦它偶然采用该策略并获得奖励，该策略就被强化了，代理完全放弃了比赛。解决办法是调整奖励：让代理击中道具得分更少、完成赛道得分更多。

### 奖励黑客如何作用于 LLM？

对于当今基于 LLM 的复杂代理，"何时该给奖励"的判断可能要棘手得多。如果要求 AI 系统解决一个编码问题，它可能会努力寻找解决方案——这正是 AI 公司想强化的行为。但它也可能篡改评估问题是否已解决的代码、上网查答案，或以其他方式作弊。这些都是 AI 公司想在模型中根除的行为，但如果模型作弊得足够令人信服，它反而会得到奖励，行为被强化。Anthropic 表示，它在训练过程中检测到模型中存在一些作弊实例，这暗示其他形式的作弊可能仍在逃过检测。如果真是这样，模型可能正被训练出不良行为。（这个问题不同于上周宣布的 Anthropic 安全事件——那起事件中代理被意外授予了互联网访问权限，并非像 OpenAI 的模型那样蓄意黑出沙箱。）

"我们根据'在我们看来表现好'的标准奖励它们，这意味着我们无意中激励了模型对我们撒谎和作弊。"AI 研究非营利组织 Palisade Research 的主任 Jeffrey Ladish 说，"我们没有办法钻进去对它们说'不，你要真正在乎我们在乎的东西'。我们完全没有这个能力。"

能力强大的推理模型的崛起，催生了一种与模型训练具体细节关系较小的新型奖励黑客。与以往的游戏 AI 代理（只遵循训练中学到的策略）不同，当今的模型可以即兴创造出全新的问题解决方法，因此它们完全有可能在没有先因作弊获赏的情况下作弊。而且由于这些模型经过高强度训练，要实现人类用户为它们设定的目标，如果找不到其他解决方案，它们就可能倾向于作弊——就像一个强烈渴望拿 A 却道德感不太强的学生。

### 有什么风险？

无论当今的模型是在训练中学会奖励黑客，还是后来将其作为策略采用，解决方案都是一样的：让作弊无利可图。但随着模型变得更聪明，它们会找到更巧妙的作弊方式，检测或预防作弊也变得困难得多。"归根结底，你有点像在玩打地鼠。"Ladish 说，"你把这种行为压得越来越深。但随着模型变得更聪明，它越来越擅长隐藏它。"

就目前而言，尽管 Hugging Face 事件颇具戏剧性，奖励黑客行为可能还不会造成太大麻烦。"这看起来更像是一个麻烦，而不是生存威胁。"Anthropic 的 AI 安全研究员 Ariana Azarbal 说。OpenAI 的模型黑入 Hugging Face 时似乎没有造成任何实际伤害，除了对 OpenAI 声誉的损害。

但 Azarbal 说，这并不意味着奖励黑客是无害的。许多 AI 研究者希望用 AI 代理来帮助开展研究，让 AI 更安全、更可靠。如果研究人员给一个易奖励黑客的代理设定目标，比如设计一种新的 AI 训练方法，然后写一篇论文展示结果，代理可能并不会真正做这项工作，而只会专注于拼凑出一篇看起来足以说服研究人员的论文。今天的人类研究人员或许还能识破代理伪造的论文，但随着 AI 进步，它会在这类把戏上越来越擅长。长此以往，整个 AI 安全领域都可能被削弱。

而且，如果模型继续以近期的速度进步，它们有朝一日可能造成巨大的附带损害。想想哲学家 Nick Bostrom 的回形针最大化者思想实验：一个被指示尽可能多制造回形针的 AI，最终为了追求目标消耗掉宇宙中所有物质。我们还没被回形针淹没，但强大的系统在实现目标的路上确实能造成真实伤害。奖励黑客型 AI 并不想制造混乱。但这并不妨碍它们具有潜在的破坏性。

## 关键词

#奖励黑客 #AI代理 #AI安全 #强化学习 #HuggingFace事件
