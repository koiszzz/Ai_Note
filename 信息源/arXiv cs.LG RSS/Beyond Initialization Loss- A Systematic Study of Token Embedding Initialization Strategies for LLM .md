# Beyond Initialization Loss: A Systematic Study of Token Embedding Initialization Strategies for LLM Vocabulary Extension

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Raviraj Joshi, Utkarsh Vaidya, Sanjay Singh Chauhan, Niranjan Wartikar　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03494)

------

arXiv:2608.03494v1 Announce Type: cross

Abstract: Vocabulary extension is an efficient way to adapt pretrained large language models (LLMs) to new languages, but the initialization of newly added token embeddings can strongly affect continued pre-training (CPT) efficiency. We present a systematic study of more than 20 initialization strategies for Hindi vocabulary extension in Nemotron-3-Nano-30B-A3B. Our comparison spans vocabulary-averaging baselines; external and learned initialization methods, including FOCUS, top-k semantic retrieval, and residual MLP mappings; subword composition; norm calibration; and input-output asymmetry. We find that subword composition methods outperform both vocabulary averaging and external/learned initialization approaches. Within subword composition, asymmetric variants achieve the lowest observed early validation loss and reveal distinct preferences for input and output embedding initialization. The best observed configuration initializes the input embedding matrix with uniform subword averaging and Hindi-specific norm calibration, and the output language modeling head with character-length-weighted subword averaging. Relative to the standard Mean-all baseline, this full initialization pipeline reaches comparable validation loss with over a 6x reduction in CPT steps and exceeds the baseline's 3,500-step MILU-Hindi accuracy after only 500 steps. Finally, we show that initialization loss and initialization bits-per-byte (Init BPB) are unreliable predictors of downstream convergence, whereas lightweight CPT, as few as 50 steps, provides a cost-effective and reliable signal for selecting the best initialization strategy.
