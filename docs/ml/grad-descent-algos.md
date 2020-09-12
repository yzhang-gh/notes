# 梯度下降优化算法总结

<link rel="stylesheet" href="/notes/katex@0.11.1.min.css">

## 背景

[回顾一下](./learning-theory.md)，现实中我们有了数据集 $D = \lbrace(x^{(1)},y^{(1)}),\cdots,(x^{(m)},y^{(m)})\rbrace$，也定义了损失函数 $\ell\colon\mathcal{Y}\times\mathcal{Y}\to\mathbb{R}$，我们想要寻找一个假设函数 $h$，which 能最小化经验误差（$h$ 的所有参数由 $\theta$ 表示）：

$$ \min_\theta\widehat{E}(\theta;D)\text{,}\qquad\text{where }\widehat{E}(\theta;D)=\frac{1}{m}\sum_{i=1}^m \ell\mathopen{}\left(h(x^{(i)};\theta), y^{(i)}\right)\mathclose{}. $$

这个（凸）优化的过程就可以用梯度下降来做

$$ \theta = \theta - \eta\cdot g $$

其中 $\eta$ 为学习率，$g = \nabla_\theta\widehat{E}(\theta)$ 为梯度

## 朴素

**挑战**

- 选择学习率
- 选择学习率 scheduler
- 如果数据稀疏或特征频率不同（？？？），我们想给不常出现的特征更大的 update
- 局部极小值

Momentum

$$
\begin{alignedat}{2}
    v_t &= \gamma\cdot v_{t-1} + \eta\cdot\nabla_\theta\widehat{E}(\theta) \\
    \theta &= \theta - v_t.
\end{alignedat}
$$

Nesterov accelerated gradient (???)

$$
\begin{alignedat}{2}
    v_t &= \gamma\cdot v_{t-1} + \eta\cdot\nabla_\theta\widehat{E}(\theta - \gamma\cdot v_{t-1}) \\
    \theta &= \theta - v_t.
\end{alignedat}
$$

Adagrad

$$ g_{t,i} = \nabla_\theta\widehat{E}(\theta_{t,i}). $$

($\theta_{t+1,i} = \theta_{t,i} - \eta\cdot g_{t,i}$)

$$ \theta_{t+1,i} = \theta_{t,i} - \frac{\eta}{\textcolor{#FF7800}{\sqrt{G_{t,ii}+\epsilon}}}\cdot g_{t,i} $$

$G_t$

Adadelta

RMSprop

Adam

(AdaMax, Nadam, AMSGrad)

---

## 阅读材料

- https://zhuanlan.zhihu.com/p/32230623
- https://ruder.io/optimizing-gradient-descent/index.html
- https://towardsdatascience.com/adam-latest-trends-in-deep-learning-optimization-6be9a291375c
