# CT Open: An Open-Access, Uncontaminated, Live Platform for the Open Challenge of Clinical Trial Outcome Prediction

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Jianyou Wang, Youze Zheng, Longtian Bao, Hanyuan Zhang, Qirui Zheng, Yuhan Chen, Yang Zhang, Matthew Feng, Maxim Khan, Aditya K. Sehgal, Christopher D. Rosin, Ramamohan Paturi, Umber Dube, Leon Bergen　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2604.16742)

------

arXiv:2604.16742v2 Announce Type: replace-cross

Abstract: Scientists have long sought to accurately predict outcomes of real-world events before they happen. Can AI systems do so more reliably? We study this question through clinical trial outcome prediction, a high-stakes open challenge even for domain experts. We introduce CT Open, an open-access, live platform that will run four challenge every year. Anyone can submit predictions for each challenge. CT Open evaluates those submissions on trials whose outcomes were not yet public at the time of submission but were made public afterwards. Determining if a trial's outcome is public on the internet before a certain date is surprisingly difficult. Outcomes posted on official registries may lag behind by years, while the first mention may appear in obscure articles. To address this, we propose a novel, fully automated decontamination pipeline that uses iterative LLM-powered web search to identify the earliest mention of trial outcomes. We validate the pipeline's quality and accuracy by human expert's annotations. Since CT Open's pipeline ensures that every evaluated trial had no publicly reported outcome when the prediction was made, it allows participants to use any methodology and any data source. In this paper, we release a training set and two time-stamped test benchmarks, Winter 2025 and Summer 2025. We believe CT Open can serve as a central hub for advancing AI research on forecasting real-world outcomes before they occur, while also informing biomedical research and improving clinical trial design. CT Open Platform is hosted at $\href{https://ct-open.net/}{https://ct-open.net/}$
