# StyleComposer: Training-Free Multi-Reference Style Composition

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Sanghyeok Lee, Jihye Kang, Namhyuk Ahn　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05213)

------

arXiv:2608.05213v1 Announce Type: new

Abstract: The style of a painting is not monolithic: color, texture, and structure may come from different sources. Existing reference-guided methods transfer them as one style signal, leaving each attribute's source and strength outside the user's control. We ask where in a diffusion model one attribute can change while the others hold, and find that no single representation isolates all three. The proposed StyleComposer therefore routes each style attribute through the representation where it separates best and coordinates the routes over denoising time. Without training or inversion, it satisfies three references and the prompt jointly more closely than prior methods, and exposes one strength slider per attribute. Project page: https://lexxsh.github.io/StyleComposer
