# OmniMech: All-in-one Multimodal Mechanical Benchmark for 3D Reconstruction

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Taiting Lu, Runze Liu, Ziwei Dong, Sisong Bei, Jingying Zeng, Mingjia Wang, Zhenghao Li, Kaiyuan Lin, Yi-Shan Wu, Yangshoudu Zheng, Hongxing Pan, Kai Zhang, Guoliang Shi, Ling Ma, Yifan Yang, Jiaying Lu, Qi He, Sung-Liang Chen, Yi-Chao Chen, Yincheng Jin, Mahanth Gowda　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05539)

------

arXiv:2608.05539v1 Announce Type: new

Abstract: Recent vision-language models (VLMs) can generate executable CAD programs from images, but existing methods mainly target coarse, general-purpose 3D objects and rarely address the fine-grained geometry and millimeter-level tolerances required in industrial mechanical design. We introduce OmniMech, the first million-scale benchmark for evaluating VLMs on executable CAD generation from industrial manufacturing data. OmniMech contains more than 251,000 fully dimensioned and toleranced 2D orthographic drawings, paired with native CAD models, multi-view renderings, mesh, STEP and B-rep representations, and rich semantic annotations. The benchmark includes four tasks: (1) parametric CAD program synthesis from engineering drawings; (2) diagram-to-3D reasoning for geometrically and structurally consistent reconstruction; (3) annotation-grounded reasoning over dimensions, symbols, feature callouts, and manufacturing constraints; and (4) tool-augmented agentic reasoning using visualization, measurement, CAD execution, and verification tools. Experiments show that current VLMs and CAD-specialized models still struggle with executable program synthesis, fine-grained 3D reconstruction, and reliable enforcement of dimensions and tolerances. We will release the benchmark data, evaluation code, and tool interfaces to support future research.
