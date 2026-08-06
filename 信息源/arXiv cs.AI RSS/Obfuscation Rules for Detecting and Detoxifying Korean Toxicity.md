# Obfuscation Rules for Detecting and Detoxifying Korean Toxicity

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yejin Lee, Su-Hyeon Kim, Hyundong Jin, Dayoung Kim, Yeonsoo Kim, Yo-Sub Han　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2510.10961)

------

arXiv:2510.10961v4 Announce Type: replace-cross

Abstract: As language models become increasingly deployed in online environments, toxicity detection and detoxification have received growing attention. Existing studies primarily focus on non-obfuscated text, which limits robustness when users intentionally disguise toxic expressions. In particular, Korean toxic expressions can be easily disguised through agglutinative morphology and Hangeul-specific orthographic variation. However, obfuscation in Korean remains largely unexplored, which motivates us to introduce a KOTOX: Korean toxic dataset for deobfuscation and detoxification. We categorize Korean obfuscation patterns into linguistically grounded classes, define transformation rules derived from real-world examples, and provide the resulting obfuscation framework as an open transformation package. Using these rules, we provide paired neutral and toxic sentences alongside their obfuscated counterparts. Models trained on our dataset better handle obfuscated text without sacrificing performance on non-obfuscated text. This is the first dataset that simultaneously supports deobfuscation and detoxification for the Korean language. We expect the dataset to facilitate better understanding and mitigation of obfuscated toxic content in LLM for Korean. Our code and data are available at https://github.com/leeyejin1231/KOTOX.
