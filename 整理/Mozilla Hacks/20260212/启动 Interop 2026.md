---
published: 2026-02-12
title: "启动 Interop 2026"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Launching Interop 2026.md"
source_note: "[[信息源/Mozilla Hacks/Launching Interop 2026.]]"
source_sha256: 5a4a849df8b05560b4ec35acfdc8270dfe2d399117324fe5220353455ec52283
original_url: "https://hacks.mozilla.org/2026/02/launching-interop-2026/"
processed: 2026-08-05
language: zh-CN
---

# 启动 Interop 2026

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Jake Archibald
> - 发布时间：2026-02-12
> - 原文链接：[打开原文](https://hacks.mozilla.org/2026/02/launching-interop-2026/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Launching Interop 2026.|查看原始文件]]

## 摘要

- Interop 项目是改善 Web 兼容性的跨浏览器倡议，在对用户与开发者最受益的领域；成员（Apple、Google、Igalia、Microsoft、Mozilla）接收规范稳定且测试覆盖良好的功能提案，按 Web 开发者优先级（调查与 bug 报告）与集体资源平衡选出子集。
- Interop 2025 回顾：Firefox 以 46 分开始、以 99 结束；整体 Interop 分数从 25 到 95；Same-Document View Transitions、CSS Anchor Positioning、Navigation API、CSS @scope 与 URLPattern API 等大功能跨浏览器可用；还改善 WebRTC、Flexbox、Grid、Pointer Events、backdrop-filter 等现有功能可靠性。
- 不止通过测试：有些区域（CSS Anchor Positioning、Navigation API）测试高分但行为与其他浏览器不一致——缺测试或测试与规范矛盾（针对特定实现而非规定行为编写）；Mozilla 向相关规范提 issue 确保工作组优先，规范更少歧义、测试改善、浏览器行为更可靠。
- Interop 2026：收到 150+ 提案；Mozilla 还邀请开发者对提案排序（interop-rank），结果与其他数据结合比较开发者偏好；最终 20 个重点区域（33 提案）与 4 个调查区域。
- 新功能：跨文档 View Transitions（含 rel="expect" 与 blocking="render"）；滚动驱动动画；WebTransport（HTTP/3 低层 API、多单向流、可选乱序交付，WebSockets 现代替代）；CSS 容器样式查询；Wasm 的 JS Promise 集成（异步挂起等待外部 promise）；CSS attr() 扩展（属性值用于多数 CSS 值）；CSS 自定义高亮；作用域自定义元素注册表；CSS shape()（path() 重新构想，CSS 语法支持混合单位与 calc()）；还有 CSS contrast-color、accent-color、dialog closedby、popover="hint"、fetch 上传流、IDB getAllRecords()、:playing 等媒体伪类、Navigation API precommitHandler。
- 现有功能可靠性改善：Range 头与 fetch 表单数据、Navigation API、CSS scroll snap、CSS anchor positioning、同文档 View Transitions、JS 顶层 await、事件循环、WebRTC、CSS user-select、CSS zoom——这些边缘情况让开发者损失数小时。
- Interop 调查：无障碍（一致的可访问性树，先改善测试基础设施）、移动测试（动态 UI 引起的视口变化，如地址栏与虚拟键盘）、JPEG XL（当前测试稀疏，渐进渲染如何何时做正在辩论）、WebVTT（审查测试套件确保适用）。
- 更多工作承诺：作为唯一不归亿万富翁所有的引擎是挑战但乐于接受；JPEG XL 未入 Interop 2026 不代表不工作——Mozilla 挑战 Google Research JPEG XL 团队构建 Rust 内存安全解码器，正在 Firefox 与 Chrome 实验。
- Interop 不是工作上限，但是跨浏览器承诺；关注各浏览器进度见 Interop 仪表板。

## 正文

以下是文章全文翻译。

Interop 项目是改善 Web 兼容性的跨浏览器倡议，聚焦对用户与开发者最受益的领域。小组（包括 Apple、Google、Igalia、Microsoft 与 Mozilla）接收在充分稳定 Web 标准中定义良好、测试套件覆盖良好的功能提案。然后我们提出平衡 Web 开发者优先级（经调查与 bug 报告）与集体资源的提案子集。我们聚焦在 Web Platform Tests 中表现良好的功能，因为通过率是我们测量进度的方式，可在 Interop 仪表板跟踪。一旦商定重点区域集，全年用这些测试跟踪各浏览器进度。之后再来一遍！但在谈 2026 前，先回顾 Interop 2025……

**Interop 2025。** Firefox 以 46 分开始 Interop 2025，因此我们非常自豪以 99 结束本周期。但真正重要的数字是整体 Interop 分数——所有四浏览器的合并分数——数字越高，开发者损失于恼人浏览器差异的工时越少。整体 Interop 分数从 25 开始，现为 95。结果，Same-Document View Transitions、CSS Anchor Positioning、Navigation API、CSS @scope 与 URLPattern API 等巨大 Web 平台功能跨浏览器可用。那是吸引眼球的，但以我的经验，更令人沮丧的是功能被宣称支持却不按预期工作。因此 Interop 2025 也聚焦改善现有功能可靠性：WebRTC、CSS Flexbox、CSS Grid、Pointer Events、CSS backdrop-filter 等。

**但不止通过测试。** 有些重点区域（尤其 CSS Anchor Positioning 与 Navigation API），我们注意到可能测试取得好分数却与其他浏览器行为不一致。有些情况因缺测试，有些测试与规范矛盾。这通常发生在测试针对特定实现而非规定行为编写时。加入 Mozilla 前我亲身经历：CSS Anchor Positioning 只在 Chrome 与 Safari 发布时我就试过，即使简单用例结果也极度不一致。虽然这导致这些功能在 Firefox 落地延迟，我们花时间向相关规范提 issue 突出这些问题，并确保它们在工作组获得优先。结果：规范更少歧义、测试改善、开发者浏览器行为更可靠。好，回顾够了。继续……

**Interop 2026。** Interop 2026 收到 150 多份提案。我们审视开发者反馈（issue 本身）与 State of HTML、State of CSS 等开发者调查。作为 2026 实验，我们 Mozilla 还邀请开发者对提案排序（interop-rank），结果与其他数据结合比较功能间开发者偏好——这是我们未来想扩展的。仔细审查所有提案后，Interop 小组商定 20 个重点区域（由 33 个提案组成）与 4 个调查区域。完整列表见 Interop 仓库，以下是亮点：

**新功能。** 与 2025 一样，部分工作是把新功能带给所有浏览器引擎。跨文档 View Transitions 让转换跨文档工作，无需任何 JavaScript；子功能 rel="expect" 与 blocking="render" 包含在本区域。滚动驱动动画允许基于用户滚动位置驱动动画，替换主线程运行的重 JS 方案。WebTransport 提供 HTTP/3 上的低层 API，允许多个单向流与可选乱序交付，是 WebSockets 的现代替代。CSS 容器样式查询允许根据最近容器上自定义属性的计算值应用样式块——例如简单的 --theme 属性影响一系列其他属性。JavaScript Promise Integration for Wasm 允许 WebAssembly 异步"挂起"，等待外部 promise 结果，简化期望 API 同步运行的 C/C++ 等语言编译。CSS attr() 跨浏览器支持超 15 年，但只用于伪元素内容。Interop 2026 我们聚焦允许属性值用于多数 CSS 值（URL 例外）的近期变更。CSS 自定义高亮允许把一组 DOM 范围注册为命名高亮，经 ::highlight(name) 伪元素样式化；样式受限，但意味着这些范围可跨元素、不影响布局、不干扰文本选择。作用域自定义元素注册表允许 DOM 树不同部分（如 shadow root）使用不同自定义元素定义集，同一标签名可依 DOM 位置指不同自定义元素。CSS shape() 是 path() 的重新构想，不用 SVG 路径语法而用 CSS 语法，支持混合单位与 calc()，实践上让响应式 clip-path 与 offset-path 设计容易得多。还有 CSS contrast-color、accent-color、dialog closedby、popover="hint"、fetch 上传流、IDB getAllRecords()、:playing 等媒体伪类、Navigation API 的 precommitHandler 等。

**现有功能可靠性改善。** 与前几年一样，Interop 骨干在改善现有功能可靠性、移除 Web 开发者挫败。2026 年我们聚焦这些特定边缘情况：fetch 中 Range 头与表单数据；Navigation API；CSS scroll snap；CSS anchor positioning；同文档 View Transitions；JavaScript 顶层 await；事件循环；WebRTC；CSS user-select；CSS zoom。其中一些从 2025 区域延续，因测试与规范缺陷已修复但太晚未纳入 Interop 2025。再说一次，这些比闪亮新功能吸引力低，但正是这些边缘情况让我们 Web 开发者损失数小时。令人沮丧、令人沮丧的数小时。

**Interop 调查。** 有时我们看到明显重要但不符 Interop 要求的重点区域提案。通常因功能测试不足、格式错误或浏览器缺使功能可测试的自动化功能。这些情况我们识别缺什么并设立调查区域。Interop 2026 我们关注：**无障碍**——2025 工作延续，最终想让浏览器从相同 DOM 与 CSS 产生一致可访问性树，但写测试前需改善测试基础设施。**移动测试**——又一个 2025 延续，尤其 2026 想找出测试动态 UI（如地址栏与虚拟键盘）引起视口变化的方法。**JPEG XL**——当前测试稀疏；现有解码器测试套件更全面，但需弄清与浏览器关系，例如渐进渲染对开发者重要，但浏览器应如何何时做（避免性能问题）正在辩论。**WebVTT**——允许文本与视频内容同步的功能；调查是审查测试套件确保适用并按需修订。

**再次开始。** 选定的重点区域意味着相比其他浏览器我们承诺了更多工作，作为唯一不归亿万富翁所有的引擎是相当大的挑战。但这是我们乐于接受的挑战！与 Interop 小组其他成员一起，我们期待未来一年交付功能与修复。可在 Interop 仪表板跟进所有浏览器进度。如果你最爱的功能缺席 Interop 2026，那不代表不会开展工作。JPEG XL 是好例子。当前测试套件意味着它不适合 Interop 2026，但我们已经挑战 Google Research 的 JPEG XL 团队构建 Rust 内存安全解码器，目前在 Firefox 与 Chrome 中实验。Interop 不是我们工作上限，但是跨浏览器承诺。若想了解功能落地 Firefox 的细节与规范小组对未来功能的讨论，可关注我们的社交账号。

## 关键词

#Interop #Web平台 #浏览器 #互操作性 #2026
