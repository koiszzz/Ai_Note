# muSync-GS: Physics-Synchronized Driving Video Synthesis for Weather and Geometric Road Hazards

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yang Chen, Yicheng Zhu, Tao Li, Zilin Bian　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04412)

------

arXiv:2608.04412v1 Announce Type: new

Abstract: High-quality driving data are essential for autonomous-driving systems and generative world models. However, rare and safety-critical scenarios involving adverse weather, braking under low tire--road friction, and uneven road geometry are costly and risky to collect at scale. Existing video-generation and 3D Gaussian editing methods can modify weather appearance or road geometry, but typically do not couple these edits with tire--road interaction and vehicle dynamics. As a result, an edited video may retain its original trajectory even when the modified road condition should alter braking, wheel slip, load transfer, and ego-camera motion. We present muSync-GS, a physics-synchronized framework for driving video synthesis under adverse-weather and road-elevation hazards. A precipitation-derived road-surface condition jointly controls road appearance and tire friction, while a shared road-elevation profile drives both visible road-geometry editing and axle excitation. A calibrated vehicle model predicts speed, slip ratio, normal loads, and pitch for constructing the ego-camera trajectory and synchronized physical annotations. On 12 held-out CarSim cases spanning precipitation levels, brake inputs, and road-profile parameters, the model achieves mean case-wise RMSEs of 0.0273 m/s for speed, 0.0590 degrees for pitch, 0.0101 for slip ratio, and 26.61 N for per-wheel normal load. Together with the reconstructed-scene experiments, these results show that muSync-GS accurately reproduces vehicle responses under held-out controls while synchronizing them with controllable scene edits and ego-camera motion.
