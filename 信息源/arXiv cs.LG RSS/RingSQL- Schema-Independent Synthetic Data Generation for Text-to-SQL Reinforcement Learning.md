# RingSQL: Schema-Independent Synthetic Data Generation for Text-to-SQL Reinforcement Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Marko Sterbentz, Kevin Cushing, Cameron Barrie, Kristian J. Hammond　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2601.05451)

------

arXiv:2601.05451v2 Announce Type: replace

Abstract: Recent advances in text-to-SQL have been driven by larger models, better datasets, and new training methods like RLVR. However, progress remains limited by scarce high-quality training data, a problem RLVR is especially sensitive to since noisy data can produce spurious rewards. Manual data creation is expensive, and existing synthetic methods trade off reliability for scalability: template-based approaches guarantee correct SQL but need schema-specific templates and lack diversity, while LLM-based generation scales easily but lacks quality guarantees. We introduce RingSQL, a hybrid framework for generating question-SQL pairs that combines schema-independent query templates with LLM-based paraphrasing of natural language questions. By grounding question generation in complete template questions, RingSQL preserves question-query correctness across all levels of query complexity, a property purely LLM-based methods fail to maintain. RingSQL also produces the only synthetic dataset that improves RLVR training performance across all tested model architectures and benchmarks, achieving 69.8% average accuracy and surpassing both the next-best synthetic dataset by 2.1% and human-annotated data from Spider and BIRD. Code and data are available at https://github.com/nu-c3lab/RingSQL.
