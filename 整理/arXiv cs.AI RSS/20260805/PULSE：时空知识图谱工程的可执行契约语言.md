---
published: 2026-08-05
title: "PULSE：时空知识图谱工程的可执行契约语言"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PULSE- An Executable Contract Language for Spatiotemporal Knowledge Graph Engineering.md"
source_note: "[[信息源/arXiv cs.AI RSS/PULSE- An Executable Contract Language for Spatiotemporal Knowledge Graph Engineering]]"
source_sha256: 129e6a8e9801ef55d4e19aa4e56e007abbc181ee91b98524384af154749aaf08
original_url: "https://arxiv.org/abs/2608.02630"
processed: 2026-08-05
language: zh-CN
---

# PULSE：时空知识图谱工程的可执行契约语言

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Dongxu Yang、Ziyi Liang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02630)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PULSE- An Executable Contract Language for Spatiotemporal Knowledge Graph Engineering|查看原始文件]]

## 摘要

- 提出 PULSE，受对象-过程-方法论启发的语言：在一个类型化运行时中局部化四个操作角色及其写入效果；模式表示操作角色而非模态或道义逻辑。
- 已实现契约固定证据不覆盖、分支隔离、接地多主体定时器、受守卫状态改变与跨时间空间的声明排名事件排序；外部运行器仍决定证据是否成为权威移动；GeoSPARQL、SOSA 与 SHACL 保持为生成视图。
- 核心演算给出效果限制引理与六项安全属性；Lean 4 检查位置、证据、时钟、监视器、原子性与分支源保留的内核类似物；88 个测试、3,534 项有界检查与 32 个 Lean/Python 运行时内核案例把实现主张限定到已检查案例。
- 跨 37,440 条生成时间轨迹，PULSE 匹配独立工作流并区分十个单字段突变体；在完整 NOAA IBTrACS 1980 年后子集上与 GEOS 及事件扫描在 1,476,290 个过渡区对上一致；支持契约局部化、安全论证与所测片段的轨迹对等。

## 正文

论文编号：arXiv:2608.02630v1（更新类型：new）。以下为摘要全文翻译。

知识图谱工程往往把已接受状态、观测、约束、过程与假设场景分布在工件之间，其组合执行契约保持外部。我们提出 PULSE，一种受对象-过程-方法论（Object-Process-Methodology）启发的语言：在一个类型化运行时中局部化四个操作角色及其写入效果。此处，模式表示操作角色，而非模态或道义逻辑。已实现的契约固定证据不覆盖、分支隔离、接地多主体定时器、受守卫状态改变，以及跨时间与空间的声明排名事件排序；外部运行器仍决定证据是否成为权威移动。GeoSPARQL、SOSA 与 SHACL 保持为生成的视图。一个核心演算给出效果限制引理与六项安全属性。Lean 4 检查位置、证据、时钟、监视器、原子性与分支源保留的内核类似物；88 个测试、3,534 项有界检查与 32 个 Lean/Python 运行时内核案例把实现主张限定到已检查的案例。第一作者的标准化组合与独立 Sismic 状态图实现复现了所测试的冷链轨迹。跨 37,440 条生成的时间轨迹，PULSE 匹配一个独立工作流，并区分十个单字段突变体。在完整的 NOAA IBTrACS 1980 年后子集上，它与 GEOS 及一次事件扫描在 1,476,290 个过渡区对上一致，包括 4,800 个采样与 12,831 个时长限定事件。项目特定 GeoSPARQL 探针测量接口覆盖。总体而言，结果支持对所测片段的契约局部化、安全论证与轨迹对等；语言优越性与可用性仍在评估范围之外。

## 关键词

#知识图谱 #契约语言 #时空 #形式验证
