# Continuous-Time Piecewise-Linear Recurrent Neural Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Alena Br\"andle, Lukas Eisenmann, Florian G\"otz, Daniel Durstewitz　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2602.15649)

------

arXiv:2602.15649v2 Announce Type: replace

Abstract: In dynamical systems reconstruction (DSR) we aim to recover the dynamical system (DS) underlying observed time series. Specifically, we aim to learn a generative surrogate model which approximates the underlying, data-generating DS, and recreates its long-term properties (`climate statistics'). In scientific and medical areas, in particular, these models need to be mechanistically tractable -- through their mathematical analysis we would like to obtain insight into the recovered system's workings. Piecewise-linear (PL), ReLU-based RNNs (PLRNNs) have a strong track-record in this regard, representing SOTA DSR models while allowing mathematical insight by virtue of their PL design. However, all current PLRNN variants are discrete-time maps. This is in disaccord with the assumed continuous-time nature of most physical and biological processes, and makes it hard to accommodate data arriving at irregular temporal intervals. Neural ODEs are one solution, but they do not reach the DSR performance of PLRNNs and often lack their tractability. Here we develop theory for continuous-time PLRNNs (cPLRNNs): We present a novel algorithm for training and simulating such models, bypassing numerical integration by efficiently exploiting their PL structure. We further demonstrate how important topological objects like equilibria or limit cycles can be determined semi-analytically in trained models. We compare cPLRNNs to both their discrete-time cousins as well as Neural ODEs on DSR benchmarks, including systems with discontinuities which come with hard thresholds.
