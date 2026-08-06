---
title: "宣布 Firefox 支持 Web Serial"
source: "Mozilla Hacks"
original_file: "信息源/Mozilla Hacks/Announcing Web Serial Support in Firefox.md"
source_note: "[[信息源/Mozilla Hacks/Announcing Web Serial Support in Firefox.]]"
source_sha256: 4b5d1788f95f156ae420307e389fb7e2fe808a4115ac2fce6aa8bb19d302cb09
original_url: "https://hacks.mozilla.org/2026/05/web-serial-support-in-firefox/"
published: 2026-05-21
processed: 2026-08-05
language: zh-CN
---

# 宣布 Firefox 支持 Web Serial

> [!info] 来源信息
> - 数据源：Mozilla Hacks
> - 作者：Haik Aftandilian
> - 发布时间：2026-05-21
> - 原文链接：[打开原文](https://hacks.mozilla.org/2026/05/web-serial-support-in-firefox/)
> - Vault 原文件：[[信息源/Mozilla Hacks/Announcing Web Serial Support in Firefox.|查看原始文件]]

## 摘要

- 自桌面版 Firefox 151 起支持 Web Serial API：Web 应用可直接与单片机、开发板、3D 打印机、功率计及其他串口连接硬件通信，无需原生软件。
- 适用人群：爱好者、硬件黑客、教育者、创客与开发者，用例涵盖家庭自动化、硬件原型与 3D 打印。
- Adafruit（开源硬件与 STEM 教育领导者）演示价值：经 Web Serial 提供固件即可轻松安装 CircuitPython；推荐用 Adafruit Web Serial Tool 而非 OPEN INSTALLER 方式；Mozilla 工程师 Alex Franchuk 制作结合电子与 Web 编辑的 Page Playground 设备。
- 兼容设备包括 Espressif ESP 系列（如流行 ESP32）、Raspberry Pi Pico、3D 打印机、LEGO 设备等。
- Web Serial 是什么：允许网站用 JavaScript 读写串行设备的 Web API；USB 口或蓝牙配对的串行设备可自我宣传为串行能力设备。
- Mozilla 工程师 Florian Quèze 演示用 Web Serial 从现成 USB 功率计读取功率数据并在 Firefox 显示，还能导出到 Firefox Profiler 可视化。
- Home Assistant 生态：ESPHome 项目为廉价 ESP32 设备提供固件，经 Web Serial 点击几下即可安装配置。
- 安全与隐私：网站直到用户显式允许才可见或访问串行端口；按站点按端口允许；必须调用 navigator.serial.requestPort() 让用户选择允许哪个端口；网站收不到已连接设备列表，端口选择外无可利用指纹信息。
- Firefox 用 Web MIDI API 引入的附加组件门控提示：首次请求端口访问时，在端口选择提示前给出更详细解释。
- 企业策略下 Web Serial 默认禁用；管理员可用 DefaultSerialGuardSetting 策略显式允许或禁止。
- 标准化：Web Serial 仍在 WICG，Mozilla 正推动在 WHATWG 标准化（新 Workstream 提案）。
- 反馈：Mozilla Connect 分享项目与反馈；技术支持 support.mozilla.org 或 Bugzilla。

## 正文

以下是文章全文翻译。

**桌面版 Firefox 151 支持 Web Serial。** Firefox 现在可从 Web 直接连接单片机、开发板、3D 打印机、功率计及其他串口连接硬件。自桌面版 Firefox 151 起，Web Serial API 的支持允许 Web 应用与兼容设备通信，无需原生软件。Web Serial 兼容设备在爱好者、硬件黑客、教育者、创客与开发者中很受欢迎，用例从家庭自动化到硬件原型与 3D 打印。Web Serial 支持使 Firefox 对此类项目更有用。展示 Web Serial 价值的组织之一是 Adafruit——开源硬件与 STEM 教育领导者。他们经 Web Serial 交付固件，使其设备上安装 CircuitPython 快速简单。然后设备上运行 Python 程序很直接：文件命名 code.py，对多数设备把文件拖放到 USB 设备即可安装。Python 程序可经 Web Serial 用简单文本 I/O 与 Web 页面互操作。要用 Firefox 安装 CircuitPython 固件，建议用 Adafruit Web Serial Tool 而非 CircuitPython 站点的 OPEN INSTALLER 方式。这里有一个用 Adafruit ESP32-S2 板的示例：Web 代码发送的消息可经 Web Serial 直接显示在设备上。我们与 Adafruit 合作，针对该社区常用真实硬件工作流测试 Firefox 实现。结果：Firefox 是直接用 Web 技术编程与交互硬件的更实用浏览器。作为组合 Web Serial 与电子学的示例，Mozilla 工程师 Alex Franchuk 创造了结合电子与 Web 编辑的奇妙设备 Page Playground。串行兼容设备列表包括 Espressif ESP 系列板（如流行 ESP32 芯片）、Raspberry Pi Pico、3D 打印机、LEGO 设备等。有许多工具可在这些廉价小型单片机板上运行自己的代码，有了 Web Serial，把它们连接到计算机并经基于 Web 的用户界面交互比以往更容易。

**什么是 Web Serial？** Web Serial 是允许网站用 JavaScript 读写串行设备的 Web API。详情见 MDN 文档。虽然现代计算机通常不含串口，连接到 USB 口或经蓝牙配对的串行设备可自我宣传为串行能力设备，从而在操作系统显示为串行端口。Web Serial API 让开发者用 Web 平台与这些设备通信。例如，网站无需原生应用或安装器即可控制设备或交付固件。Mozilla 自己的 Florian Quèze 实验过许多测量功耗的项目，演示了如何用 Web Serial 从现成 USB 功率计读取功率数据并在 Firefox 显示。Florian 的代码还可把数据导出到 Firefox Profiler，轻松可视化与分享功率数据。图中显示了测量三种亮度模式灯具功率的页面与 Profiler 中的数据。测试所用功率计为 AVHzY C3 USB，Joy-IT TC66C 与 YZXStudio USB ZY1280 也成功测试。Home Assistant 是另一个例子，它是流行（且增长中）的开源家庭自动化项目。ESPHome 项目为廉价 ESP32 及类似设备提供 Home Assistant 兼容固件，经 Web Serial 点击几下即可安装配置。

**安全与隐私。** 允许 Web 平台读写硬件设备存在明确的安全与隐私担忧。最重要的是，有了 Web Serial，网站直到用户显式允许才可见或访问串行端口。端口按站点按端口允许。Web Serial API 要求网站调用 navigator.serial.requestPort()，让用户选择允许访问哪个端口或完全拒绝。这意味着网站收不到已连接设备列表，除用户选择的端口外没有可用指纹信息。为帮助用户理解网站何时及为何请求串行端口访问，Firefox 使用 Web MIDI API 实现中引入的附加组件门控。与其他 Web 权限提示相比，这给用户更详细的允许内容解释。附加组件门控提示在网站首次请求端口访问时先于端口选择提示出现。对使用 Firefox 企业策略的组织，Web Serial 默认禁用。管理员可用 DefaultSerialGuardSetting 策略设置显式允许或禁止组织内 Web Serial 功能。

**标准化。** 虽然 Web Serial 仍驻留于 Web Incubator Community Group（WICG），鉴于其范围与长期孵化，我们对其标准化路径乐观。我们正追求在 WHATWG 标准化 Web Serial API（新 Workstream 提案），并期待与生态伙伴与标准机构合作塑造 Web 外设访问。

**反馈。** 若你已有可用设备上的 Web Serial 工作流，试试 Firefox。我们想听你在构建什么、哪些工作流最重要。Mozilla Connect 是分享项目、提问与反馈的好地方。技术问题请访问 support.mozilla.org 或在此提交 bug。

## 关键词

#WebSerial #Firefox #硬件 #单片机 #WebAPI
