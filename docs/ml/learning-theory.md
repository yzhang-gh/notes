---
title: 计算学习理论
---

# 计算学习理论 (Computational Learning Theory)

<link rel="stylesheet" href="/notes/katex.min.css">

::: warning
UNDER CONSTRUCTION
:::

## 什么是「学习」

先定义一些概念

- ==样本空间== $\mathcal{X}$，其中样本 $x$ 通常由向量表示

- ==标记空间== $\mathcal{Y}$，考虑二分类问题时，$\mathcal{Y} = \lbrace+1,-1\rbrace$ 或 $\lbrace0,1\rbrace$

- $\mathcal{X}$ 中的样本服从一个隐含未知的==样本分布== $\mathcal{D}$ (underlying data-generating distribution)，即 $x\sim\mathcal{D}$（有些地方 $\mathcal{D}$ 定义在 $\mathcal{X}\times\mathcal{Y}$ 之上，即 $(x,y)\sim\mathcal{D}$，*TODO*）

- ==标记函数== $f\colon\mathcal{X}\to\mathcal{Y}$（未知，是学习器想学习到的）
  也被称为 concept，$c\colon\mathcal{X}\to\mathcal{Y}$，$c\in\mathcal{C}$ (concept class)

- ==样例集== $D=\lbrace(x^{(1)},y^{(1)}),(x^{(2)},y^{(2)}),\cdots,(x^{(m)},y^{(m)})\rbrace$，先从 $\mathcal{D}$ 中采样 $x^{(i)}$，然后由 $f$ 标记得到 $y^{(i)}$，独立地多次采样得到样例集 $D$，这就是**独立同分布假设 (i.i.d. assumption)**

- 学习器的输出，==假设函数== $h\colon\mathcal{X}\to\mathcal{Y}$，所有可能的 $h$ 的集合叫做**假设空间** $\mathcal{H}$（比如所有形如 $h=ax+b$ 的线性函数），$\mathcal{H}$ 由 [inductive bias](https://en.wikipedia.org/wiki/Inductive_bias) 决定（即对某**类** $h$ 的偏好）

- ==损失函数== **loss function**，$\ell\colon\mathcal{Y}\times\mathcal{Y}\to\mathbb{R}$，学习理论主要研究二分类问题，常使用 0-1 loss，即 $\ell=1_{h(x) \neq y}$，其中 $1$ 为指示函数

得到一个假设函数 $h$ 后，我们如何评估它的好坏

- ==泛化误差==，在样本分布 $\mathcal{D}$ 之下 loss 的期望
  $$ E(h;\mathcal{D}) = \mathbb{E}_{x\sim\mathcal{D}}\thinspace[\ell(h(x),y)]. $$
- ==经验误差==，在样例集上的平均 loss
  $$ \widehat{E}(h;D)=\frac{1}{m}\sum_{i=1}^m \ell\mathopen{}\left(h(x^{(i)}), y^{(i)}\right)\mathclose{}. $$

## PAC 学习框架

## VC 维

## 阅读材料

- Mehryar Mohri, Afshin Rostamizadeh, Ameet Talwalkar. Foundations of Machine Learning. *The MIT Press*. 2012. (Chapter 2, 3)
- 周志华. 机器学习.（第 12 章，计算学习理论）
- Shalev-Shwartz, Shai, and Shai Ben-David. Understanding machine learning: From theory to algorithms. *Cambridge University Press*. 2014. (Chapter 2, 3)
- [Stanford CS229T/STATS231: Statistical Learning Theory](https://web.stanford.edu/class/cs229t/)
