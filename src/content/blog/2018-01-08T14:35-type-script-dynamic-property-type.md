---
layout: blog-post
title: "How to define type in type-script for dynamic property name?"
subtitle: "How to define type in type-script for dynamic property name?"
tags: "es6, typescript, type-script"
date: 2018-01-08 14:35
category: type-script
image: https://i.imgur.com/YCgsinE.png
seo:
  title: "How to define type in type-script for dynamic property name?"
  description: "How to define type in type-script for dynamic property name?"
  noindex: false
--- 


# Problem 😱

You would like to create type for following object with dynamic property name:

```javascript
const gallery = {
  homepage: {
    key: 'gallery-of-users',
    activeSlide: 1,
  },
  feed: {
    key: 'gallery-of-posts',
    activeSlide: 10
  }
}
```

---

# Solution 🤓

```typescript
export interface IGalleryItem {
  key: string;
  activeSlide: string;
}

export interface IGallery {
  [slideKeyWhichIsDynamic:string]: IGalleryItem;
}
```

Usage:
```
const gallery: IGallery = {
    ...
}
```
