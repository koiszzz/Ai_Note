---
title: "Trellis + Matt Pocock skills实战上手与经验分享：比superpowers更完整的Agent增强框架"
source: "https://zhuanlan.zhihu.com/p/2057592701764244799"
author:
  - "[[烨笙​]]"
published:
created: 2026-08-07
description: "在上一篇文章中，我们聊了为什么 Superpowers 在 2026 年开始显得有些笨重，以及 Trellis 为什么是更轻量的替代方案。这篇文章是应读者要求的续集。在本篇中，我不讲复杂的理论，只带大家实操怎么用，以及分享一些…"
tags:
  - "clippings"
---
## 开篇答疑：关于 Trellis 的几个核心疑问

在上一篇文章发布后，许多读者在评论区留言发表观点。在进入具体实操之前，我们先来简单澄清大家最关心的三个问题。

### 1\. Superpowers 更新后，Trellis 还有优势吗？

很多读者反馈，Superpowers 在更新至 6.0.X 版本后，整体已经做了[轻量化](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E8%BD%BB%E9%87%8F%E5%8C%96&zhida_source=entity)改进，不再像以前那样笨重。这一情况属实。

Superpowers 专注于[执行层](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E6%89%A7%E8%A1%8C%E5%B1%82&zhida_source=entity)的工作流设计与 Skill 驱动，而 Trellis 则期待从项目记忆、上下文、执行、团队协作等多个角度包揽你的[项目开发](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91&zhida_source=entity)全过程。

### 2\. Trellis 已经吸收了 [grill-me](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=grill-me&zhida_source=entity) 吗？

Trellis 的脑暴技能（`brainstorm` skill）确实已经吸收了 `grill-me` 的[结构化访谈](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E7%BB%93%E6%9E%84%E5%8C%96%E8%AE%BF%E8%B0%88&zhida_source=entity)哲学作为默认机制，具体对比可以参考下方图片：

![](https://pic4.zhimg.com/v2-8632f1065d90f2f47da1ed17f3eab5c1_1440w.jpg)

虽然 Trellis 已经内化了该设计，但 Matt Pocock 编写的其他核心 Skills（如架构诊断、Bug 排查及[领域建模](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E9%A2%86%E5%9F%9F%E5%BB%BA%E6%A8%A1&zhida_source=entity)等）依然具有独立的使用价值。将这些 Skills 与 Trellis 融合使用，能够让项目规范的沉淀更加高效。

### 3\. Trellis 适用于所有的 AI [开发平台](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E5%BC%80%E5%8F%91%E5%B9%B3%E5%8F%B0&zhida_source=entity)吗？

理论上适用，但既不支持 hooks，skills 触发还极其保守的开发平台不太适合（没错，点的就是你 Antigravity）

---

## 一、初始化与「睁眼看项目」

开始使用 Trellis，在项目根目录进行 `trellis init` 初始化，选择需要使用的平台（后续可添加）后，从默认模板开始（如果你的项目恰好适配官方提供的三个模板，也可以直接用它们作为起点；如果你的团队之前就在用 Trellis，则可以从团队模板开始）。

![](https://pic1.zhimg.com/v2-e566419f06bc485988ef3d383419157e_1440w.jpg)

初始化完成后，项目根目录下会出现一个名为 `.trellis/` 的文件夹。该文件夹中包含以下结构：

- `workflow.md`：定义了开发工作流的各个阶段。
- `spec/`：存放项目规范的目录，初始状态下均为模板空文件。
- `tasks/`：用于记录和管理开发任务。
- `scripts/`：存放辅助脚本。

这是项目初始化后的基础结构，后续所有的开发记忆都会沉淀于此。

初次之外，Trellis 还会根据你选择的平台提供配套工具，建议使用一类平台以获得最好的使用效果，详情参见官方文档：[https://docs.trytrellis.app/advanced/multi-platform](https://link.zhihu.com/?target=https%3A//docs.trytrellis.app/advanced/multi-platform)

![](https://pic1.zhimg.com/v2-7c44045fa6fec38e68b4b9c94d033a02_1440w.jpg)

接下来，我们需要执行一个关键步骤：**让 AI 自动读懂你的项目**。这在 Trellis 中被称为 **Bootstrap 任务**。

输入指令`/trellis-spec-bootstrap`，此时，AI 会识别到待办任务中的 `00-bootstrap-guidelines` 任务（提示词参见上图，为方便阅读我翻译成了中文），并启动 `trellis-research` [子进程](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E5%AD%90%E8%BF%9B%E7%A8%8B&zhida_source=entity)。子进程会主动扫描 `src/content.js`、`src/promptStorage.js` 以及 `src/inputBoxHandler.js` 等核心代码文件。

扫描结束后，AI 会自动将这个项目的实际代码约定写入 `.trellis/spec/` 目录下的相应规范文件。

完成这一步后，你应当在 `.trellis/spec/` 下看到至少一个包含你项目真实信息的 [spec](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=5&q=spec&zhida_source=entity) 文件。如果文件夹内仍然是默认的占位符，说明 Bootstrap 任务未能正确运行。此时，你需要检查 coding agent 是否识别了 `00-bootstrap-guidelines` 任务。

![](https://pic3.zhimg.com/v2-f1d8f3e45873d9685e547d80d570ee40_1440w.jpg)

---

## 二、新功能开发

为了演示 Trellis 在真实开发中的表现，我们为 PromptMaster 开发一个"智能排序"功能。

具体的需求描述非常简单：

> “实现两个新功能：提示词优化、提示词智能排序”

不需要任何细化要求（这里是刻意测试一下更新后的脑暴，效果跟 `grill-me` 基本一致，生成的 `prd.md` 较长不便展示，谅解一下）。

Trellis 会自动执行以下逻辑：

1. **项目状态注入**：`session-start.py` 钩子运行，强制向对话注入[开发者](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E5%BC%80%E5%8F%91%E8%80%85&zhida_source=entity)身份、Git 状态和当前活跃任务。
![](https://pica.zhimg.com/v2-1e2c61eab8b4a2003cbd372607e123ca_1440w.jpg)

1. **自动任务分类**：Trellis 判定该需求涉及多处文件修改，需要进行[持久化](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E6%8C%81%E4%B9%85%E5%8C%96&zhida_source=entity)规划，因此将其归类为"Full Trellis task"（完整开发任务）。
![](https://picx.zhimg.com/v2-afb5798975e3996d0204303ba3684d97_1440w.jpg)

1. **任务创建与头脑风暴**：系统询问是否创建任务。在我们确认后，AI 会触发 `trellis-brainstorm` 并自动生成一份 `prd.md` 文件。

这里 Trellis 并没有被我们欺骗，依旧坚持创建了两个任务，分别对应"智能排序"和"提示词优化"功能。

![](https://pic2.zhimg.com/v2-efcc356f2fe9a51d31501d5759d8f16d_1440w.jpg)

生成的 `prd.md` 中包含了清晰的验收标准，并准确列出了本次修改涉及的文件范围，例如：

- `content.js` 中的列表渲染逻辑。
- `promptStorage.js` 的存储设计。
- 设置页的开关 UI。

在确认 `prd.md` 内容无误后，真正的亮点在于下一步。

前面我是用 OpenCode 创建任务，现在换到 Claude Code，输入 `/trellis:continue` 或者直接说"我们好像有任务没完成，请继续"，无缝衔接。

任务一旦创建，你可以在支持的任意 AI 平台随时通过 `continue` 命令来与 AI 继续任务，由于官方文档中提到的"/trellis:continue 并非跨任务跟踪指令，只适用于单任务内的继续操作"，它会建议从某个任务开始，然后等待进一步指示。

![](https://pica.zhimg.com/v2-9f8c10492b842c02e9cff266234c28f0_1440w.jpg)

当我们再次输入 `continue` 时：

1. AI 会评估当前任务是否需要撰写 `design.md`，如果需要，会触发"二次脑暴"，明确细节。
![](https://picx.zhimg.com/v2-acb24beed9506fe24c69134d19e1d94b_1440w.jpg)

1. 进入实现阶段后，系统会自动触发 `trellis-before-dev`，在动手写代码前自动加载我们之前沉淀的 spec 规范，防止 AI 写出违反项目约定的代码。
2. 每一段代码修改完成后，Trellis 都会自动分出[子代理](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E5%AD%90%E4%BB%A3%E7%90%86&zhida_source=entity)进行代码评审和测试并完成验证。
3. 验证通过后，运行 `finish-work` 归档命令，Trellis 会自动提交代码并更新任务状态。
![](https://pica.zhimg.com/v2-614b0b67f2ca8f793a91c88cdd2587d4_1440w.jpg)

---

## 三、强强联手：grill-me 被吸收之后，我如何将 Trellis 与 Matt Pocock Skills 融合使用？

以下是三种我最常用的工具组合拳：

### 组合 A：重构遗留模块（`improve-codebase-architecture` → Trellis 重构任务）

- **触发时机**：当你感觉某段代码的结构已经混乱，但不知道从何重构，或者需要一份客观的诊断报告时。
- **操作步骤**：
1. 在 Claude Code 中运行 `/improve-codebase-architecture`。
2. Pocock Skill 会扫描代码，从[高内聚](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E9%AB%98%E5%86%85%E8%81%9A&zhida_source=entity)、低耦合的视角生成一份[可视化](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E5%8F%AF%E8%A7%86%E5%8C%96&zhida_source=entity)的 HTML 架构诊断报告。
3. 假设报告指出 `content.js` 混杂了 DOM 渲染、事件绑定和[状态存储](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E7%8A%B6%E6%80%81%E5%AD%98%E5%82%A8&zhida_source=entity)三种职责，我们需要对其进行拆分。
4. 此时，我们将该重构目标交给 Trellis，在对话中输入：“为 content.js 创建一个行为不变性重构任务”。
5. Trellis 的 `trellis-brainstorm` 会生成一份 `prd.md`，并在验收标准中引用架构报告中的"行为不得改变"约束。
6. 之后使用 `continue` 驱动重构的执行，并用 `trellis-check` 在每一步验证重构前后行为的完全一致。
7. 重构完成后，使用 `trellis-update-spec` 将全新的模块边界规则更新到 `.trellis/spec/`。

  

- **协同效果**：Pocock Skill 负责发现架构问题并提供诊断，而 Trellis 则负责安全地执行重构，并将新架构规则沉淀为长期的项目 Spec。

### 组合 B：根治复发 Bug（`diagnosing-bugs` → Trellis 修复任务）

- **触发时机**：当某类 Bug 总是修了又犯，或者遇到了难以定位的偶发性 Bug 时。
- **操作步骤**：
1. 运行 `/diagnosing-bugs`。Pocock Skill 会强制 AI 先建立一个可快速运行的[自动化](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=1&q=%E8%87%AA%E5%8A%A8%E5%8C%96&zhida_source=entity)测试脚本或复现用例，而不是直接猜测根因。
2. 根因明确后，我们向 Trellis 发起修复任务：“为该 Bug 创建修复任务，要求编写回归测试与防复发规范”。
3. Trellis 生成的 `prd.md` 会明确记录 Bug 的复现条件与防复发要求。
4. 执行 `/trellis:continue`，AI 会先编写[回归测试](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=2&q=%E5%9B%9E%E5%BD%92%E6%B5%8B%E8%AF%95&zhida_source=entity)，确保测试呈现红色（失败状态），随后编写修复代码，使得测试变为绿色（通过状态）。
5. 修复完成后，`trellis-break-loop` 机制会自动介入，引导我们分析该 Bug 的根本成因。
6. 我们使用 `/trellis-update-spec`，将防复发规则写入 Spec 中（例如"禁止直接操作 textarea.value"）。

  

- **协同效果**：Pocock Skill 解决了"如何精准重现并找到 Bug 根因"，而 Trellis 则通过回归测试和 Spec 契约解决了"如何让这个 Bug 永远不再发生"。

### 组合 C：快速接手存量项目（`domain-modeling` → Trellis 初始化）

- **触发时机**：当你刚刚加入一个已有的存量项目，或者发现代码库中的业务术语非常混乱时。
- **操作步骤**：
1. 运行 `/[domain-modeling](https://zhida.zhihu.com/search?content_id=278449064&content_type=Article&match_order=2&q=domain-modeling&zhida_source=entity)`。Pocock Skill 会全局扫描代码，提炼出一套项目的"统一语言"，并生成一份术语表文件 `CONTEXT.md`。在 PromptMaster 中，这会把 `Provider`（AI 平台）、`PromptSlot`（占位符）和 `InjectionTarget`（目标输入框）等概念梳理清楚。
2. 术语表生成后，运行 `trellis init` 初始化项目。
3. Trellis 的 `trellis-spec-bootstrap` 会自动读取 `CONTEXT.md` 里的统一语言。生成的 Spec 文件将直接继承这些标准术语。
4. 后续的所有任务中，AI 在编写 `prd.md` 和代码注释时，都会严格使用这套术语，有效避免了概念的语义漂移。

  

- **协同效果**：Pocock Skill 帮助我们梳理出了项目概念的"共同语言"，而 Trellis 则让这套共同语言在后续的迭代中持续发挥规范作用。

---

## 四、其他提示

1. Trellis 需要一定的初始化成本，对于 `00-Bootstrap` 任务，务必使用能力较强的模型（视项目复杂度而定），对你的项目负责。
2. 如果在执行时使用了能力较弱的模型，记得查看最后的"finish"状态，如果没有触发，请手动输入 `/trellis:finish`。
3. 使用了 Trellis 后，请精简 `AGENT.md` 与 `CLAUDE.md`，防止上下文浪费。
4. 对于上下文较短的模型（通常能力也较差，GLM 算特例），发现任务流程跑完后有 bug，请视情况结合 Matt Pocock 的 hand off skill 进行手动任务交接后再切换模型修复。