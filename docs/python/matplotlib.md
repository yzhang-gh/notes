# Matplotlib

## Configuration File

```python
import matplotlib
print(matplotlib.matplotlib_fname())
```

可以用来设置默认字体

在程序中也可以进行配置，比如

```python
plt.rc('text', usetex=True)
plt.rc('font', family='serif')
```

---

## Default Color Cycle

```python
prop_cycle = plt.rcParams["axes.prop_cycle"]
colors = prop_cycle.by_key()["color"]
```

---

## 用于 LaTeX 插图

```python
plt.savefig("filename.pdf", bbox_inches="tight")
```
