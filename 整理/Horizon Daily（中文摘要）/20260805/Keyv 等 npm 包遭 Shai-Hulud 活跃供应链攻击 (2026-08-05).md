---
published: 2026-08-05
title: "Keyv 等 npm 包遭 Shai-Hulud 活跃供应链攻击"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)]]"
source_fragment: "Keyv 等 npm 包遭 Shai-Hulud 活跃供应链攻击"
source_sha256: a95ca2b002031ca8b11b06a7711ba64db3ff679428fdd0f1ed0860fe3068c63d
original_url: "https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack"
processed: 2026-08-05
language: zh-CN
---

# Keyv 等 npm 包遭 Shai-Hulud 活跃供应链攻击

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)|查看原始日报]]

## 摘要

- Keyv 及相关 npm 软件包在名为 Shai-Hulud 的活跃供应链攻击中被入侵。Aikido.dev 的博客报告称，该事件正在持续，再次暴露开源依赖系统的脆弱性。攻击方式与 npm 安装钩子等机制有关，社区因此呼吁对新增的 pre-install/post-install 脚本保持高度警惕。目前摘要中未提供具体受影响版本、攻击载荷和修复信息，需关注原报告及后续安全公告。此类攻击可能造成广泛的下游连锁危害。

## 正文

Keyv 及相关 npm 软件包在名为 Shai-Hulud 的活跃供应链攻击中被入侵。Aikido.dev 的博客报告称，该事件正在持续，再次暴露开源依赖系统的脆弱性。攻击方式与 npm 安装钩子等机制有关，社区因此呼吁对新增的 pre-install/post-install 脚本保持高度警惕。目前摘要中未提供具体受影响版本、攻击载荷和修复信息，需关注原报告及后续安全公告。此类攻击可能造成广泛的下游连锁危害。

hackernews · cimi_ · 8月4日 11:01 · [社区讨论](https://news.ycombinator.com/item?id=49166874)

「背景」 Keyv 是一个流行的 npm 缓存包，广泛用于 Node.js 项目中。此次名为 Shai-Hulud 的供应链攻击通过攻陷 Keyv 及相关 npm 包的 GitHub 账户，发布了携带恶意代码的版本，这些代码能够窃取环境变量和敏感凭据。攻击者还创建了描述中带有特定短语的公开 GitHub 仓库，用于收集被窃取的数据。npm 包安装时执行的前置/后置钩子（install hooks）是此类攻击得以扩散的关键机制之一。

「影响」 这次供应链攻击已污染 Keyv 与 cacheable 命名空间下的 79 个包名、353 个版本；任何安装受影响版本并执行过安装脚本的开发者机器或 CI 环境都应视为已失陷，攻击载荷可窃取云厂商密钥、Vault 与 Kubernetes 令牌、GitHub 与 npm 凭据以及其他匹配正则扫描的机密。

「社区讨论」 评论普遍认为，任何以前没有、现在新增 pre-install/post-install 钩子的包都应被拒绝，甚至呼吁暂停或废除这类钩子。还有人指出依赖系统的“玻璃下巴”式脆弱性是供应链攻击成功的主因，并分享了 Packj、devcontainers 以及检查 node_modules/pnpm store 的 grep 方法等防御建议。

参考链接

- [Keyv and friends compromised in npm supply chain attack](https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack)

- [Keyv Supply Chain Attack : What You Need to... - DEV Community](https://dev.to/onsen/keyv-supply-chain-attack-what-you-need-to-know-now-1466)

- [Keyv npm Package Compromised in Massive Supply Chain Attack](https://thecybersecguru.com/news/keyv-npm-supply-chain-attack/)

- [Inside the keyv npm Supply Chain Compromise | Snyk](https://snyk.io/blog/inside-keyv-npm-compromise-preinstall-malware-trusted-provenance-ide-hooks/)

- [Keyv-Linked npm Worm Poisons Hundreds of Packages, Plants ...](https://thehackernews.com/2026/08/keyv-linked-npm-worm-poisons-hundreds.html)

- [Popular npm Packages in the keyv and Cacheable Namespaces ...](https://socket.dev/blog/popular-npm-packages-in-the-keyv-and-cacheable-namespaces-compromised-in-active-supply-chain)

标签: #security, #supply-chain, #npm, #open-source, #malware

## 关键词

#security #supply-chain #npm #open-source #malware #科技新闻
