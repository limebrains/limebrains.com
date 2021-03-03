---
layout: blog-post
title: "Lighttpd configuration and vue router history"
subtitle: "Lighttpd configuration and vue router history"
tags: "vue, lighttpd, nginx, devops"
date: 2021-03-03 12:40
category: devops
image: https://i.imgur.com/xRnFwmd.png
seo:
  title: "Lighttpd configuration and vue router history"
  description: "Lighttpd configuration and vue router history"
  noindex: false
--- 

# Problem 😱

Expected behaviour:

```python
file_path = request.path

if file_path.is_present_on_disk():
  return open(file_path)

return open(index.html)
```

nginx
```
location / {
  try_files $uri $uri/ /index.html;
} 
```

But how to do it in Lighttpd?

---

# Solution 🤓

## 🎉 🎉 🎉 use `url.rewrite-if-not-file` 🎉 🎉 🎉

```
url.rewrite-if-not-file = (
     "/.*" => "/index.html"
)
```
