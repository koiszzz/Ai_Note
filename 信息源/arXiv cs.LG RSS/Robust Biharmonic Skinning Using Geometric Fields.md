# Robust Biharmonic Skinning Using Geometric Fields

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ana Dodik, Vincent Sitzmann, Justin Solomon, Oded Stein　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.GR　|　原文：[打开链接](https://arxiv.org/abs/2406.00238)

------

arXiv:2406.00238v3 Announce Type: replace-cross

Abstract: Bounded bihramonic weights are a popular tool used to rig and deform characters for animation, to compute reduced-order simulations, and to define feature descriptors for geometry processing. They necessitate tetrahedralizing the volume bounded by the surface, introducing the possibility of meshing artifacts or tetrahedralization failure. We introduce a mesh-free and robust automatic skinning technique that generates weights comparable to the current state of the art, but works reliably even on open surfaces, triangle soups, and point clouds where current methods fail. We achieve this through the use of a specialized Lagrangian representation enabled by the advent of hardware ray-tracing, which circumvents the need for finite elements while optimizing the biharmonic energy and enforcing boundary conditions. The flexibility of our formulation allows us to integrate artistic control through weight painting during the optimization. We offer a thorough qualitative and quantitative evaluation of our method.
