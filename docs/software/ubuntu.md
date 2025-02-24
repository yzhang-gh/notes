# Ubuntu

## WeChat/QQ

<https://github.com/zq1997/deepin-wine>

## GNOME 图片和视频查看器

### Eye of GNOME

https://flathub.org/apps/details/org.gnome.eog

or https://snapcraft.io/eog `snap install eog`

`sudo apt install eog` 可能产生问题，如果看到

```
You are about to do something potentially harmful.
To continue type in the phrase 'Yes, do as I say!'
```

就不要继续了，换用 flatpak/snap

snap 安装的软件无法在 nfs/sshfs 挂载的路径下使用，如果没有其它来源就只能从源码安装了

### **MPV**

`sudo apt install mpv`

press <kbd>q</kbd> to quit

## CUDA

<https://zhuanlan.zhihu.com/p/79059379> install cuda toolkit

旧版本下载 CUDA Toolkit Archive <https://developer.nvidia.com/cuda-toolkit-archive>

环境变量

```shell
export CUDA_HOME=/usr/local/cuda
export PATH=$PATH:$CUDA_HOME/bin
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda/lib64
```

<https://developer.nvidia.com/rdp/cudnn-download> cudnn-local 包
cuDNN <https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html#installlinux-deb>
包可以直接从这里找 <https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/>

## 安装字体

> There are various locations in GNU/Linux in which fonts can be kept. These locations are defined in `/etc/fonts/fonts.conf`; standard ones include `/usr/share/fonts`, `/usr/local/share/fonts`, and `~/.fonts`.

<https://wiki.ubuntu.com/Fonts#Manually>

## 挂载硬盘分区

可以使用 GUI 操作，详细信息可以查看 `/etc/fstab` 文件，重启

## 快捷方式

可以在用户应用目录直接创建一个快捷方式 `vi ~/.local/share/applications/myapp.desktop`（系统应用则是 `/usr/share/applications/`，需要 sudo 权限）

```
[Desktop Entry]
Name=MyApp
Type=Application
Exec=/path/to/your/executable
Comment=This is my application
Icon=/path/to/your/icon.png
Terminal=false
Categories=Utility;Application;
```

注意路径中不能使用 `~` 来表示用户主目录（`~` 是 shell 中的快捷方式），实测也不能使用环境变量 `$HOME`，建议写绝对路径

然后使用 `update-desktop-database ~/.local/share/applications/` 更新菜单缓存

或者先在任意位置编辑好 `.desktop` 文件，然后使用 `desktop-file-install --dir=~/.local/share/applications/ myapp.desktop` 将其安装到用户目录。其好处是会帮助验证文件格式的正确性

## Unorganized

**nautilus**

- remove default folders from nautilus: <https://askubuntu.com/a/1336906/1577456>
- remove "Recent" tab: `gsettings set org.gnome.desktop.privacy remember-recent-files false`

**Move window among monitors**: shift+super+arrow key

## 屏幕亮度

对于既有核显又有独显的电脑，在连接和断开外接显示器的时候屏幕亮度可能无法正确设置

屏幕亮度以文件形式存储于 `/sys/default/backlight/` 目录下，多显卡时则会有多个子文件夹，比如

```
amdgpu_bl0 nvidia_0
```

每个文件夹内有 `brightness`，`max_brightness` 等文件，修改 `brightness` 文件中的数值即可改变屏幕亮度

[Display brightness goes way up on suspend — Ask Ubuntu](https://askubuntu.com/a/1313453/1577456)
