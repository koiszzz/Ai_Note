# Above-ground Biomass Estimation with Geospatial Foundation Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ghjulia Sialellia, Linus Scheibenreif, Jan Dirk Wegner, Konrad Schindler　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04792)

------

arXiv:2608.04792v1 Announce Type: new

Abstract: Accurate estimation of Above-Ground Biomass (AGB) from satellite imagery is essential for the large-scale monitoring of carbon stocks, yet it remains a challenging regression task at global scale. Geospatial Foundation Models (GFMs) have recently emerged as a promising machine learning paradigm to derive general-purpose representations from Earth observation data, but their utility for quantitative regression tasks like biomass estimation remains largely unexplored, as most benchmarks emphasize classification and segmentation. Here, we present a comprehensive benchmark of GFMs for global-scale AGB estimation using the AGBD dataset, a machine learning-ready benchmark spanning diverse biomes and geographies. We distinguish two ways in which GFMs reach practitioners: (i) models distributed as weights to be run by the user, which we evaluate as frozen encoders within the PANGAEA benchmarking framework; and (ii) models distributed as ready-to-use, pre-computed embedding products, for which we evaluate AlphaEarth Foundations (AEF) and TESSERA. We compare 11 GFMs available on PANGAEA and both embedding products against a fully supervised state-of-the-art (SOTA) model, assess their geographical and temporal generalization abilities, as well as agreement with the ESA CCI biomass product on independent reference data. Our results show that GFMs run as frozen encoders substantially underperform with respect to the supervised SOTA model, whereas pre-computed embedding products prove highly effective. An MLP trained on AEF embeddings outperforms the supervised SOTA model trained on AGBD features, and the same SOTA model trained on AEF embeddings (optionally augmented with selected raw features) achieves the best overall result, while also generalizing better across space and time.
