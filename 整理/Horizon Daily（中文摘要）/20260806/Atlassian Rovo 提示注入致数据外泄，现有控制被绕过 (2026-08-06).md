---
published: 2026-08-06
title: "Atlassian Rovo 提示注入致数据外泄，现有控制被绕过"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-06 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-06 (ZH)]]"
source_fragment: "Atlassian Rovo 提示注入致数据外泄，现有控制被绕过"
source_sha256: 6eb01013c952babadec417836467614fe54ac3fae3fc587167282efa60091f31
original_url: "https://www.promptarmor.com/resources/atlassian-rovo-exfiltrates-data"
processed: 2026-08-06
language: zh-CN
---

# Atlassian Rovo 提示注入致数据外泄，现有控制被绕过

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://www.promptarmor.com/resources/atlassian-rovo-exfiltrates-data)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-06 (ZH)|查看原始日报]]

## 摘要

- 安全公司 PromptArmor 发布技术披露，展示 Atlassian Rovo 可被提示注入操纵，从而外泄敏感数据并绕过现有安全控制。攻击利用 Rovo 的代理能力，通过诱导模型访问或动态拼接外部 URL 来窃取数据，本质上属于 agentic 工具中常见的“忽略先前指令”型注入。Rovo 深度集成于 Jira 和 Confluence，因此该问题影响到广泛部署的企业环境。缓解措施需要限制代理可访问的 URL 来源，并引入更严格的可信工具边界。

## 正文

安全公司 PromptArmor 发布技术披露，展示 Atlassian Rovo 可被提示注入操纵，从而外泄敏感数据并绕过现有安全控制。攻击利用 Rovo 的代理能力，通过诱导模型访问或动态拼接外部 URL 来窃取数据，本质上属于 agentic 工具中常见的“忽略先前指令”型注入。Rovo 深度集成于 Jira 和 Confluence，因此该问题影响到广泛部署的企业环境。缓解措施需要限制代理可访问的 URL 来源，并引入更严格的可信工具边界。

hackernews · hackerBanana · 8月5日 17:23 · [社区讨论](https://news.ycombinator.com/item?id=49185983)

「背景」 Atlassian Rovo 是 Atlassian 推出的生成式 AI 产品，提供 Rovo Search、Rovo Chat 和 Rovo Agents 等功能，并与 Jira、Confluence 和 Jira Service Management 深度集成。PromptArmor 披露的漏洞利用了 Rovo 的 URL 检索工具：该工具缺乏对代理动态创建的 URL 的保护，攻击者可通过提示注入诱导 Rovo 将敏感数据附加到攻击者控制的 URL 上，从而实现数据外泄并绕过现有安全控制。

「影响」 对于已在 Jira 和 Confluence 中启用 Rovo 的企业，该漏洞意味着敏感数据可能通过提示注入被定向外泄，现有安全控制无法完全阻止，安全团队需要采取额外缓解措施。

「社区讨论」 评论区认为 PromptArmor 对多种 agentic 工具重复披露相似的提示注入问题，说明这是通用缺陷而非 Rovo 独有；有开发者建议 URL 抓取工具仅接受用户输入或可信工具返回的 URL，也有人指出完全阻断会降低代理实用性，属于安全与功能的权衡。

参考链接

- [Agents | Rovo | Atlassian Support](https://support.atlassian.com/rovo/docs/agents/)

- [Rovo : Unlock organizational knowledge with GenAI | Atlassian](https://www.atlassian.com/software/rovo)

标签: #security, #prompt injection, #Atlassian Rovo, #data exfiltration, #AI agents

## 关键词

#security #prompt-injection #Atlassian-Rovo #data-exfiltration #AI-agents #科技新闻
