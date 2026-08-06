# Representing Visual Evidence for Item Difficulty Prediction: Visual Textualization and Image-Native Modeling

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Han Chen, Ming Li, Hong Jiao, Tianyi Zhou　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04554)

------

arXiv:2608.04554v1 Announce Type: new

Abstract: Predicting item difficulty from content can provide an initial estimate for newly developed questions before sufficient student responses are available. Existing approaches typically represent the question stem and answer choices as text. When mathematics items contain visual components, a common pipeline first textualizes that evidence and then applies a text predictor. We ask: how should visual evidence be represented for item difficulty prediction? We compare question text alone, visual textualization, which expresses visual evidence in language, and image-native modeling, which retains the original image. Using Eedi items with difficulty calibrated from student responses, we train large language models (LLMs) and vision-language models (VLMs) directly for difficulty regression. Both visual interfaces achieve the lowest point estimates, although the leading systems cannot be reliably ordered. Open-VLM textualization yields lower RMSE point estimates for all evaluated LLMs, while broader adaptation does so for all image-native VLMs. Test-time interventions show dependence on the paired full-item image, but do not isolate the additional visual component. The two visual interfaces also make partially complementary item-level errors and differ substantially in computational workflow. Thus, textualization should not be treated as the only practical interface: image-native modeling is a competitive alternative whose effectiveness depends on how the VLM is adapted.
