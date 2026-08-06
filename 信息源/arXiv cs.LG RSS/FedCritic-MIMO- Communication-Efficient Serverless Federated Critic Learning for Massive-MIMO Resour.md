# FedCritic-MIMO: Communication-Efficient Serverless Federated Critic Learning for Massive-MIMO Resource Control in Open and Disaggregated 6G RANs

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Amin Farajzadeh, Melike Erol-Kantarci　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03852)

------

arXiv:2608.03852v1 Announce Type: new

Abstract: This paper proposes FedCritic-MIMO, a communication-efficient serverless federated multi-agent reinforcement learning framework for AI-native resource control across independently deployable cell-level controllers in open and disaggregated 6G RANs. Controllers share no trainer, retain local actors and personalized critic components, and exchange only compatible shared critic parameters. FedCritic-MIMO targets reuse-$1$ multi-cell massive-MIMO OFDMA deployments, where RAN controllers jointly manage user scheduling, per-stream power allocation, beamforming, interference, and long-term QoS with limited inter-controller signaling. Each base station locally executes its actor without centralized training or actor federation, while critic knowledge is exchanged peer-to-peer over an interference-aware graph. It enables this collaboration through wireless-aware event triggering, adaptive layer-wise top-$k$ sparse critic exchange with error feedback, and balanced interference-aware fusion. We establish conditional finite-time stationarity and consensus guarantees for the balanced, compressed peer-to-peer critic recursion under a fixed-policy, frozen-target critic-regression model. In strongly interference-coupled reuse-$1$ simulations, FedCritic-MIMO achieves the best performance-communication tradeoff among heuristic, independent-learning, centralized-training, and communication-ablation baselines. It achieves the highest held-out throughput, improves user-rate distribution and mean SINR, increases QoS satisfaction, and attains the lowest interference cost per delivered bit among learning baselines. It reduces critic-communication overhead by $76\%$ relative to uncompressed distributed critic exchange. These results demonstrate that serverless exchange of compatible shared critic parameters can coordinate RAN controllers without centralized trajectory collection or parameter-server aggregation.
