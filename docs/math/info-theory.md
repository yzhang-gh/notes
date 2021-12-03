# 信息论相关概念

<link rel="stylesheet" href="/notes/katex.min.css">

假设有一个正四面体的骰子，投掷一次的结果由**随机变量** $X$ 表示（取值可能为 1 到 4），如果这个骰子是均匀的，那么发生每一种可能的**随机事件**的概率 $P(X=x)$ 都为 $\frac{1}{4}$，其中 $x \in \{1,2,3,4\}$（后文简记为 $P(x)$）

## 随机事件的「信息量」

<span class="cn-font" lang="zh-CN">——</span>某个随机事件的「信息量」为其概率的倒数

乍一看这个定义有点无中生有，不妨这样理解：对于一个随机事件 $x$
- 其发生的概率 $P(x)$ 越高，那么当它发生的时候也是意料之中，没啥「新意」
- 而如果 $P(x)$ 越小，$x$ 发生的时候就会觉得不同寻常，有点信息

## 信息熵 (entropy)

<span class="cn-font" lang="zh-CN">——</span>理论最优编码长度

$$
H(X) = \mathbb{E}_{x \sim P}\left[\log\frac{1}{P(x)}\right]
$$

## 交叉熵 (cross entropy)

<span class="cn-font" lang="zh-CN">——</span>在 $P$ 的期望下 $Q$ 的编码长度

实际编码长度

$$
\text{CrossEntropy}(P, Q) = \mathbb{E}_{x \sim P}\left[\log\frac{1}{Q(x)}\right]
$$

## 相对熵 (relative entropy)

<span class="cn-font" lang="zh-CN">——</span>额外编码长度

也即 ==KL 散度==

$$
\text{KL}(P\;\|\;Q) = \mathbb{E}_{x \sim P}\left[\log\frac{P(x)}{Q(x)}\right]
$$

---

## JS 散度

## 参考材料

信息熵是什么？ - 返朴的回答 - 知乎
https://www.zhihu.com/question/22178202/answer/667876061
信息熵是什么？ - 忆臻的回答 - 知乎
https://www.zhihu.com/question/22178202/answer/161732605
编码
https://blog.csdn.net/AckClinkz/article/details/78740427
形象举例
https://www.zhihu.com/question/22178202/answer/124805730

https://zhuanlan.zhihu.com/p/149186719

https://machinelearningmastery.com/cross-entropy-for-machine-learning/

Section 8.6
https://www.princeton.edu/~cuff/ele201/kulkarni_text/information.pdf
