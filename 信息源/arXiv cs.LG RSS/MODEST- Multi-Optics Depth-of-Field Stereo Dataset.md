# MODEST: Multi-Optics Depth-of-Field Stereo Dataset

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Nisarg K. Trivedi, Vinayaka A. Belludi, Li-Yun Wang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2511.20853)

------

arXiv:2511.20853v4 Announce Type: replace-cross

Abstract: Training and evaluation of state-of-the-art computer vision algorithms for reliable shallow depth of field (DoF) rendering and defocus deblurring remain constrained by a persistent lack of large-scale, full-frame, high fidelity, real-image datasets. Optical effects of shallow DoF and defocus blur depend intimately on camera optical configuration set with focal length and aperture; requiring rigorous evaluation of the models when these parameters systematically change. Further, modern applications such as AR, VR, smartphones, industrial robots, etc. deploy stereo or multi-camera systems. We present MODEST - the first ultra-high-resolution(5472x3648px, 20MP), multi-optics depth of field stereo DSLR dataset that methodically varies focal length and aperture for a series of complex, real-world scenes, capturing the optical realism and complexity of professional camera systems. With 20,000 images across 50 distinct optical configurations, focal length in 28-70mm, aperture in f/22-f/2.8 for multiple stereo viewpoints for 10 scenes; this ultra-high-resolution, full-range optics coverage enables controlled analysis of geometric and optical effects for shallow DoF rendering and defocus deblurring. Each scene is curated to have challenging visual elements: reflective surfaces, transparent glass walls, fine-grained details, point lights, and multi-scale depth illusions. In addition, we provide intrinsics and extrinsics calibration images to support ever-evolving calibration methods. We evaluate several SOTA DoF and defocus deblurring methods and demonstrate failure cases and limitations. Our comprehensive tuning analysis demonstrates how MODEST evaluates sensitivity of the SOTA DoF models for the actual focal configuration of input images. This work attempts to bridge the realism gap between synthetic, low-resolution training data and inference generalization on high-resolution real-camera optics.
