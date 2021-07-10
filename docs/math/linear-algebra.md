# 线性代数

<link rel="stylesheet" href="/notes/katex.min.css">

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
        <source src="./linear-algebra/linear-trans1.mp4">
    </video>
</figure>

### 推广：非方阵

变换为由新基向量的维度所决定的空间中的向量

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
        <source src="./linear-algebra/linear-trans2.mp4">
    </video>
</figure>

---

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
        <source src="./linear-algebra/linear-trans3.mp4">
    </video>
</figure>

### 秩 (rank)

### 特征值

## 实际应用

PCA --- Gilbert Strang *Introduction to Linear Algebra*, Ch. 7

Paper: The extraordinary SVD

马尔科夫链稳态分布

谱聚类

PageRank
