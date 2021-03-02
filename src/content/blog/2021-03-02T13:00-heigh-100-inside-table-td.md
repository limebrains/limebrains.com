---
layout: blog-post
title: "How to make a div inside table td with height 100%?"
subtitle: "How to make a div inside table td with height 100%?"
tags: "html, css, table, frontend"
date: 2021-03-02 13:00
category: webdev
image: https://i.imgur.com/2d2q86y.png
seo:
  title: "How to make a div inside table td with height 100%?"
  description: "How to make a div inside table td with height 100%?"
  noindex: false
--- 

# Problem 😱

Let's say we have a following html table:

```html

<table style="height: 1px;">
  <tbody>
  <tr>
    <td class="full-height">
      <div class="full-height" style="background: red;">
        height 100%
      </div>
    </td>
    <td>
      1<br/>
      2<br/>
      3<br/>
    </td>
  </tr>
  </tbody>
</table>
```
with css:
```css
.full-height { height: 100%; }
```

Result:

![Initial](https://i.imgur.com/2d2q86y.png)

We want the red part to have a full height of the row but `height: 100%` on `div` and `td` is not enough.

---

# Solution 🤓

## 🎉 🎉 🎉 more css 🎉 🎉 🎉

```css
table {
    height: 1px;
}
```
Result:

![Result](https://i.imgur.com/Uxi9dHm.png)

Confirmed to work on Chrome, Firefox and Safari.

Why `1px`? No idea.
