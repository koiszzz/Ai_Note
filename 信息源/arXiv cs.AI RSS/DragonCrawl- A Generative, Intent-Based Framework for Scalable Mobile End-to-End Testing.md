# DragonCrawl: A Generative, Intent-Based Framework for Scalable Mobile End-to-End Testing

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Sowjanya Puligadda, Mengdie Zhang, Ali Zamani, Dhruva Dixith Kurra, Eric Chen, Juan Marcano　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2607.28750)

------

arXiv:2607.28750v2 Announce Type: replace-cross

Abstract: As mobile applications grow in complexity, traditional End-to-End (E2E) testing frameworks struggle with UI volatility, maintenance overhead, and cross-platform scalability. This paper presents DragonCrawl, an AI-driven mobile testing system for continuous regression testing that has evolved from embedding-based similarity matching to generative intent-based reasoning using large language models. Unlike prior LLM-based testing research focused on exploratory testing and crash detection, DragonCrawl validates specific user flows on every code change, blocking commits that break critical functionality. By leveraging GPT-4o's multimodal capabilities, DragonCrawl achieves 91.6% pass rate on iOS and 92.2% on Android across 1,013 automated tests running continuously in CI/CD pipelines. The system reduces test onboarding time from 96-120 hours to under 4 hours and has saved an estimated 27 developer years in test maintenance effort. We present the architectural evolution from V1 (semantic embedding matching) to V2 (generative intent-based reasoning), discuss implementation challenges including token explosion and memory constraints, and report operational experience from production deployment. The integration of multimodal vision for end-state detection and tool calling for backend state transitions enables comprehensive regression testing that bridges UI interactions with system state. Our results demonstrate that AI-driven testing can maintain stability while eliminating the brittleness of traditional automated tests, enabling continuous quality assurance at scale.
