---
published: 2026-08-05
title: "冷启动评论推荐中汤普森采样的 LLM 派生先验"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LLM-Derived Priors for Thompson Sampling in Cold-Start Comment Recommendation.md"
source_note: "[[信息源/arXiv cs.LG RSS/LLM-Derived Priors for Thompson Sampling in Cold-Start Comment Recommendation.]]"
source_sha256: 780d816a48308ccd75e9aec7b70264ee98411298d8f848747664f703cd3154b2
original_url: "https://arxiv.org/abs/2608.03382"
processed: 2026-08-05
language: zh-CN
---

# 冷启动评论推荐中汤普森采样的 LLM 派生先验

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Eugene Lee、Oseong Choi、Byungsoo Kang、Taeyeong Jang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03382)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/LLM-Derived Priors for Thompson Sampling in Cold-Start Comment Recommendation.|查看原始文件]]

## 摘要

- 多臂老虎机算法，尤其是汤普森采样，广泛用于在线推荐；尽管能适应在线反馈，这些方法常受冷启动局限困扰：新引入的臂几乎没有交互历史。
- 研究设置中候选臂是用户生成的文本评论，其语义内容能在充分交互反馈出现前揭示标题的吸引力；因此用 LLM 从评论文本提取语义信号，转换为信息丰富的贝叶斯先验，在稀疏早期反馈下热启动汤普森采样。
- 为考虑各细分段的聚合响应模式差异，为每个性别—年龄细分段分别维护并更新后验。
- 真实世界在线 A/B/C 测试比较均匀先验与两种 LLM 设计：面向人口统计亲和线索的性别先验（Gender Prior）与面向标题特定身份线索的内容先验（Content Prior）。
- 结果显示 LLM 先验在稀疏反馈情境下最有益——最大收益在积累少量交互证据后出现——且先验设计导致不同的漏斗级效应。
- 进一步分析先验—奖励对齐与人口统计异质性：点击导向对齐对性别先验最强，处理效应跨人口统计细分段差异显著；结论是 LLM 派生先验可为文本丰富的老虎机推荐提供实用热启动机制，同时也揭示部署权衡。

## 正文

论文编号：arXiv:2608.03382v1（更新类型：cross）。以下为摘要全文翻译。

多臂老虎机算法，尤其是汤普森采样，被广泛用于在线推荐。尽管它们能够从在线反馈中适应，这些方法常常遭遇冷启动局限：新引入的臂几乎没有交互历史。在我们的设置中，候选臂是用户生成的文本评论，其语义内容能在获得充分交互反馈之前揭示标题的吸引力。因此，我们使用大语言模型（LLM）从评论文本提取语义信号，并将其转换为信息丰富的贝叶斯先验，在稀疏的早期反馈下热启动汤普森采样。为考虑各细分段在响应模式上的聚合差异，我们为每个性别—年龄细分段分别维护和更新后验。在一项真实世界的在线 A/B/C 测试中，我们比较均匀先验与两种基于 LLM 的设计：面向人口统计亲和线索的性别先验（Gender Prior）与面向标题特定身份线索的内容先验（Content Prior）。结果显示，基于 LLM 的先验在稀疏反馈情境下最有益——最大的收益在积累了一小部分交互证据后出现——并且先验设计会导致不同的漏斗级效应。我们进一步分析先验—奖励对齐与人口统计异质性，发现点击导向的对齐对性别先验最强，且处理效应在各人口统计细分段间差异显著。这些发现表明，LLM 派生的先验可以作为文本丰富老虎机推荐的实用热启动机制，同时也揭示了部署权衡。

## 关键词

#汤普森采样 #多臂老虎机 #冷启动 #LLM先验 #推荐系统
