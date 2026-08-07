---
title: "从一颗GPU的“供电阀门”到40亿元市场：DrMOS为何成为AI算力新焦点？"
source: "华尔街见闻"
original_file: "信息源/华尔街见闻/从一颗GPU的“供电阀门”到40亿元市场：DrMOS为何成为AI算力新焦点？.md"
source_note: "[[信息源/华尔街见闻/从一颗GPU的“供电阀门”到40亿元市场：DrMOS为何成为AI算力新焦点？]]"
source_sha256: 0db148fef4dd54a16847ef26c0ba5d41a3a9dc10780dd1eca51997e4ed49fd3a
original_url: "https://wallstreetcn.com/member/articles/3778562"
processed: 2026-08-06
language: zh-CN
---

# 从一颗GPU的“供电阀门”到40亿元市场：DrMOS为何成为AI算力新焦点？

> [!info] 来源信息
> - 数据源：华尔街见闻
> - 原文链接：[打开原文](https://wallstreetcn.com/member/articles/3778562)
> - Vault 原文件：[[信息源/华尔街见闻/从一颗GPU的“供电阀门”到40亿元市场：DrMOS为何成为AI算力新焦点？|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，以下正文保留原文信息并统一排版。

## 正文

<p style="text-align: left;">DrMOS将驱动器、高侧MOSFET与低侧MOSFET集成在单一封装内，是处理器核心供电系统中负责高频开关、低压转换和大电流输出的关键功率级。随着AI芯片功耗迈向千瓦级，DrMOS需求正在同时受到GPU出货增长、供电相数增加、电流规格升级、成熟制程产能趋紧和国产算力供应链重构的推动。那么，这究竟是一次由缺货涨价驱动的短期行情，还是国产高端模拟芯片从验证迈向规模量产的产业拐点？</p><h2 style="text-align: left;">一、发生了什么？——DrMOS从普通功率器件变成AI芯片的关键供电环节</h2><p style="text-align: left;"><strong>1. DrMOS是什么：GPU旁边的高速“供电阀门”</strong></p><p style="text-align: left;">DrMOS全称Driver MOSFET，通常将栅极驱动器、高侧MOSFET和低侧MOSFET集成在同一个封装内，安装在CPU、GPU、ASIC和存储芯片附近。它不负责计算，却承担着一项不可替代的工作：配合多相控制器、电感和电容，将主板输入的12V电压转换为处理器核心所需的约1V低电压，并持续输出数百安培乃至更高的动态电流。</p><p style="text-align: left;">如果把GPU比作高速运转的发动机，多相控制器相当于电子控制单元，DrMOS就是按照指令高速开合的供电阀门。高侧MOSFET导通时，输入电源向电感注入能量；高侧关闭后，低侧MOSFET为电感提供续流路径。二者每秒切换数十万至数百万次，通过控制导通时间，将较高输入电压稳定转换为芯片需要的低压电源。</p><p style="text-align: left;">相比“驱动器+两颗分立MOSFET”，一体化DrMOS能够缩短驱动和功率回路，降低寄生电感、电压尖峰、开关损耗和电磁干扰，同时提高转换效率与功率密度。更高端的Smart Power Stage还会集成电流检测、温度监测、过流和过温保护。因此，服务器级DrMOS已不只是三颗器件的简单封装，而是一颗具备感知、执行和保护能力的智能功率级。</p><p style="text-align: left;">完整的处理器供电系统通常由“一颗多相控制器+多颗DrMOS”组成，每颗DrMOS对应一个供电相位，各相交错运行，以分担电流、降低纹波并改善瞬态响应。</p><p style="text-align: left;"><img src="https://wpimg-wscn.awtmt.com/82a7aa35-c430-4ed4-89fc-6e785ae64de6.png" alt="" title="" data-wscntype="image" data-wscnsize="840125" data-wscnh="611" data-wscnw="1375" class="wscnph" referrerpolicy="no-referrer"></p><p style="text-align: left;"><strong>2. 为什么AI时代突然重要？</strong></p><p style="text-align: left;">DrMOS需求上升的底层原因，并不只是GPU数量增加，而是单颗算力芯片功耗快速提升。</p><p style="text-align: left;">处理器核心电压通常维持在1V左右甚至更低。当芯片功耗由数百瓦迈向1000W以上时，根据“功率=电压×电流”，核心供电系统必须应对数百安培甚至上千安培的输出需求。单个功率级无法承担如此大的电流，只能通过增加供电相数、提高单相额定电流并优化散热完成供电。这带来三重变化：</p><p style="text-align: left;">第一是颗数增加。芯片功耗越高，通常需要更多功率相位共同分担电流。第二是规格升级，传统PC常用30A、50A产品，高端GPU和服务器CPU正更多转向70A、90A及以上产品。第三是供电难度提高，AI芯片负载可能在极短时间内由轻载切换至满载，如果电源响应不够快，便会出现电压跌落、过冲、降频甚至系统故障。</p><p style="text-align: left;">……</p>

## 关键词

#华尔街见闻