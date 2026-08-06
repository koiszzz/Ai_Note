# MOAT: Model-Agnostic Randomized Transformations for preventing Efficiency Degradation Attacks on ViTs

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Anadi Goyal, Nandish Chattopadhyay, Chandan Karfa, Anupam Chattopadhyay, Norrathep Rattanavipanon　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04680)

------

arXiv:2608.04680v1 Announce Type: cross

Abstract: To adopt the Vision Transformers (ViTs) in resource-constrained environment, token pruning is widely used to reduce computational cost without impacting accuracy. However, adversaries have developed targeted attacks against said token pruning techniques to undermine such attempts to make ViTs efficient. In this paper, we propose MOAT, a model-agnostic pre-processing defense pipeline that applies a combination of input transformations to protect efficient ViT implementations against adversarial efficiency attacks. MOAT operates directly on the input without requiring modifications to the model architecture or token pruning mechanism. Experimental results demonstrate that, across all evaluated ViT models, MOAT limits GFLOPs degradation under adversarial attacks to within 3.4% of the original unattacked model.
