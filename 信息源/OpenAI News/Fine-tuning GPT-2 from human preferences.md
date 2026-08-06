# Fine-tuning GPT-2 from human preferences

> 数据源：OpenAI News
> RSS：[打开源文件](https://openai.com/news/rss.xml)

> 发布时间：Thu, 19 Sep 2019 07:00:00 GMT　|　分类：Safety & Alignment　|　原文：[打开链接](https://openai.com/index/fine-tuning-gpt-2)

------

We’ve fine-tuned the 774M parameter GPT-2 language model using human feedback for various tasks, successfully matching the preferences of the external human labelers, though those preferences did not always match our own. Specifically, for summarization tasks the labelers preferred sentences copied wholesale from the input (we’d only asked them to ensure accuracy), so our models learned to copy. Summarization required 60k human labels; simpler tasks which continue text in various styles required only 5k. Our motivation is to move safety techniques closer to the general task of “machines talking to humans,” which we believe is key to extracting information about human values.
