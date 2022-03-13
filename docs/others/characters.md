# 常用特殊字符

## 中文标点

<table>
    <tbody>
        <tr>
            <td class="cn-font" lang="zh-CN">「 」</td>
            <td class="cn-font" lang="zh-CN">“ ”</td>
            <td class="cn-font" lang="zh-CN">‘ ’</td>
        </tr>
    </tbody>
</table>

中文破折号使用「<span class="cn-font" lang="zh-CN">——</span>」`U+2014`x2 或「<span class="cn-font" lang="zh-CN">⸺</span>」`U+2E3A`，使用思源黑体并设置 `lang=zh-CN`

[不离不弃的破折号 — The Type](https://www.thetype.com/2019/03/14918/)

## Emoji 和符号

<table>
    <tbody>
        <tr>
            <td>😂</td>
            <td>✓</td>
            <td>✗</td>
            <td title="U+2192, Rightwards arrow">→</td>
            <td title="U+1f816, Rightwards arrow with equilateral arrowhead">🠖</td>
            <td title="middle dot">·</td>
            <td title="bullet">•</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>Char</th>
            <th>Name</th>
            <th>Unicode</th>
            <th>LaTeX</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>-</td>
            <td>hyphen</td>
            <td><code>U+2010</code></td>
            <td>-</td>
            <td>form a compound word (editor-in-chief)</td>
        </tr>
        <tr>
            <td>–</td>
            <td>en dash</td>
            <td><code>U+2013</code></td>
            <td>--</td>
            <td>connect symmetric items, such as two ends of a range (pages 101–181) and others (Kullback–Leibler divergence)</td>
        </tr>
        <tr>
            <td>—</td>
            <td>em dash</td>
            <td><code>U+2014</code></td>
            <td>---</td>
            <td>indicate a pause in a sentence，类似于中文破折号</td>
        </tr>
        <tr>
            <td>―</td>
            <td>horizontal bar</td>
            <td><code>U+2015</code></td>
            <td></td>
            <td>aka quotation dash</td>
        </tr>
        <tr>
            <td>⸺</td>
            <td>two-em dash</td>
            <td><code>U+2E3A</code></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

<https://en.wikipedia.org/wiki/Dash>

## Box-drawing Characters

<table style="font-family: Consolas, monospace">
    <tbody>
        <tr>
            <td>┌</td>
            <td>─</td>
            <td>┬</td>
            <td>┐</td>
        </tr>
        <tr>
            <td>│</td>
            <td></td>
            <td>│</td>
            <td>│</td>
        </tr>
        <tr>
            <td>├</td>
            <td>─</td>
            <td>┼</td>
            <td>┤</td>
        </tr>
        <tr>
            <td>└</td>
            <td>─</td>
            <td>┴</td>
            <td>┘</td>
        </tr>
        <tr>
            <td>━</td>
        </tr>
    </tbody>
</table>

<pre style="line-height: 1.2rem"><code>root/
├── subfolder/
│   └── submodule.py
└── main.py

┌─────┐
│     │
└─────┘</code></pre>
