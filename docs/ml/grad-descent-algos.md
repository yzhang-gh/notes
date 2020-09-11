# 梯度下降优化算法

## ...

[回顾一下](./learning-theory.md)，我们有假设函数 $h$，其所有参数用 $\theta$ 表示（$h$ is parametrized by $\theta$），$D$ 是样例集 $\lbrace(x^{(1)},y^{(1)}),\cdots,(x^{(m)},y^{(m)})\rbrace$，我们想用梯度下降来最小化经验误差（以此找到最优的 $h$，也即 $\theta$）

$$ \min\widehat{E}(\theta;D)\text{, where }\widehat{E}(\theta;D)=\frac{1}{m}\sum_{i=1}^m \ell\mathopen{}\left(h(x^{(i)}), y^{(i)}\right)\mathclose{}. $$

$$ \theta = \theta - \eta\cdot\nabla_\theta\widehat{E}(\theta). $$

## 挑战

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

$$ \theta_{t+1,i} = \theta_{t,i} - \frac{\eta}{\textcolor{orange}{\sqrt{G_{t,ii}+\epsilon}}}\cdot g_{t,i} $$

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
