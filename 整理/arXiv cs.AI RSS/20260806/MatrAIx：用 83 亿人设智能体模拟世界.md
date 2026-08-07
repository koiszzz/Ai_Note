---
published: 20260806
title: "MatrAIx：用 83 亿人设智能体模拟世界"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MatrAIx- Simulating the World with 8.3 Billion Persona Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/MatrAIx- Simulating the World with 8.3 Billion Persona Agents]]"
source_sha256: 5a2d1e3df38565e8dd6041beda32f1846d80442c67f00149b019c6e71de7d6c6
original_url: "https://arxiv.org/abs/2608.04205"
processed: 2026-08-06
language: zh-CN
validation_attempt: 2
validation_manual_approved: true
validation_manual_approval_reason: "已逐段对照原文；剩余外文段落为来源信息中的作者列表（大量英文人名，属于允许保留的专名），正文摘要已完整翻译。"

---

# MatrAIx：用 83 亿人设智能体模拟世界

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiaomin Li, Yuexing Hao, Jianheng Hou, Jintao Huang, Qianfeng Wen, Shirley Huang, Yifan Liu, Xiaoyi Liu, Yilan Fan, Yijun Wang, Koutian Wu, Ruoqi Gao, Muhammad Ahmed Mohsin, Jing Tang, Brihi Joshi, Heming Liu, Zheyuan Deng, Zonglin Di, Sankalp Jajee, Jiuyao Lu, Zhiwei Zhang, Saksham Kapoor, Ishan Gupta, Yunhan Zhao, Chanwoo Park, Yucheng Lu, Bing Hu, Weihang Xiao, Aravind Mohan, Hanwen Xing, Runyu Zhang, Mihir Kulshreshtha, Yuanda Xu, Qianyu Zhu, Dianzhuo Wang, Yuxin Xiao, Bowen Jiang, Yongye Su, Wenhao Chai, Zuxin Liu, Lawrence Yunliang Chen, Xuandong Zhao, Ethan Ye, Shivam Patel, Jason Xie, Alex Martin Richmond, Weixiang Ding, Emre Okcular, Diya Mathew, Ziheng Wang, Rana M. Shahroz Khan, Zhejian Peng, Fang Wu, Fan Nie, Xinyang Han, Yubin Kim, Jiawei Zhang, Zhenting Qi, Huangyuan Su, Xu Pan, Abinitha Gourabathina, Hyewon Jeong, Hemanth Neelgund Ramesh, Kumail Alhamoud, Kimia Hamidieh, Zidi Xiong, Samuel Schmidgall, Pengrui Han, Yepeng Huang, Yongheng Wang, Bowen Yang, Alex Gu, Yuchu Wang, Akshay Paruchuri, Brenna Li, Hejie Cui, Jiayuan Ding, Chaosheng Dong, Jiahao Wang, Yixuan He, Chi Wang, Pamela Bhattacharya, Tianyi Peng, Paul Pu Liang, Mitchell Gordon, Yilun Du, Marinka Zitnik, James Zou, Prasanna Tambe, Philip Torr, Emily Fox, Asu Ozdaglar, Dawn Song
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04205)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MatrAIx- Simulating the World with 8.3 Billion Persona Agents|查看原始文件]]

## 摘要

- 对 AI 系统和数字产品的人类评估昂贵、缓慢且难以扩展；离线评估更可扩展但常抽象掉人类多样性和交互行为；本文引入 MatrAIx，一个用于用异构用户测试 AI 系统和数字产品的人口规模模拟用户评估基础设施。
- MatrAIx 三个核心组件：Persona 8B 含 83 亿人设记录，由 1,290 个分类维度表示，记录从保留相关属性的依赖图采样或由人类撰写档案派生，发布约 100 万人设的质量过滤核心集；MatrAIx Playground 提供四种环境（Survey、AI Chatbot、Web 和 App）；提供覆盖 25+ 领域（商业、软件、金融和医疗）的 1,010 个应用任务。
- 在八个代表性任务上进行 18,189 次评估试验，人设智能体由 Claude Opus 4.8、GPT 5.5 和 Claude Haiku 4.5 驱动；400 试验受控研究评估十种行为属性的人设遵循，366 试验（91.5%）表达或正确抑制声明行为。

## 正文

对 AI 系统和数字产品的人类评估成本高昂、缓慢且难以扩展。离线评估更可扩展，但常抽象掉人类多样性和交互行为。因此我们引入 MatrAIx，一个用于用异构用户测试 AI 系统和数字产品的人口规模模拟用户评估基础设施。MatrAIx 有三个核心组件：第一，Persona 8B 包含由 1,290 个分类维度表示的 83 亿人设记录。记录从保留相关属性的依赖图采样，或由人类撰写档案派生。我们发布约 100 万人设的质量过滤核心集，含 599,847 条人类接地和 400,000 条合成记录。第二，MatrAIx Playground 提供四种环境，多样化用户在其中评估和交互数字产品：Survey、AI Chatbot、Web 和 App。第三，MatrAIx 提供覆盖 25 多个领域（包括商业、软件、金融和医疗）的 1,010 个应用任务。我们在八个代表性任务上进行 18,189 次评估试验。人设智能体由三个 LLM 驱动：Claude Opus 4.8、GPT 5.5 和 Claude Haiku 4.5。所得反馈捕捉决策和偏好如何跨人设背景变化，包括涨价后的犹豫、AI 助手失败后的继续意愿和延迟容忍。我们进行两项主要验证研究：第一，400 试验受控研究跨十种行为属性和全部四种环境评估人设遵循，366 试验（91.5%）表达或正确抑制声明行为；第二，人类和 LLM 评判者评估人类接地人设的提取质量。总体而言，MatrAIx 为用多样化模拟人类用户评估 AI 系统和数字产品提供端到端基础设施。

## 关键词

#人设智能体 #模拟用户 #评估基础设施 #人口规模 #arXiv