# STREAM-VAE: Dual-Path Routing for Slow and Fast Dynamics in Vehicle Telemetry Anomaly Detection

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kadir-Kaan \"Ozer, Ren\'e Ebeling, Markus Enzweiler　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2511.15339)

------

arXiv:2511.15339v3 Announce Type: replace

Abstract: Automotive telemetry data exhibits slow drifts and fast spikes, often within the same sequence, making reliable anomaly detection challenging. Standard reconstruction-based methods, including sequence variational autoencoders (VAEs), use a single latent process and therefore mix heterogeneous time scales, which can smooth out spikes or inflate variances and weaken anomaly separation. In this paper, we present STREAM-VAE, a variational autoencoder for anomaly detection in automotive telemetry time-series data. Our model uses a dual-path encoder to separate slow drift and fast spike signal dynamics, and a decoder that represents transient deviations separately from the normal operating pattern. STREAM-VAE is designed for deployment, producing stable anomaly scores across operating modes for both in-vehicle monitors and backend fleet analytics. Experiments on an automotive telemetry dataset and the public SMD benchmark show that explicitly separating drift and spike dynamics improves robustness compared to strong forecasting, attention, graph, and VAE baselines.
