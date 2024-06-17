# Shell

<!-- 按功能分类总结 -->

## Zsh and Oh My Zsh

```shelldoc
## Zsh
sudo apt install zsh
chsh -s $(which zsh)

## Log out and log back in again

## Oh My Zsh
# https://github.com/ohmyzsh/ohmyzsh#basic-installation
```

插件 [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

超实用命令 [`push-line`](https://unix.stackexchange.com/a/74208/415169)

## SSH

### 生成并配置密钥

<https://www.ssh.com/ssh/keygen/>

```shell
# cd ~/.ssh
ssh-keygen                           ## 生成公、私钥，默认分别为 id_rsa.pub 和 id_rsa
ssh-copy-id -i id_rsa.pub user@host  ## 将公钥复制到服务器

ssh -v user@host                     ## 输出调试信息 (verbose)
```

### 配置文件

- 全局 `/etc/ssh/ssh_config`
- 用户 `~/.ssh/config`

比如设置首选公钥验证方式

```ssh-config
## Host <pattern ...>
Host *.ac.uk
#   HostName <the real hostname (or IP) to login to>
    PreferredAuthentications publickey,keyboard-interactive,password,hostbased
#   IdentityFile ~/.ssh/another_id_rsa
#   Port 2333
```

其中 `pattern` 用来匹配 `ssh` 命令中的 `host` 名称，同时设置多个 `pattern` 时用空格隔开

对于每个配置，其取值为最先匹配到的值，所以 `Host *` 这种规则应该放在最后，相当于 fallback

More on <https://linux.die.net/man/5/ssh_config>

## 传文件 `scp`

### Between remote and local

```shelldoc
## scp [-P port] [[<user>@]<host>:]<source_file ...> [[<user>@]<host>:]<target>

## from local to remote
scp foo.txt bar.txt user@host:~
scp {foo,bar}.txt user@host:~
scp *.txt user@host:~

## from remote to local
scp user@host:/remote/folder/\{foo,bar\}.txt local/folder/
```

Glob patterns can be used (e.g. `*.{py,json}` matches all Python and JSON files).

::: tip
Using `\{foo,bar\}.txt` will transfer the files in a single connection/batch (since they'll be expanded on the remote host), while using `{foo,bar}.txt` will open multiple connections, and the overhead is quite noticeable when transferring many files.

```plaintextc
# check with `-o LogLevel=DEBUG`
# \{foo,bar\}
debug1: Sending command: scp -d -f /remote/folder/{foo,bar}.txt
...

# {foo,bar}
debug1: Sending command: scp -d -f /remote/folder/foo.txt
...
debug1: Sending command: scp -d -f /remote/folder/bar.txt
...
```

此外使用引号 `'/remote/folder/{foo,bar}.txt'` 也可以达到和 `\{foo,bar\}.txt` 同样的效果
:::

:::tip
远程设备上的文件路径也可以使用 <kbd>Tab</kbd> 补全，只需配置好身份验证（比如公钥验证）。如前文所提示，记得使用 `\` 转义花括号，否则路径补全可能无法正常工作。
:::

### Between remote hosts

```shell {5}
## host1 → host2
scp user1@host1:~/foo.txt user2@host2:~/somewhere

## host1 → local → host2
scp -3 user1@host1:~/foo.txt user2@host2:~/somewhere
```

With `-3` the file is transferred through the local host, otherwise it would first `ssh` to `host1` and then run `scp` from `host1` to `host2`, which requires you to set up the authorization credentials for `host2` on `host1`.

<https://superuser.com/a/686527/950027>

### Copy a folder (`-r`)

```shell
scp -r user@your.server.example.com:/path/to/foo /home/user/Desktop/
```

**NOTE**: By **not** including the trailing `/` at the end of `foo`, you will move the directory itself (including contents), rather than only the contents of the directory.

`user@your.server.example.com:/path/to/foo` 一般很长，可以考虑在 `.bashrc` 中[定义一个变量](#使用变量)

## `rsync`

[official docs](https://download.samba.org/pub/rsync/rsync.1)

```shelldoc
## rsync [OPTION...] SRC... [DEST]
## rsync [OPTION...] SRC... [USER@]HOST:DEST
rsync -a dir1/ dir2
# -a    ## --archive, syncs recursively, preserves symbolic links, permissions etc.
# -h    ## --human-readable
# -z    ## --compress
# -v    ## --verbose
# -L    ## --copy-links
# --info=progress2   ## progress1, per-file progress; progress2, total transfer progress
# --exclude=PATTERN  ## e.g. "*.json"
# --include=PATTERN
```

## `ls`

```shelldoc
## ls [OPTION...] [FILE or DIR...]
ls -a             ## include entries starting with `.`
ls -l             ## detailed information
ls | head [-<n>]  ## only show first n entries (default 10)
ls | tail         ## ...

## 有些 `.bashrc` 中默认定义了一些 aliases
alias ll='ls -alF'
alias la='ls -A'  ## except for `.` and `..`
alias l='ls -CF'

## 统计文件数量 (wc, word count)
ls | wc -l        ## --lines
```

## 文件权限 `chmod`

Permissions

- `r` read
- `w` write
- `x` execute (if it is a file)

```shellsession
$ ls -l
-rwxr-xr--  1 dgerman  staff  823 Dec 16 15:03 sample_file
││  │  │      │        │      │                └ file/dir name
││  │  │      │        │      └ file size in bytes
││  │  │      │        └ group owner
││  │  │      └ user owner
││  │  └ other permissions (users who are neither the file owner nor in the group)
││  └ group permissions
│└ user permissions
└ regular file (-) or folder (d) etc.
```

```shelldoc
chmod [-R] [references][operator][modes] <file ...>
##     │    │           │         └ r, w, x, etc.
##     │    │           └ +, -, =
##     │    └ u (user), g (group), o (other), a (all)
##     └ --recursive

chmod ug=rx sample_file
```

也可以使用数字直接设置 3 组权限，`r` 为 4，`w` 为 2，`x` 为 1

```shellsession
$ chmod 664 sample_file
$ ls -l sample_file
-rw-rw-r--  1 jsmith programmers 57 Jul  3 10:13  sample_file
```

## `wget`

## 任务管理 `nohup`, `ps`, `kill`, `jobs`, `fg`, `bg`, `disown`

### Start a command in background

```shelldoc
nohup your_command_here > output_file 2>&1 </dev/null &

jobs     ## doesn't work once logged out
ps x

kill %i  ## i is the job id, not pid
kill <pid ...>
```

### Move a foreground job to background

```shelldoc
## press `ctrl-z` to suspend the current running command
jobs      ## check the job id
bg        ## resume the current suspended job in the background
# disown  ## execute this if zsh refuzes to exit when there are running jobs
```

[Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html#Job-Control)

### Check task status

```shelldoc
ps
# p <pid ...>  ## select by process id(s), identical to -p and --pid
# a            ## list all processes with a terminal
# x            ## list all processes owned by you

ps aux | grep <search_str> | grep <another_str>
## pipe into grep or cat in case the output is truncated at the width of the terminal
```

```text {5,7,8,24}
PROCESS STATE CODES
       Here are the different values that the s, stat and state output specifiers
       (header "STAT" or "S") will display to describe the state of a process:

               D    uninterruptible sleep (usually IO)
               I    Idle kernel thread
               R    running or runnable (on run queue)
               S    interruptible sleep (waiting for an event to complete)
               T    stopped by job control signal
               t    stopped by debugger during the tracing
               W    paging (not valid since the 2.6.xx kernel)
               X    dead (should never be seen)
               Z    defunct ("zombie") process, terminated but not reaped by its
                    parent

       For BSD formats and when the stat keyword is used, additional characters may
       be displayed:

               <    high-priority (not nice to other users)
               N    low-priority (nice to other users)
               L    has pages locked into memory (for real-time and custom IO)
               s    is a session leader
               l    is multi-threaded (using CLONE_THREAD, like NPTL pthreads do)
               +    is in the foreground process group
```

## 别名 `alias`, `type`

```shell
## append the following line to `~/.bashrc` (or `~/.bash_aliases`)
alias cmd='your command'
```

```shellsession
$ type cmd
cmd is aliased to `your command'
$ unalias cmd
$ type cmd
type: cmd: not found
```

## `tee`

复制输出到指定文件（不影响终端的输出）

```shell
python train.py 2>&1 | tee out.txt
```

实践经验：注意使用 `2>&1` 将 stderr 也保存下来

## `find`

```shell
find . -name '*.ipynb'

## case insensitive
find . -iname 'foo*'

## max depth
find . -maxdepth 3 -name '*bar'
```

> GNU **find** searches the directory tree rooted at each given file name by _evaluating the given expression from left to right_, according to the rules of precedence (see section OPERATORS), until the outcome is known (the left hand side is false for and operations, true for or), at which point **find** moves on to the next file name.

### 示例：列出符合条件的文件名

列出子目录下的文件，每行开头加上 `-i ` 然后合并为一行，可以用作 `ffmpeg` 的输入

```shell
input_str=$(find . -path './results/2023*/out.mp4' | sort -n | sed 's/^/-i /' | paste -sd ' ')
```

### 示例：压缩特定文件

排除多个目录，并使用多个筛选条件，最后压缩成 zip 文件

```shell
find . \( -path './log' -or -path './video*' \) -prune -or \
    -type f \( -name '*.py' -or -name '*.yaml' \) -exec zip out.zip {} +
```

**注意** 如果搜索的路径是 `.`，那么 `-path` 也需要使用 `.` 开头（如 `./log`），严格匹配

## 文件压缩、解压 `zip`, `tar`

### zip

压缩

```shelldoc
zip -r output.zip <file ...> [-x <file ...>]
## <file> can be file or dir
# -r <zip_file> <file ...>  ## --recurse-paths
# -u <zip_file> <file ...>  ## update the files in the zip archive
# -d <zip_file> <file ...>  ## delete the files from the zip archive
# -x <file ...>             ## exclude these files
```

更多压缩参数

```shelldoc
# -y  ## store symbolic links as is, instead of the referenced file

# -0  ## store only (no compression)  ---  30s for 1.6G jpg files
# -1  ## compress faster              ---  70s for 1.6G jpg files
# -9  ## compress better
```

解压

```shelldoc
unzip <zip_file>
# -d <dir>  ## optional directory to which to extract files
```

查看压缩包的内容

```shelldoc
zip -sf file.zip | grep -v '/.'
# -sf <zip_file>            ## --show-files
## show the files that would be operated on, without actually processing them
## use `grep -v '/.'` to show only the first-level files
## use `/.*/.` to also include the second level
```

示例

```shelldoc
zip -R output.zip '*.py' '*.json' -x 'results*/*' -x 'log/*'
```

其中 `-R` 为 `--recurse-patterns`。被 `-x` 排除的目录仍然会被扫描，想避免则可以使用 [`find`](#find) 命令配合 `-prune`，`-exec zip` 等参数来实现筛选压缩的功能

### tar

压缩

```shelldoc
tar -czvf archive.tar.gz <file ...> [--exclude=<pattern ...>]
# -c  ## create an archive
# -z  ## compress the archive with gzip
# -v  ## verbose
# -f  ## allow to specifiy the filename of the archive
# --exclude        ## can be used multiple times
```

解压

```shelldoc
tar -xzvf archive.tar.gz --one-top-level[=<dir>]
# -x  ## extract an archive
# --one-top-level  ## extract all files into <dir>,
                   ## or by default a new folder with the name of the archive
```

查看压缩包内容

```shelldoc
tar -tvf file.tar
tar -ztvf file.tar.gz
# -t  ## list the contents of an archive
## use above `--exclude` option to show only first level (`*/*`) or second level (`*/*/*`)
```

## 文件大小与硬盘占用 `du`, `df`

```shelldoc
du -ah [-d <max_depth>] [--exclude <relative_path>] [path]
# -a, --all
# -h, --human-readable
# -d, --max-depth

du -ah -d 1 | sort -rh | head
## pipe the result of `du` to `sort` and take the top-10 results
# -r, reverse order
# -h, --human-numeric-sort

df -lh -x squashfs -x tmpfs -x devtmpfs  ## 忽略不关心的文件系统
```

或者使用交互式的查看工具 `ncdu`（用 `apt` 安装）

```shelldoc
ncdu / --exclude home --exclude media
## 查看根目录硬盘空间占用，home 和 media 除外
```

## Command history

- press <kbd>Ctrl</kbd> + <kbd>R</kbd> to start search
- press <kbd>Ctrl</kbd> + <kbd>R</kbd> again to see the next result
- press <kbd>Tab</kbd> to accept a result

[How to use bash history commands](https://www.digitalocean.com/community/tutorials/how-to-use-bash-history-commands-and-expansions-on-a-linux-vps#searching-through-bash-history)

## 使用变量

```shellsession
## define a variable
$ a="world"        ## NOTE whitespace is not allowed before/after `=`
$ echo hello $a    ## use directly
hello world
$ echo "hello $a"  ## inside a double-quoted string
hello world
$ echo 'hello $a'  ## single-quoted strings are interpreted literally
hello $a
```

```shelldoc
## in the `.bashrc` file
export rds='username@bluebear.bham.ac.uk:/rds'

## use in a command
scp $rds/path/to/foo .
## `scp username@bluebear.bham.ac.uk:/rds/path/to/foo .`
```

<http://www.compciv.org/topics/bash/variables-and-substitution/>

定义变量前加上 export 则会定义为环境变量

更多操作见 <https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html>

## `split`

```shell
split -b 1024m file prefix
cat filea fileb filec > file
```

<script>
export default {
    mounted() {
        const hash = document.location.hash;
        if (hash.length > 1) {
            const id = decodeURI(hash.substring(1));
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView();
                }, 500);
            }
        }
    }
}
</script>
