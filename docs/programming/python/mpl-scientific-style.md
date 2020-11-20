# Matplotlib 学术样式

- 刻度 (ticks)
  - 刻度放到图的内部
  - 主、副刻度
- 图例 (legend) 边框

```
savefig.bbox      : tight       ## 'tight' or 'standard'. 'tight' is incompatible with pipe-based animation backends but will work with temporary file based ones

xtick.direction   : in          ## direction: in, out, or inout
ytick.direction   : in          ## direction: in, out, or inout

legend.fancybox   : False       ## if True, use a rounded box for the legend background, else a rectangle
```

## 代码控制

```python
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.ticker import MultipleLocator, FormatStrFormatter

fig, ax = plt.subplots()
ax.plot(t, s)

## Major and minor ticks
ax.xaxis.set_major_locator(MultipleLocator(20))
# ax.xaxis.set_major_formatter(FormatStrFormatter('%d'))
ax.xaxis.set_minor_locator(MultipleLocator(5))

plt.show()
```
