# 计算学习理论 (Computational Learning Theory)

!> 🚧 under construction...

## 什么是「学习」

先定义一些概念

- accent**样本空间** $\mathcal{X}$，其中样本 $x$ 通常由向量表示
- accent**标记空间** $\mathcal{Y}$，考虑二分类问题时，$\mathcal{Y} = \lbrace+1,-1\rbrace$ 或 $\lbrace0,1\rbrace$
- $\mathcal{X}$ 中的样本服从一个隐含未知的accent**样本分布** $\mathcal{D}$（underlying data-generating distribution），即 $x\sim\mathcal{D}$
- accent**标记函数** $f\colon\mathcal{X}\to\mathcal{Y}$（未知，是学习器想学习到的）
- accent**样例集** $D=\lbrace(x^{(1)},y^{(1)}),(x^{(2)},y^{(2)}),\cdots,(x^{(n)},y^{(n)})\rbrace$：先从 $\mathcal{D}$ 中采样 $x^{(i)}$，然后由 $f$ 标记得到 $y^{(i)}$，独立地多次采样得到样例集 $D$，这就是**独立同分布**假设（i.i.d. assumption）
- 学习器的输出，accent**假设函数** $h\colon\mathcal{X}\to\mathcal{Y}$，所有可能的 $h$ 的集合叫做**假设空间** $\mathcal{H}$（比如所有形如 $h=ax+b$ 的函数），$\mathcal{H}$ 由 [inductive bias](https://en.wikipedia.org/wiki/Inductive_bias) 决定（即对某类 $h$ 的偏好）

<!--  -->

- accent**泛化误差**，在样本分布 $\mathcal{D}$ 之下预测值与真实值不同的概率
  $$ E(h;\mathcal{D}) = \Pr_{x\sim\mathcal{D}}[h(x) \neq c(x)] $$
- accent**经验误差**，在样例集上的错误率
  <span>$$ \widehat{E}(h;D)=\frac{1}{m}\sum_{i=1}^m 1_{h(x) \neq c(x)} $$</span>

## PAC 学习框架

## VC 维
