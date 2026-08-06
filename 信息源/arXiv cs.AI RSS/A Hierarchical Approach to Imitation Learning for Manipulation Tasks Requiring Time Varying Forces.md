# A Hierarchical Approach to Imitation Learning for Manipulation Tasks Requiring Time Varying Forces

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Rishabh Shukla, Adithya Santhosh, Shaili Gandhi, Samrudh Moode, Satyandra K. Gupta　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.03103)

------

arXiv:2608.03103v1 Announce Type: cross

Abstract: Diffusion policies have shown strong performance in learning complex, multi-modal behaviors for robotic manipulation. However, their application to contact-rich disassembly tasks remains limited by a key trade-off: the iterative denoising process introduces inference latencies that makes high frequency control difficult, which is essential for realizing dynamic interactions such as chiseling and prying. Recent action-chunking techniques mitigate latency but use an open-loop execution window, rendering the system blind to rapid force transients caused by fracture events. To bridge this gap, we introduce the Diffusion Policy Augmented by Fast Trajectory Generation (DPA-FTG). Compared to recent visual-tactile approaches that focus on positional correction, DPA-FTG decouples low-frequency planning from high-frequency force regulation. At the high level ($5$ Hz), a conditional diffusion model predicts a sequence of latent parameters for selecting a strategy from a learned vocabulary of task primitives. At the low level ($60$ Hz), a lightweight, force-conditioned policy acts as a neural impedance controller, modulating execution in real-time to maintain contact stability. We validate our approach on a bimanual battery disassembly task involving the separation of a compliant sheet. Experimental evaluation demonstrates that DPA-FTG outperforms state-of-the-art baselines, including Reactive Diffusion Policy (RDP).
