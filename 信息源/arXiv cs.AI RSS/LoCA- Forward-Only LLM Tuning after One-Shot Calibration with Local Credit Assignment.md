# LoCA: Forward-Only LLM Tuning after One-Shot Calibration with Local Credit Assignment

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Linhan Xia, Rui Liu, Zhaofeng Zhang, Yihao Wang, Binrui Shen, Shengxin Zhu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03020)

------

arXiv:2608.03020v1 Announce Type: new

Abstract: Parameter-efficient post-training reduces the number of trainable parameters, but still requires repeated end-to-end backpropagation through the frozen backbone. Every adaptation step therefore needs backward-capable hardware and must store or recompute activations. We ask whether this repeated backward chain can be replaced by a one-time calibration. We introduce Local Credit Assignment (LoCA), a two-stage method for small-shift adaptation. One probe backward pass fits a low-rank map at each transformer block from the final prediction error to a local hidden-state correction. LoCA then reuses these maps to form blockwise regression targets from forward activations and fits low-rank adapters with closed-form ridge solves. No further backbone backward pass is required. We evaluate LoCA on five discriminative benchmarks with Qwen2.5 models from 0.5B to 14B. In 16 of 25 reported task--scale comparisons, LoCA yields lower evaluation cross-entropy than the corresponding LoRA run. Its measured full-run GPU peak, including calibration, is 26--29\% lower than LoRA's. After calibration, its CPU steady-state memory is 36--52\% lower and its per-pass time is 43--48\% lower. A shared scale-normalized candidate set is reused across all tested Qwen2.5 sizes and on SmolLM2-1.7B. LoCA thus amortizes global credit assignment into one calibration and enables later forward-only tuning when repeated backpropagation is impractical. The code associated with this paper is available \href{https://github.com/Xia12121/LoCA}{here}.
