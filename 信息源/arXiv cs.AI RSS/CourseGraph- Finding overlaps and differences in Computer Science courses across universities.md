# CourseGraph: Finding overlaps and differences in Computer Science courses across universities

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Arthur Nijdam, Paul Stankovski Wagner, Sara Ramezanian　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05910)

------

arXiv:2608.05910v1 Announce Type: new

Abstract: Student mobility programs such as Erasmus+ enable students to take courses at other universities, broadening their academic and cultural horizons. However, this flexibility also leads to a practical challenge: ensuring that students do not take courses elsewhere that substantially overlap with courses in their home curriculum. In this work, we propose CourseGraph, a methodology that automates the evaluation of external courses based on insights obtained from the process followed by curriculum administrators when assessing courses for inclusion in a degree program. Course- Graph extracts information such as course titles, descriptions, and learning outcomes from the course webpage. Then, this information is represented semantically using a BERT-based language model, after which the pair-wise similarity between courses can be computed. This information is then used by a Random Forest classifier to determine whether a candidate course abroad overlaps with a course already contained in the student's curriculum. We evaluate CourseGraph using (1) the Computer Science program at Eindhoven University of Technology, which contains information about courses with substantial overlap, and (2) six approved international programs from students enrolled in the Computer Science program at Lund University, including the corresponding decisions made by a curriculum administrator. The experimental results indicate that CourseGraph provides an effective approach for identifying overlapping courses and supporting curriculum alignment across universities.
