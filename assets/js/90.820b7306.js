(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{647:function(t,e,i){"use strict";i.r(e);var s=i(35),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"depth-regularized-optimization-for-3d-gaussian-splatting-in-few-shot-images"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#depth-regularized-optimization-for-3d-gaussian-splatting-in-few-shot-images"}},[t._v("#")]),t._v(" Depth-Regularized Optimization for 3D Gaussian Splatting in Few-Shot Images")]),t._v(" "),i("p",[t._v("optimize Gaussian splatting with a limited number of images while avoiding overfitting")]),t._v(" "),i("h3",{attrs:{id:"contributions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contributions"}},[t._v("#")]),t._v(" Contributions")]),t._v(" "),i("ul",[i("li",[t._v("depth-guided Gaussian Splatting optimization")]),t._v(" "),i("li",[t._v("early stop if the depth-guided loss starts to rise")]),t._v(" "),i("li",[t._v("regularize the depth map with a smoothness term")])]),t._v(" "),i("h3",{attrs:{id:"methods"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("depth prior")]),t._v(": obtain the depth map using a pre-trained monocular depth estimation model (scale ambiguity) and aligning the scale and offset using sparse COLMAP feature points\n"),i("ul",[i("li",[t._v("monocular depth estimation: ZoeDepth trained on a indoor dataset NYU Depth v2 and a urban dataset KITTI")])])]),t._v(" "),i("li",[i("strong",[t._v("depth loss")]),t._v(": depth prior vs. GS depth")]),t._v(" "),i("li",[i("strong",[t._v("smoothness")]),t._v(": ensuring that neighbor 3D points have similar depths, except for edges found by the Canny edge detector\n"),i("ul",[i("li",[t._v("Unsupervised monocular depth estimation with left-right consistency (CVPR 2017)")])])])]),t._v(" "),i("p",[t._v("Modifications for the few-shot learning setting:")]),t._v(" "),i("ul",[i("li",[t._v("set SH to 1, preventing overfitting")]),t._v(" "),i("li",[t._v("early stop")]),t._v(" "),i("li",[t._v('remove the "reset opacity" operation, which may lead to irreversible optimization outcomes')])]),t._v(" "),i("h3",{attrs:{id:"results"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),i("p",[t._v("tested on NeRF-LLFF")])])}),[],!1,null,null,null);e.default=a.exports}}]);