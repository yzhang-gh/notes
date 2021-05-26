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
