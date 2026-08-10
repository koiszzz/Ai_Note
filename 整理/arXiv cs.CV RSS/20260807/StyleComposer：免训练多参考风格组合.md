---
published: 2026-08-07
title: "StyleComposer：免训练多参考风格组合"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/StyleComposer- Training-Free Multi-Reference Style Composition.md"
source_note: "[[信息源/arXiv cs.CV RSS/StyleComposer- Training-Free Multi-Reference Style Composition]]"
source_sha256: d1c1b254646c61c000c9e3f038302b67d8834fae47a866f76c7c688703d48994
original_url: "https://arxiv.org/abs/2608.05213"
processed: 2026-08-07
language: zh-CN
---

# StyleComposer：免训练多参考风格组合

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Sanghyeok Lee, Jihye Kang, Namhyuk Ahn
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05213)

## 摘要

- 画作风格并非单一整体：颜色、纹理与结构可来自不同来源；现有参考引导方法将它们作为单一风格信号迁移，使每个属性的来源与强度超出用户控制。
- 研究询问扩散模型中某属性可在其他属性保持时改变的位置，发现没有单一表征能隔离全部三者。
- 所提 StyleComposer 因此将每个风格属性经其分离最佳的表征路由，并在去噪时间上协调各路由。
- 无需训练或反演，它比先前方法更紧密地联合满足三个参考与提示，并为每个属性暴露一个强度滑块；项目页：https://lexxsh.github.io/StyleComposer。

## 正文

画作的风格并非单一整体：颜色、纹理与结构可能来自不同来源。现有参考引导方法将它们作为一个风格信号迁移，使每个属性的来源与强度超出用户控制。研究询问在扩散模型中一个属性能在其他属性保持时改变的位置，并发现没有单一表征能隔离全部三者。因此，所提 StyleComposer 将每个风格属性路由到它分离最佳的表征，并在去噪时间上协调这些路由。无需训练或反演，它比先前方法更紧密地联合满足三个参考与提示，并为每个属性暴露一个强度滑块。项目页：https://lexxsh.github.io/StyleComposer。

## 关键词

风格组合、多参考、扩散模型、免训练、可控生成
