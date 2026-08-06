# Security-First Evaluation of Text-to-Terraform: Benchmarking LLMs and SLMs for Secure IaC Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Francis Luis Santos Vargas, Rodrigo Brand\~ao Mansilha, Diego Kreutz　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.02672)

------

arXiv:2608.02672v1 Announce Type: cross

Abstract: Cloud misconfiguration remains a leading cause of security incidents, yet whether LLMs and SLMs can generate security-compliant Infrastructure-as-Code is an open question. We benchmark seven models, three closed LLMs (Claude Opus 4, GPT-5.4, Gemini 2.5 Pro) and four open SLMs (Qwen2.5-Coder-14B, WizardCoder-33B, CodeLlama-13B, Magicoder-S-CL-7B), on AWS Terraform generation across 17 scenarios, integrating Checkov and Trivy scanners into a GitLab CI/CD pipeline and evaluating two prompt strategies at three security levels (pass@5). Syntactic validity and security compliance are largely orthogonal properties in LLM-generated IaC, a model that reliably produces well-formed Terraform does not necessarily produce secure Terraform: WizardCoder-33B achieves 77.8% validate rate yet zero Checkov compliance, while Claude Opus 4 reaches 23.1% Checkov and 92.5% Trivy pass rates under detailed security prompting. Consequently, prompt engineering alone is insufficient: automated multi-tool scanning remains a necessary complement to LLM-assisted IaC generation regardless of model family or prompt strategy. All artifacts are publicly available.
