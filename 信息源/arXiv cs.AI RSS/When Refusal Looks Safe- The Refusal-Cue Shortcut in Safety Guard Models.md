# When Refusal Looks Safe: The Refusal-Cue Shortcut in Safety Guard Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yu Feng, Chunting Zang, Chen Shen, Rui Miao, Ge Teng, Weidong Cai, Jieping Ye　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03201)

------

arXiv:2608.03201v1 Announce Type: new

Abstract: Safety guards are widely used to filter harmful content and are typically trained via supervised fine-tuning on labeled prompt-response pairs. We audit two widely used safety-guard training datasets, WildGuardMix and GR-Train, and find that among responses to harmful prompts, refusal expressions co-occur almost exclusively with unharmful labels. This imbalance motivates what we term the refusal-cue shortcut: inserting a refusal cue into a harmful response could flip the guard's verdict from harmful to unharmful. The shortcut affects not only guards trained on these datasets but also officially released models such as LlamaGuard3 and Qwen3Guard whose training data is undisclosed. It persists across response positions and is generally stronger in smaller variants within a family. To mitigate it, we adapt sparse complementary masking as a lightweight post-hoc intervention that identifies and suppresses a small set of shortcut-associated attention heads and MLP neurons without retraining. On two primary benchmarks, the intervention achieves an approximately 79% relative reduction in response-initial detection failures induced by refusal cues, while preserving standard detection performance. Although optimized using cues at a single response position, the suppression effect transfers to unseen positions and datasets, suggesting that shortcut manifestations across positions are partly mediated by shared internal components. Further analysis provides evidence that shortcut reliance and legitimate refusal recognition are partially functionally separable, as suppressing the shortcut broadly preserves the guard's ability to recognize genuine refusals.
