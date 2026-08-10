# Positive-Data Learning of Fixed-Observation Linear MCFGs from Working Binary Presentations

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Takayuki Kuriyama　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.FL　|　原文：[打开链接](https://arxiv.org/abs/2605.11644)

------

arXiv:2605.11644v2 Announce Type: replace-cross

Abstract: We study positive-data learning of languages admitting reduced working binary linear nondeleting multiple context-free grammar presentations of bounded fan-out. The learner is supplied with a fixed explicit finite monoid homomorphism (h:\Sigma^*\to M), used as a compositional finite-state observation.

We define ((f,h))-tuple substitutability through named sentence-context distributions. For every fixed fan-out bound (f) and morphism (h), a canonical set-driven learner exactly reconstructs each target from a finite presentation-relative characteristic sample. Its raw hypothesis uses equal-fan-out unit rules; polynomial unit elimination yields an equivalent unit-free working MCFG. From a finite sample (K), the final hypothesis is constructible in time (|K|_+^{O(f)}), including output size.

The finite observation is substantive. We call the class obtained by fixing one finite observation morphism (h) a fixed-observation fiber; the same morphism is supplied to the learner for every target in that class. The language (L_3={a^n b^n c^n\mid n\ge1}) belongs to such a fiber but fails Yoshinaka's original two-dimensional substitutability condition. General binary presentations admit a characteristic-sample obstruction uniform over fixed set-driven learners, whereas a natural single-spine subclass has polynomial characteristic samples and includes the three-block and cross-serial examples. Finally, bounded-size observations compile into one product morphism, while the unbounded union over all finite observations is not identifiable from positive data; an infinite member-kernel criterion excludes the copy language from every fixed fiber.
