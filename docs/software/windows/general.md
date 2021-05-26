# 一般问题

## U 盘被占用，无法弹出 (Problem Ejecting USB Device)

在 PowerShell 中执行下述命令查看正在运行的程序

```powershell
Get-EventLog -LogName System -after (Get-Date).AddHours(-1) | Where-Object {$_.EventID -eq 225} | Sort-Object TimeGenerated | Format-Table -Wrap
```

<https://superuser.com/a/1356217/950027>

## 文件（夹）被占用，无法删除、重命名等

使用 [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)，<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> ("Find Handle or DLL")，搜索文件名字即可
