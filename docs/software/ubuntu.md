# Ubuntu

## 屏幕亮度

屏幕亮度以文件形式存储于 `/sys/default/backlight/` 目录下，多显卡时则会有多个子文件夹，比如

```
amdgpu_bl0 nvidia_0
```

每个文件夹内有 `brightness`，`max_brightness` 等文件，修改 `brightness` 文件中的数值即可改变屏幕亮度

[Display brightness goes way up on suspend — Ask Ubuntu](https://askubuntu.com/a/1313453/1577456)
