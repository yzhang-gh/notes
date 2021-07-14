# 线性代数

<link rel="stylesheet" href="/notes/katex.min.css">

<style>
    h4 {
        margin-left: 40px;
        margin-right: 40px;
    }
    .theme-default-content:not(.custom) p + h4,
    .theme-default-content:not(.custom) hr + h4 {
        margin-top: -4.5rem;
    }
    @media (max-width: calc(719px + 244px)) {
        h4 {
            margin-left: 0;
            margin-right: 0;
        }
    }
</style>

## 几何意义

::: tip Credits
- 内容整理自 [Essence of Linear Algebra - 3Blue1Brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) on <img src="/notes/imgs/youtube-logo.png" alt="youtube" class="logo no-zoom" style="max-height: 14px; position: relative; top: 1px;">
- 动画使用 [ManimCommunity/manim](https://github.com/ManimCommunity/manim) 制作
:::

### Preliminary

向量使用列向量表示，可以理解为标准正交基下的线性组合

$$
\begin{bmatrix}
    x_1 \\
    x_2
\end{bmatrix}
=
x_1
\begin{bmatrix}
    \textcolor{#1f77b4}{1} \\
    \textcolor{#1f77b4}{0}
\end{bmatrix}
+ x_2
\begin{bmatrix}
    \textcolor{#ff7f0e}{0} \\
    \textcolor{#ff7f0e}{1}
\end{bmatrix}
$$

如果把矩阵的每一列看作一个基向量，那么矩阵左乘一个向量意味着将其变换为新基向量下的线性组合

$$
\begin{bmatrix}
    \textcolor{#1f77b4}{i_1} & \textcolor{#ff7f0e}{j_1} \\
    \textcolor{#1f77b4}{i_2} & \textcolor{#ff7f0e}{j_2}
\end{bmatrix}
\begin{bmatrix}
    x_1 \\
    x_2
\end{bmatrix}
=
\begin{bmatrix}
    \textcolor{#1f77b4}{i_1} \cdot x_1 + \textcolor{#ff7f0e}{j_1} \cdot x_2 \\
    \textcolor{#1f77b4}{i_2} \cdot x_1 + \textcolor{#ff7f0e}{j_2} \cdot x_2
\end{bmatrix}
=
x_1
\begin{bmatrix}
    \textcolor{#1f77b4}{i_1} \\
    \textcolor{#1f77b4}{i_2}
\end{bmatrix}
+ x_2
\begin{bmatrix}
    \textcolor{#ff7f0e}{j_1} \\
    \textcolor{#ff7f0e}{j_2}
\end{bmatrix}
$$

### 矩阵描述线性变换

#### 例 1

$$
\begin{bmatrix}
    \textcolor{#1f77b4}{1}  & \textcolor{#ff7f0e}{3} \\
    \textcolor{#1f77b4}{-2} & \textcolor{#ff7f0e}{0}
\end{bmatrix}
\begin{bmatrix}
    \textcolor{#a0a0a0}{-1} \\
    \textcolor{#a0a0a0}{2}
\end{bmatrix}
=
\textcolor{#a0a0a0}{-1}
\begin{bmatrix}
    \textcolor{#1f77b4}{1} \\
    \textcolor{#1f77b4}{-2}
\end{bmatrix}
+ \textcolor{#a0a0a0}{2}
\begin{bmatrix}
    \textcolor{#ff7f0e}{3} \\
    \textcolor{#ff7f0e}{0}
\end{bmatrix}
=
\begin{bmatrix}
    \textcolor{#a0a0a0}{5} \\
    \textcolor{#a0a0a0}{2}
\end{bmatrix}
$$

<figure>
    <video controls width="100%">
        <source src="./linear-algebra/lt1.mp4">
    </video>
</figure>

---

两个矩阵相乘则相当于将两个线性变换相继作用（从右至左顺序）

### 非方阵情形

变换为由新基向量的维度所决定的空间中的向量

#### 例 2

$$
\begin{bmatrix}
    \textcolor{#1f77b4}{2}  & \textcolor{#ff7f0e}{1} \\
    \textcolor{#1f77b4}{-1}  & \textcolor{#ff7f0e}{1} \\
    \textcolor{#1f77b4}{0} & \textcolor{#ff7f0e}{1}
\end{bmatrix}
\begin{bmatrix}
    \textcolor{#a0a0a0}{-1} \\
    \textcolor{#a0a0a0}{2}
\end{bmatrix}
=
\begin{bmatrix}
    \textcolor{#a0a0a0}{0} \\
    \textcolor{#a0a0a0}{3} \\
    \textcolor{#a0a0a0}{2}
\end{bmatrix}
$$

<figure>
    <video controls width="100%">
        <source src="./linear-algebra/lt2-to3d.mp4">
    </video>
</figure>

---

#### 例 3

$$
\begin{bmatrix}
    \textcolor{#1f77b4}{2}  & \textcolor{#ff7f0e}{3}
\end{bmatrix}
\begin{bmatrix}
    \textcolor{#a0a0a0}{-1} \\
    \textcolor{#a0a0a0}{2}
\end{bmatrix}
= \textcolor{#a0a0a0}{4}
$$

<figure>
    <video controls width="100%">
        <source src="./linear-algebra/lt3-to1d.mp4">
    </video>
</figure>

### 秩 (rank)

::: definition 秩
矩阵的（列）**秩**是其列向量所张成 (span) 的向量空间的维度，也即其线性无关的纵列的极大数目
:::

#### 例 4

$$
\text{rank}\left(\begin{bmatrix}
    \textcolor{#1f77b4}{2}  & \textcolor{#ff7f0e}{4} \\
    \textcolor{#1f77b4}{1} & \textcolor{#ff7f0e}{2}
\end{bmatrix}\right) = 1
$$

<figure>
    <video controls width="100%">
        <source src="./linear-algebra/lt4-rank.mp4">
    </video>
</figure>

<strong><a href="#例-2">例 2</a></strong> 中的矩阵秩为 2
<strong><a href="#例-3">例 3</a></strong> 中的「矩阵」秩为 1

TODO 行秩等于列秩

### 逆矩阵

$$
A^{-1}A=I
$$

矩阵 $A$ 的逆矩阵 $A^{-1}$ 相当于「还原」$A$ 所做的线性变换

### 特征值

<!-- ### （代数余子式） -->

### 奇异值分解 (SVD)

Paper: The extraordinary SVD

## 实际应用

### 主成分分析 (PCA)

--- Gilbert Strang *Introduction to Linear Algebra*, Ch. 7

### 马尔科夫链稳态分布

### PageRank

### 谱聚类
