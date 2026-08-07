---
title: "Datasette 1.0a38 修复混合表 SQL 注入漏洞"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-07 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-07 (ZH)]]"
source_fragment: "Datasette 1.0a38 修复混合表 SQL 注入漏洞"
source_sha256: ccd03a1d29c5c9cfe45914f96ef46bb6bb54fd1205d1fad4251f7b0de31c355e
original_url: "https://simonwillison.net/2026/Aug/6/datasette/#atom-everything"
published: 2026-08-07
processed: 2026-08-07
language: zh-CN
---

# Datasette 1.0a38 修复混合表 SQL 注入漏洞

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/6/datasette/#atom-everything)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-07 (ZH)|查看原始日报]]

## 摘要

- Datasette 1.0a38 版本修复了一个 SQL 注入安全漏洞，该漏洞影响在同一数据库中同时提供公共表和私有表、并通过 Datasette 权限系统配置访问控制的实例。修复前，即使管理员在数据库上禁用了 execute-sql 权限，拥有任意公共表访问权限的用户仍可借此漏洞绕过限制，通过原始 SQL 查询对同一数据库中的私有表进行只读访问。官方建议以这种方式提供私有表的站点管理员禁用该数据库上的 execute-sql 权限，以防止用户通过原始 SQL 查询访问私有数……

## 正文

Datasette 1.0a38 版本修复了一个 SQL 注入安全漏洞，该漏洞影响在同一数据库中同时提供公共表和私有表、并通过 Datasette 权限系统配置访问控制的实例。修复前，即使管理员在数据库上禁用了 execute-sql 权限，拥有任意公共表访问权限的用户仍可借此漏洞绕过限制，通过原始 SQL 查询对同一数据库中的私有表进行只读访问。官方建议以这种方式提供私有表的站点管理员禁用该数据库上的 execute-sql 权限，以防止用户通过原始 SQL 查询访问私有数据。此修复也已包含在 Datasette 0.65.3 版本中，Simon Willison 指出这种公共表和私有表混布在同一实例中的配置可能比较少见。

rss · Simon Willison · 8月6日 18:24

「背景」 Datasette 是一个用于探索和发布数据的开源工具。该安全修复针对的是在同一数据库中同时公开公共表和私有表、并使用 Datasette 权限系统配置访问权限的实例。此前的缺陷可能让拥有任意公共表访问权限的用户绕过 execute-sql 权限限制，通过原始 SQL 查询读取同一数据库中的私有表数据。

「影响」 运行 Datasette 且在同一数据库中混合公开与私有表的实例应立即升级到 1.0a38 或 0.65.3，并按照建议禁用 execute-sql 权限，以防止被授予公共表访问权限的用户读取私有数据。

参考链接

- [Simon Willison on datasette](https://simonwillison.net/tags/datasette/)

- [GitHub - simonw/ datasette : An open source multi- tool for exploring...](https://github.com/simonw/datasette)

标签: #security, #datasette, #sql-injection, #open-source, #release

## 关键词

#security #datasette #sql-injection #open-source #release #科技新闻
