---
published: 2026-08-07
title: "HOPE：单目视频的手-物压力估计"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/HOPE- Hand-Object Pressure Estimation from Monocular Videos.md"
source_note: "[[信息源/arXiv cs.CV RSS/HOPE- Hand-Object Pressure Estimation from Monocular Videos]]"
source_sha256: e9bac55e1974709d261e7f70dc44ef46e37ea5d14937bae69960dc56be84f2c8
original_url: "https://arxiv.org/abs/2608.06192"
processed: 2026-08-07
language: zh-CN
---

# HOPE：单目视频的手-物压力估计

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Subin Jeon, Byungjun Kim, Hanbyul Joo
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06192)

## 摘要

- 从视觉估计物理压力对理解接触丰富的手-物交互必不可少；先前基于视觉的压力估计方法大体限于平面表面与单图像输入，难应用于带多样对象的动态手-物交互。
- 将压力估计重构为以单目视频为输入的手中心视频预测问题；该形式化直接在手网格上预测时间演化的逐顶点法向压力与接触，产生独立于对象形状与传感器布局的统一输出空间。
- 提出 HOPE 框架，两个关键组件：将触觉手套压力、平面传感器压力与基于距离的手-物接触标注提升到共享手顶点空间，使裸手接触数据在无度量标签处正则化压力学习；引入顶点锚定视频 transformer：将每个顶点视为持久 token，随时间聚合视觉特征与手姿态，用接触门控压力头强制无接触时压力消失。
- OpenTouch、PressureVisionDB 与手-物接触基准实验验证 HOPE 在对象压力、表面压力与接触监督 HOI 设定；尽管度量压力监督主要来自戴手套手视频，HOPE 泛化到裸手自我中心与野外视频，产生超越仅接触或平面压力基线的联合接触与压力预测。

## 正文

从视觉估计物理压力对理解接触丰富的手-物交互必不可少。然而，先前基于视觉的压力估计方法大体限于平面表面与单图像输入，使其难以应用于带多样对象的动态手-物交互。研究转而将压力估计形式化为一个以单目视频为输入的手中心（hand-centric）视频预测问题。该形式化直接在手网格上预测时间演化的逐顶点法向压力与接触，产生一个独立于对象形状与传感器布局的统一输出空间。基于该形式化，研究提出 HOPE，一个含两个关键组件的框架。第一，研究将触觉手套压力、平面传感器压力与基于距离的手-物接触标注提升到一个共享的手顶点空间，使裸手接触数据能在无度量标签处正则化压力学习。第二，研究引入一个顶点锚定的视频 transformer：将每个顶点视为一个持久 token，随时间聚合视觉特征与手姿态，并使用一个接触门控压力头强制压力在无接触时消失。OpenTouch、PressureVisionDB 与手-物接触基准上的实验验证了 HOPE 在对象压力、表面压力与接触监督 HOI 设定中的表现。尽管度量压力监督主要来自戴手套手的视频，HOPE 仍泛化到裸手自我中心与野外视频，产生超越仅接触或平面压力基线的联合接触与压力预测。

## 关键词

手-物交互、压力估计、接触、视频预测、transformer
