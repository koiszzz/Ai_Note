---
published: 2024-08-07
title: "宣布 Firefox 的官方 Puppeteer 支持"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Announcing Official Puppeteer Support for Firefox.md"
source_note: "[[信息源/Mozilla Hacks/Announcing Official Puppeteer Support for Firefox.]]"
source_sha256: e51c2c1c6162cd625f2f5758338f37a7db08138bb781ea1a1aa33e8274bca0b7
original_url: "https://hacks.mozilla.org/2024/08/puppeteer-support-for-firefox/"
processed: 2026-08-05
language: zh-CN
---

# 宣布 Firefox 的官方 Puppeteer 支持

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：James Graham
> - 发布时间：2024-08-07
> - 原文链接：[打开原文](https://hacks.mozilla.org/2024/08/puppeteer-support-for-firefox/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Announcing Official Puppeteer Support for Firefox.|查看原始文件]]

## 摘要

- 自版本 23 起，Puppeteer 浏览器自动化库对 Firefox 有一等公民支持：可轻松编写自动化与端到端测试并同时针对 Chrome 与 Firefox 运行。
- 使用方法：启动时设 browser: "firefox" 即可；与 Chrome 一样，Puppeteer 能下载并启动最新稳定版 Firefox。
- Firefox 支持不基于 Firefox 特定自动化协议，而基于 WebDriver BiDi——一个正在 W3C 标准化的跨浏览器协议，Gecko 与 Chromium 都有实现；跨浏览器协议让未来支持更多浏览器更容易。
- 关键功能：日志消息捕获（事件型协议无需轮询）、设备仿真（如 Pixel 5 视口与 DPR）、网络拦截（阻断第三方请求、mock 响应、处理 HTTP 认证、增删请求头）、预加载脚本（页面加载前运行、避免页面脚本与注入脚本竞争、可自定义事件）。
- 技术背景：经典 W3C WebDriver 基于 HTTP、发送命令等待响应，无法获得事件（如 console 日志）或并发运行多命令；浏览器特定 API（CDP、RDP）功能强但每浏览器一套；WebDriver BiDi 把此前限于浏览器特定协议的自动化功能带到标准化协议，类似 LSP 对编辑器的意义。
- Firefox 移除实验性 CDP 支持：早期部分 CDP 实现未维护且与现代功能（如站点隔离）不兼容，计划 2024 年底移除；正在用 CDP 的用户可联系 Mozilla 迁移到 WebDriver BiDi。
- 未支持 API 分三类：高度 CDP 特定 API（CDPSession）、需进一步标准工作（如 accessibility.snapshot、setGeolocation）、有标准但未实现（如 worker 脚本执行）。
- 反馈渠道：Bugzilla、Puppeteer issue tracker、W3C webdriver-bidi GitHub、Matrix #webdriver。

## 正文

以下是文章全文翻译。

我们很高兴地宣布，自版本 23 起，Puppeteer 浏览器自动化库对 Firefox 有一等公民支持。这意味着现在可以轻松使用 Puppeteer 编写自动化与端到端测试，并同时针对 Chrome 与 Firefox 运行。

**如何将 Puppeteer 与 Firefox 一起使用。** 入门只需在启动 Puppeteer 时设置 product 为 "firefox"：`const browser = await puppeteer.launch({ browser: "firefox" });` 与 Chrome 一样，Puppeteer 能够下载并启动最新稳定版 Firefox，因此针对任一浏览器运行都应提供 Puppeteer 用户所期望的开发体验。虽然 Puppeteer 提供的功能并不令人意外，但为多个浏览器带来支持是一项重大工程。Firefox 支持不基于 Firefox 特定的自动化协议，而是基于 WebDriver BiDi——一个正在 W3C 标准化的跨浏览器协议，目前在 Gecko 与 Chromium 都有实现。使用跨浏览器协议应使未来支持许多不同浏览器容易得多。稍后我们深入 WebDriver BiDi 的一些技术背景，但首先想指出今天的公告是富有成效的协作如何推进 Web 前沿的绝佳示范。开发新浏览器自动化协议是大量工作，非常感谢 Puppeteer 团队与 W3C 浏览器测试与工具工作组其他成员为走到这一步付出的努力。你也可以查看 Puppeteer 团队关于使 WebDriver BiDi 生产就绪的文章。

**关键功能。** 对长期 Puppeteer 用户，可用功能很熟悉。但对其他自动化与测试生态的人——尤其那些直到最近完全依赖基于 HTTP 的 WebDriver 的人——本节概述 WebDriver BiDi 使跨浏览器实现成为可能的一些新功能。**日志消息捕获**：测试 Web 应用常见需求是确保控制台没有意外错误。事件型协议在这里大放异彩，避免轮询浏览器获取新日志消息（示例监听 page 'console' 事件）。**设备仿真**：测试响应式布局时需确保多屏幕尺寸与设备像素比下工作良好，可用真实移动浏览器或桌面模拟视口（示例用 Puppeteer.KnownDevices["Pixel 5"] 仿真 393x851、dpr=3、mobile=true）。**网络拦截**：跟踪与拦截网络请求，避免测试中请求第三方服务并提供 mock 响应数据、处理 HTTP 认证对话框、覆盖请求响应部分（如增删头）（示例拦截所有 .woff2 请求）。**预加载脚本**：WebDriver 一直允许注入脚本，但无法保证注入脚本在页面开始加载前运行，造成页面脚本与注入脚本竞争；WebDriver BiDi 提供"预加载"脚本，可搭配自定义事件（示例用 MutationObserver 等待 <title> 元素出现）。

**技术背景。** 直到最近，想自动化浏览器的人有两个主要选择：W3C WebDriver API（基于 Selenium 早期工作）；或每浏览器特定 API（Chromium 的 CDP、Gecko 的 RDP）。两个选项都有重大权衡。"经典"WebDriver 基于 HTTP，模型是发送命令等响应；对加载页面后验证元素显示的自动化很好，但无法从浏览器获得事件（如 console 日志）或并发运行多命令，不适合高级用例。相反，浏览器特定 API 通常围绕支持浏览器内 devtools 的复杂用例设计，功能远超 WebDriver。因此浏览器自动化客户端被迫在"用单一协议支持多浏览器但功能有限"与"功能丰富但每浏览器实现多协议"之间选择。这增加出色跨浏览器自动化的成本与复杂度，而开发者常把跨浏览器测试列为 Web 开发主要痛点。长期开发者可能注意到这与 Language Server Protocol（LSP）出现前编辑器状况的类比：当时每个编辑器须为每种语言实现专属支持；LSP 提供可由任意编辑器与语言组合支持的公共协议。TypeScript 只需提供 LSP 服务器即自动被所有支持 LSP 的编辑器支持，甚至催生 Tailwind 自己的 LSP 实现。为改善跨浏览器自动化我们采取类似方法：开发 WebDriver BiDi，把此前限于浏览器特定协议的自动化功能带到可由任何浏览器实现、供任何语言自动化工具使用的标准化协议。在 Mozilla 我们视这种标准化协议以消除进入壁垒、让多样互操作实现生态繁荣、让用户选择最适合需求方案的策略为宣言与 Web 愿景关键部分。

**移除 Firefox 中的实验性 CDP 支持。** 作为早期跨浏览器测试工作一部分，我们发布了 CDP 部分实现，限于支持测试用例的少量命令与事件。这曾是 Puppeteer 中 Firefox 实验性支持的基础。但一旦清楚这不是跨浏览器自动化的前进方向，相关工作停止，因此未维护且与现代 Firefox 功能（如站点隔离）不兼容，支持计划 2024 年底移除。若你正用 CDP 与 Firefox 且不知如何迁移到 WebDriver BiDi，请用文末渠道联系我们讨论需求。

**接下来是什么？** 虽然 Firefox 现获 Puppeteer 官方支持且功能足以覆盖许多自动化与测试场景，仍有未支持 API，大致三类：高度 CDP 特定 API（尤其 CDPSession 模块，不太可能直接支持，但具体用例可成为标准化候选）；需进一步标准工作的 API（如 accessibility.snapshot 返回 Chromium 可访问性树转储，因无标准化描述难以跨浏览器；也有更直接仅需 WebDriver BiDi 规范工作的如 setGeolocation）；有标准但未实现（如 WebWorker.evaluate 所需 worker 脚本执行）。我们期待未来填补这些空白。为帮助排定优先级，欢迎反馈：请尝试在 Firefox 运行 Puppeteer 测试！若因 bug 或缺失功能无法运行，请告知我们。Firefox 实现 bug 请报 Bugzilla（Remote Protocol > WebDriver BiDi）；确信在 Puppeteer 请报其 issue tracker；WebDriver BiDi 规范缺失功能请报 W3C GitHub；想讨论用例或需求请用 Mozilla Matrix 的 #webdriver 频道或邮件。

## 补充：关键功能的代码示例详解

以下为原文中各关键功能的完整代码示例与输出说明的翻译。

**日志消息捕获示例。** 启动时设置 browser 为 "firefox"，创建页面后通过 page.on('console', ...) 注册控制台消息监听器，用模板字符串输出消息类型与文本（`[console] ${msg.type()}: ${msg.text()}`）；随后用 page.evaluate 在页面内执行 console.debug('Some Info') 触发监听，输出为 `[console] debug: Some Info`。这类事件驱动方式无需轮询浏览器即可即时获得日志，是事件型协议优于轮询式 HTTP WebDriver 的典型体现。

**设备仿真示例。** 从 puppeteer.KnownDevices["Pixel 5"] 取预定义的 Pixel 5 设备描述，启动 Firefox 后调用 page.emulate(device) 应用仿真，再通过 page.viewport() 读取当前视口，输出 `[emulate] Pixel 5: 393x851 (dpr=3, mobile=true)`——视口宽高 393x851、设备像素比 3、移动模式开启。此后 page.goto 加载的页面（示例为 https://www.mozilla.org）将以该移动视口渲染。

**网络拦截示例。** 调用 page.setRequestInterception(true) 开启请求拦截，注册 page.on("request") 监听：若请求 URL 包含 ".woff2" 则打印 `[intercept] Request aborted: <url>` 并调用 request.abort() 阻断（用于模拟自定义字体加载失败不影响布局的场景），否则 request.continue() 放行；随后 page.goto("https://support.mozilla.org") 打印 `[navigate] status=200 url=...` 确认页面正常加载。

**预加载脚本示例。** 通过 page.exposeFunction("sendMessage", ...) 暴露从页面回调 Node 侧的函数，用 page.evaluateOnNewDocument 注册在每次新文档加载前运行的脚本：脚本内创建 MutationObserver 监听 documentElement 的 childList 变化，当检测到 TITLE 节点加入时调用 sendMessage(node.textContent)；等待 Promise 解析后关闭浏览器，输出 `[script] Message from pre-load script: Mozilla Support`。这展示了 WebDriver BiDi 预加载脚本如何在页面加载前注入逻辑并避免与页面脚本的竞争条件，还可经自定义事件避免轮询等待元素出现。

**WebDriver BiDi 与经典 WebDriver 的关系。** 经典 W3C WebDriver API 基于早期 Selenium 项目工作，其 HTTP 请求—响应模型适合"加载页面后验证某元素显示"的场景，但无法从浏览器推送事件（如 console 日志）或并发执行多个命令。浏览器特定协议（Chromium 的 CDP 与 Firefox 的 RDP）围绕浏览器内开发者工具复杂用例设计，功能远超 WebDriver，但每个浏览器一套、互不通用。开发者因此被迫二选一：单协议多浏览器但功能受限，或功能丰富但需为每个浏览器单独实现协议——这显著增加出色跨浏览器自动化的成本与复杂度，而开发者普遍将跨浏览器测试列为 Web 开发最大痛点之一。此困境与 Language Server Protocol（LSP）出现前的编辑器生态高度相似：彼时每个编辑器须为每种语言实现专属支持，新语言（如当年的 TypeScript）须逐个说服编辑器支持；LSP 提供公共协议后，TypeScript 只需提供 LSP 服务器即自动获得所有支持 LSP 编辑器的支持，甚至催生 Tailwind 等库自身的 LSP 实现以提供专属编辑器功能。WebDriver BiDi 正是这一思路在浏览器自动化领域的应用：把此前仅存在于浏览器特定协议的自动化功能带到一个标准化协议，任何浏览器都可实现、任何语言与工具都可使用。Mozilla 将这种以标准化协议消除进入壁垒、培育多样化互操作实现生态、让用户选择最适合自身需求的方案，视为其宣言与 Web 愿景中开放性的关键组成部分。关于 WebDriver BiDi 设计及其与经典 WebDriver 关系的更多细节，可参阅 Mozilla 2020 年与 2021 年发布的跨浏览器测试系列文章。

**移除 CDP 的进一步说明。** Firefox 中早期 CDP 支持是改善跨浏览器测试工作的部分成果，只实现了测试用例所需的少量命令与事件。一旦明确这不是跨浏览器自动化的正确方向，相关投入即告停止；该实现因此无人维护，与站点隔离等现代 Firefox 特性不兼容，官方计划在 2024 年底移除。仍在使用 CDP 的 Firefox 用户应尽早规划向 WebDriver BiDi 迁移，如有疑问可通过文末列出的渠道与 Mozilla 联系。

**Puppeteer 文档对照。** 完整的未支持 API 清单见 Puppeteer 官方文档的 WebDriver BiDi 页面。三类缺口分别对应：CDPSession 等高度 CDP 特定的模块（直接支持可能性低，但依赖它们的具体用例可能值得标准化）；accessibility.snapshot（返回 Chromium 可访问性树转储，因当前无跨浏览器标准化的树形描述而难以实现）与 setGeolocation（仅需 WebDriver BiDi 规范本身工作）等需进一步标准工作的 API；以及 WebWorker.evaluate 等有标准但尚未实现的 API（需要在工作线程中执行脚本的能力）。Mozilla 将在后续填补这些空白，并邀请开发者用 Bugzilla、Puppeteer issue tracker、W3C webdriver-bidi GitHub 仓库与 Matrix #webdriver 频道反馈实际使用中遇到的 bug 与需求，以便将其纳入未来标准与实现工作的优先级规划。

## 关键词

#Puppeteer #Firefox #WebDriver-BiDi #浏览器自动化 #跨浏览器测试
