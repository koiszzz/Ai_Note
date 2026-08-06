# Your Agentic LLMs Secretly Encode Latent Signals of Indirect Prompt-Injection Exposure

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jianshuo Dong, Yiming Liu, Maosen Zhang, Nan Deng, Xu Peng, Xiaoping Zhang, Tianwei Zhang, Jie Zhang, Han Qiu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02657)

------

arXiv:2608.02657v1 Announce Type: cross

Abstract: Agentic LLMs are vulnerable to indirect prompt injection (IPI) attacks, e.g., malicious side-tasks hidden in external tool results. While many efforts have sought to address the threats, little is known about the internals of agentic LLMs when they are exposed to IPI attacks, a condition which we call IPI exposure. In this paper, we study this problem in depth from three aspects. (1) Probing: Across six models, including the giant 753B-parameter GLM-5.2, simple linear probes trained on pre-generation hidden states can predict LLMs' IPI exposure. These probes achieve 90%+ AUROC on unseen attacks, agent instructions, and task suites; they exhibit high robustness under adaptive attacks and in cross-lingual settings. (2) Defense: Our CoT measurement reveals a recognition--action gap: though models encode such signals, they often fail to translate them into safe actions. We then introduce AGRI, a probe-gated reasoning-based defense that prepends anti-injection reasoning on demand. On difficult AgentDojo settings, AGRI substantially reduces attack success rate, e.g., from 34.6% to 0% on Qwen3.5-27B, while largely maintaining clean-task utility. (3) Explanation: We introduce an analysis framework that identifies natural-language explanations most strongly correlated with probe-captured signals. The resulting profiles differ across models: latent signals can align with either direct IPI-exposure claims or indirect operational cues. Code is available: https://github.com/jianshuod/IPI-exposure-signal.
