---
title: 支持向量机
---

# 支持向量机 (SVM)

<link rel="stylesheet" href="/notes/katex.min.css">

线性分类器

超平面

$$
\boldsymbol{w}^{\top}\boldsymbol{x}+b=0
$$

$\boldsymbol{w}$ 和 $b$ 的值可以同步缩放

从几何意义来说，$\boldsymbol{w}$ 为该超平面的法向量，$\boldsymbol{w}^{\top} \boldsymbol{x}$ 也即内积 $\lang\boldsymbol{w},\boldsymbol{x}\rang = \|\boldsymbol{w}\|\|\boldsymbol{x}\|\cos\theta$，可以理解为 $\boldsymbol{x}$ 在 $\boldsymbol{w}$ 方向上的投影长度（乘以 $\|\boldsymbol{w}\|$），该超平面由所有在 $\boldsymbol{w}$ 方向上投影长度为 $-\frac{b}{\|\boldsymbol{w}\|}$ 的点组成，原点到超平面的距离也即 $-\frac{b}{\|\boldsymbol{w}\|}$。

任意点 $\boldsymbol{p}$ 到超平面 $(\boldsymbol{w},b)$ 的距离为

此处应有图

$$
r=\frac{1}{\|\boldsymbol{w}\|}\left|\boldsymbol{w}^{\top} \boldsymbol{p}+b\right|
$$

间隔 $\gamma$

$$
\frac{2}{\|\boldsymbol{w}\|}
$$

线性支持向量机

$$
\begin{aligned}
    \min_{\boldsymbol{w},b} & \quad \frac{1}{2}\|\boldsymbol{w}\| \\
    \text{s.t.} & \quad y_i(\boldsymbol{w}^{\top}\boldsymbol{x}_i+b) \ge 1
\end{aligned}
$$

对偶型

## 拉格朗日乘子法

<span class="cn-font" lang="zh-CN">——</span>从有约束优化到无约束优化

Khan Academy

## KKT 条件

<!--
下面是吴恩达的见解：

如果 Feature 的数量很大，跟样本数量差不多，这时候选用 LR 或者是 Linear Kernel 的 SVM
如果 Feature 的数量比较小，样本数量一般，不算大也不算小，选用 SVM+Gaussian Kernel
如果 Feature 的数量比较小，而样本数量很多，需要手工添加一些 feature 变成第一种情况
-->

# 阅读材料

- [机器学习工程师面试宝典 05：支持向量机](https://github.com/HaoMood/homepage/blob/master/files/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%B7%A5%E7%A8%8B%E5%B8%88%E9%9D%A2%E8%AF%95%E5%AE%9D%E5%85%B8-05-%E6%94%AF%E6%8C%81%E5%90%91%E9%87%8F%E6%9C%BA.pdf) by [张皓](https://haomood.github.io/homepage/)
