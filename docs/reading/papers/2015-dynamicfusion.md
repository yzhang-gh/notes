# DynamicFusion: Reconstruction and Tracking of Non-rigid Scenes in Real-Time

<link rel="stylesheet" href="/notes/katex.min.css">

reconstruct and track dynamic non-rigid scenes in real-time using a single depth camera

Contributions:

1. an approach for non-rigid transformation (volumetric warping) and fusion for a dynamically moving scene
2. efficiency, real-time

Overview

TODO

Methods

Dense Non-rigid Warp Field
per point 6D transformation

dual-quaternion blending DQB

- $\mathcal{W} \colon \mathbf{S} \rightarrow \mathbf{SE}(3)$, warp function, per point 6D transformation（原文的符号不太符合 convention，$\mapsto$ 用于显式地描述映射函数如 $f \colon x \mapsto x^2$）
