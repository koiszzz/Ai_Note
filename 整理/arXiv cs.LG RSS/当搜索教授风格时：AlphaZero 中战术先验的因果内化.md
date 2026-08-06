---
title: "当搜索教授风格时：AlphaZero 中战术先验的因果内化"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/When Search Teaches Style- Causal Internalization of Tactical Priors in AlphaZero.md"
source_note: "[[信息源/arXiv cs.LG RSS/When Search Teaches Style- Causal Internalization of Tactical Priors in AlphaZero.]]"
source_sha256: 02abc16591007ed3f895e53d24d78f1d1014b609fabd06d4f7a788fdb8d77d67
original_url: "https://arxiv.org/abs/2504.14636"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 当搜索教授风格时：AlphaZero 中战术先验的因果内化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Ruitong Li、Binjie Guo、Aisheng Mo、Guowei Su、Han Wang、Jie Li、Ru Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2504.14636)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/When Search Teaches Style- Causal Internalization of Tactical Priors in AlphaZero.|查看原始文件]]

## 摘要

- AlphaZero 通常被当作一个智能体评估：策略—价值网络与蒙特卡洛树搜索融合；该融合隐藏一个因果问题：自对弈搜索被给予有用先验时，网络吸收诱导行为，还是行为在测试时仍从搜索"租借"？
- 用跨阶段先验干预（CPI）回答：在训练与评估期间独立开关根级战术先验，把先验的在线效果与它留在权重中的学得残差分开。
- 终点刻意狭窄：无搜索时引导时网络履行强制防御义务的频率；9x9 五子棋与 19x19 围棋的密封一次性最终测试中，删除先验仍留下大残差响应——五子棋从 13.8% 升到 26.3%，围棋从 0.6% 升到 33.8%——且软重加权教学与硬动作限制一样好，因此剪枝合法动作不是机制。
- 同一交叉界定该声明：重新启用先验恢复近 100% 响应，留下 73.7 与 65.8 点的依赖差距。
- 锁定位置评估把残差定位到训练几何——共享初始化时不存在、随训练出现、分布内防御值 +17.3 点但结构新颖仅 +1.3。
- 搜索因此最好被解读为训练时行为课程，其教训真实、部分且受几何约束，在线能力与内化能力是不同估计量，对角消融无法区分。

## 正文

论文编号：arXiv:2504.14636v3（更新类型：replace）。以下为摘要全文翻译。

AlphaZero 通常被当作一个智能体评估：一个与蒙特卡洛树搜索融合的策略—价值网络。这种融合隐藏了一个因果问题。当自对弈搜索被给予一个有用的先验时，网络是吸收了诱导的行为，还是该行为在测试时仍然从搜索"租借"？我们用跨阶段先验干预（Cross-Phase Prior Intervention，CPI）回答：在训练期间与评估期间独立开关一个根级战术先验，把先验的在线效果与它留在权重中的学得残差分开。终点是刻意狭窄的：网络在没有搜索时引导的情况下履行一项强制防御义务的频率。在 9x9 五子棋与 19x19 围棋的密封一次性最终测试中，删除先验仍留下一个大的残差响应——五子棋从 13.8% 上升到 26.3%，围棋从 0.6% 上升到 33.8%——而软重加权教学与硬动作限制教得一样好，因此剪枝合法动作不是机制。同一个交叉界定这一声明：重新启用先验恢复接近 100% 的响应，留下 73.7 与 65.8 点的依赖差距。一个锁定位置的评估把残差定位到训练好的几何——在共享初始化时不存在、在训练中涌现、在分布内防御上值 +17.3 点但在结构新颖的防御上只值 +1.3。搜索因此最好被解读为一个训练时的行为课程，其教训是真实的、部分的且受几何约束，而在线能力与内化能力是不同的估计量，对角消融无法区分。

## 关键词

#AlphaZero #蒙特卡洛树搜索 #先验内化 #因果干预 #博弈AI
