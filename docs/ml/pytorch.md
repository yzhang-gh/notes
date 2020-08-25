# PyTorch 小笔记

## 基本流程

```python
model = SomeNetwork()            ## Your own model
## Get `inputs` and `labels` from your dataset
preds = model(inputs)            ## Forward pass
loss = loss_func(preds, labels)  ## Compute loss
loss.backward()                  ## Backward pass
optimizer.step()                 ## Update model weights
```

## `NaN` problems

只需一句

```python
torch.autograd.set_detect_anomaly(True)
```

PyTorch 会自动检查是否出现 `NaN` 值，并且打印出详细的信息（会影响性能，所以仅在排查问题时使用）
