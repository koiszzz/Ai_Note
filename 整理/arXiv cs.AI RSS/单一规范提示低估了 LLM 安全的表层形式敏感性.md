---
title: "单一规范提示低估了 LLM 安全的表层形式敏感性"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Single Canonical Prompts Underestimate LLM Safety's Surface-Form Sensitivity.md"
source_note: "[[信息源/arXiv cs.AI RSS/Single Canonical Prompts Underestimate LLM Safety's Surface-Form Sensitivity]]"
source_sha256: dfd29dd08e7c40e351c9a136e058dcc0a11bd8f0c78ef196cb2806e1484d525b
original_url: "https://arxiv.org/abs/2608.02665"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 单一规范提示低估了 LLM 安全的表层形式敏感性

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yongxi Zhou、Junwei Yao、Yuanzhe Liu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02665)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Single Canonical Prompts Underestimate LLM Safety's Surface-Form Sensitivity|查看原始文件]]

## 摘要

- 在安全（无黄金标签可平均的高风险设置）中实例化问题：预先编写改写（无拒绝、大多非 LLM：机器回译与矩阵语言框架代码切换生成器），使相同表层形式到达每个模型，用一个人类锚定、供应商中立的评判者（Claude，对不安全合规与人类 kappa=0.86，跨语言稳定，GPT-4o 交叉检查）给所有响应评分，并验证意图保持。
- 370 个种子 × 5 种表层形式 × 5 个模型：没有单一变换统一最危险（20 个逐变换 McNemar 检验中 6 个在校正后幸存，多数是保护性的）；但只评估规范提示低估不安全合规：跨形式的 unsafe 结果并集超过最差单形式 3.3–12.9 pp，五个模型的自举 95% CI 都排除零；5–13% 的规范安全种子在某种改写下不安全——高于零随机性底线（规范提示在温度 0 下重采样五次给出 0/370 新暴露）。
- 差距大小依赖模型（Gemini 2.5 Pro 最大）；一种形式只恢复模型观测 unsafe 表层的约 53%，约三种达到 85%——对该形式集合的冗余刻画，而非对定义总体的刻画；良性对照（XSTest）暗示不稳定性是双向的；发布数据集、代码与逐响应标签。

## 正文

论文编号：arXiv:2608.02665v1（更新类型：cross）。以下为摘要全文翻译。

基准分数是测量仪器，然而大多数基准以单一规范表层形式读取每个条目。我们询问该读取是否忠实：当条目的意图固定、只有其保持意义的表层形式变化时，规范形式分数能否良好估计模型行为，其中多少变异是解码/评判噪声而非信号？我们在安全中实例化这一点——一个无黄金标签可平均的高风险设置。为避免先前混杂，我们预先编写改写（无拒绝、大多非 LLM：机器回译与一个矩阵语言框架代码切换生成器），使相同的表层形式到达每个模型；用一个人类锚定、供应商中立的评判者（Claude，对不安全合规与人类 kappa=0.86，跨语言稳定，GPT-4o 交叉检查）给所有响应评分，并验证意图保持。在 370 个种子 × 5 种表层形式 × 5 个模型上，没有单一变换统一最危险（20 个逐变换 McNemar 检验中 6 个在校正后幸存，多数是保护性的）。然而，只评估规范提示低估了不安全合规：跨形式的 unsafe 结果并集超过最差单形式 3.3–12.9 pp，五个模型的自举 95% CI 都排除零，并且 5–13% 的规范安全种子在某种改写下不安全——高于零随机性底线（规范提示在温度 0 下重采样五次给出 0/370 的新暴露）。这一差距的大小依赖模型（Gemini 2.5 Pro 最大）。一种形式只恢复一个模型观测 unsafe 表层的约 53%，约三种达到 85%——这是对该形式集合的冗余刻画，而非对定义总体的刻画。一个良性对照（XSTest）暗示不稳定性是双向的，尽管良性与有害池不是条目匹配的。我们发布数据集、代码与逐响应标签。

## 关键词

#LLM安全 #表层形式 #提示改写 #评估方法
