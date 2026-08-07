---
published: 20260806
title: "PURPOSE：通过代理事实接地更新实现 RAG 冲突解决的投毒"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PURPOSE- Poisoning Conflict Resolution in RAG via Proxy-Fact-Grounded Updates.md"
source_note: "[[信息源/arXiv cs.AI RSS/PURPOSE- Poisoning Conflict Resolution in RAG via Proxy-Fact-Grounded Updates]]"
source_sha256: cdeeec3a5307bce98578d76bded679a9c95bdb36405cf59f99fd66e9257c26ac
original_url: "https://arxiv.org/abs/2608.04756"
processed: 2026-08-06
language: zh-CN

---

# PURPOSE：通过代理事实接地更新实现 RAG 冲突解决的投毒

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zijian Wang, Yubo Zhu, Muzhi Dong, Yanjun Lou, Yisheng Li, ZiLiang Zhang, Wei Tong, Yuan Zhang, Jingyu Hua, Sheng Zhong
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04756)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PURPOSE- Poisoning Conflict Resolution in RAG via Proxy-Fact-Grounded Updates|查看原始文件]]

## 摘要

- 检索增强生成（RAG）中，检索后冲突解决在噪声或矛盾检索段落间仲裁；但此保障对知识投毒的鲁棒性未充分研究。现有黑盒投毒方法都正面断言目标答案，与解决器视为已定案的内容正面矛盾——正是这些方法构建检测的信号。
- 本文提出 PURPOSE，一个严格黑盒投毒攻击，将注入重构为最小化冲突的更新而非反诉：提取查询相关事实近似解决器的可能参考，将枢轴事件接地在其中，使注入与解决器可能验证的内容一致，同时将生成器引向目标答案。
- 三个 QA 基准、五个生成器和三种冲突解决方法中，PURPOSE 在 45 个设置中的 35 个达最高攻击成功率（ASR），超最强先前攻击平均 +9.7 ASR 点；结果证明投毒方法对 RAG 冲突解决有效，识别非矛盾注入作为增强投毒攻击的实用模式。

## 正文

检索增强生成（RAG）中，检索后冲突解决在噪声或矛盾的检索段落间仲裁。然而，此保障对知识投毒的鲁棒性未充分研究。现有黑盒投毒方法都正面断言目标答案，与解决器视为已定案的内容正面矛盾——正是这些方法构建检测的信号。我们提出 PURPOSE，一个严格黑盒投毒攻击，将注入重构为最小化冲突的更新而非反诉。PURPOSE 提取查询相关事实近似解决器的可能参考，然后将枢轴事件接地在其中，使注入与解决器可能验证的内容一致，同时将生成器引向目标答案。跨三个 QA 基准、五个生成器和三种冲突解决方法，PURPOSE 在 45 个设置中的 35 个达最高攻击成功率（ASR），并超最强先前攻击平均 +9.7 ASR 点。这些结果表明，我们的投毒方法对 RAG 冲突解决有效，并识别非矛盾注入作为增强投毒攻击的实用模式。

## 关键词

#RAG #投毒攻击 #冲突解决 #安全 #arXiv