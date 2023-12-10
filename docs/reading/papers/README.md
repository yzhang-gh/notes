---
sidebar: auto
---

# Papers

<link rel="stylesheet" href="/notes/katex.min.css">

## 3DGS Improvements

### Priors(/Constraints)

**Mesh**

- SuGaR: Surface-Aligned Gaussian Splatting for Efficient 3D Mesh Reconstruction and High-Quality Mesh Rendering. [[Paper]](https://arxiv.org/abs/2311.12775) [[Notes]](./20231121-sugar.md)

**Few-shot**

- Depth-Regularized Optimization for 3D Gaussian Splatting in Few-Shot Images. [[Paper]](https://arxiv.org/abs/2311.13398) [[Notes]](./20231122-depth-reg-3dgs-few-shot.md)
- FSGS: Real-Time Few-shot View Synthesis using Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.00451) [[Notes]](./20231201-fsgs.md)
- SparseGS: Real-Time 360° Sparse View Synthesis using Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.00206) [[Notes]](./20231130-sparsegs.md)

<!--  -->

- GPS-Gaussian: **Generalizable** Pixel-wise 3D Gaussian Splatting for Real-time Human Novel View Synthesis. [[Paper]](https://arxiv.org/abs/2312.02155)
  - generalizable -> predict Gaussian attributes with neural networks
  - few-shot setting
  - “不忍卒读”，使劲搅和

### Compression

- Compact 3D Gaussian Representation for Radiance Field. [[Paper]](https://arxiv.org/abs/2311.13681) [[Notes]](./20231122-compact-3dgs.md)
- Compact3D: Compressing Gaussian Splat Radiance Field Models with Vector Quantization. [[Paper]](https://arxiv.org/abs/2311.18159)
  - $k$-means codebook (quantize color, SH, scale, and rotation parameters separately, resulting in 4 codebooks, do not quantize opacity)
  - order of Gaussians doesn't matter, sort and do run-length encoding
- EAGLES: Efficient Accelerated 3D Gaussians with Lightweight EncodingS. [[Paper]](https://arxiv.org/abs/2312.04564)
  - quantize color, rotation and **opacity** (do not quantize SH, scaling, position)

### Others

- GaussianShader: 3D Gaussian Splatting with Shading Functions for **Reflective Surfaces**. [[Paper]](https://arxiv.org/abs/2311.17977)
- Mip-Splatting: **Alias-free** 3D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2311.16493)
- Multi-Scale 3D Gaussian Splatting for **Anti-Aliased** Rendering. [[Paper]](https://arxiv.org/abs/2311.17089)

## 4DGS

- Dynamic 3D Gaussians: Tracking by Persistent Dynamic View Synthesis. [[Paper]](https://arxiv.org/abs/2308.09713)
- Deformable 3D Gaussians for High-Fidelity Monocular Dynamic Scene Reconstruction. [[Paper]](https://arxiv.org/abs/2309.13101)

**Newer**

- An Efficient 3D Gaussian Representation for Monocular/Multi-view Dynamic Scenes. [[Paper]](https://arxiv.org/abs/2311.12897)
- 4D Gaussian Splatting for Real-Time Dynamic Scene Rendering. [[Paper]](https://arxiv.org/abs/2310.08528)
- Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2310.10642)

<!--  -->

- MD-Splatting: Learning Metric Deformation from 4D Gaussians in Highly Deformable Scenes. [[Paper]](https://arxiv.org/abs/2312.00583)
- DynMF: Neural Motion Factorization for Real-time Dynamic View Synthesis with 3D Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.00112)
- Gaussian-Flow: 4D Reconstruction with Dynamic 3D Gaussian Particle. [[Paper]](https://arxiv.org/abs/2312.03431)
- HiFi4G: High-Fidelity Human Performance Rendering via Compact Gaussian Splatting. [[Paper]](https://arxiv.org/abs/2312.03461) [[Notes]](./20231206-hifi4g.md)

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

## Other Applications

- SplaTAM: Splat, Track & Map 3D Gaussians for Dense RGB-D SLAM. [[Paper]](https://arxiv.org/abs/2312.02126)
