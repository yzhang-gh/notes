# 概率图模型

::: warning
UNDER CONSTRUCTION
:::

## 林达华综述 2013

<http://www.datakit.cn/blog/2014/11/26/PGM_linDahua_interview.html>

### 图模型

按照采用什么类型的图来表达变量之间的关系可以分为

1. 贝叶斯网络     → 有向无环图
2. 马尔可夫随机场 → 无向图

这种分类主要是为了研究和学习的便利，在实际应用中常常结合使用

建模和推断两步

### 建模部分的发展方向

在实际问题中，事先设计合适的模型结构是很难的
→ 结构学习，先只设计模型需要满足的约束，然后在学习的过程中形成实际结构

主要问题就是如何发现变量之间的内部关联，做法没有固定的形式，
例如先选完全图连接所有的变量，然后选择一个子图来描述它们的实际结构，
又或者，你可以引入潜在节点（latent node）来建立变量之间的关联

另一个方向就是非参数化，典型的非参数化模型就是基于狄利克莱过程（Dirichlet Process）的混合模型

### 统计推断

完成模型的设计之后，下一步就是通过一定的算法从数据中去估计模型的参数，或推断我们感兴趣的其它未知变量的值

一般而言，确切推断（exact inference）的复杂度很高，于是，人们退而求其次，转而探索具有多项式复杂度的近似推断（approximate inference）方法，主要有三种：

1. 基于平均场逼近 (mean field approximation）的 variational inference（EM 算法就属于这类型算法的一种特例）
2. Belief propagation（最早作为精确推断技术提出，后来衍生出多种近似推断算法 -- 西瓜书）
3. 蒙特卡罗采样（Monte Carlo sampling)

（蒙特卡罗方法本身也是现代统计学中一个非常重要的分支）

---

## 🍉书

概率图模型是一类用图来表达变量相关关系的概率模型，分类同上

### 常见模型

隐马尔可夫模型（Hidden Markov Model，简称 HMM）是结构最筒单的动态贝叶斯网
马尔可夫随机场（Markov Random Field，简称 MRF）是典型的马尔可夫网
条件随机场（Conditional Random Field，简称 CRF）是一种判别式无向图模型

### 学习与推断

给定参数 $\Theta$ 求解某个变量 $x$ 的分布，就变成对联合分布中其他无关变量进行积分的过程，这称为「边际化」（marginalization）

精确推断
1. 变量消去
2. 信念传播

近似推断
1. 采样法
2. 变分推断

### 话题模型

---

## Misc.

### EM 算法

在有隐变量（无法观测）的概率模型中，用最大似然或最大后验估计参数的方法

<https://en.wikipedia.org/wiki/Expectation%E2%80%93maximization_algorithm#Description>

k-means 就是典型的 EM 算法

## 阅读材料

https://ermongroup.github.io/cs228-notes/
