---
title: "为什么 WebAssembly 是 Web 上的二等语言？"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Why is WebAssembly a second-class language on the web-.md"
source_note: "[[信息源/Mozilla Hacks/Why is WebAssembly a second-class language on the web-.]]"
source_sha256: d9ca2867741b617a82c56c74ba7bb79342859aa5d448d23640f41b6a88a2aa4e
original_url: "https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/"
published: 2026-02-26
processed: 2026-08-05
language: zh-CN
---

# 为什么 WebAssembly 是 Web 上的二等语言？

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Ryan Hunt
> - 发布时间：2026-02-26
> - 原文链接：[打开原文](https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Why is WebAssembly a second-class language on the web-.|查看原始文件]]

## 摘要

- 本文是作者在 2025 慕尼黑 WebAssembly CG 会议演讲的扩展版。WebAssembly 自 2017 年首发以来长足进步：首版已适合 C/C++ 等底层语言，此后 CG 大幅扩展核心能力——共享内存、SIMD、异常处理、尾调用、64 位内存、GC 支持，以及批量内存指令、多返回值、引用值等小改进；还有更多重要工作要做（栈切换、改进线程），但 Wasm 已在许多方面缩小与原生差距。
- 核心问题：Wasm 是 Web 上的二等语言——尽管有所有新语言功能，它与 Web 平台的集成不够紧密，导致糟糕开发者体验，开发者只在其绝对需要时用 Wasm；用户倾向大型公司，限制 Wasm 惠及更广 Web 社区。
- 二等地位的两大特殊能力差距：(1) 代码加载——JS 加载只需 script 标签；Wasm 不支持 script 标签需用 WebAssembly JS API 手动加载实例化（晦涩 API 序列、多种方式、权衡不清）；esm-integration 提案（bundlers 已实现、Firefox 积极实现）允许用熟悉 JS 模块系统导入、及 type="module" 直接 script 标签加载；(2) 使用 Web API——JS 单行 console.log；Wasm 无直接 Web API 访问必须用 JS：需创建内存、包装 console.log 解码字符串、作为 import 传入；这类"绑定"或"胶水代码"繁琐公式化难写，通常用 embind 或 wasm-bindgen 生成；胶水还有运行时成本（JS 对象分配垃圾收集、字符串重新编码、结构反序列化）。
- 为何重要：技术现状可行、许多人成功交付软件；但从普通 Web 开发者视角现状次优——Wasm 太复杂，开发者总觉得二等体验；Wasm 是高级用户功能，普通开发者不用，即使对项目是更好技术选择。JS 起步有渐进的缓曲线；Wasm 起步立即要爬"墙"（把许多不同部分组合工作），最终结果常只对大项目值。
- 五个原因：(1) 编译器难提供一等 Web 支持——不能只生成 Wasm 文件还须生成伴随 JS 文件（加载、Web API 访问、长尾问题），每种语言重做、不能复用于非 Web 平台；Clang/LLVM 不想知道 JS 或 Web 平台，只想生成单一二进制（理想标准化格式也用于非 Web 平台）。(2) 标准编译器不产生 Web 可用的 Wasm——Web 支持常由用户需找与学的第三方非官方工具链分发处理；用户假设 rustc --target=wasm 就能浏览器加载，能得文件但无平台集成、神秘失败；真需要实现平台集成的非官方工具链分发。(3) Web 文档为 JS 开发者编写——MDN 文档优秀但多为 JS 写，不懂 JS 更难理解 Web API；开发者须先以 JS 视角理解再翻译成源语言类型 API，工具链开发者手动翻译繁琐易错不扩展。(4) 调用 Web API 仍可慢——console.log 单次调用胶水代码大量开销；引擎大量优化（js-string-builtins、custom-descriptors 进行中）但问题仍存在；2020 年实验（TodoMVC + Dodrio）测量 JS 胶水开销：移除 JS 胶水后应用 DOM 变更时长降 45%——DOM 操作本已昂贵，Wasm 用户不能承受 2x 性能税，实验证明可移除开销。(5) 总需理解 JS 层——"抽象总在泄漏"：Wasm 状态是每语言用 JS 构建自己的 Web 平台抽象，这些抽象泄漏；认真用 Wasm 终会需读写 JS；增加概念层负担，让人感觉知道源语言与 Web 平台就该够。
- 如何修复：理想存在标准化自包含可执行工件、多语言工具链支持、处理 Wasm 代码加载链接、支持 Web API 使用——语言生成工件、浏览器运行，无需 JS；可共享内置于浏览器的共同集成而非每语言重实现 Web 平台集成。已有多年开发的提案：WebAssembly Component Model（自 2021 开发、标准轨提案）。
- 什么是 Component：定义由底层 Wasm 代码捆绑实现的高层 API；今天已可从多种语言创建、多种运行时执行（浏览器内 polyfill）、链接实现跨语言代码复用、允许 Wasm 直接调用 Web API。
- 工作原理示例：console.log 无 JS——WIT IDL 导入 std:web/console 接口；Rust 程序 use std::web::console 编译为 Component；script type="module" 加载，浏览器自动加载绑定原生 Web API 直接运行。混合应用：导出 image-lib 组件（记录 pixel、resource image 带 from-stream/get 方法），JS 端 import { Image } from "image-lib.wasm" 即可用。
- 下一步：Mozilla 与 WebAssembly CG 合作设计 Component Model，Google 也在评估；可学习构建首个组件用 Jco（浏览器）或 Wasmtime（命令行）；工具重开发中欢迎贡献反馈。WebAssembly 自 2017 走得很远，若能把它从"高级用户"功能变成普通开发者受益的东西，最好还在后头。

## 正文

以下是文章全文翻译。

本文是我在 2025 慕尼黑 WebAssembly CG 会议演讲的扩展版。WebAssembly 自 2017 年首次发布以来长足进步。第一版 WebAssembly 已非常适合 C 与 C++ 等底层语言，立即让许多新型应用高效地以 Web 为目标。此后 WebAssembly CG 大幅扩展语言核心能力，添加共享内存、SIMD、异常处理、尾调用、64 位内存与 GC 支持，外加批量内存指令、多返回值与引用值等许多小改进。这些添加让更多语言能高效以 WebAssembly 为目标。还有重要工作要做，如栈切换与改进线程，但 WebAssembly 已在许多方面缩小与原生差距。然而，仍感觉缺了什么东西，阻碍 WebAssembly 在 Web 上更广泛采用。原因多重，但核心问题是 WebAssembly 是 Web 上的二等语言。尽管有所有新语言功能，WebAssembly 仍未像应有那样紧密集成进 Web 平台。这导致糟糕开发者体验，推动开发者只在绝对需要时用 WebAssembly。通常 JavaScript 更简单且"够好"。这意味着其用户趋向于有足够资源证明投资合理的大型公司，从而把 WebAssembly 好处限于更大 Web 社区的一小部分。解决此问题很难，CG 一直聚焦扩展 WebAssembly 语言。现在语言显著成熟，该仔细看看这个了。我们深入问题，再谈 WebAssembly Components 如何改善。

**什么使 WebAssembly 二等？** 高层看，Web 平台脚本部分分层如下：WebAssembly 可直接与 JavaScript 交互，JavaScript 可直接与 Web 平台交互。WebAssembly 可访问 Web 平台，但只能借助 JavaScript 的特殊能力。JavaScript 是 Web 一等语言，WebAssembly 不是。这不是刻意或恶意设计决定；JavaScript 是 Web 原始脚本语言、与平台共同演化。但此设计显著影响 WebAssembly 用户。JavaScript 这些特殊能力是什么？今天讨论两大：代码加载与使用 Web API。

**代码加载。** WebAssembly 代码加载不必要地笨重。加载 JS 代码简单到放进 script 标签：`<script src="script.js"></script>`。WebAssembly 今天不支持 script 标签，开发者需用 WebAssembly JS API 手动加载与实例化代码：fetch bytecode、构造 imports、await WebAssembly.instantiateStreaming。要用的确切 API 调用序列晦涩难懂，有多种执行方式、各有对多数开发者不清楚的权衡。此过程通常只能记忆或由工具为你生成。幸好有 esm-integration 提案，bundlers 已实现、我们正积极在 Firefox 实现。此提案让开发者用熟悉 JS 模块系统从 JS 代码导入 WebAssembly 模块：`import { run } from "/module.wasm"`。还允许 WebAssembly 模块用 type="module" 直接从 script 标签加载：`<script type="module" src="/module.wasm"></script>`。这精简加载与实例化 WebAssembly 模块最常见模式。但虽然缓解初始困难，我们很快撞上真问题。

**使用 Web API。** 从 JavaScript 用 Web API 简单到：`console.log("hello, world")`。对 WebAssembly 情况复杂得多。WebAssembly 无直接 Web API 访问，必须用 JavaScript 访问它们。同一单行 console.log 程序需要以下 JavaScript 文件：创建 WebAssembly.Memory（需要原始内存访问）、包装函数 consoleLog 解码字符串（Wasm 内存存字符串，DOM API 需 JS 字符串，用 TextDecoder 解码）、把包装 Web API 经 import 传给 Wasm 代码、Wasm 端 import 内存与 consoleLog 函数、导出 run 函数在 Wasm 内存创建字符串并调用 consoleLog。这类代码称"绑定"或"胶水代码"，充当源语言（C++、Rust 等）与 Web API 之间的桥梁。胶水代码负责把 WebAssembly 数据重新编码为 JavaScript 数据及反之。例如从 JS 向 Wasm 返回字符串时，胶水可能需调用 Wasm 模块的 malloc 函数并把字符串重新编码到所得地址，之后模块负责最终调用 free。这都非常繁琐、公式化、难写，因此典型用 embind 或 wasm-bindgen 等工具自动生成胶水。这精简编写过程，但给构建过程增加原生平台通常不需要的复杂度。且此构建复杂度语言特定：Rust 代码需不同于 C++ 代码的绑定，依此类推。当然胶水代码也有运行时成本。JS 对象须分配与垃圾收集、字符串须重新编码、结构须反序列化。其中一些成本对任何绑定系统固有，但很多不是。这是你在 JavaScript 与 WebAssembly 边界付出的普遍成本，即使调用本身很快。这就是多数人问"Wasm 何时获得 DOM 支持？"的意思。已经可以用 WebAssembly 访问任何 Web API，但需要 JavaScript 胶水代码。

**为什么这重要？** 从技术视角，现状可行。WebAssembly 在 Web 上运行，许多人成功用它交付软件。但从普通 Web 开发者视角，现状次优。WebAssembly 在 Web 上使用太复杂，你永远逃不掉二等体验的感觉。以我们的经验，WebAssembly 是高级用户功能，普通开发者不用，即使对项目是更好技术选择。JavaScript 入门平均开发者体验是这样：有很好的渐进曲线，随项目范围扩大逐步使用更复杂功能。对比 WebAssembly 入门体验：你立即必须爬"墙"——把许多不同部分组合工作。最终结果常只对大项目值得。为何如此？有几个原因，都直接源于 WebAssembly 是 Web 二等语言。

**1. 编译器难提供 Web 一等支持。** 任何以 Web 为目标的语言不能只生成 Wasm 文件，还须生成伴随 JS 文件加载 Wasm 代码、实现 Web API 访问、处理长尾其他问题。此工作必须为每个想支持 Web 的语言重做，且不能复用于非 Web 平台。Clang/LLVM 等上游编译器不想知道任何 JS 或 Web 平台——且不只是缺努力。生成与维护 JS 与 Web 胶水代码是专业技艺，已捉襟见肘的维护者难证明其合理。他们只想生成单一二进制，理想情况是标准化格式、也用于 Web 之外平台。

**2. 标准编译器不产生 Web 可用的 WebAssembly。** 结果，Web 上的 WebAssembly 支持常由用户需自己找到与学习的第三方非官方工具链分发处理。真正一等体验应从用户已知且已安装的工具开始。不幸的是这是许多开发者开始 WebAssembly 时第一个路障。他们假设只要装了 rustc 并传 --target=wasm 标志就得到能在浏览器加载的东西。这样可能得到 WebAssembly 文件，但没有任何所需平台集成。若你弄清如何用 JS API 加载文件，会因神秘难调试原因失败。你真需要的是实现平台集成的非官方工具链分发。

**3. Web 文档为 JavaScript 开发者编写。** 相比多数技术平台，Web 平台有不可思议的文档。但多数为 JavaScript 编写。若你不懂 JavaScript，理解多数 Web API 使用会难得多。想用新 Web API 的开发者必须先以 JavaScript 视角理解它，再翻译成源语言可用类型与 API。工具链开发者可尝试为其语言手动翻译现有 Web 文档，但那是繁琐易错、不扩展的过程。

**4. 调用 Web API 仍可慢。** 看上面单次 console.log 调用的全部 JS 胶水代码，你会看到大量开销。引擎花大量时间优化这个（js-string-builtins），更多工作进行中（custom-descriptors）。但问题仍存在。它不影响每种负载，但每个 WebAssembly 用户都需小心。基准测试这个棘手，但我们在 2020 年跑了实验精确测量真实世界 DOM 应用中 JS 胶水代码开销。我们在实验性 Dodrio Rust 框架构建经典 TodoMVC 基准，测量调用 DOM API 的不同方式。Dodrio 完美适合，因为它把所有所需 DOM 修改与实际应用分开计算。这让我们通过替换"应用 DOM 变更列表"函数同时保持基准其余部分完全相同，精确测量 JS 胶水影响。测试两个实现："Wasm + JS 胶水"（Wasm 函数循环读变更列表，请 JS 胶水逐项应用——今天 WebAssembly 的性能）与"仅 Wasm"（Wasm 函数循环读变更列表，用跳过 JS 胶水的实验性 DOM 直接绑定）。移除 JS 胶水后应用 DOM 变更时长降 45%。DOM 操作本已昂贵；WebAssembly 用户不能承受其上 2x 性能税。如实验所示，开销可以移除。

**5. 你总需理解 JavaScript 层。** 有句老话"抽象总在泄漏"。Web 上 WebAssembly 的最先进状态是每种语言用 JavaScript 构建自己的 Web 平台抽象。但这些抽象泄漏。若你在 Web 上认真使用 WebAssembly，终会到需要读写自己 JavaScript 才能让东西工作的点。这增加概念层、成为开发者负担。感觉知道源语言与 Web 平台应该就够。但对 WebAssembly，我们要求用户也懂 JavaScript 才能成为熟练开发者。

**我们如何修复？** 这是复杂的技术与社会问题，没有单一方案。对 WebAssembly 最先修什么最重要也有竞争优先。问自己：理想世界中什么能帮我们？如果我们有：标准化自包含可执行工件；多语言工具链支持；处理 WebAssembly 代码加载与链接；支持 Web API 使用——如果存在此类东西，语言可生成这些工件、浏览器可运行它们，无需任何 JavaScript。此格式对语言更易支持，可存在于标准上游编译器、运行时、工具链与流行包中，无需第三方分发。实际上，我们能从每种语言用 JavaScript 重实现 Web 平台集成的世界，走向共享内置于浏览器的共同集成。设计和验证方案显然是大量工作！幸好我们已有多年开发的符合这些目标的提案：WebAssembly Component Model。

**什么是 WebAssembly Component？** 对我们的目的，WebAssembly Component 定义由底层 WebAssembly 代码捆绑实现的高层 API。它是 WebAssembly CG 中自 2021 年开发的标准轨提案。今天 WebAssembly Components 已经：可从许多不同编程语言创建；可在许多不同运行时执行（包括今天浏览器内、用 polyfill）；可链接在一起允许不同语言间代码复用；允许 WebAssembly 代码直接调用 Web API。想了解详情请看 Component Book 或观看"What is a Component?"。我们觉得 WebAssembly Components 有潜力给 WebAssembly 在 Web 平台上一等体验，成为上面描述的缺失环节。

**它们如何工作？** 让我们尝试只用 WebAssembly Components、不用 JavaScript 重建早先 console.log 示例。注意：WebAssembly Components 与 Web 平台的交互尚未完全设计，工具处于积极开发中。把它当作事情可能如何的愿景，不是教程或承诺。第一步指定应用需要的 API，用叫 WIT 的 IDL 完成。示例需要 Console API，通过指定接口名导入：`component { import std:web/console; }`。std:web/console 接口今天不存在，但假设来自浏览器描述 Web API 的官方 WebIDL。此特定接口可能这样：package std:web; interface console { log: func(msg: string); ... }。现在有了接口，写编译为 WebAssembly Component 的 Rust 程序时可用它们：`use std::web::console; fn main() { console::log("hello, world"); }`。组件就绪后用 script 标签加载进浏览器：`<script type="module" src="component.wasm"></script>`。就这样！浏览器自动加载组件、直接绑定原生 Web API（无 JS 胶水）并运行组件。如果你的整个应用用 WebAssembly 写这很棒。但多数 WebAssembly 用途是还含 JavaScript 的"混合应用"的一部分。我们也想简化此用例。Web 平台不应拆成不能交互的"孤岛"。幸好 WebAssembly Components 也经支持跨语言互操作解决。创建导出图像解码器供 JS 代码使用的组件：先写描述图像解码器的接口（image-lib：record pixel {r,g,b,a: u8}；resource image { from-stream: static async func(bytes: stream<u8>) -> result<image>; get: func(x: u32, y: u32) -> pixel; }），component { export image-lib; }。然后用任何支持组件的语言写实现（合适语言取决于构建什么或需要什么库，示例实现留作读者练习）。组件可在 JavaScript 中作为模块加载。定义的图像解码器接口对 JavaScript 可访问，可像导入 JS 库一样使用：`import { Image } from "image-lib.wasm"; let byteStream = (await fetch("/image.file")).body; let image = await Image.fromStream(byteStream); let pixel = image.get(0, 0); console.log(pixel); // { r: 255, g: 255, b: 0, a: 255 }`。

**下一步。** 就今天而言，我们认为 WebAssembly Components 对 Web 是正确方向的一步。Mozilla 正与 WebAssembly CG 合作设计 WebAssembly Component Model。Google 此时也在评估。有兴趣尝试：学习构建第一个组件并在浏览器用 Jco 或命令行用 Wasmtime 尝试。工具处于重开发中，欢迎贡献与反馈。对开发中规范本身感兴趣请看 component-model 提案仓库。WebAssembly 自 2017 年首次发布走得很远。我认为如果我们能把它从"高级用户"功能变成普通开发者受益的东西，最好还在后头。

## 关键词

#WebAssembly #Component-Model #WIT #WebAPI #一等公民
