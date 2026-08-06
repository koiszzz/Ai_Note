# Hi-TTRL: Regulating Consensus with Hints for Test-Time Reinforcement Learning

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Kunbin Xu, Xingzuo Li, Xuefeng Bai, Kehai Chen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03545)

------

arXiv:2608.03545v2 Announce Type: replace

Abstract: Test-time reinforcement learning (TTRL) improves the reasoning capabilities of large language models without labeled data by updating the policy with pseudo-labels constructed through majority voting. While effective, the reward signal assigned from majority voting is highly sensitive to consensus strength, defined as the frequency of the most common answer within a rollout group. In TTRL, consensus strength plays a dual role: it reflects both the reliability of the pseudo-label and the distribution of advantages. Low consensus can amplify updates from unreliable pseudo-labels through disproportionately large advantages, whereas high consensus reduces reward contrast and ultimately yields vanishing gradients. In this paper, we introduce Hi-TTRL, a test-time reinforcement learning framework that utilizes hints during sampling to regulate rollout consensus strength. Hi-TTRL first estimates consensus strength from a partial rollout group. When the consensus strength falls outside a target interval, it invokes a Markov chain Monte Carlo (MCMC) hint sampler. The sampler targets the power-transformed prefix distribution and uses finite-step approximate sampling to generate rollout prefixes as hints. By tuning the power exponent, Hi-TTRL generates hints with a sharpened or flattened power target, steering rollout consensus strength toward the target interval. Experiments on multiple datasets and backbones show that Hi-TTRL consistently improves over standard TTRL, with ablations and consensus-steering analyses validating the effectiveness of adaptive hint-guided consensus regulation.
