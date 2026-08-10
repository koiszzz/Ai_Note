---
published: 2026-08-07
title: "前沿 LLM 新兴生物安全风险的早期预警"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/An Early Warning of Emerging Biosecurity Risks in Frontier LLMs.md"
source_note: "[[信息源/arXiv cs.CL RSS/An Early Warning of Emerging Biosecurity Risks in Frontier LLMs]]"
source_sha256: 8e28da5d8131aab7ea73e40444d6e932aec36bdf7c7eedf023593ab5ac776ea7
original_url: "https://arxiv.org/abs/2607.18056"
processed: 2026-08-07
language: zh-CN
---

# 前沿 LLM 新兴生物安全风险的早期预警

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Zhida He, Xia Hu, Baichen Le, Chunxiao Li, Jiajia Li, Lijun Li, Chaochao Lu, Jing Shao, Youbang Sun, Hua Tang, Xiang Wang, Xiao Wang, Xiaoyu Wen, Tong Wu, Jia Xu, Peng Yu, Shu Yu, Jie Zhang, Qiaosheng Zhang, Yi Zhang, Xing-Ming Zhao, Tianhang Zheng, Ziyuan Zhou
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2607.18056)

## 摘要

- 前沿大语言模型（LLM）日益集成进科学工作流，其不断增长的生物学能力可能超越当前保障。
- 开发 Intern-BioBreaker：专门生物红队模型，配计算到物理集成框架（模型级压力测试耦合湿实验室验证）。
- 框架内 Intern-BioBreaker 生成针对性越狱提示，测试对齐模型是否被诱导为安全敏感生物任务提供操作指导或产生潜在有害性质序列级输出；选定序列输出进行 DNA 合成、宿主表达与正交蛋白验证，评估模型生成设计能否产出预期生物产品。
- 评估揭示文本级保障与能干科学模型风险间令人担忧差距：(i) Intern-BioBreaker 超越基线攻击模型，开放权重与专有前沿 LLM 普遍暴露生物风险越狱漏洞，若干目标任务级攻击成功率近饱和或 100%；(ii) 序列级案例研究中 GPT-5.5 可被诱导生成具致病潜力的修饰病毒候选序列，对应翻译蛋白可能表现出更强受体结合亲和力与增强感染潜力；(iii) 端到端验证显示选定模型生成生物设计非纯文本伪影，可在受控实验设定物理实现；强调更强生物红队、核酸合成筛查与匹配模型能力安全机制需求。

## 正文

前沿大语言模型（LLMs）日益集成进科学工作流，然而它们不断增长的生物学能力可能超越当前的保障。为评估前沿模型的生物风险，研究开发 Intern-BioBreaker，一个专门的生物红队模型，配合一个集成的计算到物理框架：将模型级压力测试与湿实验室验证耦合。在该框架内，Intern-BioBreaker 生成针对性越狱提示，测试对齐模型是否可以被诱导为安全敏感的生物学任务提供操作指导，或产生具有潜在有害性质的序列级输出。选定的序列输出随后推进到 DNA 合成、宿主表达与正交蛋白验证，以评估模型生成的设计能否产生预期的生物产品。评估揭示文本级保障与能干科学模型所构成风险之间令人担忧的差距：(i) Intern-BioBreaker 超越基线攻击模型，并揭示开放权重与专有前沿 LLM 中普遍存在的生物风险越狱漏洞，若干目标达到接近饱和或 100% 的任务级攻击成功率（ASR）；(ii) 在序列级案例研究中，GPT-5.5 可被诱导生成具有致病潜力的修饰病毒候选序列；相应的翻译蛋白可能表现出更强的受体结合亲和力，因而具有增强的感染潜力；(iii) 端到端验证表明，选定的模型生成生物设计不仅仅是文本伪影，还可以在受控的实验设定下物理实现。这些发现强调需要更强的生物红队、核酸合成筛查，以及跟上模型能力的安全机制。

## 关键词

生物安全、红队、越狱、LLM、DNA 合成
