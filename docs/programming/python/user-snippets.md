# Python 代码片段

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

```
from tqdm import tqdm as std_tqdm

tqdm = partial(std_tqdm, bar_format="{l_bar}{bar:30}{r_bar}{bar:-30b}", leave=False)

bar = tqdm(items, desc="description", total=len(items))
for item in bar:
    ...
    bar.write("...")
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

### 弹出 Toast 消息 (Windows)

```python
# pip install winrt

import winrt.windows.data.xml.dom as dom
from winrt.windows.ui.notifications import ToastNotification, ToastNotificationManager

title = "Hello"
msg = "world!"

def toast(title, msg):
    toast_xml = f"<toast>\
        <visual><binding template='ToastText01'>\
            <text id='1'>{msg}</text>\
        </binding></visual>\
    </toast>"

    toast_xmldoc = dom.XmlDocument()
    toast_xmldoc.load_xml(toast_xml)

    notifier = ToastNotificationManager.create_toast_notifier(title)
    notifier.show(ToastNotification(toast_xmldoc))

toast(title, msg)
```

[Toast schema - Microsoft Docs](https://docs.microsoft.com/en-us/uwp/schemas/tiles/toastschema/schema-root)

Toast XML example:

```python
from winrt.windows.ui.notifications import ToastTemplateType

template = ToastTemplateType.TOAST_IMAGE_AND_TEXT01
toast_xmldoc = ToastNotificationManager.get_template_content(template)
print(toast_xmldoc.get_xml())
```

### 打包成 exe

```
pyinstaller --onefile --noconsole main.py
```

#### 附：更改图标

用 Resource Hacker 打开要改图标的 exe，`Action > Replace Icon ...`，然后选择一个有图标的 exe 替换（比如 `pythonw.exe`）
