---
published: 2026-08-05
title: "当搜索教导风格时：AlphaZero 中战术先验的因果内化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/When Search Teaches Style- Causal Internalization of Tactical Priors in AlphaZero.md"
source_note: "信息源/arXiv cs.AI RSS/When Search Teaches Style- Causal Internalization of Tactical Priors in AlphaZero"
source_sha256: 16a358c643d93f2baeadc6b324a1c6014b71f6f6bfa40874b4ea1d5ebb293a6e
original_url: "https://arxiv.org/abs/2504.14636"
processed: 2026-08-05
language: zh-CN
---

# 当搜索教导风格时：AlphaZero 中战术先验的因果内化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ruitong Li、Binjie Guo、Aisheng Mo 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2504.14636)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/When Search Teaches Style- Causal Internalization of Tactical Priors in AlphaZero|查看原始文件]]

## 摘要

- 用跨阶段先验干预（CPI）回答：训练与评估期间独立开关根级战术先验，把先验的在线效果与它在权重中留下的学习残差分开。
- AlphaZero 通常作为单一智能体评估：策略-价值网络与蒙特卡洛树搜索融合；该融合隐藏因果问题：当自博弈搜索获得有用先验时，网络是吸收诱导行为，还是行为在测试时仍从搜索租用？
- 端点刻意窄：网络在无搜索时引导时多久履行强制防御义务——封存一次性最终测试中（9×9 五子棋与 19×19 围棋），删除先验仍留下大残差（五子棋响应率从 13.8% 升至 26.3%、围棋 0.6% 至 33.8%），软重新加权与硬动作限制教导一样好（剪枝合法动作不是机制）；同一交叉界定主张：重新启用先验恢复近 100% 响应，留下 73.7 与 65.8 分依赖差距。
- 锁定位置评估把残差定位到训练几何（共享初始化处不存在、训练中涌现、分布内防御值 +17.3 分而结构新颖防御仅 +1.3 分）——搜索最好解读为训练时行为课程，其教训真实、部分且受几何约束；在线能力与内化能力是不同估计量，对角线消融无法区分。

## 正文

论文编号：arXiv:2504.14636v3（更新类型：replace-cross）。以下为摘要全文翻译。

AlphaZero 通常作为单一智能体评估：策略-价值网络与蒙特卡洛树搜索融合。这种融合隐藏一个因果问题：当自博弈搜索被给予有用先验时，网络是否吸收诱导行为，还是行为在测试时仍从搜索租用？我们用跨阶段先验干预（Cross-Phase Prior Intervention，CPI）回答：训练与评估期间独立开关根级战术先验，把先验的在线效果与它在权重中留下的学习残差分离。端点刻意狭窄：网络在没有搜索时引导的情况下多久履行一次强制防御义务。在 9×9 五子棋与 19×19 围棋的封存一次性最终测试中，删除先验仍留下大的残差响应：五子棋从 13.8% 升至 26.3%，围棋从 0.6% 升至 33.8%；软重新加权与硬动作限制教导得一样好，因此剪枝合法动作不是机制。同一交叉界定主张：重新启用先验恢复近 100% 的响应，留下 73.7 与 65.8 分的依赖差距。一个锁定位置评估把残差定位到训练过的几何——它在共享初始化处不存在、在训练中涌现、对分布内防御值 +17.3 分、对结构新颖防御仅 +1.3 分。因此，搜索最好被解读为一个训练时的行为课程，其教训是真实的、部分的且受几何约束；在线能力与内化能力是不同的估计量，对角线消融无法区分。

## 关键词

#AlphaZero #搜索先验 #内化 #因果分析
