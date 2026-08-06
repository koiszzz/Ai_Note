---
title: "卸载后会重装：微软 Win11 静默推送 OneDrive Photos，附隐藏快捷方式脚本"
source: "it之家"
original_file: "信息源/it之家/卸载后会重装：微软 Win11 静默推送 OneDrive Photos，附隐藏快捷方式脚本.md"
source_note: "[[信息源/it之家/卸载后会重装：微软 Win11 静默推送 OneDrive Photos，附隐藏快捷方式脚本]]"
source_sha256: d10b9abf79043d502c524531120f498e99b46c27f378c5b586fa178f4ce56dbc
original_url: "https://www.ithome.com/0/985/858.htm"
processed: 2026-08-05
language: zh-CN
validation_attempt: 2
validation_manual_approved: true
validation_manual_approval_reason: "已逐段对照原文与译文：正文为源文 HTML 去除标签后的完整中文文本，内容无删减；剩余警报仅为 HTML 标签/属性导致的长文长度比误判。"
---

# 卸载后会重装：微软 Win11 静默推送 OneDrive Photos，附隐藏快捷方式脚本

> [!info] 来源信息
> - 数据源：it之家
> - 原文链接：[打开原文](https://www.ithome.com/0/985/858.htm)
> - Vault 原文件：[[信息源/it之家/卸载后会重装：微软 Win11 静默推送 OneDrive Photos，附隐藏快捷方式脚本|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，正文已从 HTML 转换为 Markdown 并统一排版。

## 正文

IT之家 8 月 5 日消息，科技媒体 Windows Latest 昨日（8 月 4 日）发布博文，**分享了一段脚本，用于删除 OneDrive Photos 的快捷方式。**

该媒体指出 OneDrive Photos 有别于传统的 Microsoft Store 或 MSIX 程序包的形式安装，在现有的 Microsoft OneDrive 安装文件夹中以 OneDrive.App.exe 的形式安装。

*

IT之家此前报道，微软通过 Windows Update，或者适用于 Windows 的 OneDrive 应用程序，[静默推广名为 OneDrive Photos 的照片应用程序。](https://www.ithome.com/0/983/037.htm)

*

根据该媒体后续报道，即便用户强制卸载 OneDrive Photos 应用程序，**在安装 OneDrive 应用的设备上，微软后续会重新下载并安装。**

*

而目前暂未找到不彻底卸载 OneDrive 的情况下卸载 OneDrive Photos 应用程序，也没有办法通过 Microsoft Store 策略或者 Windows 11 组策略方式卸载，**现有最佳解决方案是通过脚本，卸载快捷方式，避免其在你的电脑上显示。**

IT之家附上相关脚本内容如下：

`
<#

Safely removes OneDrive Photos shortcuts only.

Does not delete OneDrive.App.exe or OneDrive.exe.

Exit 0 = success

Exit 1 = one or more shortcuts could not be removed

#>

$ShortcutName = "OneDrive Photos.lnk"

$Failed = $false

$Paths = @(

"$env:ProgramData\Microsoft\Windows\Start Menu\Programs\$ShortcutName",

"$env:PUBLIC\Desktop\$ShortcutName"

)

Get-ChildItem "$env:SystemDrive\Users" -Directory -ErrorAction SilentlyContinue |

Where-Object { $_.Name -notin @("Public", "Default", "Default User", "All Users") } |

ForEach-Object {

$Paths += "$($_.FullName)\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\$ShortcutName"

$Paths += "$($_.FullName)\Desktop\$ShortcutName"

}

foreach ($Path in $Paths) {

if (Test-Path -LiteralPath $Path) {

try {

Remove-Item -LiteralPath $Path -Force -ErrorAction Stop

Write-Output "Removed: $Path"

}

catch {

Write-Output "Failed to remove: $Path"

$Failed = $true

}

}

}

if ($Failed) {

exit 1

}

exit 0
`

该行为自然引发了很多用户的不满，一位愤怒的 IT 管理员表示：**

微软真是一意孤行。我们用 Intune 管理着数百台电脑，所有电脑的开始菜单里都出现了新的 OneDrive Photos 选项。他们到底要犯多少错误才能明白，我们不希望组织内部到处都是乱七八糟的应用程序？

这个应用无法兼容 Entra 账户。而且，如果不彻底卸载 OneDrive，就无法移除它。

除非微软想让我们放弃 OneDrive，而这只是个诱饵，否则我不明白为什么要强制没有微软服务协议（MSA）的电脑安装它。

## 关键词

#it之家
