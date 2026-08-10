# Equipment-centric workpiece localization in near real-time using deep learning-based vision and event-driven finite state machines

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Dohyeon Kong, Jaebong Cho, Hyunbo Cho　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05744)

------

arXiv:2608.05744v1 Announce Type: new

Abstract: Continuous workpiece localization is essential for traceability and process coordination in hot forging, but direct tracking is unreliable because of extreme temperatures, surface degradation, and irregular routing. This study presents an equipment-centric framework that infers workpiece locations from handling equipment observed by multiple static 2D cameras. The framework estimates floorplan-space 3D equipment coordinates and recognizes grasp and release activities. Event-driven finite state machines validate these activities as discrete handling events and continuously update workpiece states and locations. A keypoint-guided attention mechanism integrated into a 3D convolutional neural network improves activity recognition by focusing on functionally relevant equipment regions. Evaluation in an operational hot forging factory achieved 100\% event detection accuracy within a 33-second tolerance window, a mean localization error of 317.8 mm, and a mean system latency of 21 seconds. The framework connects vision-based perception with interpretable event-driven reasoning and supports visualization of workpiece transfers and quantitative analysis of equipment operations.
