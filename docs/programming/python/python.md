# Python

## 作用域 scope

- Python 程序由==代码块==组成，包括模块（mudule），类（class），函数（def）等
  if，for 等语句不构成代码块
- 当变量在**代码块**中被定义时，作用域为该代码块（局部变量）

### 变量名解析 LEGB 法则

```python
print(__name__)        ## Builtin

global_var = 1         ## Global

def outer():
    enclosing_var = 2  ## Enclosing (relative to `inner`)
    def inner():
        local_var = 3  ## Local
```

[Python 执行模型](https://docs.python.org/3/reference/executionmodel.html)

## 格式化字符串 (string format)

```python
## Basics             ## use "·" to visualize whitespace
"{} {}".format(1, 2)  ## "1·2"
f"{1} {2}"            ## "1·2"

## Padding and alignment
a = "test"
f"{a:10}"             ## "test······"
f"{a:<10}"            ## "test······"
f"{a:>10}"            ## "······test"
f"{a:^10}"            ## "···test···"
f"{a:_<10}"           ## "test______"

f"{a!s}"              ## equals to f"{str(a)}"
f"{a!r:10}"           ## f"{repr(a):10}"

## Floats
b = 0.5
f"{b:5}"              ## "··0.5" !!!
f"{b:<5}"             ## "0.5··"
f"{b!s:5}"            ## "0.5··"

f"{b:05}"             ## "000.5"
f"{b:.3f}"            ## "0.500"
f"{b:.3e}"            ## "5.000e-01"
f"{b:.2%}"            ## "50.00%"
```

[PyFormat (intuitive examples)](https://pyformat.info/)
[Python strftime reference](https://strftime.org/)
[PEP 3101 -- Standard Format Specifiers](https://www.python.org/dev/peps/pep-3101/#format-specifiers)
