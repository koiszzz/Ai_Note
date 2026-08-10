---
published: 2026-08-07
title: "PRISM：可控非配对图像翻译的分布门控流匹配"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/PRISM- Distribution-Gated Flow Matching for Controllable Unpaired Image Translation.md"
source_note: "[[信息源/arXiv cs.CV RSS/PRISM- Distribution-Gated Flow Matching for Controllable Unpaired Image Translation]]"
source_sha256: dd2fcb41b18f8ebd53ab1926facfbc94361f63b670b4f945ce5247f107596832
original_url: "https://arxiv.org/abs/2608.06240"
processed: 2026-08-07
language: zh-CN
---

# PRISM：可控非配对图像翻译的分布门控流匹配

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Elad Yoshai, Natan T. Shaked
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06240)

## 摘要

- 非配对图像到图像翻译必须在无配对监督下逐图像决定改什么与保留什么；许多基于扩散的非配对翻译器通过跨图像应用的单一全局噪声或引导值控制保留，无法分离要保留的内容与要改变的外观。
- 呈现 PRISM：无 GAN 流匹配框架，用学习逐特征门替换该全局控制；门的空间先验派生自每个源特征到目标特征分布的标准化距离：远离目标分布的特征被释放，目标一致特征被保留。
- 同一门控制初始化（混合真实源潜变量与任务匹配损坏）与 ODE 积分期间的传输时机；损坏与任务匹配：内容锚定（AdaIN）用于保结构翻译，部分锚定用于结构变化翻译；门可在推理时从文本或检测器局部覆盖而无需重训练，保留原图重要结构同时生成真实结果。
- AFHQ cat→dog、CelebA-HQ 外观翻译、day→night 重光照、虚拟染色与乳腺冷冻→永久组织病理五个自然与生物医学基准评估：共享同分割协议下在四个基准取得最佳 Inception FID 与 KID、第五个竞争结果；组织病理上核计数比最接近理想，支持目标真实感与结构保留的有利平衡。

## 正文

非配对图像到图像翻译必须在没有配对监督的情况下，逐图像决定改变什么与保留什么。许多基于扩散的非配对翻译器通过跨图像应用的单一全局噪声或引导值控制保留，这无法分离要保留的内容与要改变的外观。研究呈现 PRISM，一个无 GAN 的流匹配框架：用学习到的逐特征门替换该全局控制。门的空间先验派生自每个源特征到目标特征分布的标准化距离，因此远离目标分布的特征被释放，而目标一致的特征被保留。同一门控制初始化（将真实源潜变量与任务匹配的损坏混合）以及 ODE 积分期间的传输时机。损坏与任务匹配：内容锚定（AdaIN）用于保结构翻译，部分锚定用于结构变化翻译；门可在推理时从文本或检测器局部覆盖而无需重训练，保留原始图像的重要结构，同时仍生成真实结果。研究在 AFHQ cat→dog、CelebA-HQ 外观翻译、day→night 重光照、虚拟染色与乳腺冷冻→永久组织病理五个自然与生物医学基准上评估 PRISM。在共享同分割协议下，PRISM 在四个基准上取得最佳 Inception FID 与 KID，第五个上竞争；组织病理上产生最接近理想的核计数比，支持目标真实感与结构保留之间的有利平衡。

## 关键词

非配对翻译、流匹配、门控、分布、图像翻译
