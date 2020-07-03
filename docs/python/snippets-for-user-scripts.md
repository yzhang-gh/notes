# 写脚本时常用的代码片段

## 消息框

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

---

## 各种路径

```python
from os.path import expanduser
from tempfile import gettempdir

expanduser("~/somewhere")
## -> "C:\\Users\\<user_name>/somewhere" (on Windows)

gettempdir()
```

---

## 打包成 exe

```
pyinstaller --onefile --noconsole main.py
```

### 附：更改图标

用 Resource Hacker 打开要改图标的 exe，`Action > Replace Icon ...`，然后选择一个有图标的 exe 替换（比如 `pythonw.exe`）

---

## 在命令行打印进度

```python
print(f"{progress:.2f}%", end="\r", flush=True)
```
