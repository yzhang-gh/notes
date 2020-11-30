# P、NP 与 NP 完全问题

<link rel="stylesheet" href="/notes/katex@0.11.1.min.css">

::: callout 🥥 In a Nutshell
简单的问题，难的问题，更难的问题，更更难的问题……最难的问题，无法解决的问题
:::

## 时间复杂度

算法的==时间复杂度==描述的是执行一个算法所需要的**时间**相对于**问题规模**（输入规模）的函数关系。如下列出一些常见时间复杂度（更详细的表格可见[此处](https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6#.E5.B8.B8.E8.A7.81.E6.97.B6.E9.97.B4.E5.A4.8D.E6.9D.82.E5.BA.A6.E5.88.97.E8.A1.A8)）

| 名称         | 复杂度       | 算法举例                                                                                                                    |
| ------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 常数时间     | $O(1)$       | 判断一个二进制数的奇偶                                                                                                      |
| 线性时间     | $O(n)$       | 找出 $n$ 个数中的最大值                                                                                                     |
| 线性对数时间 | $O(n\log n)$ | 快速排序                                                                                                                    |
| 二次时间     | $O(n^2)$     | 冒泡排序                                                                                                                    |
|              |              |                                                                                                                             |
| 指数时间     | $2^{O(n)}$   | 使用动态规划解决[旅行商问题](https://zh.wikipedia.org/wiki/%E6%97%85%E8%A1%8C%E6%8E%A8%E9%94%80%E5%91%98%E9%97%AE%E9%A2%98) |
| 阶乘时间     | $O(n!)$      | 使用暴力搜索解决旅行商问题                                                                                                  |
{{.center}}

时间复杂度常用大 $O$ 符号表示，不包括这个函数的首项系数和低阶项。比如 $3n^2+5n$ 对应的时间复杂度为 $O(n^2)$，首项系数 $3$ 不影响时间增长速度，而低阶项 $5n$ 随着 $n$ 的增长（至极限）会远小于 $n^2$，这种方式称为**渐进时间复杂度**。从理论分析的角度，$O(0.01n^\textcolor{#F26400}{3})$ 要比 $O(100n^\textcolor{#F26400}{2}+100n)$ 复杂度高，不过对于现实中的具体问题，首项系数和低阶项仍然值得具体分析。（[银河式算法](https://zh.wikipedia.org/wiki/%E9%93%B6%E6%B2%B3%E5%BC%8F%E7%AE%97%E6%B3%95)）

时间复杂度常被分为两种级别，一种是**多项式级复杂度**，比如 $O(1)$，$O(n\log n)$，$O(n^c)$ 等，其特点是规模 $n$ 出现在底数的位置。另一种是**非多项式级复杂度**，比如 $O(c^n)$，$O(n!)$。后者的复杂度远远大于前者，使用其来解决问题往往是不现实的。

## P、NP、NP-complete 与 NP-hard

### P 问题──可以在多项式时间<span class="accent">找出解</span>的问题[^decision-problem]

**P** 通常表示那类可以「有效率地解决」或「温驯」的可计算型问题，即使指数级可能非常高[^does-p-mean-easy]。数据结构与算法课中遇到的问题基本都属于 **P** 类，比如排序问题。

那么比 **P** 更难一些的问题是什么呢？

### NP 问题──可以在多项式时间里<span class="accent">验证一个解</span>的问题

**NP** 问题不是「非 **P** 问题 / non-**P**」，而是「可以由**非**确定型图灵机 (**N**ondeterministic Turing machine) 在多项式 (**P**olynomial) 时间解决的问题」（图灵机是一种用来研究算法复杂度的计算模型，此处我们不深究。严格来说，**P** 问题是指「可以由确定型图灵机在多项式时间解决的问题」）。

但是上面这个定义看着就有点吓人，我们不妨关注 **NP** 的另一个**等价定义**：「可以在多项式时间**验证**一个解的问题」。

<figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Hamiltonian_path_3d.svg" alt="Hamiltonian path 3d" style="width: 200px; margin-bottom: 10px;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Hamiltonian_path.svg" alt="Hamiltonian path" style="width: 200px; margin-bottom: 10px; margin-left: 30px;">
    <figcaption>（左）十二面体上的一个哈密顿环（右）平面图 (source: <a href="https://en.wikipedia.org/wiki/Hamiltonian_path" target="_blank" rel="noopener noreferrer">Wiki</a>)</figcaption>
</figure>

**哈密顿路径 / 环** (Hamiltonian path/cycle) 就是经典的 **NP** 问题，意思是给定一个图（顶点和边），判断是否存在一条 恰好经过每个顶点一次 的路径或者环。验证这个问题的解只需要 $O(n)$（顺着路径检查就行），但是想从一个图中寻找这样一个 Hamiltonian path 到现在还没有多项式级的算法。

**很明显，P 问题是 NP 问题的子集**：对于一个判定性问题（输出 yes 或 no），如果你能在多项式时间解出答案，那么验证一个解只需要比较一下了。

**那么 P 等不等于 NP 呢？** 这个问题对数学家尤其有吸引力。「对于数学家来说如果有一个机器能帮助他们证明各种定理那就爽了。数学家经常干的两件事：1. 给出证明，2. 验证某个证明是不是对的。直觉上肯定验证更容易一些，但如果 somehow 可以证明 **NP** = **P**，也就是说**验证**和**给出证明**其实在数学上是等价的，那么这个证明很可能给出了如何把**验证一个证明是否正确 (NP)** 转化为**如何给出一个证明 (P)** 的方法，从此以后数学家只要思考如何验证证明的正确性就能自动得到证明了，那不爽炸了。那个时候密码学的重要性只是崭露头角，但即使是在数学上的重要性，也足够让这个定义吸引人了。」

而 **P** 与 **NP** 对于密码学的重要性则在于：现在最广泛应用的非对称加密方法（如 RSA）的核心假设就是大整数分解是**难**的（非 **P**）。两个数相乘得到乘积很容易，但是想找出大整数（乘积）的因数就不容易了，而其中最难分解的是两个大质数^[两个差不多大小的质数]的乘积。目前已知的最好算法比指数时间要快，比多项式时间要慢。整数分解显然是 **NP** 问题，如果 **P** = **NP**，则意味着其肯定存在多项式时间的算法，破解加密算法也就「容易」了。

虽然 **P** = **NP**? 问题直到现在仍没有找到解决的思路，但是在研究这个问题的过程中，人们也有其它发现。

### NP 完全问题 (NP-complete problems)

一言以蔽之，**NP 完全**问题（方便起见下文写作 **NPC**）指的是 **NP** 问题中**最难**的一部分问题。在此之前，我们需要先引入一个概念：==规约== **(reduction)**。

::: callout 🌰 Before we continue
一天数学家的房子着了火。
他找来物理学家帮忙把火扑灭了。

第二天，数学家发现房子里的天然气泄漏了。
于是他毫不犹豫地点燃了房子──

在医院，物理学家问，你为什么要这样做。
数学家望着天花板平静地说，这样一来，问题就可以转化成一个已经解决了的问题。
:::

::: warning
UNDER CONSTRUCTION
:::

**规约**

A list of NPC problems: SAT

……

::: tip
TODO: 实际中 NPC 不一定难。最好的解是很难，但是足够好的解不难，比如旅行商问题的很多研究
:::

那么还有没有更难的问题呢？

<figure>
    <img src="./imgs/whatif.png" style="width: 240px" title="图片来源：《那些古怪又让人忧心的问题》，激光笔">
</figure>

### NP-hard

……

指数时间 国际象棋 围棋 最佳走法

2^2^cn Presburger 算术 https://en.wikipedia.org/wiki/Presburger_arithmetic

不可判定问题 停机问题

<figure>
    <img src="./imgs/p-np-npc.svg" alt="p np npc" class="border">
    <figcaption>Euler diagram for P, NP, NP-complete, and NP-hard set of problems. (source: <a href="https://commons.wikimedia.org/w/index.php?curid=3532181" target="_blank" rel="noopener noreferrer">Wiki</a>)</figcaption>
</figure>

## 参考材料

- [什么是 P 问题、NP 问题和 NPC 问题 - Matrix67](http://www.matrix67.com/blog/archives/105)
- [时间复杂度 - Wikipedia](https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6)
- [怎么理解 P 问题和 NP 问题？- 王宇的回答 - 知乎](https://www.zhihu.com/question/27039635/answer/101730260)
- [P & NP - COMP3721: Theory of Computation - HKUST](http://home.cse.ust.hk/~lzhang/teach/comp3721/Notes/21.pdf)

<!--  -->

- https://www.codenong.com/cs106039225/
- https://blog.csdn.net/crfoxzl/article/details/2192957

[^decision-problem]: 严格来说是判定性问题（输出为 yes 或 no）或最优化问题。此外还有函数式问题 (function problem)，允许其它形式的输出，比如求两数之和的问题，这些相应的问题称为 **FP** 和 **FNP**。
[^does-p-mean-easy]: [**P** 真的容易处理吗？](https://zh.wikipedia.org/wiki/P/NP%E9%97%AE%E9%A2%98#P.E7.9C.9F.E7.9A.84.E5.AE.B9.E6.98.93.E5.A4.84.E7.90.86.E5.90.97.EF.BC.9F)
