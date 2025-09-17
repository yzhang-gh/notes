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

## 其它方法

### 鸵鸟法

```python
import gc

gc.collect()
torch.cuda.empty_cache()
```

有可能就解决了

### 详细检查

一般来说是因为程序里有显存泄露，可以先查找残留的无法释放的 tensor，再使用 `objgraph` 库来可视化（非常好用），需要安装 [Graphviz](https://graphviz.org/)（安装后在命令行里能成功运行 `dot` 命令即可）

```python
import gc

import objgraph

gc.collect()
torch.cuda.empty_cache()

# 获取所有残留的 Tensor
leaked_tensors = [obj for obj in gc.get_objects() if isinstance(obj, torch.Tensor)]
leaked_tensors = sorted(leaked_tensors, key=lambda x: x.element_size() * x.nelement(), reverse=True)

# 打印详细信息
for i_tensor, tensor in enumerate(leaked_tensors[:10]):
    if "cuda" in str(tensor.device):
        size = tensor.element_size() * tensor.nelement() / 1024**2
        print(f"Shape: {tensor.shape} | Device: {tensor.device} | Size: {size:.2f} MB")

        # 获取所有直接引用该 Tensor 的对象
        referrers = gc.get_referrers(tensor)
        print(f"  引用者数量: {len(referrers)}")
        
        # 打印引用者的类型和关键信息
        for i_ref, ref in enumerate(referrers):
            if isinstance(ref, (list, dict, tuple)):
                print(f"    {i_ref} 引用者类型: {type(ref)}, 内容片段: {str(ref)[:100]}...")
            else:
                print(f"    {i_ref} 引用者类型: {type(ref)}")
                # 如果是自定义对象，尝试获取其属性名
                if hasattr(ref, "__dict__"):
                    print(f"        包含属性: {vars(ref).keys()}")
        print()

        objgraph.show_backrefs(tensor, filename=f"backrefs_{i_tensor}.png", max_depth=10, too_many=20)
```

---

有时发现单独执行 `torch.cuda.empty_cache()` 并不能释放显存，但是先执行 `gc.collect()` 之后再执行 `empty_cache()` 又发现的确有显存可以释放。对此 DeepSeek 的解释为

> 1. **​Python 对象层**​​（由 GC 管理）
>    - 当 Python 中 `torch.Tensor` 对象的引用计数归零时，**​​仅标记**​​底层显存可回收
>    - 但 Python 的垃圾回收器（GC）可能未及时运行，导致对象未真正销毁
> 2. **CUDA 缓存层**​​（由 PyTorch 管理）
>    - `empty_cache()` 只能释放**​​已被 Python 标记为可回收**​​的显存
>    - 如果 Python 对象未销毁，PyTorch 无法感知这些显存可释放
