# MERaLiON-GR: Speech Gender Recognition Model for English and SEA Languages

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Qiongqiong Wang, Ai Ti Aw, Nancy F. Chen, Ying Lay Chiu, Yang Ding, Yingxu He, Ridong Jiang, Zhuohan Liu, Yanfeng Lu, Yi Ma, Muhammad Huzaifah, Nabilah Binte Md Johan, Nattadaporn Lertcheva, Pham Minh Duc, Sailor Hardik Bhupendra, Siti Umairah Binte Mohammad Salleh, Shuo Sun, Tarun Kumar Vangani, Jeremy H. M. Wong, Jinyang Wu, Longyin Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04433)

------

arXiv:2608.04433v1 Announce Type: cross

Abstract: We present MERaLiON-GR, a speech gender recognition system that performs binary classification (female / male) on English and Southeast Asian (SEA) languages. The model finetunes MERaLiON-SpeechEncoder-2, a large conformer based transformer pre-trained on a broad speech corpus, and applies parameter efficient fine-tuning via Low-Rank Adaptation (LoRA) to adapt the encoder to the gender recognition task, and appends a multi-scale ECAPA-TDNN down stream network with attention pooling and a lightweight linear classifier. Extensive evaluations across multilingual Singaporean and Southeast Asian languages (English, Chinese, Malay, Tamil, Thai, Vietnamese, Indonesian, and Khmer) show that MERaLiON-GR consistently surpasses the state-of-the-art gender recognition model Vox-Profile and a large Audio-LLM, in both full-utterance and segment level evaluation modes. The results underscore the value of dedicated speech models in achieving accurate paralinguistic understanding and strong cross-lingual generalization.
