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
        # 使用多进程运行接受单个参数的函数
        results = pool.map(func_single_arg, single_arg_list)
        print(results)

        # 使用多进程运行接受多个参数的函数
        results = pool.starmap(func_multi_args, multi_args_list)
        print(results)

        ## imap 可以与 tqdm 配合显示进度条
        for result in pool.imap(func_single_arg, single_arg_list):
            print(result, end=" ")

if __name__ == "__main__":
    main()
```

```
[1, 4, 9, 16]
[2, 12, 30, 56]
1 4 9 16 
```

## 子进程 `subprocess`

`run`
