# Python 代码片段

## 线程池

```python
import time
from multiprocessing import Pool

NUM_PROCESSES = 4


def func_single_arg(a):
    time.sleep(1)
    return a * a


def func_multi_args(a, b):
    time.sleep(1)
    return a * b


def main():
    single_arg_list = [1, 2, 3, 4]
    multi_args_list = [(1, 2), (3, 4), (5, 6), (7, 8)]

    with Pool(NUM_PROCESSES) as p:
        results = p.map(func_single_arg, single_arg_list)
        print(results)

        results = p.starmap(func_multi_args, multi_args_list)
        print(results)

        ## imap 可以与 tqdm 配合显示进度条
        for result in p.imap(func_single_arg, single_arg_list):
            print(result, end=" ")


if __name__ == "__main__":
    main()
```

```
[1, 4, 9, 16]
[2, 12, 30, 56]
1 4 9 16 
```

## 用户目录与临时目录

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

或者使用 `tqdm`

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
