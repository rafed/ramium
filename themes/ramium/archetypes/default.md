---
date: {{ now.Format "2006-01-02" }}
title: "{{ replace .Name "-" " " | title }}"
tags: ["tag1", "tag2"]
draft: true
---

Article goes here.