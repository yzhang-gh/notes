# 常用代码片段

## 各种路径（用户目录与临时目录）

```python
from os.path import expanduser
from tempfile import gettempdir

expanduser("~/somewhere")
## -> "C:\\Users\\<user_name>/somewhere" (on Windows)

gettempdir()
```

## 在命令行打印进度

```python
print(f"{progress:.2f}%", end="\r", flush=True)
```

## GUI 相关

### 弹出消息框

```python
from tkinter import Tk, messagebox

## Get rid of the root window
root = Tk()
root.title("Title")
root.attributes("-alpha", 0.0)
root.wm_state("iconic")

messagebox.showinfo("Title", "Message")

root.destroy()
```

### 打包成 exe

```
pyinstaller --onefile --noconsole main.py
```

#### 附：更改图标

用 Resource Hacker 打开要改图标的 exe，`Action > Replace Icon ...`，然后选择一个有图标的 exe 替换（比如 `pythonw.exe`）

## 线程池

```python
import time
from multiprocessing import Pool

NUM_CORES = 4


def f(a, b):
    time.sleep(1)
    return a * b


def main():
    args_list = [(1, 2), (3, 4), (5, 6), (7, 8), (9, 10)]

    t1 = time.time()

    ## Parallel
    with Pool(NUM_CORES) as p:
        results = p.starmap(f, args_list)

    t2 = time.time()
    print(results, f"took {t2 - t1:.4f}s")

    t3 = time.time()

    ## Sequential
    results = []
    for args in args_list:
        results.append(f(*args))

    t4 = time.time()
    print(results, f"took {t4 - t3:.4f}s")


if __name__ == "__main__":
    main()
```
