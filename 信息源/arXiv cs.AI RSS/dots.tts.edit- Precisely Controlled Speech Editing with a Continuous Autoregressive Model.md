# dots.tts.edit: Precisely Controlled Speech Editing with a Continuous Autoregressive Model

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Hankun Wang, Bohan Li, Shi Lian, Xiaoyu Gu, Jing Peng, Da Zheng, Colin Zhang, Kai Yu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SD　|　原文：[打开链接](https://arxiv.org/abs/2608.02673)

------

arXiv:2608.02673v1 Announce Type: cross

Abstract: Speech editing for content creation requires precise control over both what an edit should do and where it should apply. Free-form natural language provides a flexible interface for expressing edit requests, but its ambiguity may leave the intended operation, parameters, or target region underspecified. We study a precise and explicit interface for speech editing: a transcript-grounded structural edit instruction with XML-style tags explicitly specifies typed operations and localizes them to transcript spans or boundaries. This semantic timeline avoids explicit timestamp alignment and provides an externally inspectable contract for compositional edits. We instantiate the interface in dots.tts.edit, an editor adapted from the continuous autoregressive dots.tts foundation model. Four representative speech-creation controls cover lexical content, affective expression, pitch and speaking-rate delivery, and temporal phrasing through text, emotion, prosody, and pause editing. Task-specific data pipelines construct operation- and scope-controlled pairs while retaining source-derived context outside each target region. We further introduce doteBench, a bilingual evaluation suite that measures precise instruction following, local preservation, and audio quality across the four controls and their composition. Experiments show leading overall instruction following and local preservation across its five editing categories, while audio quality remains comparable to existing open-source systems. Across three Seed-TTS-Eval shards, the model shows negligible differences from the base model in zero-shot TTS recognition error rate and speaker similarity. The code and model will be released soon.
