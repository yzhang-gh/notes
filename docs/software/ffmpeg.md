# FFmpeg

::: tip
如果是在 conda 环境中最好提前手动安装

```bash
conda install ffmpeg x264
```

否则安装其它包如 PyTorch 时会自动安装不支持 libx264 的版本
:::

## 拼接多个视频

首先创建一个 `mylist.txt` 文件，格式如下

```plaintextc
# this is a comment
file '/path/to/file1.mp4'
file '/path/to/file2.mp4'
file '/path/to/file3.mp4'
```

在 Windows Command-Line 中可以使用如下命令快速为当前文件夹生成上述文件

```
(for %i in (*.mp4) do @echo file '%i') > mylist.txt
```

进行拼接

```shell
ffmpeg -f concat -i mylist.txt -c copy output.mp4
```

<https://trac.ffmpeg.org/wiki/Concatenate>

## 格式转换

### MP4

转换 `mkv`，`avi` 为 `mp4`

```shell
ffmpeg -i input.mkv -c copy output.mp4
```

转换 `wmv` 为 `mp4`

```shell
ffmpeg -i input.wmv -c:v libx264 -crf 17 output.mp4
```

<https://trac.ffmpeg.org/wiki/Encode/H.264>

### 动图

#### GIF

```shell
ffmpeg -ss 1 -to 4 -i input.mp4 \
    -vf "fps=10,scale=320:-1:flags=lanczos,split[a][b];[a]palettegen[p];[b][p]paletteuse" \
    output.gif
```

<https://superuser.com/a/556031>

#### WebP

```shell
ffmpeg -ss 1 -to 4 -i input.mp4 -vcodec libwebp -vf "fps=fps=15,scale=640:360" \
    -lossless 1 -loop 0 -preset default -an -vsync 0 output.webp
```

<https://gist.github.com/witmin/1edf926c2886d5c8d9b264d70baf7379>

需要裁剪的时候在 `-vf` 中加入 `crop=w:h:x:y` 即可

## 将图像序列合并为视频

```shelldoc
ffmpeg [-framerate 24] -i images/%4d.jpg [-frames:v <num_frames>] [-s 1920x1080] [-crf 18] \
    output.mp4
```

也可以使用 glob 选择图片 `-pattern_type glob -i 'images/*.jpg'`（因为 glob pattern 包含星号等特殊符号所以注意使用引号）

## 多个视频 side-by-side

```shell
ffmpeg -i left.mp4 -i right.mp4 -filter_complex hstack output.mp4
```

如果是三个视频则可以使用 `hstack=inputs=3`

## 裁剪、缩放、填衬视频

- **`crop=<w>:<h>:<x>:<y>`**
- **`scale=<w>:<h>`**
- **`pad=<w>:<h>:<x>:<y>[:<color>]`**

`w` 和 `h` 可以只指定一个值，另一个用 `-1` 由原本的长宽比来确定，`-2` 则额外要求其是偶数

使用逗号 `,` 连接，依次应用多个 filter ([FilteringGuide](https://trac.ffmpeg.org/wiki/FilteringGuide))

```shell
## 将视频缩放为 200x200，然后竖直方向居中填充至 200x400 大小
ffmpeg -i input -vf 'scale=200:200,pad=200:400:0:(oh-ih)/2' output
```

可以使用 `iw`，`ow`，`ih`，`oh` 等变量，以及 `/`，`*` 等来计算相应参数

<https://ffmpeg.org/ffmpeg-filters.html>

## 叠加视频

将 `fg.mp4` 缩小、变透明，然后叠加在 `bg.mp4` 左下角

```shell
ffmpeg -i bg.mp4 -i fg.mp4 -filter_complex \
'[0:v]null[bg]; \
[1:v]scale=-1:480,format=rgba,colorchannelmixer=aa=0.8[fg]; \
[bg][fg]overlay=0:(main_h-overlay_h)' \
-crf 15 out.mp4
```

（如果运行有问题可以将 filter 参数写成一行再运行）

## 仅保留视频或音频

`-an` 去除音频

```
ffmpeg -i input.mp4 -c copy -an output.mp4
```

`-vn` 去除视频

```
ffmpeg -i input.mp4 -c copy -vn output.aac
```

## 添加文字

```shell
style_str="fontfile=noto-sans.ttf:fontsize=36:fontcolor=white:shadowx=2:shadowy=2:shadowcolor=black"
ffmpeg -i input.mp4 -vf "drawtext=text='hello world':x=60:y=60:$style_str" -crf 16 output.mp4
```

## GPU

[Using FFmpeg with NVIDIA GPU Hardware Acceleration – NVIDIA Docs](https://docs.nvidia.com/video-technologies/video-codec-sdk/12.0/ffmpeg-with-nvidia-gpu/index.html#quality-testing)

```shell
ffmpeg -vsync 0 -hwaccel cuvid -c:v h264_cuvid -i input.mp4 -c:a copy -c:v h264_nvenc \
    -b:v 0 -cq 27 output.mp4
```

> where
>
> ```
> -b:v 0  overrides the default 2mbps bitrate as noted by Gyan
> -cq 1   target quality level (range of 0-51)
>         0 means automatic (in my case around 15mbps)
>         1 gives about 15mbps, 26 results in around 5mbps, 51 results in 0.5mbps
> ```
>
> [Configure CQP (CRF) for h264_nvenc – StackExchange](https://video.stackexchange.com/a/30625)

HEVC 编码就用 `hevc_nvenc`

[HWAccelIntro > CUDA (NVENC/NVDEC) – FFmpeg](https://trac.ffmpeg.org/wiki/HWAccelIntro#CUDANVENCNVDEC)

查看 encoder 帮助

```shell
ffmpeg -h encoder=h264_nvenc
```

其中有 supported pixel formats 信息以及 encoder 设置项

### 编码质量

GPU 最高质量使用 `-preset p7` 和 `-pix_fmt p010le` (10 bit depth)，`-rc-lookahead 20`

<https://www.reddit.com/r/ffmpeg/comments/ystse6/hevc_nvenc_2pass_question/>

[GPU 转码效果为什么不如纯 CPU？– 知乎](https://www.zhihu.com/question/22501094)

---

此外，不论是否使用 GPU 编码，**关键帧间隔**可以使用 `-g` 参数 (Group of Picture size) 设置，可以理解为两个关键帧之间的帧数。如果希望每 3 秒一个关键帧则可以设置为 3 倍 fps 大小

## Extra

视频下载工具 [lux](https://github.com/iawia002/lux)

e.g. Bilibili

```shelldoc
## -c 提供 cookie
## -i 查询提供的格式
## -f 下载指定的格式
lux -c "SESSDATA=<cookie_value>" -i "https://www.bilibili.com/video/BVxxxxxxxxxx/"
lux -c "SESSDATA=<cookie_value>" -f 80-7 "https://www.bilibili.com/video/BVxxxxxxxxxx/"
```

::: details <code>youtube-dl</code>
list available formats

```shelldoc
youtube-dl -F <url>
```

download the selected format

```shelldoc
youtube-dl -f <format_code> <url>
```

others

```shelldoc
youtube-dl [--proxy <proxy>] -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' --merge-output-format mp4 <url>
```
:::
