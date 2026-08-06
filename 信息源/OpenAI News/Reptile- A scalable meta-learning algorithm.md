# Reptile: A scalable meta-learning algorithm

> 数据源：OpenAI News
> RSS：[打开源文件](https://openai.com/news/rss.xml)

> 发布时间：Wed, 07 Mar 2018 08:00:00 GMT　|　分类：Research　|　原文：[打开链接](https://openai.com/index/reptile)

------

We’ve developed a simple meta-learning algorithm called Reptile which works by repeatedly sampling a task, performing stochastic gradient descent on it, and updating the initial parameters towards the final parameters learned on that task. Reptile is the application of the Shortest Descent algorithm to the meta-learning setting, and is mathematically similar to first-order MAML (which is a version of the well-known MAML algorithm) that only needs black-box access to an optimizer such as SGD or Adam, with similar computational efficiency and performance.
