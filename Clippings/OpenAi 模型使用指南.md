---
title: "Model guidance | OpenAI API"
source: "https://developers.openai.com/api/docs/guides/latest-model"
author:
published:
created: 2026-08-26
description: "Compare model features, migration guidance, and prompting best practices across OpenAI models."
tags:
  - "clippings"
---
了解 OpenAI 模型的最佳实践、功能和迁移指南。

## 使用 GPT-5.6

了解 GPT-5.6 和 GPT-5.6 模型系列的最佳实践、特性和迁移指南。

## 介绍

GPT-5.6 为复杂的生产工作流程树立了新的质量和效率标杆。GPT-5.6 在词元处理方面尤为高效，并提升了前端美观度，包括布局、视觉层次结构和设计判断。

GPT-5.6 还引入了一种新的命名方案。`gpt-5.6`别名会将请求路由到`gpt-5.6-sol`旗舰级功能模型。该模型`gpt-5.6-terra`性能强劲，价格更低，`gpt-5.6-luna`适用于高效的大容量工作负载。

从 GPT-5.5 或 GPT-5.4 迁移时，首先使用您当前的 GPT-5.5 或 GPT-5.4 推理设置，然后在代表性任务上测试相同设置以及降低一级的设置。GPT-5.6 通常可以用更少的词元保持或提高质量，但最佳设置取决于您的工作负载。

## 有什么新消息

- **程序化工具调用：** GPT-5.6 可以编写 JavaScript 代码来调用兼容的工具，在调用之间传递结果，并在托管运行时环境中处理中间输出。[程序化工具调用](/api/docs/guides/tools-programmatic-tool-calling)适用于边界明确、工具密集型的工作流程，这些工作流程不需要在每个步骤之间重新进行模型判断。程序化工具调用与 ZDR 兼容，且无需额外的容器费用。
- **多智能体 \[测试版\]：** [多智能体功能](/api/docs/guides/responses-multi-agent)允许 GPT-5.6 实例并行协调多个子智能体并综合它们的结果。类似于 Codex 中的 Ultra 模式，它可以减少运行时间并提高复杂任务的性能，尤其适用于那些可以清晰地分解为独立工作流的任务。多智能体功能目前作为 Responses API 的测试版功能提供，我们将根据开发者的反馈不断迭代改进。
- **显式提示缓存：** GPT-5.6 允许您精确指定 OpenAI 缓存哪些可重用的提示前缀。您仍然可以在隐式模式下使用自动缓存。OpenAI 将缓存写入按未缓存输入速率的 1.25 倍计费，而缓存读取则不计费。了解如何[配置提示缓存](/api/docs/guides/prompt-caching)。
- **持久化推理：** GPT-5.6 可以跨回合重用可用的推理项，以提高多回合推理的质量和缓存效率。使用`reasoning.context`此方法选择行为。了解如何[跨调用保留推理结果](/api/docs/guides/reasoning#preserve-reasoning-across-calls)。
- **最大推理努力度：** GPT-5.6 支持`max`针对需要更多探索和验证的高难度任务的推理努力度设置。如果您当前使用的是默认设置`xhigh`，请在代表性工作负载上比较两种设置。
- **专业模式：** GPT-5.6 可以执行更多模型运算，从而提高复杂任务的可靠性并返回单个最终答案。`reasoning.mode: "pro"`当质量比延迟和令牌使用量更重要时，请启用此模式。了解如何[使用专业模式](/api/docs/guides/reasoning#reasoning-mode)。
- **令牌效率：** GPT-5.6 以更少的输出令牌达到性能前沿。
- **前端设计：** GPT-5.6 创建出更精致、更易用的网站和应用程序，具有更强的布局、视觉层次感和设计判断力。
- **意图理解：** GPT-5.6 能更好地从上下文推断用户的潜在目标和预期工作量，因此您通常无需详细说明每个步骤。请继续提供领域上下文、硬性约束、审批范围和成功标准。告知模型何时遇到重要的歧义需要提出问题。
- **原始图像细节：** GPT-5.6 保留了发送图像的原始尺寸`original`或`auto`细节级别，而不是将其调整到补丁预算或像素尺寸限制。大尺寸图像会占用更多输入令牌，从而增加延迟。了解如何[选择图像细节级别](/api/docs/guides/images-vision#choose-an-image-detail-level)。

## 保障措施

使用 GPT-5.6 模型时，用户可能会遇到一些安全措施，这些措施会阻止或拒绝某些请求。这是因为在模型输出生成过程中会运行实时网络和生物滥用分类器。其他请求可能需要更长时间才能完成，因为在生成过程中，这些分类器会同步审查输出，导致生成过程暂停几秒钟。安全措施有时可能会干预合法的工作，尤其是在防御和攻击活动最初可能看起来很相似的双重用途领域。

如果您的应用程序面向个人最终用户，请在每次请求中发送一个稳定的、保护隐私的标识符`safety_identifier`。有关指导，请参阅[“实现安全标识符” 。](/api/docs/guides/safety-best-practices#implement-safety-identifiers)

我们不断改进这些安全措施，使其能够有效抵御敌对压力，同时保障对合法工作的访问，例如代码审查、漏洞研究、补丁开发、调试、安全教育和防御测试。

## 迁移快速入门

### 使用 Codex 进行迁移

[Codex 可以使用OpenAI Docs 技能](https://github.com/openai/skills/tree/main/skills/.curated/openai-docs)应用本指南中推荐的更改。

```text
$openai-docs migrate this project to the GPT-5.6 model family
```

[要在其他编码代理中使用此技能，请从OpenAI 技能库](https://github.com/openai/skills/tree/main/skills/.curated/openai-docs)下载。

### 更新 API 和模型参数

- 根据工作负载选择目标模型。可用于`gpt-5.6-sol`前沿能力、`gpt-5.6-terra`兼顾智能与成本，或`gpt-5.6-luna`高效处理大容量工作负载。`gpt-5.6`别名将请求路由到`gpt-5.6-sol`。
- 使用[响应 API](/api/docs/guides/migrate-to-responses)进行推理、工具调用和多轮工作流程。
- 有意设置`reasoning.effort`。GPT-5.6支持`none`、`low`、、和。 `medium``high``xhigh``max`
	- 如果您是从 GPT-5.5 或 GPT-5.4 迁移过来的，请保留您当前的推理努力作为基准，然后与低一个级别进行比较。
		- 如果使用`none`，请将其作为延迟基准，并测试`low`工作流程何时能从推理或工具的使用中受益。
		- 可用作`medium`均衡的起点，也`low`适用于对延迟敏感的工作负载。
		- 当更多推理能够带来可衡量的质量提升时，就应该使用`high`这种方法。`xhigh`
		- 预留资源`max`用于对质量要求极高的工作负载。进行比较`max`，`xhigh`找到最适合您用例的质量、延迟和成本平衡方案。
- 要使用专业模式，请保留您选择的 GPT-5.6 模型，并在响应 API 中`reasoning.mode`进行相应设置`pro`；不要切换到单独的专业模型别名。请单独选择。如果您省略此设置，则 GPT-5.6在标准模式和专业模式下`reasoning.effort`均默认使用相同的模型。有关请求示例和计费详情，请参阅[推理模式。](/api/docs/guides/reasoning#reasoning-mode)`medium`- 根据先前推理的相关性配置持久推理。GPT-5.6 模型默认启用`all_turns`；早期模型默认禁用`current_turn`。
	- 省略`reasoning.context`或将其设置为`auto`使用`all_turns`GPT-5.6 的默认设置。检查响应中的`reasoning.context`字段以确认生效模式。
		- 设置`reasoning.context`为`all_turns`当任务的目标、假设和优先级在各个回合中保持稳定时。
		- 继续`all_turns`，`previous_response_id`以便将先前响应的推理提供给模型。
		- 手动管理历史记录时，保留并重新发送之前的用户输入和每个响应输出项。对于`store: false`零数据保留，则重放 API 默认返回的加密推理项。
		- 设置`reasoning.context`为`current_turn`当先前的推理不再相关时。
- 检查提示缓存。您无需更改代码即可继续使用隐式缓存。由于 GPT-5.6 缓存写入的成本是未缓存输入速率的 1.25 倍，因此请跟踪`cached_tokens`并`cache_write_tokens`了解净成本。使用显式断点或`prompt_cache_options.mode: "explicit"`避免不必要的写入，并将替换`prompt_cache_retention`为`prompt_cache_options.ttl`。
- 要使用程序化工具调用，请添加该`programmatic_tool_calling`工具并选择符合条件的工具`allowed_callers`。更新您的应用程序以处理`program`项目、程序发出的函数调用和`program_output`项目，同时保留每个调用的`call_id`链接`caller`。有关请求和后续示例，请参阅[程序化工具调用指南](/api/docs/guides/tools-programmatic-tool-calling)。
	- 对启用 PTC 的工作流程在典型任务上进行基准测试。比较任务成功率、最终答案完整性、所需证据、总令牌数、延迟和成本。只有当最终答案仍满足所需的质量标准时，减少调用次数、轮次或中间输出才算作改进。

## 促进最佳实践

### 倾向于使用更简洁的提示

移除重复的指令和示例，简化工具描述，可以提高任务性能和令牌效率。在内部编码代理评估运行的样本中，采用更精简的系统提示配置，评估分数提高了约 10%–15%，同时令牌总数减少了 41%–66%，成本降低了 33%–67%。结果会因工作负载而异，因此请将这些范围视为参考，并在您自己的应用程序中使用代表性任务验证更改。

为了简化提示信息，同时又不丢失重要的指导意义：

- 首先使用一套已经可以正常运行的提示符和工具集。一次移除一组指令、示例或工具，然后重新运行相同的评估。
- 每条指令只说一遍。
- 只展示与任务相关的工具，并保持工具描述简洁明了。
- 在对产品需求进行编码或纠正已衡量的差距时，请保留示例和风格指南。
- 在对话开始时以及对话进行过程中，都要记录上下文。长时间的对话可以放大重复出现的提示和工具内容。

### 明确自主权和审批权限范围

GPT-5.6 在执行多步骤任务时能够做到主动且持续。请定义每个请求授权的操作级别，以便模型能够在安全、符合范围的前提下持续工作，避免不必要的暂停，并在执行外部的、破坏性的、代价高昂的或超出范围的操作之前及时停止。

一项简洁的政策通常就足够了：

```text
For requests to answer, explain, review, diagnose, or plan, inspect the relevant
materials and report the result. Do not implement changes unless the request also
asks for them.

For requests to change, build, or fix, make the requested in-scope local changes
and run relevant non-destructive validation without asking first.

Require confirmation for external writes, destructive actions, purchases, or a
material expansion of scope.
```

明确指定安全的本地操作，例如读取文件、检查日志、编辑作用域内的代码以及运行测试。将策略集中在一处，每条规则只需声明一次。重复诸如“先询问”、“禁止修改”或“等待批准”之类的指令可能会导致对安全且预期操作产生不必要的批准请求。

### 设置响应长度和样式

GPT-5.6 默认情况下比 GPT-5.5 更简洁。迁移时，请检查诸如“简洁”或“保持简短”之类的宽泛的简短性指令是否仍然有用。对于某些任务，这些指令可能没有必要，有时反而会导致响应过于简短。如果这些指令能够可靠地生成应用程序所需的输出，则可以保留它们。

为了更一致地控制所有请求，请使用`text.verbosity`设置默认详细程度，然后使用提示输入特定任务的要求。

#### 设置默认值`text.verbosity`

选择“详细`low`”、`medium`“完整”或`high`“详细”作为请求的默认详细级别。在提示中，指定任何特定于任务的长度、结构或所需内容。有关 API 示例，请参阅[“设置”部分。`text.verbosity`](/api/docs/guides/deployment-checklist#set-up-textverbosity)

#### 请明确简答题必须包含哪些内容。

当任务要求答案简短时，要明确模型必须保留的信息以及可以省略的细节。例如：

```text
Lead with the conclusion. Include the evidence needed to support it, any material
caveat, and the next action. Omit secondary detail and repetition.

Keep all required facts, decisions, caveats, and next steps. Trim introductions,
repetition, generic reassurance, and optional background first.
```

这使得模型具有清晰的优先级顺序：保留完成任务所需的内容，然后删除价值较低的细节。

#### 确定语气

诸如“友好”或“善解人意”之类的宽泛标签可能会造成歧义。请描述定义您产品语气的写作选择，例如如何直接陈述答案、何时承认问题，以及是否应该给予保证或结尾语。

```text
State the answer directly. If the user reports a problem, acknowledge the
specific issue before giving the next step. Use reassurance only when it is
relevant. Omit generic praise and unnecessary sign-offs.
```

### 专业模式

#### 如果质量至关重要，请选择专业模式。

专业模式是响应 API 的一种执行模式，它会在返回最终结果之前对请求应用更多模型运算。这可以提高复杂任务的可靠性，但会增加延迟，并将这些运算产生的令牌汇总到报告的使用量中。这些令牌将按所选模型的标准令牌费率计费。

当质量的微小提升就能显著影响最终结果，且任务难度足够高，例如复杂的优化、高价值的编码或代码审查，或者具有明确评估标准的深度分析时，应使用专业模式。对于常规、对延迟要求较高或工作量较大的任务，以及评估结果显示专业模式无法带来显著提升的情况，则应优先选择标准模式。

推理模式和推理难度是相互独立的。专业模式适用于任何 GPT-5.6 模型及其支持的推理难度。建议从与标准模式基准相同的模型和难度开始，然后在代表性任务上比较不同配置，而不是想当然地认为最高的难度总是最佳的折衷方案。

#### 在 API 中配置专业模式

在 API 请求中启用专业模式。保持与标准模式下相同的以结果为导向的提示：说明目标、相关背景、约束条件、所需证据、成功标准和输出格式。无需要求模型“使用专业模式”、“深入思考”或生成多个候选答案。

例如：

```text
Review this database migration plan for failure modes that could cause data loss
or extended downtime. For each finding, cite the relevant step, estimate impact
and likelihood, and recommend a specific mitigation. Return the five most
important risks in severity order.
```

#### 比较质量和成本

在相同的代表性任务上比较标准模式和专业模式。衡量任务成功率、答案完整性、所需证据、总令牌数、延迟和成本。仅在专业模式的质量或可靠性提升足以抵消额外模型工作量时才选择性地使用专业模式。

更多信息请参阅[推理模式指南](/api/docs/guides/reasoning#reasoning-mode)。

### 程序化工具调用

#### 按任务形状选择程序化工具调用

程序化工具调用 (PTC) 最适用于有界工作流程，在这种工作流程中，代码可以处理多个工具结果或大型中间输出，并返回一个更小的结构化结果。它可用于过滤、连接、排名、去重、聚合、验证或其他可预测的处理。

仅凭多次、并行或依赖性调用并不足以构成使用程序化工具调用的理由。在以下情况下，应优先选择直接调用非 PTC 工具：

- 一次通话即可
- 中间产出已经很小了。
- 每个结果都可能改变模型的下一个决策。
- 一项行动需要获得批准
- 最终输出必须保留引用或原始文本。

#### 使路由指令针对特定任务

不要依赖工具的可用性或诸如“高效使用程序化工具调用”之类的通用指令来确定正确的路由。当直接调用和程序化调用都可用时，请明确说明：

- 哪个有界阶段应该使用程序化工具调用？
- 它可能会调用哪些工具？
- 具体的输出方案和所需证据。
- 并发限制、重试限制和停止限制。
- 哪些工作应该保持直接性？

工具描述应记录其预期返回字段、类型和错误处理方式。如果模型在编写程序之前无法确定返回值的形状，则最好直接调用工具，以便在决定如何使用之前检查结果。

如果需要两条路线，请定义一个明确的交接点，并告诉模型不要切换路线或重复已完成的工作。

例如：

```text
<tool_orchestration>
Use Programmatic Tool Calling for [bounded stage] using only [eligible tools].
Run independent calls concurrently when safe. Use only documented tool input
and output fields.

Process and reduce the intermediate results, then emit exactly [output schema],
including the evidence needed for the final answer.

Stop when [condition] is met. Retry transient failures at most [R] times.
Do not repeat completed calls or perform side-effecting actions. If a required
result is still missing, return a clear structured failure.

Use direct tool calls for [semantic judgment, approval, or final validation].
</tool_orchestration>
```

#### 评估最终答案

项目`program_output`和最终助手`message`是两个独立的输出；请务必对两者都进行测试。理论上，程序可以返回正确的记录，但消息中可能缺少必填字段、引用或注意事项。

对相同的代表性任务，比较直接调用和程序调用。检查最终响应是否正确、完整，并包含所需的证据。然后比较总令牌数、延迟、成本、调用次数、轮次和重试次数。仅当响应仍然符合现有评估标准时，才将资源使用量的降低视为改进。

了解更多信息，请参阅[程序化工具调用指南](/api/docs/guides/tools-programmatic-tool-calling)。