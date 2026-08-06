---
published: 2025-02-13
title: "启动 Interop 2025"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Launching Interop 2025.md"
source_note: "[[信息源/Mozilla Hacks/Launching Interop 2025.]]"
source_sha256: ad3e1805541c851e204a7d7983424ec754874d9e0e8b06f1bf585cc0df609529
original_url: "https://hacks.mozilla.org/2025/02/interop-2025/"
processed: 2026-08-05
language: zh-CN
---

# 启动 Interop 2025

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：James Graham
> - 发布时间：2025-02-13
> - 原文链接：[打开原文](https://hacks.mozilla.org/2025/02/interop-2025/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Launching Interop 2025.|查看原始文件]]

## 摘要

- Interop 项目是浏览器厂商与其他平台实现者之间的协作，为用户与 Web 开发者提供高质量的 Web 平台实现；每年选择一组代表关键领域的重点区域，鼓励所有浏览器引擎优先共同功能；进度经 Interop 仪表板跟踪 web-platform-tests 通过率。
- Interop 2024 成果：Interop 分数（衡量所有主要浏览器引擎通过测试百分比）最新版本达 95%（年初仅 46%），预发布浏览器超 97%；每引擎单独在稳定版 98%、预发布 99%，Firefox 稍领先（release 98.8%、Nightly 99.1%）；requestVideoFrameCallback、Declarative Shadow DOM、Popover 等一年前只有有限可用性的功能现全部浏览器互操作实现。
- Interop 2025：19 个重点区域（17 新 + 2 延续）；从 2024 延续 Layout（实为 Flexbox 与 Grid）与 Pointer and Mouse Events——对现代 Web 基础且重要的平台原语；新区域许多来自开发者明确需求（State of HTML、State of CSS 调查），如 Anchor Positioning 与 View Transitions。
- Storage Access（存储访问）：第三方 cookie 是最常见跨 Web 追踪方法；Firefox 的 Total Cookie Protection 分区存储减少追踪；但 SSO 等非追踪工作流依赖第三方 cookie，Storage Access API 让站点请求未分区 cookie 访问，Interop 让浏览器推进隐私保护不破坏关键功能。
- Web Compat：不只单一标准，聚焦已知破坏站点的浏览器 bug（常是旧平台部分长期不一致）；例 CSS Zoom——原 IE 专有功能，WebKit 逆向带进 Blink，Gecko 从未实现（缺规范与布局计算复杂）；站点使用导致 Firefox 布局问题；2023 年 Google 调查从 Chromium 移除 CSS Zoom 发现某些用例（如 Excel Online 工作表缩放）依赖其特定行为，移除不可行；Chromium 团队提出易实现的标准化模型，被 CSS WG 接受，Firefox 126 首次实现——IE 首发 24 年后。
- WebRTC：视频会议成为现代生活必需，浏览器内视频会议提供易用与高安全性；WebRTC 长期受互操作问题困扰（实现偏离标准、关键功能需非标准扩展）；重点区域主体是 RTCRtpScriptTransform API，实现跨浏览器端到端加密。
- 移除 Mutation Events：首次用 Interop 协调功能移除；mutation events 在 DOM 变化时触发，事件处理运行在 DOM 操作关键路径导致重大性能问题与实现复杂度；虽被所有引擎实现但因问题严重从未标准化，mutation observers 作为标准方案开发；2012 年就提出想终止支持；2024 年 Chromium 确定使用率降至可"弃用试验"水平（默认禁用但允许特定站点限时重新启用）；纳入 Interop 2025 确保 2025 年完全移除，年底减少平台复杂度并改善 Web 性能。
- Interop Investigations：长期互操作改进的调查（不能经测试通过率测量的领域）；Accessibility Investigation（AccessibleNode 原型使可访问性树形状可验证）、Mobile Testing Investigation（把移动测试提升到桌面相当，未来允许移动特定重点区域）。
- 核心：Web 平台独特与区分的特性是其开放标准基础，提供多实现与用户选择；Interop 2025 将交付项目迄今最大互操作胜利。

## 正文

以下是文章全文翻译。

Interop 项目是浏览器厂商与其他平台实现者之间的协作，为用户与 Web 开发者提供高质量的 Web 平台实现。每年我们选择一组代表我们想改善互操作性关键领域的重点区域。鼓励所有浏览器引擎优先共同功能确保它们尽快对 Web 开发者可用。各引擎进度与整体 Interop 分数通过跟踪每重点区域一组 web-platform-tests 的通过率（Interop 仪表板）测量。

**Interop 2024。** 介绍今年新重点区域前，应看看 Interop 2024 的成功。Interop 分数（衡量所有主要浏览器引擎中通过测试百分比）最新浏览器版本达 95%，年初仅 46%。预发布浏览器更高——超 97%。这是巨大胜利，展示 Interop 在让浏览器与规范及彼此对齐上的有效性。每个浏览器引擎单独在稳定版取得 98% 测试通过分数、预发布 99%，Firefox 略领先（release 98.8%、Nightly 99.1%）。对用户，这意味着 requestVideoFrameCallback、Declarative Shadow DOM 与 Popover 等功能一年前只有有限可用性，现在已在所有浏览器互操作实现。

**Interop 2025。** 基于 2024 成功，我们兴奋地把项目推进 2025。今年有 19 个重点区域：17 新 + 2 往年延续。全部重点区域完整描述见 Interop 仓库。从 2024 延续 Layout（实为"Flexbox 与 Grid"）与 Pointer and Mouse Events。这些是 Interop 已带来显著互操作改善的重要平台原语。但对现代 Web 如此基础的技术，我们认为设定雄心目标并持续优先这些区域、为开发者创造坚实地基很重要。新重点区域代表平台广泛横截面。许多——如 Anchor Positioning 与 View Transitions——从 State of HTML 与 State of CSS 等调查的明确开发者需求识别。纳入 Interop 确保它们尽快可用。除这些高知名度新功能，我们想强调一些较少人知的区域并解释为何高兴见到它们入 Interop。

**存储访问。** 在 Mozilla，用户隐私是核心原则。最常见跨 Web 追踪方法之一是第三方 cookie。站点向外部服务请求数据时，服务可存储数据，另一站点使用同一服务时重新发送，从而跨 Web 跟随用户浏览。为应对，Firefox 的"Total Cookie Protection"分区存储，使第三方按站点收到不同 cookie 数据从而减少追踪。其他浏览器也有类似政策（默认或隐私模式）。但某些情况下 SSO 认证等非追踪工作流依赖第三方 cookie。存储分区可破坏这些工作流，浏览器目前须发布站点特定变通。Storage Access API 通过让站点请求未分区 cookie 访问解决。此处的 Interop 将让浏览器推进隐私保护而不破坏关键功能。

**Web Compat。** Web Compat 重点区域在 Interop 中独特。它不关于单一标准，而聚焦已知破坏站点的浏览器 bug。这些常在平台较旧部分、有长期不一致。解决需对齐实现与标准，或标准会破坏站点时更新标准本身。2025 年 Web Compat 区域一个功能是 CSS Zoom。它原是 Internet Explorer 专有功能，在 CSS transforms 之前时代通过调整元素计算维度缩放布局。WebKit 逆向工程带进 Blink，但 Gecko 从未实现，因缺规范及其在布局计算中创造的复杂性。不幸的是功能未标准化不妨碍开发者使用。CSS Zoom 的使用导致 Firefox 一些站点布局问题，尤其移动端。我们尝试各种变通，用干预把某些受影响站点 zoom 替换为 CSS transforms 获得成功，但直接在 Gecko 实现同样方法的尝试修坏的比修好的多，被放弃。情况看似僵局，直到 2023 年 Google 调查从 Chromium 移除 CSS Zoom。不幸的是某些用例（如 Microsoft Excel Online 的工作表缩放）依赖 CSS Zoom 特定行为，移除不可行。但澄清用例后，Chromium 团队能提出易实现且不损兼容性的 CSS Zoom 标准化模型。提案被 CSS WG 接受，带来 Firefox 126 首次实现——IE 首发 24 年后。随 Interop 2025，我们希望以所有引擎最终收敛于同一行为、由真正开放标准支撑来结束 CSS Zoom 的故事。

**WebRTC。** 视频会议现在是现代生活必需功能，浏览器内视频会议提供易用与高安全性，用户无需下载原生二进制。多数基于 Web 的视频会议依赖 WebRTC API，它为实现实时通信提供高层工具。但 WebRTC 长期受互操作问题困扰，实现偏离标准、关键功能需要非标准扩展，导致用户困惑与挫败，削弱 Web 作为原生应用可靠替代的信任。鉴于这段历史，我们兴奋见到 WebRTC 首次进入 Interop。重点区域主体是 RTCRtpScriptTransform API，实现跨浏览器端到端加密。虽然未来还有更多要做，我们相信 Interop 2025 将是让 WebRTC 成为真正互操作 Web 标准的巨大一步。

**移除 Mutation Events。** 移除 Mutation Events 的重点区域是 Interop 首次用于协调功能移除。Mutation events 在 DOM 变化时触发，意味着事件处理器运行在 DOM 操作关键路径上，造成重大性能问题与显著实现复杂度。尽管所有引擎实现，它们问题如此严重以致从未标准化。相反，mutation observers 作为 mutation events 用例的标准方案开发，无其复杂度与性能问题。mutation observers 实现后几乎立即提交了 Gecko bug："我们现在有 mutation observers，真想在某个时候终止 mutation events 支持。可能还要一段时间。"那是 2012 年。困难在于 Web 对向后兼容的核心承诺。移除人们依赖的功能不可接受。但去年 Chromium 确定 mutation events 使用率降至可允许"弃用试验"的水平——默认禁用，但允许特定站点限时重新启用。这是好消息，但长期弃用试验可给其他浏览器制造问题。完全禁用功能可破坏依赖退出机制的站点；另一方面经验告诉我们有些站点在禁用 mutation events 的浏览器中实际工作更好（如用于非关键功能但影响性能）。把此移除纳入 Interop 2025，我们可确保 mutation events 在 2025 年完全移除，年底减少平台复杂度并改善 Web 性能。

**Interop 调查。** 除重点区域外，Interop 项目还运行面向无法用测试通过率测量进度的长期互操作改善调查。例如调查可寻求添加新测试能力或增加平台功能测试覆盖。**无障碍调查**：无障碍测试始于 Interop 2023，添加了测试可访问名称与计算角色的 API 与 1000+ 新测试，形成 2024 年达到 99.7% Interop 分数的无障碍重点区域。2025 年聚焦扩展无障碍功能的可测试性。Mozilla 正开发 AccessibleNode 原型——验证可访问性树形状及其状态属性的 API，允许测试 CSS display: contents 或 ::before/::after 等功能对可访问性树的影响。**移动测试调查**：今天所有 Interop 重点区域在桌面浏览器评分。但有些功能移动特定或移动独有的互操作挑战。改善移动测试自 2023 年成为 Interop 部分，期间我们在 web-platform-tests CI 系统搭建移动浏览器方面取得显著进展。今天我们在 Android 上可靠运行 Chrome 与 Firefox Nightly，Safari iOS 运行预期很快。但测试框架某些部分设计带桌面特定假设，因此 2025 年聚焦把移动测试提升到桌面相当，目标是允许未来 Interop 项目有移动特定重点区域，帮助改善所有设备类型互操作性。

**驱动 Web 前进。** Web 平台独特与区分的特性是其开放标准基础，提供多实现与用户选择。经 Interop 项目，Web 平台实现者协作确保这些核心优势与跨浏览器无缝用户体验匹配。重点区域覆盖现代 Web 一些最重要新旧领域，Interop 2025 将交付项目迄今最大互操作胜利。我们相信 Firefox 与其他浏览器将迎接挑战，为用户与开发者提供更一致可靠的 Web 平台。

## 关键词

#Interop #Web平台 #互操作性 #浏览器 #标准
