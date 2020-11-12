# 梯度下降优化算法总结

<link rel="stylesheet" href="/notes/katex@0.11.1.min.css">

::: warning
UNDER CONSTRUCTION
:::

## 背景

[回顾一下](./learning-theory.md)，现实中我们有了数据集 $D = \lbrace(x^{(1)},y^{(1)}),\cdots,(x^{(m)},y^{(m)})\rbrace$，也定义了损失函数 $\ell\colon\mathcal{Y}\times\mathcal{Y}\to\mathbb{R}$，我们想要寻找一个假设函数 $h$，which 能最小化经验误差（$h$ 的所有参数由 $\theta$ 表示）：

$$ \min_\theta f(\theta;D)\text{,}\qquad\text{where } f(\theta;D)=\frac{1}{m}\sum_{i=1}^m \ell\mathopen{}\left(h(x^{(i)};\theta), y^{(i)}\right)\mathclose{}. $$

这个优化问题就可以用梯度下降来解决

$$ \theta^\prime = \theta - \eta\cdot g $$

其中 $\eta$ 为==学习率== (learning rate)，$g = \nabla\widehat{E}(\theta)$ 为梯度（下文把目标函数简记为 $f$）

这里我们引入时刻 $t$ 的标记，并且列出一些重要的量

- $g_t = \nabla f(\theta_t)$，**原始梯度**
- $v_t \coloneqq \theta_{t+1} - \theta_t$，**实际更新量**

很显然，对于随机梯度下降 (SGD) 来说，$v_t = \eta\cdot g_t$。（TODO 一阶二阶动量）

## 朴素

### 挑战

- 选择学习率
- 选择学习率 scheduler
- 如果数据稀疏或特征频率不同（？？？），我们想给不常出现的特征更大的 update
- 局部极小值

### Momentum

$$
\begin{alignedat}{2}
    v_t &= \gamma\,v_{t-1} + \eta\,\nabla f(\theta_t) \\
    \theta_{t+1} &= \theta_t - v_t.
\end{alignedat}
$$

### Nesterov accelerated gradient

$$
\begin{alignedat}{2}
    v_t &= \gamma\, v_{t-1} + \eta\,\nabla f(\theta_t - \gamma\, v_{t-1}) \\
    \theta_{t+1} &= \theta_t - v_t.
\end{alignedat}
$$

::: tip
PyTorch 中 SGD + Momentum 的[实现方式](https://pytorch.org/docs/master/optim.html#torch.optim.SGD)与上述公式略有不同，学习率 $\eta$ 是乘在 $v_t$ 上而不是梯度 $g$ 上
:::

### Adagrad

$$ g_{t,i} = \nabla f(\theta_{t,i}). $$

($\theta_{t+1,i} = \theta_{t,i} - \eta\cdot g_{t,i}$)

$$ \theta_{t+1,i} = \theta_{t,i} - \frac{\eta}{\textcolor{#FF7800}{\sqrt{G_{t,ii}+\epsilon}}}\cdot g_{t,i} $$

$G_t$

Adadelta

RMSprop

Adam

(AdaMax, Nadam, AMSGrad)

---

## 阅读材料

- [一个框架看懂优化算法之异同 SGD/AdaGrad/Adam - 知乎专栏](https://zhuanlan.zhihu.com/p/32230623)
- [An overview of gradient descent optimization algorithms](https://ruder.io/optimizing-gradient-descent/index.html)
- Wilson, Ashia C., et al. **The marginal value of adaptive gradient methods in machine learning**. In *Advances in neural information processing systems*. 2017. [link](https://proceedings.neurips.cc/paper/2017/hash/81b3833e2504647f9d794f7d7b9bf341-Abstract.html)
- https://towardsdatascience.com/adam-latest-trends-in-deep-learning-optimization-6be9a291375c
