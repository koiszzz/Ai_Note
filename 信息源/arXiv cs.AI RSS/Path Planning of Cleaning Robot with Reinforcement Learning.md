# Path Planning of Cleaning Robot with Reinforcement Learning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Woohyeon Moon, Bumgeun Park, Sarvar Hussain Nengroo, Taeyoung Kim, Dongsoo Har　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2208.08211)

------

arXiv:2208.08211v2 Announce Type: replace-cross

Abstract: Recently, as the demand for cleaning robots has steadily increased, therefore household electricity consumption is also increasing. To solve this electricity consumption issue, the problem of efficient path planning for cleaning robot has become important and many studies have been conducted. However, most of them are about moving along a simple path segment, not about the whole path to clean all places. As the emerging deep learning technique, reinforcement learning (RL) has been adopted for cleaning robot. However, the models for RL operate only in a specific cleaning environment, not the various cleaning environment. The problem is that the models have to retrain whenever the cleaning environment changes. To solve this problem, the proximal policy optimization (PPO) algorithm is combined with an efficient path planning that operates in various cleaning environments, using transfer learning (TL), detection nearest cleaned tile, reward shaping, and making elite set methods. The proposed method is validated with an ablation study and comparison with conventional methods such as random and zigzag. The experimental results demonstrate that the proposed method achieves improved training performance and increased convergence speed over the original PPO. And it also demonstrates that this proposed method is better performance than conventional methods (random, zigzag).
