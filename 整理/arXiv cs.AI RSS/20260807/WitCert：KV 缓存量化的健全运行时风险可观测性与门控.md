---
published: 2026-08-07
title: "WitCert：KV 缓存量化的健全运行时风险可观测性与门控"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/WitCert- Sound Runtime Risk Observability and Gating for KV-Cache Quantization.md"
source_note: "[[信息源/arXiv cs.AI RSS/WitCert- Sound Runtime Risk Observability and Gating for KV-Cache Quantization]]"
source_sha256: f46710c4401b57c531af1719f8ed336843b191347d3f20159a79aed071dea8a4
original_url: "https://arxiv.org/abs/2607.28699"
processed: 2026-08-07
language: zh-CN
---

# WitCert：KV 缓存量化的健全运行时风险可观测性与门控

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Fanzhe Wei (Metask Lab), Li Liu (Metask Lab), Ziyang Wang (Metask Lab), Chenyu Wang (Metask Lab)
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.28699)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/WitCert- Sound Runtime Risk Observability and Gating for KV-Cache Quantization|查看原始文件]]

## 摘要

- KV 缓存量化今天由离线基准平均值验证；部署系统无法判断压缩是否正在损害其当前服务的请求；给予其可证明健全的运行时仪表——"KV 量化的 DTrace"：精确与压缩注意力间总变差的每（层、头、步）上界。
- 仪表有两层：确定性带范数见证界（对任何缓存保持黑盒量化器与任何查询健全，自适应安全、最坏情况 Cauchy-Schwarz 加 RoPE 带酉性），与受控减法抖动 INT8 量化器在显式请求级失败预算下更紧的概率证书（为非自适应查询陈述；核心定理在 Lean 4 机器检查）。
- 三项结果：可观测性——仪表经环境守卫补丁进入 SGLang，注册为单个张量函数的任何方案在实时服务中测量；修复——仪表驱动门控（见证饱和处风险排序，信息丰富处认证）在基准规模经验恢复质量下限，如原始转换 fp8 在硬 RULER 任务上从 22.8 回到 79.7，与未压缩差异由配对检验界于 [+0.0,+0.8]；分析——激进方案靠跨层误差消除存活而非每步保真（28 层扫描中无单层污染单独损失任何东西（0/28）），认证 int8 缓存在 SGLang 中同内存服务 1.88 倍更多 KV token。
- 所有工件、防护与 Lean 开发在 GitHub 发布；每个数字由所发布工件单命令再生成。

## 正文

KV 缓存量化今天由离线基准平均值验证；一个部署的系统无法判断压缩是否正在损害它当前服务的请求。我们给予它一个可证明健全的运行时仪表——一个"KV 量化的 DTrace"：一个精确与压缩注意力之间总变差的每（层、头、步）上界。该仪表有两层：一个确定性带范数见证（band-norm-witness）界，对任何缓存保持的黑盒量化器与任何查询健全（自适应安全、最坏情况 Cauchy–Schwarz 加 RoPE 带酉性），以及一个受控减法抖动（subtractively-dithered）INT8 量化器在显式请求级失败预算下更紧的概率证书（为非自适应查询陈述；核心定理在 Lean 4 机器检查）。三项结果。可观测性：该仪表通过一个环境守卫补丁进入 SGLang，且注册为单个张量函数的任何方案都在实时服务中测量。修复：仪表驱动的门控——见证饱和处风险排序、信息丰富处认证——在基准规模经验地恢复质量下限，例如原始转换 fp8 在硬 RULER 任务上从 22.8 回到 79.7，与未压缩的差异由一个配对检验界于 [+0.0,+0.8]。分析：激进的方案靠跨层误差消除存活，而非每步保真——在一个 28 层扫描中，没有单层污染单独损失任何东西（0/28）——且认证的 int8 缓存在 SGLang 中以相同内存服务 1.88 倍的 KV token。所有工件、防护与 Lean 开发在 https://github.com/metask-ai/witcert-kv-certificates 发布；每个数字由所发布工件单命令再生成。

## 关键词

#KV缓存 #量化 #运行时认证 #可观测性
