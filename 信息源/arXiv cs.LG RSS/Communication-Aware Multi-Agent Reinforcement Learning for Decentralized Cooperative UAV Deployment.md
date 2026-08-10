# Communication-Aware Multi-Agent Reinforcement Learning for Decentralized Cooperative UAV Deployment

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Enguang Fan, Yifan Chen, Zihan Shan, Klara Nahrstedt, Matthew Caesar, Jae Kim　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.MA　|　原文：[打开链接](https://arxiv.org/abs/2603.16141)

------

arXiv:2603.16141v2 Announce Type: replace-cross

Abstract: Autonomous Unmanned Aerial Vehicle (UAV) swarms are increasingly used as rapidly deployable aerial relays and sensing platforms, yet practical deployments must operate under partial observability and intermittent peer-to-peer connectivity. We present a graph-based multi-agent reinforcement learning framework trained under centralized training with decentralized execution (CTDE): a centralized critic and global state are available only during training, while each UAV executes a shared policy using local observations and messages from nearby neighbors. Under restricted communication, neighbor relations are induced by an SNR-threshold connectivity graph. Our architecture encodes local agent state and nearby entities with an agent-entity attention module and aggregates inter-UAV messages with neighbor self-attention over a signal-quality-limited communication graph defined by a channel model. We evaluate the framework on a cooperative relay-deployment task, DroneConnect. Experimental results show that the proposed method achieves an approximately 12% increase in target coverage over MAPPO under restricted communication and partial observability, while remaining competitive with a mixed-integer linear programming (MILP)-based offline upper bound with full node observability.
