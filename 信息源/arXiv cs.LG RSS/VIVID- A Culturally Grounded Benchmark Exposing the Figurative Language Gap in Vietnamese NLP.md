# VIVID: A Culturally Grounded Benchmark Exposing the Figurative Language Gap in Vietnamese NLP

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Tu Tran Do, Nhat Ngoc Nguyen, Khanh-Tung Tran, Hoang D. Nguyen, Tu Minh Phuong, Long Hoang Dang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03095)

------

arXiv:2608.03095v1 Announce Type: cross

Abstract: We present VIVID (Vietnamese Idioms for Validation and Interpretation Depth), the first systematic benchmark for evaluating culturally grounded figurative language understanding in Vietnamese. VIVID comprises 1,636 idioms and proverbs annotated with five complexity traits (literal expressions, pragmatic nuances, Sino-Vietnamese terms, uncommon vocabulary, folk knowledge) and seven semantic themes. We establish an evaluation framework combining generative and discriminative tasks, proposing an LLM-as-a-Judge approach with aspect-based prompting validated against human judgment (Cohen's kappa = 0.792). Evaluating eight state-of-the-art models reveals critical gaps: Vietnamese-specialized models drastically underperform multilingual systems (VinaLLaMA-7B: 0.13 vs. GPT-4o: 2.46), and even top models achieve less than 50% of maximum scores. Notably, few-shot prompting does not universally improve performance, with GPT-4o exhibiting degradation due to stylistic overfitting. Our analysis exposes systematic failures including literal over-interpretation, lexical gaps, and pragmatic flattening, demonstrating that current models lack cultural competence for nuanced figurative interpretation. VIVID provides an essential tool for advancing figurative language understanding in culturally rich contexts.
