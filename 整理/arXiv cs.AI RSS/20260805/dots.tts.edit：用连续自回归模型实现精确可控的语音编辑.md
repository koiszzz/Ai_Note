---
published: 2026-08-05
title: "dots.tts.edit：用连续自回归模型实现精确可控的语音编辑"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/dots.tts.edit- Precisely Controlled Speech Editing with a Continuous Autoregressive Model.md"
source_note: "[[信息源/arXiv cs.AI RSS/dots.tts.edit- Precisely Controlled Speech Editing with a Continuous Autoregressive Model]]"
source_sha256: da3c5e6e272681771aa529e258c4e612a162ff89d36704de7c0733380872dd45
original_url: "https://arxiv.org/abs/2608.02673"
processed: 2026-08-05
language: zh-CN
---

# dots.tts.edit：用连续自回归模型实现精确可控的语音编辑

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Hankun Wang、Bohan Li、Shi Lian 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02673)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/dots.tts.edit- Precisely Controlled Speech Editing with a Continuous Autoregressive Model|查看原始文件]]

## 摘要

- 研究精确显式的语音编辑接口：基于转录的结构化编辑指令，用 XML 风格标签显式指定类型化操作并定位到转录跨度或边界，无需显式时间戳对齐，为组合编辑提供外部可检查的契约。
- 在连续自回归 dots.tts 基础模型中实例化为 dots.tts.edit：四个代表性语音创作控制覆盖词汇内容、情感表达、音高与语速、时间措辞（文本、情感、韵律与停顿编辑）。
- 发布 doteBench，双语评估套件，测量四个控制及其组合下的精确指令遵循、局部保持与音频质量。
- 在五个编辑类别上取得领先的整体指令遵循与局部保持，音频质量与现有开源系统相当；在三个 Seed-TTS-Eval 分片上，与基础模型相比零样本 TTS 识别错误率与说话人相似度差异可忽略。

## 正文

论文编号：arXiv:2608.02673v1（更新类型：cross）。以下为摘要全文翻译。

内容创作的语音编辑需要精确控制编辑做什么以及应用于哪里。自由形式自然语言为表达编辑请求提供灵活接口，但其歧义可能使预期操作、参数或目标区域指定不足。我们研究一种精确显式的语音编辑接口：基于转录的结构化编辑指令，用 XML 风格标签显式指定类型化操作，并将其定位到转录跨度或边界。这种语义时间线避免显式时间戳对齐，并为组合编辑提供外部可检查的契约。我们在 dots.tts.edit 中实例化该接口，它从连续自回归 dots.tts 基础模型适配而来。四个代表性语音创作控制覆盖词汇内容、情感表达、音高与语速传递，以及通过文本、情感、韵律与停顿编辑实现的时间措辞。任务特定数据流水线构建操作与范围受控的配对，同时保留每个目标区域之外的源衍生上下文。我们进一步引入 doteBench，一个双语评估套件，在四个控制及其组合上测量精确指令遵循、局部保持与音频质量。实验表明，其五个编辑类别在整体指令遵循与局部保持上处于领先，而音频质量与现有开源系统相当。在三个 Seed-TTS-Eval 分片上，模型与基础模型在零样本 TTS 识别错误率与说话人相似度上的差异可忽略。代码与模型将很快发布。

## 关键词

#语音编辑 #TTS #自回归模型 #可控生成
