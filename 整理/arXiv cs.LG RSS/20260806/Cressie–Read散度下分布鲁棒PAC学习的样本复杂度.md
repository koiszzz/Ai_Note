---
published: 2026-08-06
title: Cressie–Read散度下分布鲁棒PAC学习的样本复杂度
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/The Sample Complexity of Distributionally Robust PAC Learning under Cressie--Read Divergences.md
source_note: "[[信息源/arXiv cs.LG RSS/The Sample Complexity of Distributionally Robust PAC Learning under Cressie--Read Divergences]]"
source_sha256: 5369d9bb58bb2493dc0a982ee944b299ccba05020cde922ca65b3f19e31970a3
original_url: https://arxiv.org/abs/2608.04686
processed: 2026-08-07
language: zh-CN
---

# Cressie–Read散度下分布鲁棒PAC学习的样本复杂度

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04686)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/The Sample Complexity of Distributionally Robust PAC Learning under Cressie--Read Divergences|查看原始文件]]

## 摘要

- 研究 $0$–$1$ 损失下受 Cressie–Read 散度（阶 $k>1$、半径 $\rho$）约束的分布鲁棒 PAC 学习，建立可实现与不可知情形的样本复杂度界（分别紧到常数与对数因子）。
- 鲁棒性会改变 $\varepsilon$ 依赖性：可实现情形从 $\varepsilon^{-1}$ 变为 $\varepsilon^{-k_\star}$；不可知情形在 $1<k<2$ 时从 $\varepsilon^{-2}$ 变为 $\varepsilon^{-k_\star}$。
- 基于鲁棒风险的标量归约揭示分类误差统计估计与鲁棒性放大之间的尺度敏感交互，并恢复 $\rho\to0$ 时的标准 PAC 速率。

## 正文

我们研究 $0$–$1$ 损失下的分布鲁棒 PAC 学习，其中数据分布的对抗扰动受阶数 $k>1$、半径 $\rho\geq 0$ 的 Cressie–Read 散度约束。对于 VC 维为 $d$ 的假设类，我们建立了可实现情形和不可知情形的样本复杂度界，分别精确到常数因子和对数因子；普通经验风险最小化即可在达到对数因子内获得两种速率。对于目标精度 $\varepsilon\in(0,1)$ 和置信度 $\delta\in(0,1)$，它们各自的阶数为 \[ \max\!\left\{\frac{1}{\varepsilon}, \frac{\rho^{\frac 1{k-1}}}{\varepsilon^{k_\star}} \right\}\cdot(d+\log \delta^{-1}) \qquad\text{和}\qquad \max\!\left\{\frac{1}{\varepsilon^2}, \frac{\rho^{\frac1{k-1}}}{\varepsilon^{k_\star\vee 2}} \right\}\cdot(d+\log \delta^{-1}), \] 其中 $k_\star={k}/{(k-1)}$。对每个固定 $\rho>0$，当 $\varepsilon\downarrow0$ 时，鲁棒性将可实现情形的 $\varepsilon$ 依赖性从 $\varepsilon^{-1}$ 改变为 $\varepsilon^{-k_\star}$。在不可知情形下，对于 $1<k<2$，鲁棒性将 $\varepsilon$ 依赖性从 $\varepsilon^{-2}$ 改变为 $\varepsilon^{-k_\star}$，而对于 $k\geq2$，指数保持经典的 2，并具有非平凡的 $\rho$ 依赖性。

基于已知的鲁棒 $0$–$1$ 风险到普通分类误差的标量归约，我们的分析揭示了分类误差的统计估计与其被鲁棒性放大之间的一种尺度敏感交互，清晰地解释了不可知速率中的转变。我们将先前研究的 $\chi^2$ 散度情形扩展到每个 Cressie–Read 阶 $k>1$，弥合其上界-下界差距，并在 $\rho\to0$ 时恢复标准 PAC 学习速率，而此前的界无法在该极限下正确插值。

## 关键词

#分布鲁棒 #PAC学习 #样本复杂度 #Cressie-Read散度 #经验风险最小化
