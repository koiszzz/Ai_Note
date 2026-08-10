# DishSeg24k: A Large-Scale Benchmark for Food Segmentation with Stochastic Expert Decoding

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yilin Wang, Haochen Shi, Guanyu Chen, Weiqing Min, Jinkai Zheng, Chenggang Yan, Shuqiang Jiang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2607.23070)

------

arXiv:2607.23070v2 Announce Type: replace

Abstract: Food segmentation is essential for applications such as intelligent catering, dietary assessment, and recommendation. However, existing benchmarks fail to capture the complexity of real-world dining scenes. The challenges of dense inter-dish overlap, fine-grained class similarity, and extreme long-tail class distributions exceed the fidelity of current datasets. To fill this gap, we introduce \textbf{DishSeg24k}, a large-scale dish-level segmentation benchmark with 24,096 images, 112,281 instances, and 278 fine-grained categories in real-world dining environments. Based on DishSeg24k, we further propose \textbf{Food Expert-Adaptive Segmentation Transformers (FEAST)} to address these challenges. FEAST models query-based decoding as a Markov Decision Process (MDP), where each decoder layer update is treated as a sequential decision step that explores uncertainty along dish boundaries. We further redesign the decoder with a reinforcement learning (RL)-guided Mixture-of-Experts (MoE) module, in which a dual-critic decoupled optimization scheme separates task-oriented query refinement from structure-aware expert routing. This design promotes expert specialization and prevents expert collapse under long-tail category distributions. Finally, extensive experiments on DishSeg24k demonstrate the state-of-the-art performance of FEAST, which outperforms previous methods by {+3.21\%} mIoU, {+3.68\%} mDice, and {+4.00\%} mAcc, respectively. We further validate the effectiveness of FEAST on FoodSeg103. The dataset and code will be publicly released.
