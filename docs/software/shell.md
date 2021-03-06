# Shell

<!-- 按功能分类总结 -->

## SSH

### 生成并配置密钥

<https://www.ssh.com/ssh/keygen/>

```shell
# cd ~/.ssh
ssh-keygen                           ## 生成公、私钥
ssh-copy-id -i id_rsa.pub user@host  ## 将公钥复制到服务器

ssh -v user@root                     ## 输出调试信息 (verbose)
```

### 配置文件

- 全局 `/etc/ssh/ssh_config`
- 用户 `~/.ssh/config`

比如设置首选公钥验证方式

```ini
Host *.ac.uk  ## One or more patterns separated by whitespace
#   HostName <the real hostname (or IP) to login to>
    PreferredAuthentications publickey,keyboard-interactive,password,hostbased
#   IdentityFile ~/.ssh/another_id_rsa
```

对于每个参数，其取值为最先匹配到的值，所以 `Host *` 这种规则应该放在最后，相当于 fallback

More on <https://linux.die.net/man/5/ssh_config>

## 传文件 `scp`

### From remote to local

```shell
scp username@remote.edu:/some/remote/directory/\{a,b,c\} ./
```

Glob patterns can be used (e.g. `*.{py,json}` for all Python and JSON files).

::: tip
Using `\{a,b,c\}` will transfer the files in a single connection/batch (since they'll be expanded on the remote host), while using `{a,b,c}` will open multiple connections, and the overhead is quite noticeable when transferring many files.
:::

### From local to remote

```shell
scp foo.txt bar.txt username@remotehost.edu:~
scp {foo,bar}.txt username@remotehost.edu:~
scp *.txt username@remotehost.edu:~
```

### Copy a folder (`-r`)

```shell
scp -r user@your.server.example.com:/path/to/foo /home/user/Desktop/
```

**NOTE**: By not including the trailing `/` at the end of `foo`, you will move the directory itself (including contents), rather than only the contents of the directory.

<https://stackoverflow.com/a/21691584/8682688>
<https://stackoverflow.com/a/11304926/8682688>

`user@your.server.example.com:/path/to/foo` 一般很长，可以考虑在 `.bashrc` 中[定义一个变量](#使用变量)

## `ls` 命令

```shell
## ls [OPTION...] [FILE or DIR...]
ls -a  ## including entries starting with `.`
ls -l  ## detailed information
ls | head [-<n>]  ## only show first n entries (default 10)
ls | tail         ## ...

## `.bashrc` 中其实默认定义了一些 aliases
alias ll='ls -alF'
alias la='ls -A'   ## except for `.` and `..`
alias l='ls -CF'
```

🚧

## `wget`

## `nohup`, `ps`, `kill`

```shell
nohup your_command_here > output_file 2>&1 </dev/null &

jobs  ## doesn't work once logged out
ps x

kill %i
```

<https://tecadmin.net/run-command-in-background-on-linux/>

## 别名 `alias`, `type`

```shell
## Append the following line to `~/.bashrc` (or `~/.bash_aliases`)
alias name='your command'

type name
## -> name is aliased to `your command'
```

## `tee`

复制输出到指定文件（不影响终端的输出）

```shell
python train.py | tee out.txt
```

## Command history

- press <kbd>Ctrl</kbd> + <kbd>R</kbd> to start search
- press <kbd>Ctrl</kbd> + <kbd>R</kbd> again to see the next result
- press <kbd>Tab</kbd> to accept a result

[How to use bash history commands](https://www.digitalocean.com/community/tutorials/how-to-use-bash-history-commands-and-expansions-on-a-linux-vps#searching-through-bash-history)

## 使用变量

```shell
## In the `.bashrc` file
export rds='username@bluebear.bham.ac.uk:/rds'

## Usage
scp $rds/path/to/foo .
```

<http://www.compciv.org/topics/bash/variables-and-substitution/>
