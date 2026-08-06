---
title: "TraceCAD：智能体 CAD 生成的轨迹引导修复"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TraceCAD- Trace-Guided Repair for Agentic CAD Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/TraceCAD- Trace-Guided Repair for Agentic CAD Generation]]"
source_sha256: 1bfba4c476b94476f55281160c725177b3afc6508187ed36a2e2589e4bf98617
original_url: "https://arxiv.org/abs/2608.03062"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# TraceCAD：智能体 CAD 生成的轨迹引导修复

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Fengxiao Fan、Jingzhe Ni、Fan Sang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03062)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TraceCAD- Trace-Guided Repair for Agentic CAD Generation|查看原始文件]]

## 摘要

- 提出 TraceCAD，恢复层：把请求特征、建模步骤、失败证据与候选结果作为持久状态链接——诊断可能故障的操作、在依赖区域搜索有界编辑、通过执行与保持检查验证候选，并把成功与失败修复结果保留在可复用技能记忆中。
- 基于 LLM 的 CAD 智能体产生可执行参数化程序，但其纠正循环可能丢失关于已满足要求、故障操作与先前修复的证据。
- DeepCAD 派生基准（200 模型消融与 1K 模型比较）上，TraceCAD 在 IoU、Chamfer 距离与 Hausdorff 距离方面取得有竞争力的几何质量；移除持久状态使恢复分数几乎减半；移除局部化搜索使几何回归翻倍以上并使代码智能体调用翻倍；在不相交训练模型上初始化技能库进一步减少重试、token 成本与延迟。
- 结果表明持久、局部化、可复用的恢复改善最终 CAD 质量与修复可靠性。

## 正文

论文编号：arXiv:2608.03062v1（更新类型：new）。以下为摘要全文翻译。

基于 LLM 的 CAD 智能体产生可执行的参数化程序，但其纠正循环可能丢失关于已满足要求、故障操作与先前修复的证据。我们引入 TraceCAD，一个恢复层：把请求特征、建模步骤、失败证据与候选结果作为持久状态链接。TraceCAD 诊断可能故障的操作，在其依赖区域中搜索有界编辑，通过执行与保持检查验证候选，并把成功与失败的修复结果保留在可复用的技能记忆中。在 DeepCAD 派生基准上（200 模型消融与 1K 模型比较），TraceCAD 在 IoU、Chamfer 距离与 Hausdorff 距离方面取得有竞争力的几何质量。移除持久状态几乎使恢复分数减半；移除局部化搜索使几何回归翻倍以上并使代码智能体调用翻倍。在不相交训练模型上初始化技能库进一步减少重试、token 成本与延迟。这些结果表明，持久、局部化且可复用的恢复改善了最终 CAD 质量与修复可靠性。

## 关键词

#CAD生成 #智能体 #轨迹修复 #技能记忆
