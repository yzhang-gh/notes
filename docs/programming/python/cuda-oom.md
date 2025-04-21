# CUDA Out of Memory

一般直接使用 PyTorch 提供的快照功能

<https://pytorch.org/docs/stable/torch_cuda_memory.html>

```python
# enable memory history, which will add tracebacks and event history to snapshots
torch.cuda.memory._record_memory_history()

run_your_code()
torch.cuda.memory._dump_snapshot("my_snapshot.pickle")
```

<https://pytorch.org/memory_viz>

---

其它方法：

一般来说肯定是程序里显存泄露了，可以先查找残留的无法释放的 tensor

```python
import gc
import torch

gc.collect()

# 获取所有残留的 Tensor
leaked_tensors = [obj for obj in gc.get_objects() if isinstance(obj, torch.Tensor)]

# 打印详细信息
for tensor in leaked_tensors:
    print(f"Shape: {tensor.shape} | Device: {tensor.device} | Size: {tensor.element_size() * tensor.nelement() / 1024**2:.2f} MB")
```

观察是否有比较大的 tensor。此外还可以查询其引用信息

```python
for tensor in leaked_tensors:
    print(f"\nTensor 形状: {tensor.shape}, 设备: {tensor.device}")
    
    # 获取所有直接引用该 Tensor 的对象
    referrers = gc.get_referrers(tensor)
    print(f"引用者数量: {len(referrers)}")
    
    # 打印引用者的类型和关键信息
    for ref in referrers:
        if isinstance(ref, (list, dict, tuple)):
            print(f"引用者类型: {type(ref)}, 内容片段: {str(ref)[:100]}...")
        else:
            print(f"引用者类型: {type(ref)}")
            # 如果是自定义对象，尝试获取其属性名
            if hasattr(ref, "__dict__"):
                print(f"对象属性: {vars(ref)}")
```

到这一步之后如果还是不太容易看出残留的引用关系，可以使用 `objgraph` 库来可视化（非常好用），需要安装 [Graphviz](https://graphviz.org/)（命令行里能调用 `dot` 可执行文件），核心用法只有一行

```python
objgraph.show_backrefs(obj, filename="backrefs.png")
```

可以调整 `max_depth`，`too_many` 参数来控制可视化的详细程度

---

有时发现单独执行 `torch.cuda.empty_cache()` 并不能释放显存，但是先执行 `gc.collect()` 之后再执行 `empty_cache()` 又发现的确有显存可以释放。对此 DeepSeek 的解释为

> 1. **​Python 对象层**​​（由 GC 管理）
>    - 当 Python 中 `torch.Tensor` 对象的引用计数归零时，**​​仅标记**​​底层显存可回收
>    - 但 Python 的垃圾回收器（GC）可能未及时运行，导致对象未真正销毁
> 2. **CUDA 缓存层**​​（由 PyTorch 管理）
>    - `empty_cache()` 只能释放**​​已被 Python 标记为可回收**​​的显存
>    - 如果 Python 对象未销毁，PyTorch 无法感知这些显存可释放
