# P、NP 与 NP 完全问题

<link rel="stylesheet" href="/notes/katex.min.css">

::: callout 🥥 In a Nutshell
简单的问题，难的问题，更难的问题，更更难的问题<span class="cn-font" lang="zh-CN">……</span>最难的问题，无法解决的问题
:::

## 时间复杂度

要想衡量一个算法跑得快不快，直接测一个程序要运行多少秒的研究意义不大，因为这个结果会受具体物理设备的影响。我们需要的是一个对于算法本身效率的度量。算法的==时间复杂度==描述的是执行一个算法所需要的**时间**相对于**问题规模**（输入规模）的**函数关系**，大约相当于该算法所需要的单元操作的数量。下表是一些常见的时间复杂度（更详细的表格可见[此处](https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6#.E5.B8.B8.E8.A7.81.E6.97.B6.E9.97.B4.E5.A4.8D.E6.9D.82.E5.BA.A6.E5.88.97.E8.A1.A8)）

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

时间复杂度常用大 $O$ 符号表示，不包括这个函数的首项系数和低阶项。比如 $3n^2+5n$ 对应的时间复杂度为 $O(n^2)$，首项系数 $3$ 不影响时间增长速度，而低阶项 $5n$ 随着 $n$ 的增长（至极限）会远小于 $n^2$，这种方式称为**渐进时间复杂度**。从理论分析的角度，$O(0.01n^{\textcolor{#F26400}{3}})$ 要比 $O(100n^{\textcolor{#F26400}{2}}+100n)$ 复杂度高，不过对于现实中的具体问题，首项系数和低阶项仍然值得具体分析<span class="punct-halt">。</span>（[银河式算法](https://zh.wikipedia.org/wiki/%E9%93%B6%E6%B2%B3%E5%BC%8F%E7%AE%97%E6%B3%95)）

时间复杂度常被分为两种级别，一种是**多项式级复杂度**，比如 $O(1)$，$O(n\log n)$，$O(n^c)$ 等，其特点是规模 $n$ 出现在底数的位置。另一种是**非多项式级复杂度**，比如 $O(c^n)$，$O(n!)$。后者的复杂度远远大于前者，使用其来解决问题往往是不现实的。

## P 问题

<span class="cn-font" lang="zh-CN">——</span>可以在多项式时间==找出解==的问题[^decision-problem]

**P** 通常表示那类可以「有效率地解决」或「温驯」的可计算型问题，即使指数级可能非常高。数据结构与算法课中遇到的问题基本都属于 **P** 类，比如排序问题。

那么比 **P** 更难一些的问题是什么呢？

## NP 问题

<span class="cn-font" lang="zh-CN">——</span>可以在多项式时间里==验证一个解==的问题

**NP** 问题不是「非 **P** 问题 / non-**P**」，而是「可以由**非**确定型图灵机 (**N**ondeterministic Turing machine) 在多项式 (**P**olynomial) 时间解决的问题<span class="punct-halt">」</span>（图灵机是一种用来研究算法复杂度的计算模型，此处我们不深究。严格来说，**P** 问题是指「可以由确定型图灵机在多项式时间解决的问题」）。

但是上面这个定义看着就有点吓人，我们不妨关注 **NP** 的另一个**等价定义**<span class="punct-halt">：</span>「可以在多项式时间**验证**一个解的问题」。

<figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Hamiltonian_path_3d.svg" alt="Hamiltonian path 3d" width="200" style="margin: 0 15px 10px">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Hamiltonian_path.svg" alt="Hamiltonian path" width="200" style="margin: 0 15px 10px">
    <figcaption>（左）十二面体上的一个哈密顿环（右）平面图 (source: <a href="https://en.wikipedia.org/wiki/Hamiltonian_path" target="_blank" rel="noopener noreferrer" class="outbound">Wiki</a>)</figcaption>
</figure>

**哈密顿路径 / 环** (Hamiltonian path/cycle) 就是经典的 **NP** 问题，意思是给定一个图（顶点和边），判断是否存在一条 恰好经过每个顶点一次 的路径或者环。验证这个问题的解只需要 $O(n)$（顺着路径检查就行），但是想从一个图中寻找这样一个 Hamiltonian path 到现在还没有多项式级的算法。

**很明显，P 问题是 NP 问题的子集**：对于一个判定性问题（输出 yes 或 no），如果你已经能在多项式时间解出答案，那么验证一个解只需要比较一下了。

**那么 P 等不等于 NP 呢？** 这个问题对数学家尤其有吸引力<span class="punct-halt">。</span>「对于数学家来说如果有一个机器能帮助他们证明各种定理那就爽了。数学家经常干的两件事：① 给出证明，② 验证某个证明是不是对的。直觉上肯定验证更容易一些，但如果 somehow 可以证明 **NP** = **P**，也就是说**验证**和**给出证明**其实在数学上是等价的，那么这个证明很可能给出了如何把**验证一个证明是否正确 (NP)** 转化为**如何给出一个证明 (P)** 的方法，从此以后数学家只要思考如何验证证明的正确性就能自动得到证明了，那不爽炸了。那个时候密码学的重要性只是崭露头角，但即使是在数学上的重要性，也足够让这个定义吸引人了。」

而 **P** 与 **NP** 对于密码学的重要性则在于：现在最广泛应用的非对称加密方法（如 RSA）的核心假设就是大整数分解是**难**的（非 **P**）。两个数相乘得到乘积很容易，但是想找出大整数（乘积）的因数就不容易了，而其中最难分解的是两个大质数^[两个差不多大小的质数]的乘积。整数分解显然是 **NP** 问题，如果 **P** = **NP**，则意味着其肯定存在多项式时间的算法，破解加密算法也就「容易」了。

虽然 $\small \mathsf{P} = \mathsf{NP}?$ 问题一直到现在仍然没有找到解决的思路，但是在研究这个问题的过程中，人们也有很多其它的发现。

## NP 完全问题

(aka **NP-complete problems**)
<span class="cn-font" lang="zh-CN">——</span>**NP** 问题中「**最难**」的一部分问题

在此之前，我们需要先引入一个概念：==归约== **(reduction)**。

::: callout 🌰 Before we continue
有一位数学家的房子突然着火了。
他紧急寻求了一位物理学家的帮助，一起扑灭了火灾。

第二天，数学家又发现房子里发生了天然气泄漏。
危急之际，他毫不犹豫地点燃了整个房子<span class="cn-font" lang="zh-CN">——</span>

在医院，物理学家忍不住问他<span class="punct-halt">：</span>「你为什么要这么做？」
数学家平静地望着天花板，回答道<span class="punct-halt">：</span>「这样一来，问题就可以被转化为一个已经解决过的问题了。」
:::

简单来说，**归约**就是从一个问题 A 转化为另一个问题 B，于是可以用问题 B 的解法来解决问题 A。假如 A 问题是求解一个一元一次方程，B 是求解一个一元二次方程，很显然 A 可以归约为 B，因为一个一元一次方程相当于一个二次项系数为 0 的一元二次方程，解法就可以照搬了。

「问题 A 可归约为问题 B」有一个重要的直观意义：问题 A 不会比问题 B 难 ($\small A \le_F\! B$)。通过归约，我们可以找到应用范围更广，但是复杂度也更高的问题。那如果我们把若干「小」**NP** 问题不断地归约到更通用的「大」**NP** 问题上，最后会得到什么呢？答案就是**超级 NP** 问题<span class="cn-font" lang="zh-CN">——</span>**NP 完全**问题，只需要满足两个条件：① 是 **NP** 问题，② 所有的 **NP** 问题都能（在多项式时间内）归约为它（从证明策略的角度，只需证明某个已知的 **NP 完全**问题可以归约为它）。

现在人们已经发现了很多 **NP 完全**问题，比如：

- **布尔可满足性问题** (Boolean satisfiability problem, aka **SAT**)<span class="cn-font" lang="zh-CN">——</span>第一个被证明是 **NP 完全**的问题。
  对于一个由若干布尔变量构成的表达式 (formula)，问是否存在一组变量取值使得表达式为 True（也即 **satisfiable**）
- 前文提到的**哈密顿环 / 路径问题**

- **图着色问题**：用 $\small k$ 种颜色给图的顶点着色，要求相邻顶点不能是相同颜色

此外，在 **NP** 问题中还存在一些问题，目前人们既不能确定其是不是 **P**，也不确定是不是 **NP 完全**，比如前面提到的整数分解问题，目前已知的最好算法比指数时间要快，比多项式时间要慢。

那么还有没有比 **NP 完全**问题更难的呢？

<figure>
    <img src="./imgs/whatif.png" width="240" title="来源：《那些古怪又让人忧心的问题》，激光笔" class="no-zoom">
</figure>

## NP 困难

(aka **NP-hard**)
<span class="cn-font" lang="zh-CN">——</span>至少和 **NP 完全**问题**一样难**的问题

了解了 **NP 完全**问题之后，**NP-hard** 问题就很好理解了：~~① 是 **NP** 问题~~（不要求），<span style="color: #F26400">①</span> 所有的 **NP** 问题都能（在多项式时间内）归约为它。换句话说，**NP-hard** 问题是**至少和 NP 完全问题一样难**的问题（而 **NP 完全**问题是 **NP** 问题中**最难的**那部分问题）

- **旅行商问题 (TSP)**
  也即**最短路径问题**，已知一系列城市以及两两之间的距离，经过每个城市恰好一次又返回到起点的**最短路径**是哪条（其决策版本「是否存在一条长度小于 $\ell$ 的路径」则缩小为 **NP 完全**问题）

- **停机问题**：给定一个程序和其输入，判断这个程序会不会一直运行下去。SAT 问题可以归约为停机问题（**NP-hard** ✓）。而停机问题是不可判定问题，显然不是 **NP 完全**问题。

::: tip 理论与实际
**P** 不一定简单[^does-p-mean-easy]，**NP 困难**问题也不一定难
准确的解 / 最好的解是很难，但是足够好的解不难，比如旅行商问题的很多研究
:::

最后用一个图来总结上面这些问题的关系，其中值得注意的几点是：

- $\small \mathsf{P} \subseteq \mathsf{NP}\:(\mathsf{P} = \mathsf{NP}?)$
- $\small \mathsf{NP}\text{-}\mathsf{complete} = \mathsf{NP} \cap \mathsf{NP}\text{-}\mathsf{hard}$

<figure>
    <img src="./imgs/p-np-npc.svg" alt="p np npc" class="border">
    <figcaption>Euler diagram for P, NP, NP-complete, and NP-hard set of problems. (source: <a href="https://commons.wikimedia.org/w/index.php?curid=3532181" target="_blank" rel="noopener noreferrer" class="outbound">Wiki</a>)</figcaption>
</figure>

## 参考材料

- 维基百科：[时间复杂度](https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6)，[**P**/**NP** 问题](https://zh.wikipedia.org/wiki/P/NP%E9%97%AE%E9%A2%98)等
- [什么是 P 问题、NP 问题和 NPC 问题 - Matrix67](http://www.matrix67.com/blog/archives/105)
- [怎么理解 P 问题和 NP 问题？- 王宇的回答 - 知乎](https://www.zhihu.com/question/27039635/answer/101730260)
- [P & NP - COMP3721: Theory of Computation - HKUST](http://home.cse.ust.hk/~lzhang/teach/comp3721/Notes/21.pdf)

**扩展阅读**

- [量子计算机和传统电子计算机在算法方面的优劣势 - 知乎专栏](https://zhuanlan.zhihu.com/p/333217350)

[^decision-problem]: 严格来说是**判定性问题 / 决策问题**（输出为 yes 或 no）或**最优化问题**，几乎所有最优化问题都有对应的**简单一点的**判定性问题，比如「求最小路径」与「是否存在小于 $\small \ell$ 的路径」。此外还有函数式问题 (function problem)，允许其它形式的输出，比如「求两数之和」，这些相应的问题称为 **FP** 和 **FNP**。
[^does-p-mean-easy]: [**P** 真的容易处理吗？](https://zh.wikipedia.org/wiki/P/NP%E9%97%AE%E9%A2%98#P.E7.9C.9F.E7.9A.84.E5.AE.B9.E6.98.93.E5.A4.84.E7.90.86.E5.90.97.EF.BC.9F)

<script>
export default {
    mounted() {
        const hash = document.location.hash;
        if (hash.length > 1) {
            const id = decodeURI(hash.substring(1));
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView();
                }, 500);
            }
        }
    }
}
</script>
