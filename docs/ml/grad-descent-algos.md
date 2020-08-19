# 梯度下降优化算法

## ...

回顾一下，我们有假设函数 $h$，其所有参数用 $\theta$ 表示（$h$ is parametrized by $\theta$），$D$ 是样例集 $\lbrace(x^{(1)},y^{(1)}),\cdots,(x^{(m)},y^{(m)})\rbrace$，我们想用梯度下降来最小化经验误差（以此找到最优的 $h$，也即 $\theta$）

<p>$$ \widehat{E}(h;D)=\frac{1}{m}\sum_{i=1}^m \ell\mathopen{}\left(h(x^{(i)}), y^{(i)}\right)\mathclose{}. $$</p>

---

## 阅读材料 {docsify-ignore}

- https://zhuanlan.zhihu.com/p/32230623
- https://ruder.io/optimizing-gradient-descent/index.html
- https://towardsdatascience.com/adam-latest-trends-in-deep-learning-optimization-6be9a291375c
