---
title: "最高暴露度 Docker Hub 镜像中的漏洞、机密与错误配置"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Vulnerabilities, Secrets and Misconfiguration in the Highest-Exposure Docker Hub Images.md"
source_note: "[[信息源/arXiv cs.AI RSS/Vulnerabilities, Secrets and Misconfiguration in the Highest-Exposure Docker Hub Images]]"
source_sha256: 0badd471e53e01816ce3e7f3c6f848a9960b154115d1063540e221349870ae90
original_url: "https://arxiv.org/abs/2608.02669"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 最高暴露度 Docker Hub 镜像中的漏洞、机密与错误配置

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Cristhian Kapelinski、Beatriz Machado、Diego Kreutz
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02669)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Vulnerabilities, Secrets and Misconfiguration in the Highest-Exposure Docker Hub Images|查看原始文件]]

## 摘要

- 提出 ChimangoScan 流水线：爬取 Docker Hub 命名空间（12,716,568 个仓库、6638 亿累计拉取），重建镜像层图（5,440 万条 IS_BASE_OF 边），按暴露分数（把镜像自身拉取数与整个下游子树拉取数折叠进一个标量）对镜像排名，并用六个独立扫描器扫描 52,895 个最高暴露仓库（占全部记录拉取的 84.7%），产生 1.704 亿条发现。
- Docker Hub 是大多数容器部署底下的注册表，广泛复用的基础镜像中的缺陷被在其上构建的每个镜像继承；先前生态级测量各依赖单一检测器，其计数对工具依赖性未量化，比较扫描器的研究用数十到数百镜像的样本。
- 漏洞近乎普遍：96.3% 镜像携带已知包漏洞、93.4% 携带严重漏洞、98.0% 至少一个 CIS Docker Benchmark 错误配置；单一工具报告的姿态大都是该工具的伪影：8,070 万不同（漏洞、包）组中 66.8% 仅被三个漏洞扫描器之一标记、仅 2.7% 被全部标记，最佳单一扫描器恢复 66.9%；TruffleHog 在 76.9% 镜像中标记机密，但手工标注 1,100 个随机检测发现 99.7% 非凭证。
- 单个 zlib CVE 到达携带总语料暴露 47.3% 的镜像并传播到 113 万不同下游镜像，但暴露不预测镜像有多脆弱；发布流水线与 283 GB 数据集。

## 正文

论文编号：arXiv:2608.02669v1（更新类型：cross）。以下为摘要全文翻译。

Docker Hub 是大多数容器部署底下的注册表，广泛复用的基础镜像中的缺陷被在其上构建的每个镜像继承。先前的生态级测量各自依赖单一检测器，使其计数的工具依赖性未被量化，而比较扫描器的研究使用数十到数百个镜像的样本。我们提出 ChimangoScan，一个流水线：爬取 Docker Hub 命名空间（12,716,568 个仓库、6638 亿累计拉取），重建镜像层图（5,440 万条 IS_BASE_OF 边），按暴露分数对镜像排名（把镜像自身拉取数与其整个下游子树的拉取数折叠进一个标量），并用六个独立扫描器扫描 52,895 个最高暴露仓库（占全部记录拉取的 84.7%），产生 1.704 亿条发现。漏洞近乎普遍：96.3% 的镜像携带已知包漏洞，93.4% 携带严重漏洞，98.0% 至少一个 CIS Docker Benchmark 错误配置。单一工具报告的姿态大都是该工具的伪影：在 8,070 万个不同（漏洞、包）组中，66.8% 仅被三个漏洞扫描器之一标记，只有 2.7% 被全部三个标记，而最佳单一扫描器恢复 66.9%。TruffleHog 在 76.9% 的镜像中标记机密，然而手工标注 1,100 个随机检测发现 99.7% 是非凭证。一个单一的 zlib CVE 到达携带总语料暴露 47.3% 的镜像，并传播到 113 万个不同的下游镜像，但暴露并不预测镜像有多脆弱。我们发布该流水线与 283 GB 的数据集。

## 关键词

#Docker安全 #供应链 #漏洞扫描 #镜像暴露
