# Logging

## 基本使用

```python
import logging

logging_level = logging.DEBUG
fmt = "%(asctime)s [%(levelname)-5.5s] [%(name)s] %(message)s"
logging_formatter = logging.Formatter(fmt)

logger = logging.getLogger(__name__)
logger.setLevel(logging_level)

## add a default (console) handler
## otherwise you cannot change the default STDOUT logging level/formatter
handler = logging.StreamHandler()
handler.setLevel(logging_level)
handler.setFormatter(logging_formatter)
logger.addHandler(handler)

# ## file handler
# handler = logging.FileHandler(filename, encoding="utf-8")
# handler.setLevel(logging_level)
# handler.setFormatter(logging_formatter)
# logger.addHandler(handler)

logger.debug("...")
logger.error("...")
...
```

## 给不同日志等级设置不同的颜色

```python {18,31}
import re
from platform import system

def _add_ansi_color(msg, level):
    if level >= 40:    ## ERROR   (red)
        color = "31"
    elif level >= 30:  ## WARNING (yellow)
        color = "33"
    elif level >= 20:  ## INFO    (normal)
        color = "0"
    else:              ## DEBUG   (dim)
        color = "2"
    return f"\x1b[{color}m{msg}\x1b[0m"

def stream_handler_emit(self: logging.StreamHandler, record: logging.LogRecord):
    try:
        msg = self.format(record)
        msg = _add_ansi_color(msg, record.levelno)
        self.stream.write(msg + self.terminator)
        self.flush()
    except RecursionError:
        raise
    except Exception:
        self.handleError(record)

def file_handler_emit(self: logging.FileHandler, record: logging.LogRecord):
    if self.stream is None:
        self.stream = self._open()
    try:
        msg = self.format(record)
        msg = re.sub(r"\x1b\[\d+m", "", msg)
        self.stream.write(msg + self.terminator)
        self.flush()
    except RecursionError:
        raise
    except Exception:
        self.handleError(record)

if system() == "Windows":
    # raise NotImplementedError("TODO: test compatibility on Windows")
    pass
else:
    logging.StreamHandler.emit = stream_handler_emit
    logging.FileHandler.emit = file_handler_emit
```

## 避免第三方库的日志污染

有时偷懒直接将全局 logging level 设为 DEBUG，然而发现导入的第三方库（比如 `asyncio`）也把日志打印出来了，解决方法如下

```python {4}
import asyncio

logging.basicConfig(level=logging.DEBUG, format=fmt)
logging.getLogger("asyncio").setLevel(logging.WARNING)
```

其中具体的 logger 名称可以在 `logging.Logger.manager.loggerDict` 中查看

## 多进程下保存日志的一种方法

保存日志到自定义 stream，可以在使用多进程时分别保存各子进程的日志，注意 logger 应该在子进程中创建

```python {4}
logger = logging.getLogger("name")
logger.setLevel(loglevel)

log_stream = io.StringIO()
handler = logging.StreamHandler(log_stream)
handler.setLevel(loglevel)
handler.setFormatter(logging.Formatter(fmt))
logger.addHandler(handler)
logger.propagate = False

logger.debug("...")
...

print(log_stream.getvalue().strip())
```
