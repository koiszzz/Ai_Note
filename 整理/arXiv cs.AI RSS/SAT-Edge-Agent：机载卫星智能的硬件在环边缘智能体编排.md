---
title: "SAT-Edge-Agent：机载卫星智能的硬件在环边缘智能体编排"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SAT-Edge-Agent- Hardware-in-the-Loop Edge-Agent Orchestration for Onboard Satellite Intelligence.md"
source_note: "[[信息源/arXiv cs.AI RSS/SAT-Edge-Agent- Hardware-in-the-Loop Edge-Agent Orchestration for Onboard Satellite Intelligence]]"
source_sha256: e4d3dffc7da717d1eb8723ecb982ee63fd5019d6cd0e5749602f0c8e29787f41
original_url: "https://arxiv.org/abs/2608.03728"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SAT-Edge-Agent：机载卫星智能的硬件在环边缘智能体编排

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Longji He、Jeto Xu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03728)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SAT-Edge-Agent- Hardware-in-the-Loop Edge-Agent Orchestration for Onboard Satellite Intelligence|查看原始文件]]

## 摘要

- 提出 SAT-Edge-Agent，硬件在环（HIL）边缘智能体系统：部署在商用现成 ARM 异构边缘片上系统上；浏览器工作区与 FastAPI 智能体协调本地 OpenAI 兼容语言服务与项目内 YOLO 风格定向目标检测端点（返回 FAIR1M 元数据支撑的结构化结果）。
- 机载卫星智能需要任务层：把任务意图转化为本地工具调用、暴露执行状态并在通信与功率约束下返回机器可消费工件。
- 两个固定 FAIR1M 工作负载（单图与串行双图请求）各重复 20 次，20/20 完成；全智能体平均延迟 29.353 秒与 60.937 秒，经验 P95 31.166 秒与 66.882 秒；检测器平均时间 861.386 毫秒与 1510.920 毫秒，仅为对应全智能体均值的 2.93% 与 2.48%；剖析显示大部分可见延迟发生在检测器执行之外；平均 CPU 利用率 20.761% 与 20.482%。
- 200 毫秒 NPU 负载字段两个工作负载平均 100%，但它是共享加速器软件字段，而非仅检测器占用或校准利用率；公开证据包提供脱敏请求级记录、修订 JSON、规范化 SSE 示例与复现脚本；确立可复现的 HIL 边界，但不确立检测器准确率、新地理定位方法、校准能效或飞行就绪性。

## 正文

论文编号：arXiv:2608.03728v1（更新类型：new）。以下为摘要全文翻译。

机载卫星智能需要任务层：把任务意图转化为本地工具调用、暴露执行状态，并在通信与功率约束下返回机器可消费的工件。我们提出 SAT-Edge-Agent，一个部署在商用现成 ARM 异构边缘片上系统上的硬件在环（HIL）边缘智能体系统。浏览器工作区与 FastAPI 智能体协调一个本地 OpenAI 兼容语言服务与一个项目内 YOLO 风格定向目标检测端点，后者返回 FAIR1M 元数据支撑的结构化结果。两个固定 FAIR1M 工作负载（一个单图请求与一个串行双图请求）各重复 20 次，全部 20/20 尝试完成。全智能体平均延迟为 29.353 秒与 60.937 秒，经验 P95 值为 31.166 秒与 66.882 秒。检测器平均时间为 861.386 毫秒与 1510.920 毫秒，仅占对应全智能体均值的 2.93% 与 2.48%。剖析表明，大部分可见延迟发生在检测器执行之外。平均 CPU 利用率分别为 20.761% 与 20.482%。一个 200 毫秒的 NPU 负载字段在两个工作负载中平均为 100%，但它代表一个共享加速器软件字段，而非仅检测器占用或校准后的利用率。公开证据包提供脱敏的请求级记录、修订后的 JSON、规范化的 SSE 示例与复现所报告统计的脚本。这些结果为可观测的卫星边缘智能体编排确立一个可复现的 HIL 边界，但不确立检测器准确率、新地理定位方法、校准能效或飞行就绪性。

## 关键词

#卫星智能 #边缘计算 #硬件在环 #智能体
