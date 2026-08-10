---
published: 2026-08-07
title: "EcoAgent-Bench：评估预算约束 LLM 智能体中的经济决策"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/EcoAgent-Bench- Evaluating Economic Decision-Making in Budget-Constrained LLM Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/EcoAgent-Bench- Evaluating Economic Decision-Making in Budget-Constrained LLM Agents]]"
source_sha256: f0de964a05c8c82fd17b276400b1d37fcc2198239847260c68a2a3149cd74254
original_url: "https://arxiv.org/abs/2608.05519"
processed: 2026-08-07
language: zh-CN
---

# EcoAgent-Bench：评估预算约束 LLM 智能体中的经济决策

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jie Wu, Ming Gong, Feixiang Cheng, Qinqin Zhao
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05519)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/EcoAgent-Bench- Evaluating Economic Decision-Making in Budget-Constrained LLM Agents|查看原始文件]]

## 摘要

- 智能体基准通常衡量任务完成并将资源使用视为辅助统计；但部署中，在本地查找、广泛搜索、复合研究工具、更强模型或人工升级之间的选择本身是任务的一部分。
- 引入 EcoAgent-Bench：每个任务指定定价动作与显式预算；304 个真实派生任务覆盖来自 GAIA、HotpotQA 与 MuSiQue 改编的五个家族，测试四个决策：避免不必要升级、本地证据不足时升级、选择模型层级、在无支撑前提下停止。
- 在工具 API 与工作区 CLI 设置中评估七个 LLM 智能体与四个 oracle 脚本控制；微平均准确率奖励单边策略：总是升级的控制实现高微成功率但未能完成节省导向任务；因此还报告经济一致性分数（升级导向与节省导向家族组的准确率较差者）暴露该失败。
- 工具 API 智能体仅达 3.9-24.0% 微严格成功（经济一致性至多 7.3%），常在应有升级前停止或在廉价任务上超支；阈值穿越预算扫描将 GPT-5.4 的升级率从 0% 改变到仅 3%；结果证明预算下完成与经济动作选择是不同属性；发布任务包、转换流水线、冻结评估环境与完整性约束结果工件。

## 正文

智能体基准通常衡量任务完成，并将资源使用视为辅助统计。然而在部署中，在本地查找、广泛搜索、复合研究工具、更强模型或人工升级之间的选择本身是任务的一部分。我们引入 EcoAgent-Bench，其中每个任务指定定价动作与显式预算。其 304 个真实派生任务覆盖五个家族（改编自 GAIA、HotpotQA 与 MuSiQue），并测试四个决策：避免不必要的升级、本地证据不足时升级、选择模型层级，以及在无支撑前提下停止。我们在工具 API 与工作区 CLI 设置中评估七个 LLM 智能体，连同四个 oracle 脚本控制。微平均准确率奖励单边策略：总是升级的控制实现高微成功率，但未能完成节省导向任务。因此，我们还报告经济一致性分数（经济一致性为升级导向与节省导向家族组的准确率较差者），它暴露了这一失败。工具 API 智能体仅达到 3.9-24.0% 的微严格成功（经济一致性至多 7.3%），经常在应有升级之前停止，或在廉价任务上超支。阈值穿越预算扫描将 GPT-5.4 的升级率从 0% 改变到仅 3%。这些结果表明，预算下完成与经济动作选择是不同的属性。我们发布研究两者所需的任务包、转换流水线、冻结评估环境与完整性约束的结果工件。

## 关键词

#LLM智能体 #经济决策 #预算约束 #基准测试
