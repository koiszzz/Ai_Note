# Koopman-Based Nonlinear Identification and Model Predictive Control of a Turbofan Engine

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：David Grasev　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2604.01730)

------

arXiv:2604.01730v2 Announce Type: replace

Abstract: This paper investigates Koopman operator-based approaches for multivariable control of a two-spool turbofan engine. A physics-based component-level model is developed to generate training data and validate the controllers. A meta-heuristic extended dynamic mode decomposition is adapted, with a cost function designed to accurately capture both spool-speed dynamics and the engine pressure ratio (EPR), enabling the construction of a single Koopman model that can be reused across multiple control strategies. Using the identified time-varying Koopman model, an adaptive Koopman-based model predictive controller (AKMPC) with a disturbance observer is developed and compared with a Koopman-based feedback linearization controller (K-FBLC) and its integrator-augmented version (K-FBLC-I). The Koopman representation further enables nonlinear GTE output limiters, such as rotor-acceleration and turbine-inlet-temperature limits, to be expressed as linear constraints in the AKMPC. The controllers are evaluated for two control configurations of spool speeds and EPR, under both sea-level and varying flight conditions. The results demonstrate that the proposed identification approach enables accurate predictions of both spool speeds and EPR, allowing the Koopman model to be reused flexibly across different control formulations. While all strategies achieve comparable performance in sea-level conditions, the AKMPC demonstrates improved performance under varying flight conditions due to its ability to capture nonlinear dynamics, handle constraints, and compensate for model mismatch. Moreover, the EPR control strategy improves the thrust response. The study highlights the applicability of Koopman-based control and the advantages of the AKMPC framework for robust turbofan engine control.
