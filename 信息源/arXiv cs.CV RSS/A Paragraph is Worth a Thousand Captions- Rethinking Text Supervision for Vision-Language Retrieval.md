# A Paragraph is Worth a Thousand Captions: Rethinking Text Supervision for Vision-Language Retrieval

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Mahyar Ghazanfari, Amin Tabrizian, Arsyi Aziz, Binshuai Wang, Peng Wei　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05260)

------

arXiv:2608.05260v1 Announce Type: new

Abstract: Contrastive vision-language models such as CLIP and BLIP are typically trained on short image captions, limiting their ability to retrieve images from detailed textual descriptions. While methods such as Long-CLIP extend the token limit through positional embedding interpolation, we ask a simpler question: does training text granularity alone determine long-text retrieval performance? We present a systematic study of supervision ranging from single captions to multi-sentence paragraphs for contrastive image-text retrieval. Using a synthetic pipeline based on Qwen2-VL and Llama 3.2 Vision, we generate diverse captions, hard negatives, and quality-scored paragraphs for 500K CC3M images. To isolate the effect of text granularity, we fine-tune only the BLIP text encoder while keeping the vision encoder frozen across 10 training configurations. Our paragraph-supervised models match Long-CLIP-L on ShareGPT4V and outperform it by more than 14 points on DOCCI for image-to-text retrieval, without architectural changes. We further show that paragraph supervision enables effective use of long token sequences, whereas caption-only training degrades beyond 60 tokens. Increasing caption diversity improves short-caption retrieval with diminishing returns, while paragraph supervision consistently benefits long-description benchmarks and hard negatives prove detrimental in text-only fine-tuning. Evaluations on Flickr30k, COCO, ShareGPT4V, and DOCCI provide a comprehensive analysis of the trade-offs between text granularity, retrieval direction, and description length.
