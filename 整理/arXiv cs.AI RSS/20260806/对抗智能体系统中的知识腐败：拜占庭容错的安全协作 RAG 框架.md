---
published: 20260806
title: "对抗智能体系统中的知识腐败：拜占庭容错的安全协作 RAG 框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Combating Knowledge Corruption in Agent Systems- A Byzantine-Tolerant Secure Collaborative RAG Frame.md"
source_note: "[[信息源/arXiv cs.AI RSS/Combating Knowledge Corruption in Agent Systems- A Byzantine-Tolerant Secure Collaborative RAG Frame]]"
source_sha256: ee541c4c4bbad5230e5957f795cb78198a81c4088daddc462425254a39210916
original_url: "https://arxiv.org/abs/2608.04366"
processed: 2026-08-06
language: zh-CN

---

# 对抗智能体系统中的知识腐败：拜占庭容错的安全协作 RAG 框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhaoqi Wang, Daqing He, Zijian Zhang, Ye Liu, Jiamou Liu, Zhirui Zeng, Zhan Qin, Zhen Li, Xin Li, Hongwei Yao, Jincheng An, Yong Liu, Yi Li, Qi Sun, Xiulei Liu, Liehuang Zhu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04366)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Combating Knowledge Corruption in Agent Systems- A Byzantine-Tolerant Secure Collaborative RAG Frame|查看原始文件]]

## 摘要

- 检索增强生成系统部分解决大语言模型的幻觉问题，但也引入知识腐败攻击的新漏洞：对手利用 RAG 系统提供的文档投毒操纵 LLM 输出。
- 本文提出 SecureCollaRAG，一个利用多源知识验证机制的拜占庭容错协作 RAG 框架：使智能体系统能通过基于动态 GNN 的可信度评分安全验证文档来源，有效防止隐蔽知识腐败攻击，同时保持基本领域知识完整性。
- 通过广泛评估和形式分析，展示 SecureCollaRAG 在非 IID 数据分布下对攻击者保持鲁棒性。

## 正文

虽然检索增强生成系统部分解决大语言模型的幻觉问题，它也引入知识腐败攻击的新漏洞。对手利用这些漏洞，通过投毒 RAG 系统提供的文档操纵 LLM 输出。为应对此威胁，我们提出 SecureCollaRAG，一个利用多源知识验证机制（Multi-source Knowledge Validation Mechanism）的拜占庭容错协作 RAG 框架。我们的方法使智能体系统能通过基于动态 GNN 的可信度评分安全验证文档来源，有效防止隐蔽知识腐败攻击，同时保持基本领域知识完整性。通过广泛评估和形式分析，我们证明 SecureCollaRAG 在非 IID 数据分布下对攻击者保持鲁棒性。

## 关键词

#RAG #知识腐败 #拜占庭容错 #安全 #arXiv