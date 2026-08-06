# ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jinhe Bi, Chennan Zhou, Zengjie Jin, Aniri, Shuo Lu, Wenke Huang, Hu Cao, Xun Xiao, Zhihong Zhu, Volker Tresp, Fei Shen, Yunpu Ma, Tat-Seng Chua　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03972)

------

arXiv:2608.03972v1 Announce Type: new

Abstract: On-policy training has emerged as a powerful post-training paradigm for improving the reasoning capabilities of large language models, and is often enhanced by golden trajectories from stronger expert models. However, when the expert fails on harder problems, existing trajectory-guided methods lose their main source of supervision, and these failed trajectories are typically discarded as negative samples. We argue that such failures, which we call Golden Negative Trajectories, can still provide valuable reasoning signals when treated not as demonstrations to imitate, but as flawed trajectories to reflect upon. We identify a Reflection Advantage: for hard problems, reflecting on a flawed trajectory can be easier and more effective than solving the problem directly from scratch. Motivated by this, we propose ReflectRL, a lightweight plug-and-play framework that learns from Golden Negative Trajectories during on-policy training. ReflectRL first uses these trajectories to elicit Reflective Reasoning, then applies Reflective-to-Direct Policy Transition to transfer the acquired reasoning behavior back to Direct Reasoning. Experiments across 9 benchmarks, 4 LLM backbones, and 4 on-policy training methods show that ReflectRL consistently improves reasoning performance with minimal overhead.
