# MirrorNet: Can Medical Image Anonymization Really Protect Patient Identity?

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Attila Simk\'o　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05938)

------

arXiv:2608.05938v1 Announce Type: cross

Abstract: Medical images are routinely de-identified---names, dates, and other metadata removed---and then shared for research, teaching, and public benchmarks under the assumption that this renders them anonymous. Such de-identification protects the metadata but not the pixels, and---apart from scans that directly contain facial structures---whether the image content itself identifies the patient has received little scrutiny. We investigate this question by learning a cycle-consistent correspondence between a cross-sectional medical image and a non-medical, patient-identifying image, using a pair of coupled, cycle-consistent variational autoencoders. From a held-out scan, the model recovers a recognisable likeness of the patient (identity-region MAE = 0.163); conversely, it synthesises a scan from such an image. These results indicate that a de-identified medical scan remains identifying---it is, in effect, a photograph of the patient---and that imaging data should be governed as biometric data rather than as anonymisable records. To support reproducibility, the code and trained models are shared at https://github.com/attilasimko/public-repository.
