# Ubuntu

## RDP

```shelldoc
sudo apt install xrdp

## should already be running
# sudo systemctl status xrdp

## change port (optional)
sudo vi /etc/xrdp/xrdp.ini
## locate the `port=49952` line and change it to XXX
sudo systemctl restart xrdp

## configure the firewall rules
sudo ufw status
sudo ufw enable
sudo ufw allow <port>/tcp
sudo ufw reload

## troubleshooting
# sudo vi /var/log/xrdp.log
```

[ref](https://phoenixnap.com/kb/ubuntu-remote-desktop-from-windows)

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

## 屏幕亮度

屏幕亮度以文件形式存储于 `/sys/default/backlight/` 目录下，多显卡时则会有多个子文件夹，比如

```
amdgpu_bl0 nvidia_0
```

每个文件夹内有 `brightness`，`max_brightness` 等文件，修改 `brightness` 文件中的数值即可改变屏幕亮度

[Display brightness goes way up on suspend — Ask Ubuntu](https://askubuntu.com/a/1313453/1577456)
