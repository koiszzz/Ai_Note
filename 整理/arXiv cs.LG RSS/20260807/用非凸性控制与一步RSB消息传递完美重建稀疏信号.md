---
published: 2026-08-07
title: "用非凸性控制与一步 RSB 消息传递完美重建稀疏信号"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Perfect reconstruction of sparse signals using nonconvexity control and one-step RSB message passing.md"
source_note: "[[信息源/arXiv cs.LG RSS/Perfect reconstruction of sparse signals using nonconvexity control and one-step RSB message passing]]"
source_sha256: 89a050f3b135bc71fcfa8f15a5498a6f2d61357fb0160349555e81fc6b650824
original_url: "https://arxiv.org/abs/2512.17426"
processed: 2026-08-07
language: zh-CN
---

# 用非凸性控制与一步 RSB 消息传递完美重建稀疏信号

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Xiaosi Gu, Ayaka Sakata, Tomoyuki Obuchi
> - **发布时间**：2026-08-07
> - **分类**：stat.ML
> - **原文**：[打开链接](https://arxiv.org/abs/2512.17426)

## 摘要

- 考虑通过最小化平滑裁剪绝对偏差（SCAD）罚进行稀疏信号重建，开发近似消息传递（AMP）的一步副本对称破缺（1RSB）扩展，称 1RSB-AMP。
- 从信念传播的 1RSB 形式化出发，推导 1RSB-AMP 的显式更新规则及相应状态演化（1RSB-SE）方程。
- 详细比较显示，即使在 RS AMP 发散、1RSB 描述本身不被期望热力学精确的参数区域，1RSB-AMP 与 1RSB-SE 在宏观层面也一致得很好；1RSB-SE 不动点分析揭示成功、失败与发散相构成相图。
- 发散区边界现依赖 Parisi 参数，提出新准则——最小化发散区大小——而非传统零复杂度条件确定其值；结合先前 RS 研究的非凸性控制（NCC）协议，改善完美重建的算法极限；1RSB-SE 数值解与 1RSB-AMP 实验确认该改进极限实际达成（增益适中，仍略逊贝叶斯最优阈值）。

## 正文

研究考虑通过最小化平滑裁剪绝对偏差（smoothly clipped absolute deviation, SCAD）罚进行稀疏信号重建，并开发近似消息传递（AMP）的一步副本对称破缺（one-step replica-symmetry-breaking, 1RSB）扩展，称 1RSB-AMP。从信念传播的 1RSB 形式化出发，研究推导 1RSB-AMP 的显式更新规则及相应的状态演化（1RSB-SE）方程。详细比较表明，即使在 RS AMP 发散、1RSB 描述本身不被期望热力学精确的参数区域，1RSB-AMP 与 1RSB-SE 也在宏观层面符合得很好。1RSB-SE 的不动点分析揭示一个由成功、失败与发散相组成的相图，与 RS 情形类似。然而，发散区边界现在因 1RSB 假设而依赖 Parisi 参数，研究提出新准则——最小化发散区大小——而非常规的零复杂度条件来确定其值。将该准则与先前 RS 研究提出的非凸性控制（NCC）协议结合，可相对 RS-AMP 改进完美重建的算法极限。1RSB-SE 的数值解与 1RSB-AMP 的实验确认该改进极限在实践中达成，尽管增益适中且仍略逊于贝叶斯最优阈值。研究还报告表征该问题 1RSB 相的热力学量行为——重叠、自由熵、复杂度与非自平均敏感性。

## 关键词

稀疏重建、消息传递、副本对称破缺、AMP、SCAD
