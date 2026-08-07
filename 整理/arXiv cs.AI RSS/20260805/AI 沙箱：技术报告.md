---
published: 20260805
title: "AI 沙箱：技术报告"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AI Sandbox- Technical Report.md"
source_note: "[[信息源/arXiv cs.AI RSS/AI Sandbox- Technical Report]]"
source_sha256: e98e7b25b626adf385dbd7b75cb1e3ef46dc693a611ccafff850cc32d2297b01
original_url: "https://arxiv.org/abs/2608.02679"
processed: 2026-08-06
language: zh-CN

---

# AI 沙箱：技术报告

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Muhammad Waseem, Md Aidul Islam, Md Nasir Uddin Shuvo, Md Mahade Hasan, Kai-Kristian Kemell, Jussi Rasku, Mika Saari, Vilma Saari, Roope Pajasmaa, Markku Oivo, Pekka Abrahamsson
> - 发布时间：20260805
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02679)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AI Sandbox- Technical Report|查看原始文件]]

## 摘要

- 跨行业和学术界的协作 AI 实验需要支持快速原型同时保持受控访问、租户隔离和透明工作流的平台；尽管对 AI 沙箱兴趣增长，关于如何设计和实现集成实验能力与治理要求的平台的实用指导仍有限。
- 本文呈现一个治理感知、多租户 AI 沙箱的设计与实现，用于结构化实验和跨项目、跨利益相关者群体生成可复用评估证据。
- 参考架构将多租户用户界面与后端控制平面分离，将执行和数据管理功能置于专用层；平台支持受治理用户入门、项目中心协作、AI 服务托管访问、审批工作流、审计日志和可追溯实验。

## 正文

跨行业和学术界的协作 AI 实验需要支持快速原型同时保持受控访问、租户隔离和透明工作流的平台。尽管对 AI 沙箱的兴趣日益增长，关于如何设计和实现将实验能力与治理要求集成的平台的实用指导仍然有限。本工作呈现一个治理感知、多租户 AI 沙箱的设计与实现，用于结构化实验和跨项目、跨利益相关者群体生成可复用评估证据。该沙箱在产学研合作中开发，基于与工业伙伴迭代细化的需求。其参考架构将多租户用户界面与后端控制平面分离，并将执行和数据管理功能置于专用层。平台支持受治理的用户入门、项目中心的协作、AI 服务的托管访问、审批工作流、审计日志和可追溯实验。实验配置、上下文信息和治理决策存储为持久记录，允许证据和结果跨项目比较和复用。开发过程为在协作研究和工业环境中部署和扩展治理感知 AI 沙箱平台提供了实用经验。

## 关键词

#AI沙箱 #治理 #多租户 #实验平台 #arXiv