---
title: 组合优化
---

<figure>
  <img src="./imgs/xkcd-tsp.png" alt="xkcd: Traveling Salesman Problem" title="xkcd: Traveling Salesman Problem" class="no-zoom">
</figure>

# 组合优化 (Combinatorial optimization)

<link rel="stylesheet" href="/notes/katex.min.css">

简单来说，==组合优化==是指从一个**有限集合**中寻找**最优组合**（或**排列**）的问题（属于离散优化问题），比如

::: definition 背包问题 (Knapsack problem)
给定一组物品，每种物品都有其对应的重量和价格 <span class="nowrap">──（基础集，ground set）</span>
在限定的总重量内　　　　　　　　　　　　　　 <span class="nowrap">──（约束条件）</span>
如何选择一组物品使得总价值最高　　　　　　　 <span class="nowrap">──（优化目标）</span>
:::

::: definition 旅行商问题 (Traveling Salesman Problem, TSP)
给定一系列城市以及两两之间的距离
希望访问所有城市恰好一次并返回起点城市
最短路径是哪条
:::

::: definition 车辆路径问题 (Vehicle Routing Problem, VRP) ──送快递
给定一个仓库和一系列客户的位置
从仓库出发经过所有客户的位置（期间可以返回仓库）
车辆（车队）的最短路线是什么
其中还需考虑约束条件：车辆的载重量有限
:::

组合优化问题的难点在于──随着问题规模增长，其可行解的数量呈指数增长，一般都是 **NP-hard**

## 精确求解

暴力搜索 $O(n!)$

### 分支定界 (branch and bound)

搜索树 + 剪枝（<a href="./minimax.html#alpha-beta-剪枝" target="_blank" rel="noopener noreferrer" class="outbound">alpha-beta 剪枝</a>就是分支定界法的一个特例）

### 动态规划 (dynamic programming)

## 近似求解

### 近似算法

比如贪心算法、局部搜索、线性规划等

解的质量有保证

### 启发式算法

比如模拟退火、演化算法、粒子群算法等

可以在给定时间内找到较好的解

### 深度强化学习