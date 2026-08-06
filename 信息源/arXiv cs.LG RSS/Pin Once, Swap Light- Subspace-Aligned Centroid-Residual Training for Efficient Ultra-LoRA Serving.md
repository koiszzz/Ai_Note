# Pin Once, Swap Light: Subspace-Aligned Centroid-Residual Training for Efficient Ultra-LoRA Serving

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Xiang Li, Pengcheng Wang, Huazheng Wang, Saurabh Bagchi　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03579)

------

arXiv:2608.03579v1 Announce Type: new

Abstract: Modern multi-tenant Low-Rank Adapters (LoRAs) serving systems concurrently host tens to hundreds of LoRA adapters. Though powerful, this introduces a critical system dilemma between serving efficiency and task performance: higher-rank adapters generally achieve better downstream task performance, but their GPU VRAM footprint and Host-to-Device PCIe swapping overhead severely constrain scalability. Conversely, ultra-low-rank adapters ($r \le 2$) minimize both VRAM footprint and PCIe transfer overhead, but suffer from downstream task performance degradation. To solve this problem, we propose Subspace-Aligned LoRA Training (SALT), a serving efficiency-aware hierarchical fine-tuning framework. Our solution operates in three phases. First, a provider jointly trains high-capacity domain centroids on public data within the domain using a novel alignment regularizer that coheres in-domain task subspaces into a unified basis. Next, users fine-tune ultra-low-rank task residual adapters on private data atop those frozen centroids. Finally, during inference, the provider pins the centroid in GPU VRAM and dynamically swaps in each user's task residual on demand. Across LLMs of varying scales, SALT recovers high-rank accuracy using $r \le 2$ residuals, achieving up to 18.5% absolute accuracy gains over state-of-the-art compression baselines and reducing per-adapter memory by up to 16x. When integrated into vLLM, SALT improves serving throughput by up to 51% under PCIe bandwidth pressure and 28% under GPU VRAM constraints for Llama-3.2-3B.
