# Logging

```python
import logging

logging_level = logging.DEBUG
logging_formatter = logging.Formatter("%(asctime)s [%(levelname)-5s] [%(name)s] %(message)s")

logger = logging.getLogger("name")
logger.setLevel(logging_level)

## add default (console) handler otherwise you cannot change the logging level/formatter
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

保存日志到自定义 stream，可以在使用多进程时分别保存各子进程的日志，注意 logger 应该在子进程中创建

```python
logger = logging.getLogger("name")
logger.setLevel(loglevel)

log_stream = io.StringIO()
handler = logging.StreamHandler(log_stream)
handler.setLevel(loglevel)
handler.setFormatter(logging.Formatter("%(asctime)s [%(levelname)-5s] [%(name)s] %(message)s"))
logger.addHandler(handler)
logger.propagate = False

logger.debug("...")
...

print(log_stream.getvalue().strip())
```
