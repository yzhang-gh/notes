# Ubuntu

## 屏幕亮度

屏幕亮度以文件形式存储于 `/sys/default/backlight/` 目录下，多显卡时则会有多个子文件夹，比如

```
amdgpu_bl0 nvidia_0
```

每个文件夹内有 `brightness`，`max_brightness` 等文件，修改 `brightness` 文件中的数值即可改变屏幕亮度

[Display brightness goes way up on suspend — Ask Ubuntu](https://askubuntu.com/a/1313453/1577456)

## GNOME 图片和视频查看器

### Eye of GNOME

https://snapcraft.io/eog `snap install eog`

or https://flathub.org/apps/details/org.gnome.eog

`sudo apt install eog` 可能产生问题，如果看到

```
You are about to do something potentially harmful.
To continue type in the phrase 'Yes, do as I say!'
```

就不要继续了，换用 snap 安装

### ~~GNOME Videos~~

https://wiki.gnome.org/Apps/Videos

不太好用

### **MPV**

`sudo apt install mpv`

press <kbd>q</kbd> to quit
