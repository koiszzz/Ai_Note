---
published: 2026-08-05
title: "微软介绍 Win11 系统 MSIX 格式应用机制：用户感知的卸载，底层是移除"
source: "it之家"
original_file: "信息源/it之家/微软介绍 Win11 系统 MSIX 格式应用机制：用户感知的卸载，底层是移除.md"
source_note: "[[信息源/it之家/微软介绍 Win11 系统 MSIX 格式应用机制：用户感知的卸载，底层是移除]]"
source_sha256: 99b32a458e2f5def58a1af5e8e2a4297687abebc3667d87e5e59dd411cfa2b06
original_url: "https://www.ithome.com/0/985/906.htm"
processed: 2026-08-05
language: zh-CN
---

# 微软介绍 Win11 系统 MSIX 格式应用机制：用户感知的卸载，底层是移除

> [!info] 来源信息
> - 数据源：it之家
> - 原文链接：[打开原文](https://www.ithome.com/0/985/906.htm)
> - Vault 原文件：[[信息源/it之家/微软介绍 Win11 系统 MSIX 格式应用机制：用户感知的卸载，底层是移除|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，以下正文保留原文信息并统一排版。

## 正文

<p data-vmark="ca9e">IT之家 8 月 5 日消息，微软昨日（8 月 4 日）发布博文，指出在 Windows 11 系统中通过 MSIX 格式安装的应用程序，<strong>在用户感知中的“卸载”（Uninstall）操作，在系统层面的底层逻辑是“移除”（Remove）。</strong></p><p data-vmark="38b2">IT之家查询公开资料，附上 Windows 系统下 MSI 和 MSIX 两种安装格式的区别</p><ul class=" list-paddingleft-2"><li><p data-vmark="be86"><span class="iNqyIf"><span class="rQesXe MPyX">MSI</span>：全称 Microsoft Installer，本质上是一个包含安装指令和文件数据的数据库，由 Windows Installer 服务直接读取并解压覆盖文件。</span></p></li><li><p data-vmark="35cc"><span class="iNqyIf"><span class="rQesXe MPyX">MSIX</span>：微软推出的现代应用包格式，整合了 MSI、AppX、App-V 等格式的优点，采用容器化虚拟技术运行应用。</span></p></li></ul><p data-vmark="7b66">MSI 格式安装的应用程序在卸载操作后，会清理安装文件、安装目录、注册表和 Runtime 相关组件等；而 MSIX 格式安装的应用程序，软件包生命周期由四个基本操作组成：</p><ul class="medium-size list-paddingleft-2"><li><p data-vmark="0e82">部署（Stage）：获取有效载荷并将其安全地放置在磁盘上</p></li><li><p data-vmark="c306">注册（Register）：将软件包与用户关联</p></li><li><p data-vmark="1ae4">注销（Deregister）：移除用户的软件包关联</p></li><li><p data-vmark="efe3">卸载（Destage）：从磁盘中移除软件包有效载荷</p></li></ul><p data-vmark="d2dc">在用户操作逻辑中，点击“卸载”按钮来删除某款应用，Windows 11 系统会调用名为 RemovePackageAsync 的 API 方法，来注销（Deregister）应用和用户的关联。只有当系统确定没有其他程序需要这些文件时，才会执行卸载（Destage）操作，也就是真正删除应用的部分。</p><p data-vmark="ab2c">例如用户卸载了应用程序 A，但同一账户上的应用程序 B 仍然引用同一个共享框架包，即使用户是计算机上的唯一用户，Windows 也不会卸载该框架。</p>

## 关键词

#it之家