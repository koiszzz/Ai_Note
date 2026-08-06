# SCAIL-2: Unifying Controlled Character Animation with End-to-End In-Context Conditioning

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Wenhao Yan, Fengjia Guo, Zhuoyi Yang, Jie Tang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2606.10804)

------

arXiv:2606.10804v3 Announce Type: replace

Abstract: Controlled character animation aims to transfer motion from a driving sequence to a reference character. Prior works heavily rely on intermediate representations, such as pose skeletons for motion and masked backgrounds for environment, inevitably resulting in information loss. In this work, we present SCAIL-2, a framework that adopts an end-to-end driving paradigm by directly concatenating latent visual information to the model's input sequence. We enable end-to-end training through a data synthesis pipeline that produces MotionPair-60K, a curated dataset for several character animation subtasks. We unify the subtasks using decoupled conditions to accommodate different driving patterns, facilitated by In-Context Mask Conditioning and Mode-Specific RoPE, which provide soft guidance beyond textual instructions and visual information. To address synthetic discrepancy in detailed regions, we propose Bias-Aware DPO to construct preference items to mitigate the errors. Extensive experiments demonstrate that our method achieves state-of-the-art performance across various character animation tasks. Code, model weights, and a large subset of the dataset are available at: https://teal024.github.io/SCAIL-2/.
