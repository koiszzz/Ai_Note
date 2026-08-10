# DynaPix: Can Vision-Language Models Identify the Exact Future?

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Thong Nguyen, Vinh-Hien Do, Quynh Vo, Cong-Duy Nguyen, See-Kiong Ng　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05505)

------

arXiv:2608.05505v1 Announce Type: new

Abstract: Acting in a physical scene requires knowing its real later state, not a plausible one. Current evaluations often accept words or a realistic-looking image, so the predicted state is never checked against the true one. We introduce DynaPix (Dynamic Pixels), a benchmark that makes prediction checkable. Given a video clip that stops before a key event and a question about a later moment, a model must pick the true future image from close candidates or a large gallery. The scenes come from a physics simulator, so the correct image and its time are known exactly and the wrong options are deliberately similar. Models often succeed when a visible event marks the target moment, but are near chance when only elapsed time marks it. Gallery search is harder still, as the true image rarely ranks first. People handle the elapsed-time items well, so the difficulty lies with the models, not the questions. Training on scene accounts drawn from the simulator's true record, not a teacher's guess, repairs much of this but not the longer elapsed time case. DynaPix thus exposes a temporal-anchoring gap: models attach a prediction to an event far better than to time itself.
