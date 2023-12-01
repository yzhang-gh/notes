---
keywords: gaussian splatting
---

# Depth-Regularized Optimization for 3D Gaussian Splatting in Few-Shot Images

optimize Gaussian splatting with a limited number of images while avoiding overfitting

### Contributions

- depth-guided Gaussian Splatting optimization
- early stop if the depth-guided loss starts to rise
- regularize the depth map with a smoothness term

### Methods

- **depth prior**: obtain the depth map using a pre-trained monocular depth estimation model (scale ambiguity) and aligning the scale and offset using sparse COLMAP feature points
  - monocular depth estimation: ZoeDepth trained on a indoor dataset NYU Depth v2 and a urban dataset KITTI
- **depth loss**: depth prior vs. GS depth
- **smoothness**: ensuring that neighbor 3D points have similar depths, except for edges found by the Canny edge detector
  - Unsupervised monocular depth estimation with left-right consistency (CVPR 2017)

Modifications for the few-shot learning setting:

- set SH to 1, preventing overfitting
- early stop
- remove the "reset opacity" operation, which may lead to irreversible optimization outcomes

### Results

tested on NeRF-LLFF
