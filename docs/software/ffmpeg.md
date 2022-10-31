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

转换 `mkv`，`avi` 为 `mp4`

```shell
ffmpeg -i input.mkv -c copy output.mp4
```

转换 `wmv` 为 `mp4`

```shell
ffmpeg -i input.wmv -c:v libx264 -crf 17 output.mp4
```

<https://trac.ffmpeg.org/wiki/Encode/H.264>

GIF

```shell
ffmpeg -ss 1 -to 4 -i input.mp4 \
    -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
    output.gif
```

<https://superuser.com/a/556031>

## 将图像序列合并为视频

```shelldoc
ffmpeg [-framerate 24] -i images/%4d.jpg [-frames:v <num_frames>] [-s 1920x1080] [-crf 18] output.mp4
```

也可以使用 glob 选择图片 `-pattern_type glob -i images/*.jpg`

## 多个视频 side-by-side

```shell
ffmpeg -i left.mp4 -i right.mp4 -filter_complex hstack output.mp4
```

如果是三个视频则可以使用 `hstack=inputs=3`

## 去除音频

`-an`

```
ffmpeg -i input.mp4 -c copy -an output.mp4
```

## GPU

https://trac.ffmpeg.org/wiki/HWAccelIntro#CUDANVENCNVDEC

https://video.stackexchange.com/a/30625

---

## Extra

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
