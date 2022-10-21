# Python 多进程与子进程

## 多进程 `multiprocessing`

进程池与 map

```python {20,24,28}
import time
from multiprocessing import Pool

Num_Processes = 4

def func_single_arg(a):
    time.sleep(1)
    return a * a

def func_multi_args(a, b):
    time.sleep(1)
    return a * b

def main():
    single_arg_list = [1, 2, 3, 4]
    multi_args_list = [(1, 2), (3, 4), (5, 6), (7, 8)]

    with Pool(Num_Processes) as pool:
        ## 使用多进程运行接受单个参数的函数
        results = pool.map(func_single_arg, single_arg_list)
        print(results)

        ## 使用多进程运行接受多个参数的函数
        results = pool.starmap(func_multi_args, multi_args_list)
        print(results)

        ## imap 可以与 tqdm 配合显示进度条（实际上并不准确，见后文）
        results = pool.imap(func_single_arg, single_arg_list):
        print(results)

if __name__ == "__main__":
    main()
```

```
[1, 4, 9, 16]
[2, 12, 30, 56]
[1, 4, 9, 16]
```

### Gracefully interrupt Pool with `Ctrl-C`

```python
def pool_init():
    # ignore the SIGINI in sub process
    def sig_int(signal_num, frame):
        pass

    signal.signal(signal.SIGINT, sig_int)

pool = Pool(n_processes, pool_init)
...
```

```python
try:
    ...
except KeyboardInterrupt:
    ...
```

## 子进程 `subprocess`

`run`

## `tqdm` 和 `imap` 并不能显示真正的进度

```python
## Python 3.8+
import time
from multiprocessing import Pool

from tqdm import tqdm

Num_Processes = 5
Num_Args = 10

def func(a):
    time.sleep((Num_Args - a) * 0.2)
    result = a ** 2
    print(f"a={a} squared is {result}")
    return result

def main():
    arg_list = range(Num_Args)
    print(f"{arg_list=}")

    with Pool(Num_Processes) as pool:
        results = list(
            tqdm(
                pool.imap(func, arg_list),
                total=len(arg_list),
                bar_format="{l_bar}{bar:30}{r_bar}{bar:-30b}",
            )
        )
    print(f"{results=}")

if __name__ == "__main__":
    main()
```

Output

```
arg_list=range(0, 10)
  0%|                              | 0/10 [00:00<?, ?it/s]
a=4 squared is 16
a=3 squared is 9
a=2 squared is 4
a=1 squared is 1
a=0 squared is 0
 10%|███                           | 1/10 [00:02<00:19,  2.20s/it]
a=6 squared is 36
a=8 squared is 64
a=5 squared is 25
 60%|██████████████████            | 6/10 [00:02<00:01,  2.94it/s]
a=7 squared is 49
a=9 squared is 81
100%|██████████████████████████████| 10/10 [00:02<00:00,  3.84it/s]
results=[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

顺序靠后而提前结束的进程并不会更新进度条
