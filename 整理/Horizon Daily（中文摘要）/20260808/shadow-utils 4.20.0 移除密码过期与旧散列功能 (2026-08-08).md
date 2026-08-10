---
title: "shadow-utils 4.20.0 移除密码过期与旧散列功能"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH)]]"
source_fragment: "shadow-utils 4.20.0 移除密码过期与旧散列功能"
source_sha256: 6e8dde8f282ed0a4e0983273702ea4892d79ce10648a2ce7b0f51173b915314b
original_url: "https://lwn.net/Articles/1086949/"
published: 2026-08-08
processed: 2026-08-09
language: zh-CN
---

# shadow-utils 4.20.0 移除密码过期与旧散列功能

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-08
> - 原文链接：[打开原文](https://lwn.net/Articles/1086949/)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH)|查看原始日报]]

## 摘要

- shadow-utils 4.20.0 按计划移除了多项与定期密码过期相关的功能：expiry 命令被删除，/etc/shadow 第四字段（最小密码年龄）被忽略并在出现时移除；同时删除了 groupmems、logoutd，并移除 DES 和 MD5 密码散列算法支持，默认散列改为 SHA512（除非 login.defs 中定义 ENCRYPT_METHOD）。这些移除从 4.19.0（2025 年 12 月）开始弃用，目的是配合 NIST 800-63B 不再强制要求、……

## 正文

shadow-utils 4.20.0 按计划移除了多项与定期密码过期相关的功能：expiry 命令被删除，/etc/shadow 第四字段（最小密码年龄）被忽略并在出现时移除；同时删除了 groupmems、logoutd，并移除 DES 和 MD5 密码散列算法支持，默认散列改为 SHA512（除非 login.defs 中定义 ENCRYPT_METHOD）。这些移除从 4.19.0（2025 年 12 月）开始弃用，目的是配合 NIST 800-63B 不再强制要求、甚至禁止验证系统强制定期改密的新规范。仍可通过 passwd -e 或 getent 等命令处理部分密码过期场景，但依赖强制定期改密的组织应准备在未来几年内完全失去这些功能。

rss · LWN.net · 8月7日 15:54

「背景」 shadow-utils 是 Linux 上管理 /etc/shadow、/etc/passwd 等用户与组数据库的工具集，密码过期功能至少可追溯到 1996 年。过去为防止未授权访问，系统常强制用户定期更换密码；但 2015 年研究认为其安全收益很小，NIST 800-63B 也从不再推荐改为在 2025 年修订版中明确禁止验证方强制要求定期改密，这成为本次移除的动因。

「影响」 依赖强制定期密码过期策略或旧密码散列算法的组织与管理员需要调整审计、合规或认证流程，不能再直接使用 expiry、最小密码年龄或 DES/MD5 散列；受影响系统应显式设置 login.defs 中的 ENCRYPT_METHOD，并改用 passwd -e 等方式处理密码失效。

标签: #shadow-utils, #Linux, #password-expiration, #security, #system-administration

## 关键词

#shadow-utils #Linux #password-expiration #security #system-administration #科技新闻
