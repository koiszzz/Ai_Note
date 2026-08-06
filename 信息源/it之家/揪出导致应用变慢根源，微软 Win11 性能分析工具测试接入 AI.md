# 揪出导致应用变慢根源，微软 Win11 性能分析工具测试接入 AI

> 数据源：it之家
> RSS：[打开源文件](https://www.ithome.com/rss/)

> 发布时间：Thu, 06 Aug 2026 01:00:34 GMT　|　原文：[打开链接](https://www.ithome.com/0/986/292.htm)

------

<p data-vmark="3d7d">IT之家 8 月 6 日消息，科技媒体 Windows Latest 昨日（8 月 5 日）发布博文，报道称微软正在测试在 Windows Performance Analyzer（WPA）接入 AI，<strong>借助 MCP 让开发者分析 Windows 11 性能问题。</strong></p><p data-vmark="188b">IT之家注：Windows Performance Analyzer 是微软用于分析 Windows 性能问题的工具，可查看跟踪数据、进程、调用栈、CPU 活动、磁盘活动、内存活动和调度行为。开发者通常用它判断系统卡顿、响应延迟或性能倒退的原因。</p><p data-vmark="00e8">微软表示 WPA 是分析 PC 性能的重要工具之一，服务微软工程师、第三方开发者和 OEM 合作伙伴，用于判断 PC 运行缓慢或异常的原因。</p><p style="text-align: center;" data-vmark="615b"><img src="https://img.ithome.com/newsuploadfiles/2026/8/0fbcb2db-22a6-464c-8e7a-c2920c5530fe.jpg?x-bce-process=image/format,f_auto" w="1440" h="1884" data-weibo="0" alt="WIndows Performance Analyzer WPA" data-vmark="fc77" class="no-alt-img"></p><figcaption>IT之家注：原图分辨率偏低，暂未找到更高分辨率版本</figcaption><p data-vmark="6ee1">开发者目前需要手动查看包括表格、进程、调用栈等内容，才能回答“为什么这台 PC 变慢”这类问题。通过集成 AI 后，开发者可以使用 GitHub Copilot 等 AI 工具询问性能问题，例如 CPU 为什么飙升、磁盘被什么占用、调度为什么异常等。</p><p data-vmark="3b52">启用 WPA MCP 后，开发者可以在 WPA 跟踪分析流程中使用 GitHub Copilot CLI。开发者不必逐项查看图表和表格，可以用自然语言询问问题来源，并让 AI 生成分析摘要。</p><p data-vmark="bd41">报道称，微软已在内部使用 WPA 的 AI 工具调查 Windows 性能问题。该集成也可帮助应用、驱动和硬件开发者识别输入延迟、性能回退、CPU 活动、内存活动、调度问题以及其他异常。</p><p data-vmark="e726">开发者可以在 WPA 中询问某次变慢是否由 CPU 资源不足、磁盘活动、内存压力、分页或驱动引发，AI 会基于 WPA 数据给出分析。</p><p style="text-align: center;" data-vmark="b5fe"><img src="https://img.ithome.com/newsuploadfiles/2026/8/922a4d93-b5a9-4e0f-b4c9-fff10d7fb45b.jpg?x-bce-process=image/format,f_auto" w="1440" h="810" data-weibo="1" alt="Microsoft confirms that Windows 11 will be faster on 8GB RAM PCs by the end of 2026" data-vmark="a054" class="no-alt-img"></p><p data-vmark="177e">除 AI 性能分析工具外，微软还在优化 Windows 11 及其应用的内存占用，从而改善 8GB 及以上内存的设备的运行表现。</p>
