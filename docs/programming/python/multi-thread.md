# Python 多线程

```python
import random
import threading
import time


def countdown(n, factor=1.0):
    for i in reversed(range(n)):
        time.sleep(random.random() * factor)
        print(f"{i} [{threading.current_thread().name}]")


if __name__ == "__main__":
    random.seed(0)
    n = 5

    t = threading.Thread(target=countdown, args=(n,))
    t.start()

    countdown(n, 0.6)

    t.join()  ## wait until `t` terminates

    print("main thread exited")
```

**Output**

```plaintextc
4 [MainThread]          # 4 [MainThread]
3 [MainThread]          # 3 [MainThread]
4 [Thread-1]            # 4 [Thread-1]
2 [MainThread]          # 2 [MainThread]
1 [MainThread]          # 1 [MainThread]
3 [Thread-1]            # 3 [Thread-1]
0 [MainThread]          # 0 [MainThread]
2 [Thread-1]            # main thread exited  ## if no `join()`
1 [Thread-1]            # 2 [Thread-1]
0 [Thread-1]            # 1 [Thread-1]
main thread exited      # 0 [Thread-1]
```
