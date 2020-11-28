# P、NP 与 NPC 问题

<link rel="stylesheet" href="/notes/katex@0.11.1.min.css">

## 时间复杂度

算法的==时间复杂度==描述的是执行一个算法所需要的**时间**相对于**问题规模**（输入规模）的函数关系。如下列出一些常见时间复杂度（更详细的表格见[此处](https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6#.E5.B8.B8.E8.A7.81.E6.97.B6.E9.97.B4.E5.A4.8D.E6.9D.82.E5.BA.A6.E5.88.97.E8.A1.A8)）

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

时间复杂度常用大 $O$ 符号表示，不包括这个函数的首项系数和低阶项。比如 $3n^2+5n$ 对应的时间复杂度为 $O(n^2)$，首项系数 $3$ 不影响时间增长速度，而低阶项 $5n$ 随着 $n$ 的增长（至极限）会远小于 $n^2$，这种方式称为**渐进时间复杂度**。从理论分析的角度，$O(0.01n^3)$ 要比 $O(100n^2+100n)$ 复杂度高，不过对于现实中的具体问题，首项系数和低阶项仍然值得具体分析。

时间复杂度常被分为两种级别，一种是**多项式级复杂度**，比如 $O(1)$，$O(n\log n)$，$O(n^c)$ 等，其特点是规模 $n$ 出现在底数的位置。另一种是**非多项式级复杂度**，比如 $O(c^n)$，$O(n!)$。后者的复杂度远远大于前者，使用其来解决问题往往是不现实的。

## P、NP、NP-hard 与 NP-complete

### P 问题──可以在多项式时间<span class="accent">找出解</span>的问题

> P 通常表示那类可以「有效率地解决」或「温驯」的可计算型问题（即使指数级可能非常高）

典型代表为排序问题

### NP 问题──可以在多项式时间里<span class="accent">验证一个解</span>的问题

NP 问题不是「非 P 问题」

> 之所以要定义 NP 问题，是因为通常只有 NP 问题才可能找到多项式的算法
> 
> 数学家验证证明转化为给出证明

数独验证 O(n^2)

### NPC 问题

::: callout 🌰 Before we continue
一天数学家的房子着了火。
他找来物理学家帮忙把火扑灭了。

第二天，数学家发现房子里的天然气泄漏了。
于是他毫不犹豫地点燃了房子──

在医院，物理学家问，你为什么要这样做。
数学家望着天花板平静地说，这样一来，问题就可以转化成一个已经解决了的问题。
:::

==规约== **(reduction)**

……

<figure>
    <img src="./imgs/p-np-npc.svg" alt="p np npc" class="border">
    <figcaption>Euler diagram for P, NP, NP-complete, and NP-hard set of problems. (source: <a href="https://commons.wikimedia.org/w/index.php?curid=3532181" target="_blank" rel="noopener noreferrer">Wiki</a>)</figcaption>
</figure>

## 阅读材料

- [什么是 P 问题、NP 问题和 NPC 问题 - Matrix67](http://www.matrix67.com/blog/archives/105)
- [时间复杂度 - Wikipedia](https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6)
- [怎么理解 P 问题和 NP 问题？- 王宇的回答 - 知乎](https://www.zhihu.com/question/27039635/answer/101730260)

<!--  -->

- https://www.codenong.com/cs106039225/
- https://blog.csdn.net/crfoxzl/article/details/2192957
