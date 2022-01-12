# Python

## 作用域 (scope)

- Python 程序由==代码块==组成，包括**模块** (mudule)，**类** (class)，**函数** (def) 等
  注意 **if**，**for** 等语句不构成代码块
- 当变量在**代码块**中被定义时，作用域为该代码块

### 变量名解析 LEGB 法则

变量名解析顺序：最近的 scope

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
因为 Python 中局部变量可以和全局变量同名，这种错误经常出现，见如下 `f3`。
如果代码块中任何位置出现了**变量名绑定语句**（比如 `a = 2`），则该代码块中所有变量名 a 都指向该局部变量，包括出现在变量名绑定之前的语句。

好消息是这种错误可以被静态检查工具发现（比如 Pyright）

注意 `global_dict['foo'] = 'bar'` 不是变量名绑定语句，不会导致这种错误（`global_dict = {'foo': 'bar'}` 才是）
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

f"{a!s}"              ## equals f"{str(a)}"
f"{a!r:10}"           ## f"{repr(a):10}"

## Floats
b = 0.5
f"{b:5}"              ## "··0.5" (floats are right aligned by default)
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

## 正则表达式

正则表达式本身就不多介绍了，见 [regex 101](https://regex101.com/)

首先值得一提的就是 Python ==raw string==，其中的反斜杠 `\` 不表示转义字符，而是 literal `\`

```python
"\\d" == r"\d"  # True
```

### 字符串替换<span class="cn-font" lang="zh-CN">——</span>`re.sub`

大部分时候我们仅仅只是想做个（正则）字符串替换
`re.sub(pattern, repl, string, count=0, flags=0)`

- `pattern` 要被换掉的模式
- `repl` 要换成的模式，可以是字符串（支持 backreference 如 `\2`）或者函数
- `string` 要进行替换的字符串

（`count` 若非 0 则表示最大替换次数，`flags` 对应正则表达式的 flags）

```python
re.sub(r"(.*) > (.*)", r"\2 < \1", "a > b")
# 'b < a'
```

### 字符串匹配和提取

`re.match` 和 `re.search`，都接受参数 `(pattern, string, flags=0)`，返回 `None` 或者 match 对象

```python
m = re.match(r"(\w+) (\w+)", "Isaac Newton, physicist")
m.group(0)     # 'Isaac Newton'       The entire match
m.group(1)     # 'Isaac'              The first parenthesized subgroup.
m.group(2)     # 'Newton'             The second parenthesized subgroup.
m.group(1, 2)  # ('Isaac', 'Newton')  Multiple arguments give us a tuple.
m.groups()     # ('Isaac', 'Newton')  All subgroups in a tuple.
```

`re.match` 要求 `pattern` 出现在字符串 `string` 的开头，`re.search` 则允许其出现在字符串的任意位置

如果需要多次使用某个正则表达式，可以用 `re.compile()` 来生成一个 pattern 对象，其同样可以使用上面这些函数（甚至更精细的功能）

[Regular expression operations - Python documentation](https://docs.python.org/3/library/re.html)
