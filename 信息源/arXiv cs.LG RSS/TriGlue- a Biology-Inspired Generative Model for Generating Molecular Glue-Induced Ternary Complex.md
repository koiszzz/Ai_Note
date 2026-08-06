# TriGlue: a Biology-Inspired Generative Model for Generating Molecular Glue-Induced Ternary Complex

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yuliang Yan, Shuo Yan, Haochun Tang, Yiqin Sun, Enyan Dai　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.22143)

------

arXiv:2607.22143v2 Announce Type: replace

Abstract: Molecular glue degraders have emerged as a promising strategy for targeted protein degradation by inducing ternary complex formation between an E3 ubiquitin ligase and a target protein. Despite their therapeutic potential, computational design of molecular glues remains largely unexplored. Unlike conventional structure-based drug design, molecular glue design is governed by the unknown protein-protein interface and requires the simultaneous modeling of ligand generation, protein-protein docking, and ternary complex assembly. In this work, we formulate molecular glue design as a ternary complex generation problem and propose a biology-inspired generative framework, TriGlue. Motivated by the mechanism of molecular glue action, we decompose ternary complex generation into two coupled stages: interface estimation and interface-conditioned complex generation. First, we develop an SE(3)-equivariant interface estimation module that predicts a geometrically constrained protein-protein interface from unbound monomer structures. Second, we introduce an interface-conditioned ternary flow matching network that jointly generates the molecular glue and predicts the rigid-body transformation required to assemble the ternary complex. Extensive experiments demonstrate that TriGlue generates chemically valid molecules and produces plausible ternary complexes, which highlight the potential of biology-inspired generative modeling for accelerating molecular glue discovery. Our code is available at https://github.com/yuliangyan0807/molecular-glue-design.
