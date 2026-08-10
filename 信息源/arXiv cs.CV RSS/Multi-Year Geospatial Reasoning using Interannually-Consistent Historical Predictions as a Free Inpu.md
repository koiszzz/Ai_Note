# Multi-Year Geospatial Reasoning using Interannually-Consistent Historical Predictions as a Free Input Modality

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Syed Roshaan Ali Shah, Kasper Bonte, David Bekaert, Kristof Van Tricht, Dieter Wens　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05979)

------

arXiv:2608.05979v1 Announce Type: new

Abstract: Machine learning, and deep networks in particular, are increasingly used to derive higher-level Earth observation (EO) products such as annual land-cover and crop-type maps. Many are generated operationally: each year a new acquisition is processed, typically with the same model, extending a multi-year archive. In the process these systems accumulate two kinds of useful signal that are almost never fed back into the model: the system's own archive of past predictions, and ancillary layers produced by other partners in a processing consortium. Both are normally used outside the network, as rule-based post-processing or a fixed input mask. Using the Copernicus Land Monitoring Service High Resolution Layer (HRL) Croplands crop-type product as a testbed, we show that bringing both signals inside the model turns a single-year, single-task pixel classifier into one that reasons across years. We introduce a Crop Type (CTY) embedding encoder that represents each past prediction as a confidence-scaled, time-ordered categorical token and attends over the year axis, and we study how the externally provided Base Vegetation Layer (BVL) mask should be represented in the model's inputs and outputs. To compare designs fairly when they relabel non-crop pixels, we evaluate on the 18 crop classes only and report precision and recall separately. On a pan-European dataset of about 5.4M labelled pixels, adding the prediction history raises crop-only F1 by 1.6 percentage points (pp) and, more importantly, corrects a recall-skewed error profile, with the largest gains on perennial and tree crops (olives +4.6, fruits +3.7, nuts +3.2 pp). Representing the BVL mask consistently in both the history and the target year adds about 2.5 pp on the crop classes. The approach is a low-cost recipe for any recurring geospatial or foundation model that emits class maps.
