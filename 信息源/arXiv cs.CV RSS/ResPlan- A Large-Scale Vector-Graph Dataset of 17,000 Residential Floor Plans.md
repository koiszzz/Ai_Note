# ResPlan: A Large-Scale Vector-Graph Dataset of 17,000 Residential Floor Plans

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Mohamed Abouagour, Eleftherios Garyfallidis　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2508.14006)

------

arXiv:2508.14006v2 Announce Type: replace

Abstract: We introduce ResPlan, a dataset of 17,000 residential floor plans with vector geometry, room-connectivity graphs, and metric-scale coordinates. Each plan annotates walls, doors, windows, and functional spaces (kitchens, bedrooms, bathrooms, balconies, and others) under a 17-class taxonomy, with polygons in pixel and meter coordinates. Four typed edges (via_door, adjacency, direct, via_window) accompany every plan, supporting graph-based generation and spatial reasoning. Compared with RPLAN (Wu et al., 2019), which is raster-only with about 6.7 rooms per plan and an observed maximum of 8 functional rooms in our converted split, and MSD (van Engelenburg et al., 2024), which is floor-plate-level and requires extraction, ResPlan provides self-contained unit-level layouts averaging 8.1 functional rooms and 9.2 graph nodes, spanning apartments, villas, and multi-wing residences. The release includes the dataset, loading and post-processing code, a canonical split, and baselines for three benchmark tasks: semantic room labeling, constrained floor-plan generation, and plan-to-graph extraction. The dataset and code are publicly available.
