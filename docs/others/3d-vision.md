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

rotation vector

http://motion.pratt.duke.edu/RoboticSystems/3DRotations.html

旋转矩阵默认按列排列，即每列为新坐标系下的基向量

**世界坐标系**（绝对旋转）与**自身坐标系**（相对旋转）。计算机械臂上的关节时，先计算末端（相对旋转），再计算父关节旋转，因为旋转父关节会改变子关节的自身坐标系 (TODO)

旋转矩阵 / 向量默认是相对于世界坐标系 $A_2A_1 = A_3$ 表示 $A_3$ 为先 $A_1$ 后 $A_2$ 两个世界坐标系旋转的复合

假如现在想保留 $A_1$ 为世界坐标系旋转（比如整个躯干的旋转），$A_2$ 则修改为相对旋转 $A_{21}$（比如手臂相对于躯干）

$A_1A_{21} = A_3$

相对旋转右乘（先执行），绝对旋转左乘（后执行），也即前面所说先末端后躯干

其它：https://www.yuque.com/yunyoujun/blog/quaternion-and-spatial-rotation

## 不同坐标系下的旋转矩阵转换

从 Blender, Unity 这些软件中导出相机参数时，往往和我们实际使用的坐标系或者相机默认位姿（比如 opencv）定义不同，需要进行转换

比较好的方法是使用 c2w 矩阵作为不同坐标系间的桥梁

对于一个 c2w 变换

$$
\bf{T}_{\text{c2w}} = \begin{bmatrix}
\bf{R} & \bf{t} \\
\bf{0} & 1
\end{bmatrix} = \begin{bmatrix}
  x_1 & y_1 & z_1 & t_1 \\
  x_2 & y_2 & z_2 & t_2 \\
  x_3 & y_3 & z_3 & t_3 \\
  0 & 0 & 0 & 1
\end{bmatrix}
$$

- $\bf{t}$ 是相机中心在世界坐标系下的位置
- $(x_1, y_1, z_1)$ 是相机坐标系的 $x$ 轴单位向量 $(1, 0, 0)$ 在世界坐标系下的对应方向
- $(x_2, y_2, z_2)$ 对应 $y$ 轴方向
- $(x_3, y_3, z_3)$ 对应 $z$ 轴方向

所以，如果能从 Blender 中获得相机在世界坐标系下的 位置 和你想使用的相机坐标系 3 个轴的方向，就可以直接构造出实际需要的 $\bf{T}_{\text{c2w}}$ 矩阵

Unity 的左右手系问题另说

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
