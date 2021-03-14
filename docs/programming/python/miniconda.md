# Miniconda

## 环境变量

有时在安装完之后环境变量并没有被设置好，需要手动在 `PATH` 中加入

```
%USERPROFILE%\Miniconda3
%USERPROFILE%\Miniconda3\Library\bin
%USERPROFILE%\Miniconda3\Scripts
```

## 常用包

```
scipy numpy pandas matplotlib scikit-learn notebook
```

## Managing environments

```
conda create -n <env_name> [--clone <another_env>] # `-n` is shortcut for `--name`
conda env list
conda activate <env_name>
conda env remove -n <env_name>
```

<https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html>
