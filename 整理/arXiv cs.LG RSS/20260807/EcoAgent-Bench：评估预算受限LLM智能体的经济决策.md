---
published: 2026-08-07
title: "EcoAgent-Bench：评估预算受限 LLM 智能体的经济决策"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/EcoAgent-Bench- Evaluating Economic Decision-Making in Budget-Constrained LLM Agents.md"
source_note: "[[信息源/arXiv cs.LG RSS/EcoAgent-Bench- Evaluating Economic Decision-Making in Budget-Constrained LLM Agents]]"
source_sha256: f31e6bdab567c304a6b8e3f39ec81583d9455fbf37ee3540f45c9bd07402ba69
original_url: "https://arxiv.org/abs/2608.05519"
processed: 2026-08-07
language: zh-CN
---

# EcoAgent-Bench：评估预算受限 LLM 智能体的经济决策

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Jie Wu, Ming Gong, Feixiang Cheng, Qinqin Zhao
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05519)

## 摘要

- 智能体基准通常测量任务完成并将资源使用视为辅助统计量，但部署中在本地查找、广泛搜索、组合研究工具、更强模型或人工升级之间的选择本身就是任务的一部分。
- 提出 EcoAgent-Bench：每个任务指定定价动作与显式预算；304 个真实衍生任务覆盖五个家族（源自 GAIA、HotpotQA、MuSiQue），测试四种决策：避免不必要升级、局部证据不足时升级、选择模型档位与在无依据前提上停止。
- 微平均准确率奖励单边策略：始终升级的对照在节省型任务上失败却取得高微成功；因此引入经济一致性分数暴露该失败；工具 API 智能体仅达 3.9–24.0% 微严格成功（经济一致性至多 7.3%）。
- 预算内完成与经济动作选择是不同属性；发布任务包、转换流水线、冻结评估环境与完整性绑定结果工件。

## 正文

智能体基准通常测量任务完成，并将资源使用视为辅助统计量。然而在部署中，在本地查找、广泛搜索、组合研究工具、更强模型或人工升级之间的选择本身就是任务的一部分。研究引入 EcoAgent-Bench，其中每个任务都指定定价动作与显式预算。其 304 个真实衍生任务覆盖五个家族（源自 GAIA、HotpotQA 与 MuSiQue），测试四种决策：避免不必要的升级、局部证据不足时升级、选择模型档位、在无依据前提上停止。研究在工具 API 与工作区 CLI 设定下评估七个 LLM 智能体，并搭配四个 oracle 脚本化对照。微平均准确率奖励单边策略：始终升级的对照取得高微成功，却未能通过节省型任务。因此研究还报告经济一致性分数（升级导向与节省导向家族组别准确率的较差者），它暴露了该失败。工具 API 智能体仅取得 3.9–24.0% 的微严格成功（经济一致性至多 7.3%），常常要么在应升级前停止，要么在廉价任务上超支。阈值穿越预算扫描将 GPT-5.4 的升级率从 0% 变为仅 3%。这些结果表明预算内的完成与经济动作选择是不同属性。研究发布研究两者所需的完整任务包、转换流水线、冻结评估环境与完整性绑定结果工件。

## 关键词

LLM 智能体、基准、预算、经济决策、工具使用
