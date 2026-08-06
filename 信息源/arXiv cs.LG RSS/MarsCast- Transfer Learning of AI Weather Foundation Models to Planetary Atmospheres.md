# MarsCast: Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：M. L. Carroll, J. Li, S. D. Guzewich, G. Villanueva, J. A. Caraballo-Vega, M. J. Frost　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：astro-ph.EP　|　原文：[打开链接](https://arxiv.org/abs/2608.05054)

------

arXiv:2608.05054v1 Announce Type: cross

Abstract: We investigate the transferability of Earth weather foundation models to planetary atmospheres by adapting the GraphCast graph neural weather forecasting model to Mars. While GraphCast achieves state-of-the-art performance for terrestrial forecasting, its applicability to non-Earth environments remains unexplored. Using the Mars Climate Database (MCD), which provides global atmospheric fields across vertical altitude levels (similar to Earth pressure levels), we evaluate zero-shot and fine-tuned GraphCast predictions of Martian temperature and wind fields. Zero-shot forecasts produce a surprisingly accurate depiction of current conditions but fail to reproduce diurnal variability and rapidly decay toward climatological mean states. To address this limitation, we fine-tune GraphCast using MCD variables and top-of-atmosphere solar radiation forcing while holding humidity constant. Fine-tuning enables rapid learning of Martian thermal variability. Within as few as 10 training epochs, the model begins to capture the diurnal cycle and forecasts up to 10 days reproduce seasonal and vertical temperature structure. Prediction quality improves with training sample size and exhibits sensitivity to seasonal initialization. These results demonstrate that Earth-trained AI weather models can be adapted to simulate Martian atmospheric dynamics, providing a pathway toward rapid planetary weather prediction to support mission operations, dust storm risk mitigation, and future human exploration.
