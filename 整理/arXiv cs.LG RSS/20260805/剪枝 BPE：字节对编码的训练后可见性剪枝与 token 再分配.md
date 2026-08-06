---
published: 2026-08-05
title: "剪枝 BPE：字节对编码的训练后可见性剪枝与 token 再分配"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Pruned BPE- Post-training Visibility Pruning and Token Reallocation for Byte Pair Encoding.md"
source_note: "[[信息源/arXiv cs.LG RSS/Pruned BPE- Post-training Visibility Pruning and Token Reallocation for Byte Pair Encoding.]]"
source_sha256: ab9f5b7bbd79711ceb8ffbf5c9477120db7c2aa4dab6e91d69767251e8594b85
original_url: "https://arxiv.org/abs/2608.00837"
processed: 2026-08-05
language: zh-CN
---

# 剪枝 BPE：字节对编码的训练后可见性剪枝与 token 再分配

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Kenny Shao
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00837)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Pruned BPE- Post-training Visibility Pruning and Token Reallocation for Byte Pair Encoding.|查看原始文件]]

## 摘要

- 字节对编码（BPE）广泛用于子词分词，但标准 BPE 把每个学得的合并 token 都暴露给下游模型，包括主要作为中间构造单元、很少出现在最终编码语料中的 token。
- 提出剪枝 BPE，一个训练后可见性剪枝与 token 再分配方法：把合并构造与模型可见词表选择分离；标准 BPE 训练后按最终暴露度评估 token——低暴露 token 保留为仅内部合并节点，其可见词表槽位重新分配给通过恢复训练学到的更好暴露候选。
- 编码时仅内部 token 被递归展开为可见后代，同时保持原始 BPE 合并顺序。
- 两个不重叠的英语主导与中文主导语料及其组合上的实验显示：在相同训练语料、评估语料与模型可见词表大小下，剪枝 BPE 相对标准 BPE 一致减少编码长度；40% 暴露阈值下，同语料评估约减少 0.27%–0.36%。
- 使用共享精确最小 token 动态规划编码器的仅词表评估中，剪枝 BPE 保持约 0.23%–0.31% 优势，表明改进来自更高效的可见词表；这些收益约占需另加 2K 个标准 BPE token 才能获得的约 1.5%–3.8% 边际减少的有意义部分。
- 定性分析显示仅内部 token 包括可复用英语片段、中文部件、部分 UTF-8 字节序列与结构化文本片段；结果表明训练后可见性剪枝可在不增加暴露给语言模型的词表的情况下提升 BPE 词表效率。

## 正文

论文编号：arXiv:2608.00837v2（更新类型：replace-cross）。以下为摘要全文翻译。

字节对编码（BPE）广泛用于子词分词，但标准 BPE 把每个学得的合并 token 都暴露给下游模型，包括主要作为中间构造单元、很少出现在最终编码语料中的 token。本文提出剪枝 BPE，一个训练后可见性剪枝与 token 再分配方法，把合并构造与模型可见词表选择分离。标准 BPE 训练后，按最终暴露度评估 token。低暴露 token 被保留为仅内部合并节点，而其可见词表槽位被重新分配给通过恢复训练学得的暴露更好的候选。编码期间，仅内部 token 被递归展开为可见后代，同时保持原始 BPE 合并顺序。在两个不重叠的英语主导与中文主导语料及其组合上的实验表明，在相同训练语料、评估语料与模型可见词表大小下，剪枝 BPE 相对标准 BPE 一致减少编码长度。在 40% 暴露阈值下，同语料评估约减少 0.27%–0.36%。在使用共享精确最小 token 动态规划编码器的仅词表评估中，剪枝 BPE 保持约 0.23%–0.31% 的优势，表明改进来自更高效的可见词表。这些收益约占大约 1.5%–3.8% 边际减少的有意义部分——否则需要再添加 2K 个标准 BPE token。定性分析表明，仅内部 token 包括可复用的英语片段、中文部件、部分 UTF-8 字节序列与结构化文本片段。结果表明，训练后的可见性剪枝可以在不增加暴露给语言模型的词表的情况下提高 BPE 词表效率。

## 关键词

#BPE #分词 #词表剪枝 #token再分配 #子词
