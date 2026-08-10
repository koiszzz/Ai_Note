---
published: 2026-08-07
title: "MirrorNet：医学图像匿名化真的能保护患者身份吗？"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MirrorNet- Can Medical Image Anonymization Really Protect Patient Identity-.md"
source_note: "[[信息源/arXiv cs.LG RSS/MirrorNet- Can Medical Image Anonymization Really Protect Patient Identity-]]"
source_sha256: 5fb6cd9b6c4fcc107591d459332a2554bf53b7e2085bac0642930f03e0a0fcb4
original_url: "https://arxiv.org/abs/2608.05938"
processed: 2026-08-07
language: zh-CN
---

# MirrorNet：医学图像匿名化真的能保护患者身份吗？

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Attila Simkó
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05938)

## 摘要

- 医学图像常规去标识化（移除姓名、日期与其他元数据）后共享用于研究、教学与公开基准，假设使其匿名；此类去标识化保护元数据而非像素，除直接含面部结构的扫描外，图像内容本身是否识别患者鲜受审视。
- 通过学习横截面医学图像与非医学、患者识别图像之间的循环一致对应（用一对耦合、循环一致的变分自编码器）研究该问题。
- 从保留扫描中，模型恢复患者可辨认的相似肖像（身份区域 MAE=0.163）；反之，从此类图像合成扫描。
- 结果表明去标识化医学扫描仍是可识别的——实际上它是患者的"照片"——影像数据应作为生物特征数据处理而非可匿名化记录；代码与模型公开。

## 正文

医学图像通常被去标识化——移除姓名、日期与其他元数据——然后在假设其匿名的情况下共享用于研究、教学与公开基准。此类去标识化保护的是元数据而非像素，而且——除了直接包含面部结构的扫描——图像内容本身是否识别患者鲜受审视。研究通过学习横截面医学图像与非医学、患者识别图像之间的循环一致对应来考察该问题，使用一对耦合、循环一致的变分自编码器。从保留的扫描中，模型恢复患者可辨认的相似肖像（身份区域 MAE=0.163）；反之，它从此类图像合成扫描。这些结果表明，去标识化的医学扫描仍是可识别的——它实际上是患者的"照片"——影像数据应作为生物特征数据处理，而非可匿名化的记录。为支持可复现性，代码与训练模型共享于 https://github.com/attilasimko/public-repository。

## 关键词

医学图像、去标识化、患者身份、变分自编码器、生物特征
