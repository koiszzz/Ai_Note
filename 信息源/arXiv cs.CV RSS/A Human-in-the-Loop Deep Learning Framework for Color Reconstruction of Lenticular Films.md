# A Human-in-the-Loop Deep Learning Framework for Color Reconstruction of Lenticular Films

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Saptarshi Neil Sinha, Tiago Kleist, Giorgio Trumpy　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.02835)

------

arXiv:2608.02835v2 Announce Type: replace

Abstract: Historical lenticular films, such as those created with the Kodacolor process, encode color information in a distinctive spatial format. This structure requires specialized techniques for accurate color reconstruction. While recent signal processing approaches like doLCE and deep learning methods like deep-doLCE have advanced automated color recovery, they often fail with cases such as curved lenticules, low-contrast, or badly captured regions. We propose a human-in-the-loop (HITL) deep learning framework which is designed for color reconstruction in lenticular films. Our approach introduces an editable, vector-based representation of lenticule boundaries, allowing experts to interactively refine boundary positions before color extraction and demosaicing. This decoupled architecture enables targeted corrections and iterative fine-tuning, embedding expert knowledge into the detection model and improving robustness across challenging frames. To preserve image details using information solely present in the original silver emulsion, we merge the reconstructed chrominance with the original film scan's luminance. We evaluate our pipeline on a challenging lenticular film sequence where previous automated approaches fail and the reconstructed colors are not suitable for exhibition. In contrast, our HITL approach successfully produces high-quality, exhibitable color reconstructions with preserved texture. This work is the first to combine expert guidance, editable intermediate representations, and texture-preserving post-processing for lenticular film color reconstruction, advancing the state of the art in this field.
