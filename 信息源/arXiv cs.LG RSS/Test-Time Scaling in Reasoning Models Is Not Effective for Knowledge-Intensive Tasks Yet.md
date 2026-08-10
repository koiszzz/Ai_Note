# Test-Time Scaling in Reasoning Models Is Not Effective for Knowledge-Intensive Tasks Yet

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：James Xu Zhao, Bryan Hooi, See-Kiong Ng　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2509.06861)

------

arXiv:2509.06861v3 Announce Type: replace-cross

Abstract: Test-time scaling increases inference-time computation through longer reasoning chains and has shown strong performance gains across many domains. However, frontier models still suffer from factuality hallucinations, raising the question of whether increased computation is effective on closed-book knowledge-intensive tasks. In this work, we evaluate 14 reasoning models under different test-time scaling strategies. Our results challenge its effectiveness: increasing test-time computation does not consistently improve accuracy and often leads to more hallucinations. We find that changes in hallucination rates are largely driven by the model's willingness to answer, as longer reasoning encourages more attempts, many of which are incorrect. We also observe patterns consistent with confirmation bias, where extended reasoning reinforces early incorrect beliefs with fabricated details. Finally, we provide an information-theoretic perspective showing that compute-only test-time scaling, as a post-processing procedure of a fixed model, cannot introduce new information about the ground-truth answer, explaining the limited performance gains. Overall, our findings highlight important limitations of current test-time scaling methods for closed-book knowledge-intensive tasks. Code and data are available at https://github.com/XuZhao0/tts-knowledge
