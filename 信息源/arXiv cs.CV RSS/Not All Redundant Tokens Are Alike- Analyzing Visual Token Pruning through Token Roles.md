# Not All Redundant Tokens Are Alike: Analyzing Visual Token Pruning through Token Roles

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Hyeonyu Kim, Sehwan Lim, Youngwon Choi, Taeyoun Kwon, Jaejin Kim　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04483)

------

arXiv:2608.04483v1 Announce Type: new

Abstract: Vision-language models (VLMs) process an image as a sequence of visual tokens, which creates a substantial computational bottleneck during inference. Recent visual token pruning methods address this issue by removing seemingly redundant tokens, yet it remains unclear how these pruning decisions relate to the functional roles of visual tokens. In this work, we analyze visual token pruning through the lens of token roles identified by EmbedLens. We first show that representative pruning methods exhibit distinct token-role biases, but these biases do not directly correlate with downstream performance. To better understand this behavior, we refine the token-role assignment procedure and evaluate role-protected pruning variants. Our results show that preserving non-alive tokens can sometimes maintain or improve performance, suggesting that tokens with weak direct semantic alignment may still affect model behavior under pruning. Our code is publicly available at https://github.com/jaykim9870/Not_All_Redundant_Tokens_Are_Alike.
