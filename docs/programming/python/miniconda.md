# Miniconda

## 环境变量

有时在 Windows 上安装完之后[环境变量](https://support.microsoft.com/zh-cn/topic/%E5%A6%82%E4%BD%95%E7%AE%A1%E7%90%86-windows-xp-%E4%B8%AD%E7%9A%84%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F-5bf6725b-655e-151c-0b55-9a8c9c7f747d)并没有被设置好，需要手动在 `PATH` 中加入

```
%USERPROFILE%\miniconda3
%USERPROFILE%\miniconda3\Library\bin
%USERPROFILE%\miniconda3\Scripts
```

重新打开命令行，然后执行

```
conda init
```

对于 PowerShell，还需以管理员权限执行

```powershell
set-executionpolicy remotesigned
```

以允许在启动时运行 conda 初始化脚本

---

有时 conda 已经事先在机器上（比如在 bash 下）装好了，后来切换到 zsh 可能就会 `conda not found`，其实很可能是从其它机器复制过来的 `.zshrc` 里的 conda 路径不匹配了

图方便可以找到 conda 安装目录执行

```shell
# cd ~/miniconda3/bin
./conda init zsh
```

### conda 镜像

[SUSTech Anaconda Mirror](https://mirrors.sustech.edu.cn/help/anaconda.html)

## 常用包

```
scipy numpy pandas matplotlib scikit-learn notebook
```

## Managing environments

```shelldoc
# Create an environment
# Notation: <required argument> [optional argument]
# `-n` is short for `--name`
conda create -n <env_name> [python=3.6] [--clone <another_env>]
conda env list
conda activate <env_name>
conda env remove -n <env_name>
```

See [Manage environments &mdash; conda](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)

## Managing packages

```shelldoc
conda search <pkg_name>             ## search for available packages
conda install <pkg_name ...>
conda list [regex] [-n <env_name>]  ## list packages in, by default, the current environment
conda remove <pkg_name ...>
```

For comparison

```shelldoc
pip install <pkg_name ...>
pip show <pkg_name ...>
pip uninstall <pkg_name ...>
```
