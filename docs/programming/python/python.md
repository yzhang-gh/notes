# Python

## 作用域 (scope)

- Python 程序由==代码块==组成，包括**模块** (mudule)，**类** (class)，**函数** (def) 等
  注意 **if**，**for** 等语句不构成代码块
- 当变量在**代码块**中被定义时，作用域为该代码块

### 变量名解析 LEGB 法则

```python
__name__, __file__        ## Builtin

global_var = 1            ## Global


def outer():
    enclosing_var = 2     ## Enclosing (relative to `inner`)

    def inner():
        local_var = 3     ## Local

        print(f"Local     {local_var:^8}")
        print(f"Enclosing {enclosing_var:^8}")
        print(f"Global    {global_var:^8}")
        print(f"Builtin   {__name__:^8}")

    inner()


if __name__ == "__main__":
    outer()

## ═════ Output ═════
## Local        3
## Enclosing    2
## Global       1
## Builtin   __main__
```

::: warning WARNING - UnboundLocalError
因为局部变量可以和全局变量同名，这种错误经常出现。
如果代码块中任何位置出现了变量名绑定（比如 `a = 2`），则该代码块中所有变量名 a 都指向该局部变量，包括出现在变量名绑定之前的语句。

不过好消息是这种错误可以被静态检查工具发现（比如 Pyright）
:::

```python
global_var = 1


def f1():
    print(global_var)     ## 1


def f2():
    global_var = 2        ## We now have a local variable 'global_var'
    print(global_var)     ## 2


def f3():
    print(global_var)     ## UnboundLocalError: local variable 'global_var'↵
    global_var = 2        ## referenced before assignment
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
