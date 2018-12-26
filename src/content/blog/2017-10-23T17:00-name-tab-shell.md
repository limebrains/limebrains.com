---
layout: blog-post
title: "How to name tab in shell?"
subtitle: "How to name tab in shell?"
tags: "alert, shell, linux, osx, apple, mac"
date: 2017-10-23 17:00
category: linux
image: https://i.imgur.com/wI7Ax7f.png
seo:
  title: "How to name tab in shell?"
  description: "How to name tab in shell?"
  noindex: false
--- 

# Problem 😱

You have multiple shell tabs with not really nice names.

![plain shell name](https://i.imgur.com/jXKzEqT.png) 


---

# Solution 🤓

```bash
function name() { echo -ne "\\033]0;$@\\007"; }
```

usage:
```bash
| => name writing blog post
```

result:

![nice shell name](https://i.imgur.com/wI7Ax7f.png)
