---
published: 2026-08-07
title: "Robust-WAM：桥接世界动作模型中的生成式预训练与语义前瞻"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Robust-WAM- Bridging Generative Pretraining and Semantic Foresight in World-Action Models.md"
source_note: "[[信息源/arXiv cs.CV RSS/Robust-WAM- Bridging Generative Pretraining and Semantic Foresight in World-Action Models]]"
source_sha256: 7455d7e7ab57950689d7fae543c29bac1e350d067d00e9da99620359e95b0def
original_url: "https://arxiv.org/abs/2608.05903"
processed: 2026-08-07
language: zh-CN
---

# Robust-WAM：桥接世界动作模型中的生成式预训练与语义前瞻

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Haodong Yan, Junfeng Li, Junjie He, Zhide Zhong, MingMing Yu, Wenxuan Song, Jiaguan Zhu, Yangyang Zheng, Yuqiao Du, Jiadi You, Yingjie Cai, Xu Yan, Guanyi Zhao, Bingbing Liu, Haoang Li
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05903)

## 摘要

- 主流世界动作模型（WAMs）适配预训练视频生成模型（VGMs）用于机器人控制，迁移其学习动力学先验进行动作预测；VGMs 通常在变分自编码器（VAE）潜空间训练。
- VAE 潜空间为像素重建优化，奖励精细外观细节，使动作预测在视觉漂移下脆弱；近期工作构建语义潜空间 WAM，对外观漂移更稳健，但无法利用仅存在于 VAE 空间的大规模 VGM 预训练。
- 提出 Robust-WAM：基于视频生成的 WAM 通用训练后方法，保留 VAE 基生成路径并在动作流上添加轻量语义前瞻对齐目标；保留大规模 VGM 预训练，同时将动作锚定于光照漂移与其他视觉分布外条件下保持可靠的外观不变动力学。
- 用可学习查询 token 将未来场景语义带入动作流：对齐其输出隐藏状态与未来真值帧的语义前瞻；为建立每个查询与其描述未来步的时间对应，赋予匹配动作 token 的位置编码；分布外泛化仿真基准与真实机器人装置实验显示 Robust-WAM 一致改进多个 WAM 基线成功率，不牺牲分布内性能。

## 正文

主流世界动作模型（World-Action Models, WAMs）适配预训练视频生成模型（video generation models, VGMs）用于机器人控制，迁移其学习的动力学先验进行动作预测。这些 VGM 通常在变分自编码器（VAE）潜空间中训练。然而，VAE 潜空间为像素重建而优化，这奖励精细的外观细节，并使动作预测在视觉漂移下脆弱。近期工作构建语义潜空间中的 WAM，它们对外观漂移更稳健，但这些模型无法利用仅存在于 VAE 空间的大规模 VGM 预训练。为克服该两难，研究提出 Robust-WAM，一种用于基于视频生成的 WAM 的通用训练后方法：保留基于 VAE 的生成路径，并在动作流上添加一个轻量语义前瞻对齐（semantic foresight alignment）目标。这保留了大规模 VGM 预训练，同时将动作锚定于在光照漂移与其他视觉分布外条件下保持可靠的外观不变动力学。具体地，研究使用可学习的查询 token 将未来场景语义带入动作流：通过将其输出隐藏状态与未来真值帧的语义前瞻对齐。为建立每个查询与其描述的每个未来步之间的时间对应，研究赋予它与匹配动作 token 相同的位置编码。在分布外泛化仿真基准与真实机器人装置上的实验表明，Robust-WAM 一致改进多个 WAM 基线的成功率，同时不牺牲分布内性能。

## 关键词

世界动作模型、机器人控制、语义前瞻、VAE、分布外
