# StuPASE: Towards Low-Hallucination Studio-Quality Generative Speech Enhancement

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xiaobin Rong, Jun Gao, Zheng Wang, Mansur Yesilbursa, Kamil Wojcicki, Jing Lu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：eess.AS　|　原文：[打开链接](https://arxiv.org/abs/2603.09234)

------

arXiv:2603.09234v2 Announce Type: cross

Abstract: Achieving high perceptual quality without hallucination remains a challenge in generative speech enhancement (SE). A representative approach, PASE, is robust to hallucination but has limited perceptual quality under adverse conditions. We propose StuPASE, built upon PASE to achieve studio-level quality while retaining its low-hallucination property. First, we show that finetuning PASE with dry targets rather than targets containing simulated early reflections substantially improves dereverberation. Second, to address performance limitations under strong additive noise, we replace the GAN-based generative module in PASE with a flow-matching module, enabling studio-quality generation even under highly challenging conditions. Experiments demonstrate that StuPASE consistently produces perceptually high-quality speech while maintaining low hallucination, outperforming state-of-the-art SE methods. Audio demos are available at: https://xiaobin-rong.github.io/stupase_demo/.
