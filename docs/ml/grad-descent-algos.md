# 梯度下降优化算法总结

<link rel="stylesheet" href="/notes/katex.min.css">

::: warning
UNDER CONSTRUCTION
:::

## 背景

[回顾一下](./learning-theory.md)，现实中我们有了数据集 $D = \lbrace(x^{(1)},y^{(1)}),\cdots,(x^{(m)},y^{(m)})\rbrace$，也定义了损失函数 $\ell\colon\mathcal{Y}\times\mathcal{Y}\to\mathbb{R}$，我们想要寻找一个假设函数 $h$（其所有参数由 $\theta$ 表示），which 能最小化经验误差：

$$ \min_\theta \widehat{E}(\theta;D)\text{,}\quad\text{where } \widehat{E}(\theta;D)=\frac{1}{m}\sum_{i=1}^m \ell\mathopen{}\left(h(x^{(i)};\theta), y^{(i)}\right)\mathclose{}. $$

这个优化问题就可以用梯度下降来解决

$$ \theta^\prime = \theta - \eta\cdot g $$

其中 $\eta$ 为==学习率== (learning rate)，$g = \nabla_\theta\widehat{E}(\theta)$ 为梯度（方便起见，下文将经验误差 $\widehat{E}$ 简记为 $f$）

假设当前时刻的神经网络权值为 $\theta_t$，经过梯度下降更新后为 $\theta_{t+1}$，引入如下标记

- **原始梯度** $g_t = \nabla_\theta f(\theta_t)$
- **权值更新量** $-u_t \coloneqq \theta_{t+1} - \theta_t$

很显然，对于随机梯度下降 (SGD) 来说，$u_t = \eta\cdot g_t$，即 $\theta_{t+1} = \theta_t - \eta\cdot g_t$

TODO

- **一阶动量** $m_t$
- **二阶动量** $v_t$

## 朴素

### 挑战

- 选择学习率
- 选择学习率 scheduler
- 如果数据稀疏或特征频率不同（？），我们想给不常出现的特征更大的 update
- 局部极小值

### SGD

$$
\begin{alignedat}{2}
    u_t &= \eta\cdot g_t \\
    \theta_{t+1} &= \theta_t - u_t.
\end{alignedat}
$$

### SGD with momentum

<span class="cn-font" lang="zh-CN">——</span>引入一阶动量

$$
\begin{alignedat}{2}
    \textcolor{#8b959e}{g_t} &\textcolor{#8b959e}{= \nabla_\theta f(\theta_t)} \\
    \textcolor{#8b959e}{m_0} &\textcolor{#8b959e}{= g_0} \\
    m_t &= \textcolor{#F26400}{\gamma\cdot m_{t-1}} + \eta\cdot g_t \\
    u_t &= m_t \\
    \theta_{t+1} &= \theta_t - u_t.
\end{alignedat}
$$

动量 $m_t$ 为历史梯度的指数移动平均 (exponential moving average)，其权重 $\gamma$ 常取 0.9

::: tip NOTE
PyTorch 中 SGD with Momentum 的[实现方式](https://pytorch.org/docs/master/generated/torch.optim.SGD.html#torch.optim.SGD)与上述公式略有不同，学习率 $\eta$ 是乘在 $u_t$ 上而不是梯度 $g$ 上，即
$$
\begin{alignedat}{2}
             m_t &= \gamma\cdot m_{t-1} + g_t \\
             u_t &= \eta\cdot m_t \\
    \theta_{t+1} &= \theta_t - u_t.
\end{alignedat}
$$
对于固定的学习率 $\eta$ 两者是等价的（对动量权重 $\gamma$ 进行缩放即可），而在网络实际训练过程中往往需要动态调节学习率 (lr schedule)，后者在改变学习率的时候不会影响动量 $m_t$ 的计算。

下文统一采用与 PyTorch 一致的写法。
:::

### SGD with Nesterov accelerated gradient (NAG)

$$
\begin{alignedat}{2}
    \textcolor{#8b959e}{g_t} &\textcolor{#8b959e}{= \nabla_\theta f(\theta_t)} \\
    \textcolor{#8b959e}{m_0} &\textcolor{#8b959e}{= g_0} \\
    m_t &= \gamma\cdot m_{t-1} + \nabla_\theta f(\theta_t \textcolor{#F26400}{- \gamma\cdot m_{t-1}}) \\
    u_t &= \eta\cdot m_t \\
    \theta_{t+1} &= \theta_t - u_t.
\end{alignedat}
$$

<!-- PyTorch implementation

$$
\begin{alignedat}{2}
\theta'_{t} &= \theta_{t} - \eta \cdot \mu \cdot v_{t} \\
v_{t+1} &= \mu \cdot v_{t} + g(\theta_{t} - \eta \cdot \mu \cdot v_{t}) \\
\theta_{t+1} &= \theta_{t} - \eta \cdot v_{t+1} \\
\theta'_{t+1} &= \theta_{t+1} - \eta \cdot \mu \cdot v_{t+1}\\
&= \theta_{t} - \eta \cdot v_{t+1} - \eta \cdot \mu \cdot v_{t+1}\\
&= \theta'_{t} + \eta \cdot \mu \cdot v_{t} - \eta \cdot v_{t+1} - \eta \cdot \mu \cdot v_{t+1} \\
&= \theta'_{t} - \eta \cdot (v_{t+1} - \mu \cdot v_{t} + \mu \cdot v_{t+1})\\
&= \theta'_{t} - \eta \cdot (v_{t+1} - \mu \cdot v_{t} + \mu \cdot v_{t+1})\\
&= \theta'_{t} - \eta \cdot (g(\theta'_{t}) + \mu \cdot v_{t+1})
\end{alignedat}
$$ -->

### Adagrad

<span class="cn-font" lang="zh-CN">——</span>引入二阶动量。自适应学习率 优化算法的到来

$$ g_{t,i} = \nabla f(\theta_{t,i}). $$

($\theta_{t+1,i} = \theta_{t,i} - \eta\cdot g_{t,i}$)

$$ \theta_{t+1,i} = \theta_{t,i} - \frac{\eta}{\textcolor{#F26400}{\sqrt{G_{t,ii}+\epsilon}}}\cdot g_{t,i} $$

$G_t$

Adadelta

RMSprop

### Adam

<span class="cn-font" lang="zh-CN">——</span>Adaptive Moment Estimation 同时使用一阶动量与二阶动量

### (AdaMax, Nadam, AMSGrad)

---

## 阅读材料

**总览：**

- [一个框架看懂优化算法之异同 SGD/AdaGrad/Adam - 知乎专栏](https://zhuanlan.zhihu.com/p/32230623)
- [An overview of gradient descent optimization algorithms](https://ruder.io/optimizing-gradient-descent/index.html)
- Wilson, Ashia C., et al. **The marginal value of adaptive gradient methods in machine learning**. In *Advances in neural information processing systems*. 2017. [link](https://proceedings.neurips.cc/paper/2017/hash/81b3833e2504647f9d794f7d7b9bf341-Abstract.html)
- [Parameter updates - CS231n](https://cs231n.github.io/neural-networks-3/#update)

<!--  -->

**Momentum/NAG:**

- [路遥知马力<span class="cn-font" lang="zh-CN">——</span>Momentum](https://zhuanlan.zhihu.com/p/21486826)
- [比 Momentum 更快：揭开 Nesterov Accelerated Gradient 的真面目 - 知乎专栏](https://zhuanlan.zhihu.com/p/22810533)

<!--  -->

- https://towardsdatascience.com/adam-latest-trends-in-deep-learning-optimization-6be9a291375c
- https://blog.christianperone.com/2020/11/optimization-deep-learning/
