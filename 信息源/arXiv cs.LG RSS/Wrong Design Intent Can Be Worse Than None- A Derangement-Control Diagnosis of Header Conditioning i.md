# Wrong Design Intent Can Be Worse Than None: A Derangement-Control Diagnosis of Header Conditioning in CAD Program Completion

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yang Xiao　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.23191)

------

arXiv:2607.23191v2 Announce Type: replace

Abstract: Fine-tuned code LLMs are often conditioned on a design-intent header to steer parametric CAD generation, but whether the model reads that header's content has been tested neither under execution-level scoring nor with a causal control. We study CADCON, a five-feature design-intent header prepended to CadQuery-style sketch-extrude programs during LoRA fine-tuning of Qwen2.5-Coder-1.5B, re-scored by executable geometric assertions on the produced B-rep solid. Across three seeds and a pre-registered {0%, 40%}-prefix $\times$ {correct, wrong, masked}-header matrix -- with inference duplicate-aware over the 38 unique-program clusters a submission-stage audit found held out -- we report: (i) in conditional completion (40% prefix), a semantically wrong header degrades adherence below the no-header baseline (0.43 $\to$ 0.30/0.21 text/token) on the intents the model can render unconditioned, namely polygonal and thin. The drop is significant on 3/3 token-header seeds but 1/3 text-header seeds, so the pre-registered combined rule, which required the text side, does not pass; (ii) a derangement control -- retrained with shuffled headers: identical marginal, greatly reduced content correlation -- stays competent yet shows no detectable correct-to-wrong drop while M does (text headers; interaction significant on 3/3 seeds, p $\le$ 0.024, one seed below the frozen non-zero-count guardrail), so the harm requires the learned header$\to$program mapping, not the header marginal; (iii) requiring a generated program to execute removes almost all of a correct header's apparent benefit (token: +0.22 ungated regex $\to$ +0.03 gated regex $\to$ +0.02 gated geometry), so the deflation is execution blindness, not detector disagreement; (iv) the harm is regime-specific: at 0% prefix the baseline generates no valid CAD at all. Wrong intent is not noise: where it is detectable, it actively misdirects generation.
