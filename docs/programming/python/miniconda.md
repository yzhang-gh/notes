# Miniconda

## 环境变量

有时在 Windows 上安装完之后环境变量并没有被设置好，需要手动在 `PATH` 中加入

```
%USERPROFILE%\miniconda3
%USERPROFILE%\miniconda3\Library\bin
%USERPROFILE%\miniconda3\Scripts
```

```
conda init
```

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
