# The Transformer Revolution, Part 1: Dynamic Processing through Output- Weight Interconnections

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Marco Giunti, Fabrizia Giulia Garavaglia　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03921)

------

arXiv:2608.03921v1 Announce Type: new

Abstract: This paper offers a new interpretation of the Transformer during inference. Against the "stochastic parrot" view that large language models merely reproduce statistical regularities learned in training, we argue that Transformers construct and apply prompt-dependent transformations whose parameters are generated during inference. We call this form of computation SIDPP: Sequence-level Interactive Dynamic Parallel Processing. The Transformer is interpreted as a system that transforms concepts by means of concepts. Token vectors are the concepts to be transformed; parameterized transformations defined by matrices and vectors are the transforming concepts. These may be static, when fixed through training, or dynamic, when generated from the input sequence. Mechanically, they correspond to groups of simple neural networks. The Transformer's architectural novelty lies in output-weight interconnections, through which the outputs of some networks determine the weights of others, alongside ordinary output-input interconnections. By means of these interconnections, the system constructs transformations from the prompt and uses them to modify token representations. The contribution of dynamic processing grows with prompt length and may equal or exceed that of static processing, a phenomenon we call strong prompt sensitivity. This account bears on interpretability, predictability, control, and the design of smaller, more sustainable systems. Finally, since the human neural system possesses the mechanisms required to implement SIDPP, we argue that a form of SIDPP may, in principle, be neurally realized in the cerebral cortex. We therefore conjecture that human language processing may itself be a form of SIDPP produced by a functional architecture relevantly similar to that of the Transformer.
