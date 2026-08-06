---
published: 2026-03-25
title: "Firefox Developer Edition 与 Beta：试试 Mozilla 的 .rpm 包！"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Firefox Developer Edition and Beta- Try out Mozilla’s .rpm package!.md"
source_note: "[[信息源/Mozilla Hacks/Firefox Developer Edition and Beta- Try out Mozilla’s .rpm package!.]]"
source_sha256: d7ca6d7bbb35d22118ccda53347f0cdb963ba928cdcf2e7915be71408ca0b91c
original_url: "https://hacks.mozilla.org/2026/03/firefox-developer-edition-and-beta-try-out-mozillas-rpm-package/"
processed: 2026-08-05
language: zh-CN
---

# Firefox Developer Edition 与 Beta：试试 Mozilla 的 .rpm 包！

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Bastien Orivel
> - 发布时间：2026-03-25
> - 原文链接：[打开原文](https://hacks.mozilla.org/2026/03/firefox-developer-edition-and-beta-try-out-mozillas-rpm-package/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Firefox Developer Edition and Beta- Try out Mozilla’s .rpm package!.|查看原始文件]]

## 摘要

- 1 月 Mozilla 为基于 RPM 的 Linux 发行版引入 Nightly 包；现在它可用于 Firefox Beta。
- Firefox Beta 适合在即将到达普通用户的 Firefox 版本中测试站点；发现问题请提交 Bugzilla。
- 切到 Mozilla 的 RPM 仓库让 Firefox Beta 像其他应用一样用喜爱的包管理器安装与更新，并带来多项改进：先进编译器优化带来更好性能；.rpm 管理集成进 Firefox 发布流程，更新尽可能快；编译时启用所有安全标志的加固二进制；无需创建自己的 .desktop 文件。
- 安装步骤：Fedora 41+ 或 dnf5 发行版用 dnf config-manager addrepo 添加仓库并 dnf install firefox-beta；openSUSE 或 zypper 发行版用 rpm --import 导入签名密钥、zypper ar 添加仓库、zypper install firefox-beta；其他 RPM 发行版（RHEL、CentOS、Rocky Linux、旧 Fedora）写 /etc/yum.repos.d/mozilla.repo。
- firefox-beta 包不会与发行版 Firefox 包冲突，可同时安装。
- 语言包：发行版语言受支持时自动安装；也可手动 dnf install firefox-beta-l10n-fr（替换语言代码），dnf search firefox-beta-l10n 列出可用语言。

## 正文

以下是文章全文翻译。

1 月我们为基于 RPM 的 Linux 发行版介绍了 Nightly 包。今天我们激动地宣布它现在可用于 Firefox Beta！Firefox Beta 非常适合在即将到达普通用户的 Firefox 版本中测试你的站点。若发现问题，请在 Bugzilla 提交。切到 Mozilla 的 RPM 仓库允许 Firefox Beta 像任何其他应用一样用你喜爱的包管理器安装与更新。它还带来多项改进：先进编译器优化带来更好性能；.rpm 管理集成进 Firefox 发布流程，更新尽可能快；编译时启用所有安全标志的加固二进制；无需创建自己的 .desktop 文件。

若已设置 Mozilla RPM 仓库，可直接用包管理器安装 Firefox Beta。否则按以下设置步骤。**Fedora（41+）或任何使用 dnf5 作为包管理器的发行版**：`sudo dnf config-manager addrepo --id=mozilla --set=baseurl=https://packages.mozilla.org/rpm/firefox --set=gpgkey=https://packages.mozilla.org/rpm/firefox/signing-key.gpg --set=gpgcheck=1 --set=repo_gpgcheck=0`，然后 `sudo dnf makecache --refresh` 与 `sudo dnf install firefox-beta`。注意：repo_gpgcheck=0 停用元数据的 GPG 签名验证，但由 HTTPS 与包签名（gpgcheck=1）保障安全。**openSUSE 或任何使用 zypper 的发行版**：`sudo rpm --import https://packages.mozilla.org/rpm/firefox/signing-key.gpg`、`sudo zypper ar --gpgcheck-allow-unsigned-repo https://packages.mozilla.org/rpm/firefox mozilla`、`sudo zypper refresh`、`sudo zypper install firefox-beta`。**其他基于 RPM 的发行版（RHEL、CentOS、Rocky Linux、旧 Fedora 版本）**：用 tee 写 /etc/yum.repos.d/mozilla.repo（含 [mozilla] 仓库定义），然后按包管理器刷新并安装。

firefox-beta 包不会与你已安装的发行版 Firefox 包冲突，可同时拥有两者！**添加语言包**：若发行版语言设置为受支持语言，其语言包应自动安装。也可手动安装：`sudo dnf install firefox-beta-l10n-fr`（把 fr 替换为所需语言代码）。列出可用语言：`dnf search firefox-beta-l10n`。欢迎报告任何遇到的问题，帮助改善你的体验。

## 关键词

#Firefox #RPM #Linux #Beta #包管理
