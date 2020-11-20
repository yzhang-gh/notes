## ADEPT Principle

Make explanations ADEPT: Use an Analogy, Diagram, Example, Plain-English description, and then a Technical description.

<https://betterexplained.com/articles/adept-method/>

## 排版

**括号**中英文混排：如果括号里全是英文，则用半角括号 (English)，此外则使用（全角括号）

## Asset Handling

### 图片

使用相对路径 `./relative/path`

### 非全局样式表 (CSS)

CSS 文件放到 `.vuepress/public` 目录下，该目录会被复制到网站的根目录，使用时路径为 `{base}/foo.css` (此处即 `/notes/foo.css`)

比如

```
<link rel="stylesheet" href="/notes/katex@0.11.1.min.css">
```

---

Many styles based on [Dev on Windows with WSL](https://dowww.spencerwoo.com/).
