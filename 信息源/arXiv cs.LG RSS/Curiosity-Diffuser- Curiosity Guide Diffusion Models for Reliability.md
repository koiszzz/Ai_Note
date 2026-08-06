# Curiosity-Diffuser: Curiosity Guide Diffusion Models for Reliability

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zihao Liu, Xing Liu, Yuhang Dong, Haitao Chang, Zhengxiong Liu, Panfeng Huang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2503.14833)

------

arXiv:2503.14833v2 Announce Type: replace-cross

Abstract: One of the bottlenecks in robotic intelligence is the instability of neural network models. This leads to risks when applying intelligence in the physical world. Specifically, imitation policy based on neural network may generate hallucinations, leading to inaccurate behaviors that impact the safety of real-world applications. To address this issue, this paper proposes the Curiosity-Diffuser, aimed at guiding the conditional diffusion model to generate trajectories with lower curiosity, thereby improving the reliability of policy. The core idea is to use a Random Network Distillation (RND) curiosity module to assess whether the model's behavior aligns with the training data, and then minimize curiosity by classifier guidance diffusion to reduce overgeneralization during inference. Additionally, we propose a computationally efficient metric for evaluating the reliability of the policy, measuring the similarity between the generated behaviors and the training dataset, to facilitate research about reliability learning. Finally, simulations and real-world experiments verify the effectiveness and applicability of the proposed method to a variety of scenarios, showing that Curiosity-Diffuser significantly improves task performance and produces behaviors that are more similar to the training data. The code for this work is available at: github.com/CarlDegio/Curiosity-Diffuser
