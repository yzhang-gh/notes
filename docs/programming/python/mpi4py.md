# 进程间通信之──mpi4py

进程间通信 (IPC) 的方式有很多，比如（本地）套接字 (sockets)，不过在超算集群上可能就用不了了

==MPI== ([Message Passing Interface](https://en.wikipedia.org/wiki/Message_Passing_Interface))

Single Process Multiple Data (SPMD) Model:

```
mpirun [ options ] <program> [ <args> ]
```

Multiple Instruction Multiple Data (MIMD) Model:

```
mpirun [ global_options ] [ local_options1 ]
    <program1> [ <args1> ] : [ local_options2 ]
    <program2> [ <args2> ] : ... :
    [ local_optionsN ]
    <programN> [ <argsN> ]
```

## 示例

```python
from mpi4py import MPI

comm = MPI.COMM_WORLD
rank = comm.Get_rank()

if rank == 0:
    data = {'a': 7, 'b': 3.14}
    comm.send(data, dest=1, tag=11)
    print("Sent.")
elif rank == 1:
    data = comm.recv(source=0, tag=11)
    print("Received.")
    print(data)
```

```shell
mpiexec -n 2 python script.py
# or `mpirun -np 1 python script0.py : -np 1 python script1.py`
```

**Output**

```
Sent.
Received.
{'a': 7, 'b': 3.14}
```

## 阅读材料

- [MPI for Python - Tutorial](https://mpi4py.readthedocs.io/en/stable/tutorial.html)
