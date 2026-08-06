# Pun Intended: Multi-Agent Translation of Wordplay with Contrastive Learning and Phonetic-Semantic Embeddings

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Russell Taylor, Benjamin Herbert, Michael Sana　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04311)

------

arXiv:2608.04311v1 Announce Type: new

Abstract: Translating wordplay across languages has long challenged both professional translators and machine translation systems. We investigate three approaches to translating puns from English to French by combining large language models with linguistic constraints for wordplay generation. Our baseline uses a large language model with feedback from a discriminator prompted with positive and negative French examples. Our guided reasoning pipeline uses combined phonetic-semantic embeddings to retrieve lexical candidates for wordplay generation. Finally, our multi-agent framework iteratively evaluates and regenerates candidate translations using specialized feedback. Moving beyond literal translation, our objective is to preserve the linguistic creativity, ambiguity, and humor of the source-text wordplay rather than simply reproduce its vocabulary. The multi-agent and guided chain-of-thought systems ranked first and second, respectively, in the CLEF JOKER 2025 Task 2 competition under expert human evaluation, despite only modest improvements in BLEU and BERTScore. These findings suggest that both explicit phonetic-semantic guidance and iterative multi-agent evaluation can improve LLM-based wordplay translation relative to direct discriminator-guided generation, particularly when balancing semantic fidelity, phonetic similarity, and natural target-language expression
