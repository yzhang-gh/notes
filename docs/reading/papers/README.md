---
sidebar: auto
---

# Papers

<link rel="stylesheet" href="/notes/katex.min.css">

Legends

- 🤦‍♂️️: poor writing

## 3DGS Improvements

### Priors(/Constraints)

**Mesh**

- SuGaR: Surface-Aligned Gaussian Splatting for Efficient 3D Mesh Reconstruction and High-Quality Mesh Rendering. [[Paper]](https://arxiv.org/abs/2311.12775) [[Notes]](./20231121-sugar.md)

**Few-shot**

- Depth-Regularized Optimization for 3D Gaussian Splatting in Few-Shot Images. [[Paper]](https://arxiv.org/abs/2311.13398) [[Notes]](./20231122-depth-reg-3dgs-few-shot.md)
- FSGS: Real-Time Few-shot View Synthesis using Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.00451) [[Notes]](./20231201-fsgs.md)
- SparseGS: Real-Time 360° Sparse View Synthesis using Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.00206) [[Notes]](./20231130-sparsegs.md)

<!--  -->

- pixelSplat: 3D Gaussian Splats from Image Pairs for Scalable Generalizable 3D Reconstruction. 🤦‍♂️ [[Paper]](https://arxiv.org/abs/2312.12337)
  - highlight: only input 2 images?
- Splatter Image: Ultra-Fast Single-View 3D Reconstruction. [[Paper]](https://arxiv.org/abs/2312.13150)

**Diffusion**

- Learn to Optimize Denoising Scores for 3D Generation: A Unified and Improved Diffusion Prior on NeRF and 3D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.04820)
  - improve SDS loss
<!--  -->

- GPS-Gaussian: **Generalizable** Pixel-wise 3D Gaussian Splatting for Real-time Human Novel View Synthesis. 🤦‍♂️️ [[Paper]](https://arxiv.org/abs/2312.02155)
  - generalizable -> predict Gaussian attributes with neural networks
  - few-shot setting

### Compression

- Compact 3D Gaussian Representation for Radiance Field. [[Paper]](https://arxiv.org/abs/2311.13681) [[Notes]](./20231122-compact-3dgs.md)
- Compact3D: Compressing Gaussian Splat Radiance Field Models with Vector Quantization. [[Paper]](https://arxiv.org/abs/2311.18159)
  - $k$-means codebook (quantize color, SH, scale, and rotation parameters separately, resulting in 4 codebooks, do not quantize opacity)
  - order of Gaussians doesn't matter, sort and do run-length encoding
- EAGLES: Efficient Accelerated 3D Gaussians with Lightweight EncodingS. [[Paper]](https://arxiv.org/abs/2312.04564)
  - quantize color, rotation and **opacity** (do not quantize SH, scaling, position)
- Compact 3D Scene Representation via Self-Organizing Gaussian Grids. [[Paper]](https://arxiv.org/abs/2312.13299)
  - reduction factor of 8x to 26x in size

### Others

- GaussianShader: 3D Gaussian Splatting with Shading Functions for **Reflective Surfaces**. [[Paper]](https://arxiv.org/abs/2311.17977)
- Mip-Splatting: **Alias-free** 3D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2311.16493)
- Multi-Scale 3D Gaussian Splatting for **Anti-Aliased** Rendering. [[Paper]](https://arxiv.org/abs/2311.17089)

<!--  -->

- COLMAP-Free 3D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.07504)
  - GS + ngp? (use sequential images, no need of camera poses)

<!--  -->

- DrivingGaussian: Composite Gaussian Splatting for Surrounding Dynamic Autonomous Driving Scenes. [[Paper]](https://arxiv.org/abs/2312.07920)
  - for surrounding dynamic autonomous driving scenes

<!--  -->

- Triplane Meets Gaussian Splatting: Fast and Generalizable Single-View 3D Reconstruction with Transformers. [[Paper]](https://arxiv.org/abs/2312.09147)
  - single image -> predicts point cloud, triplane -> predicts Gaussians

<!--  -->

- Gaussian Splatting with NeRF-based Color and Opacity. [[Paper]](https://arxiv.org/abs/2312.13729)

## 4DGS

- Dynamic 3D Gaussians: Tracking by Persistent Dynamic View Synthesis. [[Paper]](https://arxiv.org/abs/2308.09713)
- Deformable 3D Gaussians for High-Fidelity Monocular Dynamic Scene Reconstruction. [[Paper]](https://arxiv.org/abs/2309.13101)

**Newer**

- An Efficient 3D Gaussian Representation for Monocular/Multi-view Dynamic Scenes. [[Paper]](https://arxiv.org/abs/2311.12897)
  - reprensent Guassian positions and rotations as functions of time (Fourier approximation), two-stage optimization(?)
  - flow loss (RAFT as GT)
  - follow 3DGS on densification and pruning(?)
- 4D Gaussian Splatting for Real-Time Dynamic Scene Rendering. [[Paper]](https://arxiv.org/abs/2310.08528)
  - 82 FPS at an 800×800 resolution on RTX 3090, 30 FPS at a resolution of 1352×1014
  - represent Gaussian motions and shape changes by an efficient Gaussian deformation field network ($k$-planes)
- Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2310.10642)
  - 4D Gaussians(?) 

<!--  -->

- MD-Splatting: Learning Metric Deformation from 4D Gaussians in Highly Deformable Scenes. [[Paper]](https://arxiv.org/abs/2312.00583)
- DynMF: Neural Motion Factorization for Real-time Dynamic View Synthesis with 3D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.00112)
- Gaussian-Flow: 4D Reconstruction with Dynamic 3D Gaussian Particle. [[Paper]](https://arxiv.org/abs/2312.03431)
  - formulate a 4D scene as a set of deformable 3D Gaussian points
  - A novel Dual-Domain Deformation Model (DDDM) is proposed to explicitly model deformations of each Gaussian point's attributes
    - The time-dependent deformation residual is modeled simultaneously in time and frequency domains (polynomials + Fourier series)
    - models position, rotation and radiance; scaling and opacity remain constant
  - Moreover, an adaptive timestamp scaling technique(?) is introduced to avoid overfitting the scene to only frames with violent motions
  - For robust estimation, we also regularize the motion trajectory by
    - the KNN-based rigid regularization
    - the time smooth constraints
  - two stage optimization (with and without Gaussian densification/pruning)
- HiFi4G: High-Fidelity Human Performance Rendering via Compact Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.03461) [[Notes]](./20231206-hifi4g.md)
- SWAGS: Sampling Windows Adaptively for Dynamic 3D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.13308)
  - canonical space + deformation field
  - adaptively partition a dynamic sequence into windows based on 2D optical flow

<!--  -->

**Single view**

- CoGS: Controllable Gaussian Splatting. 🤦‍♂️️ [[Paper]](https://arxiv.org/abs/2312.05664)
  - a novel framework that adapts GS for dynamic environments captured by a monocular camera
- GauFRe: Gaussian Deformation Fields for Real-time Dynamic Novel View Synthesis. [[Paper]](https://arxiv.org/abs/2312.11458)
  - static Gaussians + dynamic Gaussians
  - dynamic Gaussians = canonical Gaussians + deformation

<!--  -->

**Others**

- Align Your Gaussians: Text-to-4D with Dynamic 3D Gaussians and Composed Diffusion Models

## Later

- **Relightable** 3D Gaussian: Real-time Point Cloud Relighting with BRDF Decomposition and Ray Tracing. [[Paper]](https://arxiv.org/abs/2311.16043)

### Avatar

- Animatable Gaussians: Learning Pose-dependent Gaussian Maps for High-fidelity Human Avatar Modeling. [[Paper]](https://arxiv.org/abs/2311.16096)
- HUGS: Human Gaussian Splats. [[Paper]](https://arxiv.org/abs/2311.17910)
  - represents both the human and the scene as 3D Gaussians
  - human Gaussians are parameterized by
    1. their mean locations in a canonical space
    2. features from a triplane (and use MLPs to predict colors, opacities, shifts, LBS weights...)
- Human Gaussian Splatting: Real-time Rendering of Animatable Avatars. [[Paper]](https://arxiv.org/abs/2311.17113)
  - similar

<!--  -->

- GaussianAvatars: Photorealistic Head Avatars with Rigged 3D Gaussians. [[Paper]](https://arxiv.org/abs/2312.02069)
- HeadGaS: Real-Time Animatable Head Avatars via 3D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.02902)
- GauHuman: Articulated Gaussian Splatting from Monocular Human Videos. [[Paper]](https://arxiv.org/abs/2312.02973)
- MonoGaussianAvatar: Monocular Gaussian Point-based Head Avatar. [[Paper]](https://arxiv.org/abs/2312.04558)
- ASH: Animatable Gaussian Splats for Efficient and Photoreal Human Rendering. [[Paper]](https://arxiv.org/abs/2312.05941)
- 3DGS-Avatar: Animatable Avatars via Deformable 3D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.09228)

<!--  -->

- GAvatar: Animatable 3D Gaussian Avatars with Implicit Mesh Learning. [[Paper]](https://arxiv.org/abs/2312.11461)
- SC-GS: Sparse-Controlled Gaussian Splatting for Editable Dynamic Scenes. [[Paper]](https://arxiv.org/abs/2312.14937)
- Deformable 3D Gaussian Splatting for Animatable Human Avatars. [[Paper]](https://arxiv.org/abs/2312.15059)

## Other Applications

- SplaTAM: Splat, Track & Map 3D Gaussians for Dense RGB-D SLAM. [[Paper]](https://arxiv.org/abs/2312.02126)
- Gaussian Splatting SLAM. [[Paper]](https://arxiv.org/abs/2312.06741)
  - incremental 3D reconstruction using a single moving monocular or RGB-D camera
- Gaussian-SLAM: Photo-realistic Dense SLAM with Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.10070)