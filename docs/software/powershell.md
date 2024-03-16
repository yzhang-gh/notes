# PowerShell

## PowerShell "Alias"

PowerShell 只能给 cmdlet 设置 alias，如果想要像 Linux 上的 alias 一样代替一个语句，可以使用函数，比如

```powershell
function jl { jupyter notebook list }

function js {
    Param(
        [parameter(Position=0)]
        [Int]
        $port = 8888
    )

    jupyter notebook stop $port
}
```

然后把这个加到用户 profile 就可以了（在 PS 里输入 `$profile` 查看路径，一般是 `%userprofile%\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`）

为了允许 `.ps1` 文件执行，需要以管理员权限打开 PS 然后执行

```powershell
Set-ExecutionPolicy RemoteSigned
```

<https://superuser.com/a/516704/950027>
<https://stackoverflow.com/a/4038991>

## 自动补全

要想获得类似 `zsh-autosuggestions` 的使用体验，可以在上述 profile 文件中加入

```powershell
## 按 Ctrl + RightArrow 只采纳当前候选提示的一个单词
Set-PSReadLineKeyHandler -Chord Ctrl+RightArrow -Function ForwardWord

## 使用 Tab 键时列出可以补全的项
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete

## 上下键查找与当前输入匹配的历史命令
Set-PSReadlineKeyHandler -Chord UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Chord DownArrow -Function HistorySearchForward
Set-PSReadLineOption -HistorySearchCursorMovesToEnd

## 颜色
Set-PSReadLineOption -Colors @{ InlinePrediction = "$([char]0x1b)[97;2m"}
```
