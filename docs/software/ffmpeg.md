# FFmpeg

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

## 去除音频

`-an`

```
ffmpeg -i input.mp4 -c copy -an output.mp4
```

## GPU

https://trac.ffmpeg.org/wiki/HWAccelIntro#CUDANVENCNVDEC

https://video.stackexchange.com/a/30625
