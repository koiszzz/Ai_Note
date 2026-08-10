# Predicting Social Media User Actions: A Hybrid Approach for Common and Rare Behavior Prediction on Bluesky

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Benjamin White, Anastasia Shimorina　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2511.17241)

------

arXiv:2511.17241v2 Announce Type: replace

Abstract: Understanding and predicting user behavior on social media platforms is crucial for content recommendation and platform design. While existing approaches focus primarily on common actions like retweeting and liking, the prediction of rare but significant behaviors remains largely unexplored. This paper presents a hybrid methodology for social media user behavior prediction that addresses both frequent and infrequent actions across a diverse action vocabulary. We evaluate our approach on a large-scale Bluesky dataset containing 6.4 million conversation threads spanning 12 distinct user actions across 25 persona clusters. Our methodology combines four complementary approaches: (i) a lookup database system based on historical response patterns; (ii) persona-specific LightGBM models with engineered temporal and semantic features for common actions; (iii) a specialized hybrid neural architecture fusing textual and temporal representations for rare action classification; and (iv) generation of text replies. Our persona-specific models achieve an average macro F1-score of 0.64 for common action prediction, while our rare action classifier achieves 0.56 macro F1-score across 10 rare actions. These results demonstrate that effective social media behavior prediction requires tailored modeling strategies recognizing fundamental differences between action types. Our approach achieved first place in the SocialSim: Social-Media Based Personas challenge organized at the Social Simulation with LLMs workshop at the Conference on Language Modeling (COLM 2025).
