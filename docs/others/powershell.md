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

然后把这个加到用户 profile 就可以了（在 PS 里输入 `$profile` 查看路径）

<https://superuser.com/a/516704/950027>

---

## Unable to Eject Drive

```powershell
Get-EventLog -LogName System -after (Get-Date).AddHours(-1) | Where-Object {$_.EventID -eq 225} | Sort-Object TimeGenerated | Format-Table -Wrap
```

<https://superuser.com/a/1356217/950027>
