---
title: {{ replace .Name "-" " " | title }}
date: {{ now.Format "2006-01-2" }}
description: Delete if not needed
tags: [tag1, tag2]
draft: true
image: "/image/blog-pic.jpg"
---

Article goes here. 

In front matter:
    Put showDate = true/false to enable/disable showing dates
    Put math: true to enable showing equations