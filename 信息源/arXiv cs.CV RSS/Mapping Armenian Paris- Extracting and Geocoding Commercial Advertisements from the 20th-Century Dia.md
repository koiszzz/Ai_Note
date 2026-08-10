# Mapping Armenian Paris: Extracting and Geocoding Commercial Advertisements from the 20th-Century Diaspora Press

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Chahan Vidal-Gor\`ene (CJM, LIPN), Seda Kirakosyan (UFAR), Edita Matevosyan (UFAR)　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05911)

------

arXiv:2608.05911v1 Announce Type: new

Abstract: This paper presents an end-to-end, IIIF-based pipeline that turns the digitised Armenian press of France into an interactive map of the 20th-century Parisian Armenian commercial community. On each page, commercial advertisements are located, read, and parsed into structured records, which are then geocoded and placed on the map. Western Armenian is under-resourced and unsupported by off-the-shelf layout and OCR models, so the pipeline uses vision-language models (VLMs) as a data-bootstrapping strategy: they produce usable structured records at a scale hand annotation could not reach, and stay reliable on the strongly curved scans where conventional line-level CRNN OCR breaks down. The contribution includes a 500-page Western Armenian press corpus with 3,270 advertisement-level annotations, a Label Studio template that captures detection and semantic fields in a single annotation pass, and a reproducible workflow transposable to other under-resourced historical corpora. More broadly, the work shows that VLM-driven data bootstrapping is an effective lever for under-resourced historical languages such as (Western) Armenian.
