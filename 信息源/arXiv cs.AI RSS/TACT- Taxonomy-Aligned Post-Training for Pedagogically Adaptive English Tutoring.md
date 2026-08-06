# TACT: Taxonomy-Aligned Post-Training for Pedagogically Adaptive English Tutoring

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Dongjie Yang, Siyan Lin, Leixian Shen, Rui Sheng, Huamin Qu, Zixin Chen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03952)

------

arXiv:2608.03952v1 Announce Type: new

Abstract: Large language models (LLMs) are increasingly used to provide conversational practice for English-as-a-second-language (ESL) learners. Effective ESL tutoring, however, requires more than fluent response generation: a tutor must select an appropriate pedagogical action based on learner behavior and dialogue context. Human-tutoring research offers principles for adaptive support, but they are often task-specific and remain insufficiently integrated into LLM-based ESL tutor training and evaluation. We present TACT (Taxonomy-Aligned Conversational Tutor), a human-grounded framework for post-training and evaluating pedagogically adaptive ESL tutors. Drawing on established literature, we develop two complementary taxonomies: the Tutor-Strategy Taxonomy with 13 tutor response strategies and the Student-Move Taxonomy characterizing learner behavior by move type and status. Using these taxonomies, we construct TACTCorpus, which enriches 260 authentic teacher-student conversations with 32,379 annotations and quality-controlled augmented training data. We then post-train Qwen3.5-4B through supervised fine-tuning followed by taxonomy-aligned Group Relative Policy Optimization, producing TACTutor and optimizing it for scaffolding quality rather than reference imitation alone. On TACTBench, a strategy-balanced diagnostic benchmark comprising 78 authentic tutoring contexts, TACTutor improves over its backbone by 20.30% and outperforms all evaluated proprietary baselines under the same protocol, while maintaining backbone performance on established external educational benchmarks; in a blinded study with 50 learners, it also receives the highest overall mean rating among the evaluated tutors. We release the data, benchmark, and model weights, providing an open foundation for developing pedagogically adaptive ESL tutors.
