# 入门

<link rel="stylesheet" href="/notes/katex.min.css">

## Incremental SfM (Structure from Motion)

![](http://colmap.github.io/_images/incremental-sfm.png)

## SMPL

[SMPL: a skinned multi-person linear model](https://dl.acm.org/doi/10.1145/2816795.2818013)

23 joints

10 shape parameters $\boldsymbol{\beta}$，23 pose parameters $\boldsymbol{\theta}$ (joint relative rotations)

[SMPL 论文解读和相关基础知识介绍](https://zhuanlan.zhihu.com/p/256358005)

蒙皮 (skinning)
Rigid Skinning，Linear Blend Skinning

SMPL made Simple
https://smpl-made-simple.is.tue.mpg.de/

https://meshcapade.wiki/SMPL

[SMPLify](https://people.eecs.berkeley.edu/~kanazawa/papers/SMPLify.pdf) estimates the 3D shape and pose (i.e., SMPL model) from a single 2D image.

## 旋转

SO(3) 和 so(3)

https://zhuanlan.zhihu.com/p/87802961

> There are many well-known parametrizations of rotations, such as: the Euler angles (the angles of three successive rotations about main axes), the unit quaternion (also known as the Euler parameters), the axis-angle vector (also known as the exponential map).
> 
> ― Parametrization and Range of Motion of The Ball-and-Socket Joint, 2001

## Inverse Kinematics

正向运动学 (forward kinematics) 是已知运动模型（如机械臂，人体骨架）$\bf{M}$ 和关节角度 $\bf{\Theta}$（如欧拉角、轴角，或称旋转 $\bf{R}$），求解各末端执行器或人体关节的位置 $\bf{P}$

$$
\bf{P} = \text{FK}(\bf{R}, \bf{M})
$$

逆向运动学 (inverse kinematics) 则是已知目标位置 $\bf{P}$，求解各关节角度 $\bf{\Theta}$

$$
\bf{R} = \text{IK}(\bf{P}, \bf{M})
$$

[HybrIK: A Hybrid Analytical-Neural Inverse Kinematics Solution for 3D Human Pose and Shape Estimation](https://openaccess.thecvf.com/content/CVPR2021/html/Li_HybrIK_A_Hybrid_Analytical-Neural_Inverse_Kinematics_Solution_for_3D_Human_CVPR_2021_paper.html)

Numerical solutions

e.g., [Introduction to Inverse Kinematics with Jacobian Transpose, Pseudoinverse and Damped Least Squares methods](https://mathweb.ucsd.edu/~sbuss/ResearchWeb/ikmethods/SdlsPaper.pdf)

Heuristic methods

e.g., [FABRIK: A fast, iterative solver for the Inverse Kinematics problem](https://www.sciencedirect.com/science/article/abs/pii/S1524070311000178) (humanoid)

先只考虑连杆结构，完整的迭代分两部分：

- 一阶段，先将末端执行器「拉」到目标位置，沿着机械臂依次更新「拉扯」父节点，直到根节点；
- 二阶段，此时大概率根节点位置已经被改变了，这不符合实际设定，于是需要重复前面所做的操作，只不过这次是从根节点开始更新至末端执行器。

对于人形骨架，则需要 hierarchically 使用上述方法

## Motion Retargeting

## Others

- 视觉 SLAM 十四讲：从理论到实践

- https://github.com/NVlabs/nvdiffrast

- https://pyrender.readthedocs.io/en/latest/

- Multiple View Geometry in Computer Vision
  https://www.robots.ox.ac.uk/~vgg/hzbook/

- State Estimation for Robotics
  http://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser17.pdf
