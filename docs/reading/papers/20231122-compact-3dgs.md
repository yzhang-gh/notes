---
keywords: gaussian splatting
---

# Compact 3D Gaussian Representation for Radiance Field

<link rel="stylesheet" href="/notes/katex.min.css">

two key objectives:

- reducing the number of Gaussian points without sacrificing performance
  - a learnable mask strategy

- compressing Gaussian attributes, such as view-dependent color and covariance
  - a grid-based neural field rather than per Gaussian SH
  - learn codebooks to compactly represent the geometric attributes of Gaussian by vector quantization

10x reduced storage and enhanced rendering speed

### Contributions

- a novel volume-based masking strategy that identifies and removes non-essential Gaussians that have minimal impact on overall performance
- compress view-dependent color
  - hash-based grid representation (Instant NGP)
- compress geometry
  - store codebook index as the majority of Gaussians exhibit similar geometry (scale, rotation)

### Methods

1. **a learnable masking strategy**
   - introduce an additional mask parameter $m$ for each Gaussian
   - create a binary mask $M \in \{0, 1\}$ based on a masking threshold, and multiply it to both Gaussian scale and opacity
   - backpropagate gradients with *straight-through estimator*[^1]

2. **compressing colors and geometry**
   - ...

[^1]: <https://hassanaskary.medium.com/intuitive-explanation-of-straight-through-estimators-with-pytorch-implementation-71d99d25d9d0>
