---
published: 2026-08-06
title: datasette 1.0a38 修复混合表 SQL 注入漏洞
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/datasette 1.0a38.md
source_note: "[[信息源/Simon Willison Blog/datasette 1.0a38]]"
source_sha256: ca059cfa7de5a4cadfcb986bf2a07db4668b115a2816bc092e82fc5fd0e82bc6
original_url: https://simonwillison.net/2026/Aug/6/datasette/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# datasette 1.0a38 修复混合表 SQL 注入漏洞

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/6/datasette/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/datasette 1.0a38|查看原始文件]]

## 摘要

- datasette 1.0a38 修复了一个 SQL 注入安全漏洞，影响在同一数据库中同时提供公共表与私有表、并通过 Datasette 权限系统配置访问控制的实例。
- 该漏洞允许拥有任意公共表访问权限的用户绕过 execute-sql 限制，执行 SQL 注入攻击，从而只读访问同一数据库中的私有表数据。
- 管理员应禁用相应数据库上的 execute-sql 权限进行防护；该修复也已回移植到 Datasette 0.65.3。

## 正文

**发布：[datasette 1.0a38](https://github.com/simonw/datasette/releases/tag/1.0a38)**

> 此版本修复了一个 **SQL 注入** 安全漏洞，该漏洞影响在同一数据库中同时提供 **公共表与私有表混合服务**、并使用 [Datasette 权限系统](https://docs.datasette.io/en/latest/authentication.html) 配置访问权限的 Datasette 实例。
>
> 以这种方式提供私有表的站点管理员，建议禁用该数据库上的 [execute-sql 权限](https://docs.datasette.io/en/latest/authentication.html#execute-sql)，以防止用户使用原始 SQL 查询访问私有表。已修复的漏洞原本允许拥有任意公共表访问权限的用户无视该限制执行 SQL 注入攻击，从而获得对同一数据库中私有表数据的只读访问权限。
>
> 该修复同样适用于 [Datasette 0.65.3](https://simonwillison.net/2026/Aug/6/datasette-2/)。

值得庆幸的是，这种特定配置——同一实例中为同一数据库同时暴露私有表和公共表——很可能十分罕见。我本人从未遇到过这样的实例。

标签：security、sql-injection、datasette

## 关键词

#datasette #SQL注入 #安全漏洞 #权限系统 #安全
