# Shell

## SSH

```shell
# cd ~/.ssh
ssh-keygen
ssh-copy-id -i id_rsa.pub user@host
```

https://www.ssh.com/ssh/keygen/

## 传文件 `scp`

- **Copy multiple files from remote to local**

  ```shell
  scp username@remote.edu:/some/remote/directory/\{a,b,c\} ./
  ```

  Glob patterns can be used (e.g. `*.{py,json}` for all Python and JSON files).

  **NOTE**: using `\{a,b,c\}` will transfer the files in a single connection/batch (since they'll be expanded on the remote host), while using `{a,b,c}` will open multiple connections, and the overhead is quite noticeable when transferring many files

- **Copy multiple files from local to remote**

  ```shell
  scp foo.txt bar.txt username@remotehost.edu:~
  scp {foo,bar}.txt username@remotehost.edu:~
  scp *.txt username@remotehost.edu:~
  ```

- **Copy a folder**

  ```shell
  scp -r user@your.server.example.com:/path/to/foo /home/user/Desktop/
  ```

  By not including the trailing `/` at the end of `foo`, you will move the directory itself (including contents), rather than only the contents of the directory.

  <https://stackoverflow.com/a/21691584/8682688>
  <https://stackoverflow.com/a/11304926/8682688>

<!-- 按功能总结 -->

🚧

## `ls -a`, `ls -l -h`

## `wget`

## `nohup`, `ps`, `kill`

```
nohup your_command_here > output_file 2>&1 </dev/null &

jobs

kill %i
```

https://tecadmin.net/run-command-in-background-on-linux/

## 别名 `alias`, `type`

```
# Append the following line to `~/.bashrc`
alias name='your command'

type name
# -> name is aliased to `your command'
```

## Command history

<kbd>Ctrl</kbd> + <kbd>R</kbd>

https://www.digitalocean.com/community/tutorials/how-to-use-bash-history-commands-and-expansions-on-a-linux-vps#searching-through-bash-history
