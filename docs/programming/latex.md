# LaTeX

## TinyTeX

A lightweight, cross-platform, portable, and easy-to-maintain LaTeX distribution based on TeX Live

相当于 Miniconda 之于 Anaconda

- 主页及介绍：<https://yihui.name/tinytex/>
- GitHub 仓库：<https://github.com/yihui/tinytex>

从仓库的 `tools` 目录中下载执行 [`install-windows.bat`](https://github.com/yihui/tinytex/raw/master/tools/install-windows.bat) 安装脚本（安装过程中可能会出现「找不到 luatex.dll」的错误，实际不影响使用），然后使用 `tlmgr install pkg1 pkg2 ...` 命令安装 [`pkgs-yihui.txt`](https://github.com/yihui/tinytex/raw/master/tools/pkgs-yihui.txt) 以及其它自己需要的包（善用 VS Code `Join Lines` 命令），比如：

```bash
chktex
cm-super
latexindent
texcount
libertinust1math
nicematrix

# BibLaTeX
biblatex
biber
logreq

IEEEtran

# 中文
ctex
cjk
cjkpunct
xecjk
```

### `tlmgr` Common Commands

搜索缺失的包

```bash
tlmgr search --global --file "keywords"
```

```
tlmgr install [option...] pkg...
tlmgr update [option...] [pkg...]
```

[`tlmgr` manual](https://www.tug.org/texlive/doc/tlmgr.html)

### TinyTex 卸载

```bash
# Linux
tlmgr path remove
rm -r "~/.TinyTeX"

# macOS
tlmgr path remove
rm -r ~/Library/TinyTeX

# Windows
tlmgr path remove
rd /s /q "%APPDATA%\TinyTeX"
```

## Escape

`& % $ # _ { } ~ ^ \`

**Note**: use `\ell` instead of `l` in math mode

## Personal Template

::: details LaTeX code
```latex
\documentclass[11pt]{article}

%% Improve typesetting.
\usepackage{microtype}

%% Use geometry package to set up margins.
%% A4 paper is 8.27 × 11.69 inch.
\usepackage[a4paper, width=6.27in, height=9.69in, includehead]{geometry}

%% Set line spacing.
\usepackage{setspace}
\onehalfspacing%

%% Compact list (avoid too loose list under 1.5 linespace)
\usepackage{enumitem}
\setlist{itemsep=0pt}

%% For `\includegraphics'
\usepackage{graphicx}

\usepackage{booktabs}
\usepackage{multirow}
\usepackage{xcolor}

%% ━━━━━ Math ━━━━━
\usepackage{amsmath}
%% For `\mathbb'
\usepackage{amssymb}
%% For `\coloneqq', `\underbrace'
%% If enabled, no longer need to load `amsmath' manually
% \usepackage{mathtools}

% \DeclareMathOperator*{\argmin}{arg\,min}

%% ━━━━━ URL ━━━━━
\colorlet{urlcolor}{red}

%% Setup the hyperref package for enabling links, bookmarks, and PDF properties.
\usepackage[backref=page]{hyperref}
\hypersetup{
    colorlinks = true,
    citecolor  = blue
}

%% Capitalising all cross-reference names (e.g. Figure, Equation)
%% Must come as late as possible, especially after hyperref.
\usepackage[capitalise]{cleveref}

%% ━━━━━ Change the default font to sans-serif ━━━━━
%% <https://en.wikibooks.org/wiki/LaTeX/Fonts#Font_families>
\renewcommand{\familydefault}{\sfdefault}
%% Prevent warnings caused by sf font
%% <https://tex.stackexchange.com/questions/155604/itemize-under-sf-produce-a-font-warning>
\let\oldtextbullet\textbullet%
\renewcommand{\textbullet}{\rmfamily\oldtextbullet}
\usepackage{lmodern}

%% ━━━━━ Others ━━━━━
% \newcommand{\todo}[1]{\textcolor{blue}{[To-do: #1]}}

\begin{document}

\begin{center}
	\LARGE\textbf{Title}\\[5pt]
	\normalsize Author\\\today
\end{center}

\section{Introduction}

Your text

\pagebreak

\bibliography{ref}
\bibliographystyle{plain}

\end{document}
```
:::

## Useful Snippets

### Change Math Color

```latex
\definecolor{math}{HTML}{0c7f99}
\everymath{\color{math}}
\everydisplay{\color{math}}
%% Clear unwanted coloring
\usepackage{etoolbox}
\AtBeginEnvironment{table}{\everymath{}}
```

<https://tex.stackexchange.com/questions/347268/change-math-color-globallyx>

### Proper Brackets

```latex
%% Remove the unexpected spacing introduced by `\left` and `\right`
\let\oldleft\left
\let\oldright\right
\renewcommand{\left}{\mathopen{}\mathclose\bgroup\oldleft}
\renewcommand{\right}{\aftergroup\egroup\oldright}
\newcommand{\rbracket}[1]{\left(#1\right)}
\newcommand{\sbracket}[1]{\left[#1\right]}
\newcommand{\cbracket}[1]{\left\{#1\right\}}
```

### Sample Table

```latex
\begin{table}
    \centering
    \begin{tabular}{llll}
        \toprule
          & A & B & C \\
        \midrule
        D & E & F & G \\
        \bottomrule
    \end{tabular}
    \caption{Caption}\label{tab:example}
\end{table}
```

`tabular` 用来容纳表格真正的内容（必要成分）
`table` 则额外创建了一个 float 环境（就像 figure），还可以包含 caption

### 表格：为单元格单独指定对齐方式 / 样式

> I suggest using `\multicolumn{1}{c}{header text}`. `\multicolumn` allows changing the formatting of single cells.

<https://tex.stackexchange.com/a/2927>

```latex
\newcommand{\tablehead}[1]{\multicolumn{1}{c}{\bfseries#1}}
```

### 删除线 (Strikethrough)

```latex
\usepackage{ulem}
\sout{text to be striked out}
```

### 其它

```
authblk
```

## 段落样式

### 行距

```latex
\usepackage{setspace}
\onehalfspacing%

%% Compact list (avoid too loose list under 1.5 linespace)
\usepackage{enumitem}
\setlist{itemsep=0pt}
```

### 设置段首无缩进

- 全局：use `\setlength{\parindent}{0pt}` in **preamble**.
- 局部：use `\noindent` in the front of that paragraph

## Useful Links

[List of mathematical symbols by subject](https://en.wikipedia.org/wiki/List_of_mathematical_symbols_by_subject) - Wikipedia

[LaTeX `twoside` document binding offset](https://tex.stackexchange.com/questions/27776/how-to-force-latex-to-put-even-pages-on-the-right-hand-side-in-documentclass-art/27786#27786)

## BibLaTeX

```latex
%% 最好放在 hyperref 之前
\usepackage{biblatex}
\addbibresource{ref.bib}

\begin{document}
...
\printbibliography
\end{document}
```

## 字体

```latex
%% `enc` means encoding
\usepackage[T1]{fontenc}    %% `OT1` (old TeX) only contains 128 chars, that's why `<>` becomes `¡¿`
\usepackage[utf8]{inputenc} %% So you can use Unicode chars

%% Linux Libertine
% \usepackage{libertine}
% \usepackage{libertinust1math}
%% The Libertine Mono looks bad, you may want to revert it
% \renewcommand{\ttdefault}{cmtt}

%% TeX Gyre Pagella font
% \usepackage{tgpagella}
%% Pazo Math font
% \usepackage{mathpazo}
```

::: tip More
- [LaTeX font selection guide](https://www.latex-project.org/help/documentation/fntguide.pdf)
- [Font typefaces](https://www.overleaf.com/learn/latex/font_typefaces)
:::

## 中文支持

```latex
\usepackage{ctex}  %% https://ctan.org/pkg/ctex

%% 按需设置字体，\usepackage[fandol]{ctex} 预设也很不错
% \setCJKmainfont{Source Han Serif SC}[
%     ItalicFont = KaiTi
% ]
% \setCJKsansfont{Source Han Sans SC}
% \setCJKmonofont{Sarasa Mono SC}
```

使用 XeLaTeX 编译

- 自行安装字体时需要选择「为所有用户安装」
- 使用 `fc-list :lang=zh` 查看有哪些中文字体

（英文版 Windows 需要先安装中文语言包，`Settings`>`Time & Language`>`Region & Language`>`中文`>`Options`>`Basic typing`）

::: tip More
- [在 LaTeX 中使用 OpenType 字体](https://stone-zeng.github.io/2018-08-08-use-opentype-fonts/)
:::

## `a4paper`/`letterpaper` 不起作用

Quite a lot of old classes (e.g. `article`) don't set the pdf sizes. An option like `a4paper` sets only things like the TeX `\paperwidth`, the linewidth and similar lengths.

You will have to insert the necessary command yourself. For pdflatex this is

```latex
\pdfpagewidth=\paperwidth%
\pdfpageheight=\paperheight%
```

BTW: The people who can't reproduce your problem probably have a4paper as default. In this case they would see your problem if they used e.g. the option `letterpaper`.

### Change TeX Live Default Setting

```
tlmgr paper letter
tlmgr paper a4
```

## Beamer

```latex
% Gets rid of bottom navigation bars
\setbeamertemplate{footline}[page number]{}

% Gets rid of navigation symbols
\setbeamertemplate{navigation symbols}{}
```

## VS Code, LaTeX Workshop, SumatraPDF, and SyncTeX

见 [LaTeX Workshop Wiki](https://github.com/James-Yu/LaTeX-Workshop/wiki/View#using-synctex-with-an-external-viewer)

此外，在 SumatraPDF > Settings > Options > Set inverse search command-line 中填入相应的

```
"C:\Users\<username>\AppData\Local\Programs\Microsoft VS Code\Code.exe" -g -r "%f:%l"
```
