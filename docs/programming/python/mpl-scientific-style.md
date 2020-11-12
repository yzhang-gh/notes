# Matplotlib 学术样式

## 配置

## 代码控制

```python
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.ticker import MultipleLocator, FormatStrFormatter

fig, ax = plt.subplots()
ax.plot(t, s)

## Major and minor ticks
ax.xaxis.set_major_locator(MultipleLocator(20))
ax.xaxis.set_major_formatter(FormatStrFormatter('%d'))
ax.xaxis.set_minor_locator(MultipleLocator(5))

plt.show()
```
