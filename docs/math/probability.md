# 概率论

## 频率学派与贝叶斯学派

假定参数 $\theta$ 决定分布 $D$，分布 $D$ 产生样本集 $\mathcal{X}$

- **频率派**把需要推断的**参数 $\theta$ 看做是固定的未知常数**，即概率虽然是未知的，但最起码是确定的一个值，同时，**样本 $\mathcal{X}$ 是随机的**，所以频率派重点研究样本空间，大部分的概率计算都是针对样本 $\mathcal{X}$ 的分布；
- 而**贝叶斯派**的观点则截然相反，他们认为**参数 $\theta$ 是随机变量**，而**样本 $\mathcal{X}$ 是固定的**，由于样本是固定的，所以他们重点研究的是参数的分布<sup>1</sup>

所以，在贝叶斯学派的观点下，$\Pr(\theta)$ 是accent**先验**，$\Pr(\mathcal{X}|\theta)$ 是accent**似然**（不准确，似然函数不是概率），$\Pr(\theta|\mathcal{X})$ 是accent**后验**，$\Pr(\mathcal{X})$ 是accent**证据**（evidence）

---

## 各种分布

伯努利分布（0-1 分布）--- 扔一次硬币
二项分布 --- 扔多次硬币
超几何分布

多项分布 --- 扔多次骰子

---

## 统计测试

Fisher's exact test *TODO*

## 参考文献 {docsify-ignore}

1. [从贝叶斯方法谈到贝叶斯网络](https://blog.csdn.net/v_july_v/article/details/40984699)
