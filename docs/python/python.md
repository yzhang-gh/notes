# Python

## 作用域 scope

- Python 程序由accent**代码块**组成，包括模块（mudule），类（class），函数（def）等
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

https://docs.python.org/3/reference/executionmodel.html
