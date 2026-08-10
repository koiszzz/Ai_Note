---
published: 2026-08-07
title: "SkillCorpus：整合与评估真实 LLM 智能体的开放技能生态"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/SkillCorpus- Consolidating and Evaluating the Open Skill Ecosystem for Real-World LLM Agents.md"
source_note: "[[信息源/arXiv cs.CL RSS/SkillCorpus- Consolidating and Evaluating the Open Skill Ecosystem for Real-World LLM Agents]]"
source_sha256: c3535583da021ae005d67601f9887a826792aeb0113939ee664f8953549f2f23
original_url: "https://arxiv.org/abs/2607.15557"
processed: 2026-08-07
language: zh-CN
---

# SkillCorpus：整合与评估真实 LLM 智能体的开放技能生态

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Yanze Wang, Pengfei Yao, Tianyi Sun, Chuanrui Hu, Yan Xiao, Xiaotian Luo, Yunyun Han, Yifan Chen, Jun Sun, Yafeng Deng
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2607.15557)

## 摘要

- 智能体技能（为 LLM 智能体打包可复用程序性知识的 SKILL 文件）是扩展智能体能力的流行机制；公共仓库托管技能数量庞大且增长，但碎片化、冗余、质量不齐，实践价值不明。
- 核心开放问题：如何将开源 SKILL 生态整合为单一可用语料，其边界如何限制真实智能体任务收益。
- 呈现 SkillCorpus：规模化聚合、策展、匹配与评估开放技能生态的框架；多阶段流水线将约 821000 个爬取技能过滤为 96401 个（16 类分类学与三质量面：效用、稳健性、安全），配微调检索-选择栈匹配任务相关技能。
- 三个基准（SkillsBench、GDPVal、QwenClawBench）、两个外壳与两个开源骨干（配前沿稳健性检查）端到端评估：整合 SkillCorpus 三基准一致增益，SkillsBench 最大（+7.5 个百分点）；运营分析将增益追溯到覆盖边界与外壳边界；据研究所知首个端到端说明策展、检索服务的社区语料何时改进真实智能体任务、何处不改进；数据集、模型与代码接收后发布。

## 正文

智能体技能——为 LLM 智能体打包可复用程序性知识的 SKILL 文件——是扩展智能体能力的流行机制。公共仓库现在以庞大且不断增长的数量托管它们，然而这些工件碎片化、冗余且质量参差不齐，它们在实践中的价值也不清楚。一个核心问题仍然开放：如何将这个开源 SKILL 生态系统整合成一个可用的语料库，以及什么界定了它在真实世界智能体任务上的收益。研究呈现 SkillCorpus，一个规模化聚合、策展、匹配与评估开放技能生态系统的框架。它通过一个多阶段流水线，将约 821,000 个爬取技能过滤为 96,401 个技能，按一个 16 类分类学与三个质量方面（效用、稳健性、安全）组织，并配对一个微调后的检索与选择栈，匹配任务相关技能。研究在三个基准（SkillsBench、GDPVal、QwenClawBench）、两个外壳与两个开源骨干上端到端评估，并配一个前沿稳健性检查。整合 SkillCorpus 在全部三个基准上产生一致的增益，在 SkillsBench 上最大（+7.5 个百分点）。一项运营分析将增益追溯到覆盖边界与外壳边界。据研究所知，SkillCorpus 是第一个端到端说明策展的、检索服务的社区语料何时改进真实智能体任务、以及何处不改进的成果。数据集、模型与代码将在接收后发布。

## 关键词

技能、智能体、语料、检索、生态
