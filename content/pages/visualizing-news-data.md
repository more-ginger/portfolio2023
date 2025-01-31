---
title: Visualizing News Data
ID:
  - visualizing-news-data
date: January 31, 2025 4:47 PM
paragraphs:
  - paragraph: "## Some personal thoughts on opportunities and challenges"
  - paragraph: Few months ago I started working on a research project with the idea
      of visualising historical and contemporary news discourses. The main idea
      is that we can generate insight from monitoring the unfolding discourses
      of contemporary digital news. This essay includes some considerations on
      the data scouting and preparation, a process that lead me to think very
      hard about news items as a data source for visualisation. I took some time
      to write down some of these thoughts, because the reliable access to news
      data would have been almost impossible, without relying on commercial
      services. Arguably, the lack of open archives for digital news poses an
      issue to historical research about contemporary news production. In the
      following paragraphs, I describe the state of the art of digital news
      data. Then, I propose three experiments that show the potential of news
      data for visualisation research. These example show the different
      perspectives of contemporary digital journalism that could be explored
      through collections of standardised news data.
  - paragraph: "### Archival of digital news data: state of the art"
  - paragraph: >-
      To this day, we can very much rely on digital archives of physical
      newspapers. These archives are often public, maintained by libraries, tech
      companies, or the news outlets themselves. Newspaper pages were scanned
      and archived to be made available for consultation well past their
      original publication date. Whereas there are several resources to freely
      access historical printed newspaper, like the one in Figure 1 (e.g.
      [1](https://en.wikipedia.org/wiki/Wikipedia:List_of_online_newspaper_archives),
      [2](https://guides.loc.gov/foreign-newspapers/digital-resources),
      [3](https://veridiansoftware.com/collections/?category=6),
      [4](https://news.google.com/newspapers)), digital news data have
      apparently obtained much less attention. Nowadays journalism is mostly
      produced for online publication. News has quickly diversified into several
      formats, aimed at different platforms and audiences. Variety, coupled with
      the increasing volume of news and its fast-paced publication, results in a
      paradox: we live immersed in a constant flow of news, but we can only
      temporarily capture very subjective and local fragments of it. This
      situation has a very pragmatic implication: in looking for news data from
      online news outlet, I almost could not find any publicly accessible
      archive. Almost no news outlet has programmatic access to their own
      archives available to the public. The New York Times is an outlier,
      [offering an official API](https://developer.nytimes.com/) where the
      metadata for each publication is stored. This is the result of a systemic
      issue: the majority of online publications does not seem to have a
      systematic strategy for archiving their content, aside from regularly
      backing up servers and databases (which is arguably very different).
      [There is even evidence of some outlets making questionable AI-powered
      decisions about their
      archives.](https://www.indignity.net/the-washington-post-burns-its-own-archive/)


      The lack of official APIs is partially balanced out by publicly-funded endeavours like [Media Cloud ](https://www.mediacloud.org/documentation/search-api-guide)and the [European Media Monitor (EMM)](https://emm.newsbrief.eu/overview.html). As of today, EMM does not allow access to its API. Instead, Media Cloud can be considered one of the closest things to an archive of news. It is open and offers more than 200 millions articles from curated sources. However, the API does not provide with the article metadata or content – due to copyright restrictions. Technically, the content can be scraped – however, the task becomes complex when dealing with thousands of different sources and the various restrictions implemented by news outlets on their webpages. Additionally, the necessity for scraping information makes data prone to changes and does not enforce a consistent structure across datasets. For now, in the context of my research, I found that the most comprehensive way to obtain current and historical news coverage is to use commercial APIs. These services provide access to articles, and most importantly, their metadata. Aside from being questionable for many reasons, I believe few of these APIs have a very good way to structure and dispatch information to their paying costumers. Some of them offer very comprehensive and well-structured news data. In experimenting with the sample datasets obtained from these APIs, I found several interesting avenues for media and visualisation research in the context of news production.
  - paragraph: "### Some experiments with news (meta)data"
  - paragraph: >-
      *Approach A: article categories and SEO keywords*

      A low hanging fruit in experimenting with news data is to work with public categories and SEO keywords. Possibly, these terms are explicitly set by authors and/or editors to publicly categorise a specific news entry. These public keywords are intended as navigation anchors for readers, they make sub-sets of interrelated news item accessible. SEO keywords are more difficult to define. These terms only partially match public categories and are used to index the article on search engines. However, SEO keywords remain relevant, as they are strategically chosen to make the article perform well on search engines.


      In general, I find categories and keywords particularly meaningful. They straddle a very adequate level of abstraction: they describe the article content, while remaining generic enough to match to more than one story. Also, these categories efficiently express the belonging of a specific item to a broader collection within a news outlet. Visualising categories means offering a historical overview of how important certain topics within daily news coverage. Such approach can easily rely on the metaphor of “flow”, which is a somewhat intuitive way to discuss (and visualise) news. For instance, [TopTom](https://densitydesign.org/research/topic-tomographies-a-visual-approach-to-distil-information-from-media-streams/#Interface) (Gobbo et al., 2017) is a solid example of how to visualise a news data flow. The result is a visually straightforward and compelling stream of articles, distilled into their key concepts. Similarly, Figure 2 is a quick experiment I did visualising one year of New York Times along its most used categories. The visualisation shows the development of the top keywords (appearing in at least 100 articles) across the whole coverage.
---
