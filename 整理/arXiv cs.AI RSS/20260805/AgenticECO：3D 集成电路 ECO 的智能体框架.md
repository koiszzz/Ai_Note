---
published: 20260805
title: "AgenticECO：3D 集成电路 ECO 的智能体框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AgenticECO- An Agentic Framework for ECO on 3D Integrated Circuits.md"
source_note: "[[信息源/arXiv cs.AI RSS/AgenticECO- An Agentic Framework for ECO on 3D Integrated Circuits]]"
source_sha256: 5df2a684fed5245ea73eeeb256003c7815989419fdd76679b825d64eaf16704a
original_url: "https://arxiv.org/abs/2608.03738"
processed: 2026-08-06
language: zh-CN

---

# AgenticECO：3D 集成电路 ECO 的智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shuo Ren, Yaohui Han, Libo Shen, Zhiqiang Jia, Rongliang Fu, Bei Yu, Tsung-Yi Ho
> - 发布时间：20260805
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03738)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AgenticECO- An Agentic Framework for ECO on 3D Integrated Circuits|查看原始文件]]

## 摘要

- 随着摩尔定律放缓，行业转向三维集成；在合并的 3D-IC 流程中，布线设计暴露无 2D 类比的金线键合级缺陷，布线后工程变更单（ECO）仍为手动、依赖专业知识的劳动。
- 本文提出 AgenticECO，一个用于开源 TaiWei 流程上 3D-IC ECO 的证据门控工具使用智能体工作流，配合 EcoRoute（最小扰动 ECO 布线层），驱动未修改的固定布线器使修复可归因于其编辑。
- 在相同预算下九个匹配自然缺陷案例中，AgenticECO 清理七例对比全重布线和库存修复的两例，平均扰动 0.66%，零时钟网络触及；受控研究显示修复动作在保留下必要、占用感知选择获得合法落点而非修复成功。

## 正文

随着摩尔定律放缓，行业转向三维集成；然而在合并的 3D-IC 流程中，布线设计暴露无 2D 类比的金线键合级缺陷，布线后工程变更单（ECO）仍为手动、依赖专业知识的劳动。更糟的是，标准「编辑后全重布线」实践将修复与布线器抖动纠缠，签名数字无法归因于引发它的编辑。我们提出 AgenticECO，一个用于开源 TaiWei 流程上 3D-IC ECO 的证据门控工具使用智能体工作流，配合 EcoRoute——一个最小扰动 ECO 布线层——驱动未修改的固定布线器，使修复可归因于其编辑。在相同预算下九个匹配自然缺陷案例中，AgenticECO 清理七例对比全重布线和库存修复的两例，清理案例平均扰动 0.66%，零时钟网络触及，且在同一密封契约下跨骨干重跑清理全部九例。受控研究表明，修复动作在保留下是必要的，占用感知选择获得合法落点而非修复成功，且在收紧时钟下最小扰动翻转接受与拒绝。三个预注册视觉研究将像素仪器的边缘定位到有争议的落点，预注册盲诊断精确恢复每个保留的注入缺陷，是唯一零错误编辑的臂。每个接受结果通过布线、全新提取、最大/最小时序、DRC 和结构等价门。代码、环境和每集审计工件作为补充材料发布。

## 关键词

#3D集成电路 #ECO #智能体 #EDA #arXiv