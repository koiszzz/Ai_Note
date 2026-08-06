---
published: 2026-08-05
title: "文本到 Terraform 的安全优先评估：LLM 与 SLM 安全 IaC 生成的基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Security-First Evaluation of Text-to-Terraform- Benchmarking LLMs and SLMs for Secure IaC Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/Security-First Evaluation of Text-to-Terraform- Benchmarking LLMs and SLMs for Secure IaC Generation]]"
source_sha256: 2253d266ad969d7da11bc4479f0c946ab7f8e47f9b7ae4f595360740251705e0
original_url: "https://arxiv.org/abs/2608.02672"
processed: 2026-08-05
language: zh-CN
---

# 文本到 Terraform 的安全优先评估：LLM 与 SLM 安全 IaC 生成的基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Francis Luis Santos Vargas、Rodrigo Brandão Mansilha、Diego Kreutz
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02672)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Security-First Evaluation of Text-to-Terraform- Benchmarking LLMs and SLMs for Secure IaC Generation|查看原始文件]]

## 摘要

- 在 17 个场景的 AWS Terraform 生成上基准七个模型（三个闭源 LLM：Claude Opus 4、GPT-5.4、Gemini 2.5 Pro；四个开源 SLM：Qwen2.5-Coder-14B、WizardCoder-33B、CodeLlama-13B、Magicoder-S-CL-7B），把 Checkov 与 Trivy 扫描器集成进 GitLab CI/CD 流水线，并在三个安全级别（pass@5）评估两种提示策略。
- 语法有效性与安全合规在 LLM 生成的 IaC 中大体正交：可靠生成格式良好 Terraform 的模型不一定生成安全 Terraform——WizardCoder-33B 验证率 77.8% 却零 Checkov 合规，而 Claude Opus 4 在详细安全提示下 Checkov 23.1%、Trivy 92.5%。
- 仅靠提示工程不足：无论模型家族或提示策略，自动化多工具扫描仍是 LLM 辅助 IaC 生成的必要补充。
- 云错误配置仍是安全事件的主要原因，LLM 与 SLM 能否生成安全合规的 IaC 是开放问题；所有工件公开可用。

## 正文

论文编号：arXiv:2608.02672v1（更新类型：cross）。以下为摘要全文翻译。

云错误配置仍是安全事件的主要原因，然而 LLM 与 SLM 能否生成安全合规的基础设施即代码（IaC）仍是开放问题。我们在 17 个场景的 AWS Terraform 生成上基准七个模型——三个闭源 LLM（Claude Opus 4、GPT-5.4、Gemini 2.5 Pro）与四个开源 SLM（Qwen2.5-Coder-14B、WizardCoder-33B、CodeLlama-13B、Magicoder-S-CL-7B）——把 Checkov 与 Trivy 扫描器集成进 GitLab CI/CD 流水线，并在三个安全级别（pass@5）评估两种提示策略。语法有效性与安全合规在 LLM 生成的 IaC 中大体是正交属性：可靠产生格式良好 Terraform 的模型不一定产生安全 Terraform——WizardCoder-33B 实现 77.8% 的验证率却零 Checkov 合规，而 Claude Opus 4 在详细安全提示下达到 23.1% 的 Checkov 与 92.5% 的 Trivy 通过率。因此，仅提示工程不足：无论模型家族或提示策略，自动化多工具扫描仍然是 LLM 辅助 IaC 生成的必要补充。所有工件公开可用。

## 关键词

#基础设施即代码 #Terraform #安全合规 #LLM评估
