# Posture and Sustainment Optimization Under Adversarial Uncertainty

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Amelie Norris, Alyssa Lee, Natan Vidra, Spurthi Setty　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05256)

------

arXiv:2608.05256v1 Announce Type: new

Abstract: Pre-commitment posture, the assignment of military assets to theater locations before conflict scenarios resolve, is a critical and formally unsolved problem in joint operational planning. Current practice relies on greedy heuristics that maximize value and ignore geographic coverage and are structurally vulnerable to adversaries that target high-strategic value locations. This paper presents a scenario-weighted adversarially robust posture optimization engine for the Posture and sustainability allocation (PSA) problem, modeled as a finite-horizon Markov Decision Process over assets, theater locations, and time steps. We introduce the Composite Expected Value (CEV) optimizer, which places assets by maximizing scenario-weighted expected posture efficiency over a distribution of threat scenarios, and the RobustCEV extension, which iterates against a Bayesian adversary that updates its targeting distribution in response to observed placement. Across three experiments in an Indo-Pacific basing environment with 20 assets and 5 theater locations, we demonstrate that: (1) the greedy baseline incurs a permanent 25.1% posture efficiency penalty due to geographic under-coverage and a 57.3% scenario-weighted readiness collapse under value-correlated adversarial threat; (2) the CEV optimizer recovers up to 19.8% efficiency over greedy when the threat distribution carries a geographic signal, with a curated set of 5 to 20 scenarios sufficient to capture the majority of this gain; and (3) the RobustCEV extension recovers up to 158% efficiency relative to a naive optimizer when an adaptive adversary employs a deceptive threat prior. All findings are validated using paired t-tests with Bonferroni correction and two-level variance decomposition, confirming that the performance gaps reported are structural properties of placement strategies rather than sampling artifacts.
