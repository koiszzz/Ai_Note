# Combating Knowledge Corruption in Agent Systems: A Byzantine-Tolerant Secure Collaborative RAG Framework

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhaoqi Wang, Daqing He, Zijian Zhang, Ye Liu, Jiamou Liu, Zhirui Zeng, Zhan Qin, Zhen Li, Xin Li, Hongwei Yao, Jincheng An, Yong Liu, Yi Li, Qi Sun, Xiulei Liu, Liehuang Zhu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04366)

------

arXiv:2608.04366v1 Announce Type: cross

Abstract: While retrieval-augmented generation systems partially address the hallucination issues in large language models, it also introduces new vulnerabilities to knowledge corruption attacks. Adversaries exploit these vulnerabilities by poisoning documents provided by RAG system to manipulate LLM outputs. To counter this threat, we propose SecureCollaRAG, a Byzantine-tolerant collaborative RAG framework leveraging Multi-source Knowledge Validation Mechanism. Our approach enables agent system to securely verify document provenance through dynamic GNN-based credibility scoring, effectively preventing stealthy knowledge corruption attacks while preserving essential domain knowledge integrity. Through extensive evaluations and formal analysis, we demonstrate that SecureCollaRAG maintains robustness against attackers under non-IID data distributions.
