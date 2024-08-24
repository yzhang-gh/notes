## ADEPT Principle

Make explanations ADEPT: Use an Analogy, Diagram, Example, Plain-English description, and then a Technical description.

<https://betterexplained.com/articles/adept-method/>

## 排版

- 括号，中英文混排：如果括号里全是英文，则用半角括号 (Parenthesis)，此外则使用（全角括号）

- [x] 中文标点（破折号，省略号）样式修正[^cn-punct1]

  ```html
  <span class="cn-font" lang="zh-CN">——……</span>
  ```

- [x] 相邻全角标点挤压[^cn-punct2]

  ```html
  <span class="punct-halt">：</span>「
  ```

  - [2024-08-24 更新] Chrome 120 (2023-12-04) 已经通过 [`text-spacing-trim`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-spacing-trim) 属性默认支持标点挤压（要求该 OpenType 字体支持 `halt` 或 `chws` 特性）[^cn-punct3]
    - 同时计划未来引入 `text-autospace` 属性在中文和英文之间自动增加间距，就不用手动加空格了
  - [OpenType font features guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)
    - Discovering availability of features in fonts ([Wakamai Fondue](https://wakamaifondue.com/beta/))

- 考虑到 Markdown 语法的局限性，支持使用 [`markdown-it-attrs`](https://github.com/arve0/markdown-it-attrs) 来附加样式，比如居中 GFM 表格

  ```
  | header1 | header2 |
  | ------- | ------- |
  | column1 | column2 |

  {{.center}}
  ```

## Asset Handling

### 图片

使用相对路径 `./relative/path`

### 可选样式表 (CSS)

把 CSS 文件放到 `.vuepress/public` 目录下，该目录下的文件会被复制到网站的根目录，使用时路径为 `{base}/foo.css` (此处相当于 `/notes/foo.css`)

比如 KaTeX 数学环境样式

```html
<link rel="stylesheet" href="/notes/katex.min.css">
```

## Misc.

在新标签页打开链接，以及外链图标

```html
<a href="" target="_blank" rel="noopener noreferrer" class="outbound"></a>
```

---

Some styles are based on [Dev on Windows with WSL](https://dowww.spencerwoo.com/).

[^cn-punct1]: https://www.thetype.com/2019/03/14918/
[^cn-punct2]: https://www.bilibili.com/video/BV1Lr4y127qp/
[^cn-punct3]: https://developer.chrome.com/blog/css-i18n-features#cjk_punctuation_kerning_text-spacing-trim