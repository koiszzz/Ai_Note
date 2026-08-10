---
published: 2026-08-07
title: "PRISM：面向可控无配对图像翻译的分布门控流匹配"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PRISM- Distribution-Gated Flow Matching for Controllable Unpaired Image Translation.md"
source_note: "[[信息源/arXiv cs.AI RSS/PRISM- Distribution-Gated Flow Matching for Controllable Unpaired Image Translation]]"
source_sha256: 31282409010ff96019863ad4588024e7c9e626a8d11b56e4577022cca7f5dbe3
original_url: "https://arxiv.org/abs/2608.06240"
processed: 2026-08-07
language: zh-CN
---

# PRISM：面向可控无配对图像翻译的分布门控流匹配

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Elad Yoshai, Natan T. Shaked
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06240)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PRISM- Distribution-Gated Flow Matching for Controllable Unpaired Image Translation|查看原始文件]]

## 摘要

- 无配对图像到图像翻译必须逐图决定改变什么、保留什么，而无配对监督；许多基于扩散的无配对翻译器通过跨图像应用的单一全局噪声或引导值控制保留，无法分离要保留的内容与要改变的外观。
- 呈现 PRISM：无 GAN 流匹配框架，用学习的逐特征门替换全局控制——门的空间先验源自每个源特征到目标特征分布的标准距离，远离目标的特征被释放，目标一致特征被保留；同一门同时控制初始化（混合真实源潜在与任务匹配损坏）与常微分方程（ODE）集成期间的传输时序。
- 损坏与任务匹配：内容锚定（AdaIN）用于结构保留翻译、部分锚定用于结构改变翻译；门可在推理时从文本或检测器局部覆盖而无需重训，保留原图重要结构同时仍生成现实结果。
- 在五个自然与生物医学基准（AFHQ cat→dog、CelebA-HQ 外观翻译、day→night 重光照、虚拟染色、乳腺冰冻→永久组织病理）上评估：共享同分割协议的被评估方法中，PRISM 在四个基准上取得最佳 Inception FID 与 KID，第五个上具竞争力；组织病理上产生最接近理想的细胞核计数比，支持目标现实性与结构保留之间的有利平衡。

## 正文

无配对图像到图像翻译必须逐图决定改变什么、保留什么，而无配对监督。许多基于扩散的无配对翻译器通过跨图像应用的单一全局噪声或引导值控制保留，无法分离要保留的内容与要改变的外观。我们呈现 PRISM，一个无 GAN 的流匹配框架，用学习的逐特征门替换这种全局控制。门的空间先验源自每个源特征到目标特征分布的标准距离，因此远离目标的特征被释放，而目标一致的特征被保留。同一门控制初始化（将真实源潜在与任务匹配的损坏混合）与常微分方程（ODE）集成期间的传输时序。损坏与任务匹配，内容锚定（AdaIN）用于结构保留翻译、部分锚定用于结构改变翻译，且门可在推理时从文本或检测器局部覆盖而无需重训，保留原图重要结构同时仍生成现实结果。我们在五个自然与生物医学基准（AFHQ cat→dog、CelebA-HQ 外观翻译、day→night 重光照、虚拟染色与乳腺冰冻→永久组织病理）上评估 PRISM。在共享同分割协议的被评估方法中，PRISM 在四个基准上取得最佳 Inception FID 与 KID，第五个上取得竞争结果，并在组织病理上产生最接近理想的细胞核计数比，支持目标现实性与结构保留之间的有利平衡。

## 关键词

#无配对翻译 #流匹配 #分布门控 #图像翻译
