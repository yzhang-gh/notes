# Shell

## 传文件 `scp`

- **Copy multiple files from remote to local**

  ```shell
  scp username@remote.edu:/some/remote/directory/\{a,b,c\} ./
  ```

  Note: using `\{a,b,c\}` will transfer the files in a single connection/batch (since they'll be expanded on the remote host), while using `{a,b,c}` will open multiple connections, and the overhead is quite noticeable when transferring many files

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

  By not including the trailing `/` at the end of foo, you will move the directory itself (including contents), rather than only the contents of the directory.

  <https://stackoverflow.com/a/21691584/8682688>
  <https://stackoverflow.com/a/11304926/8682688>

<!-- 按功能总结 -->

🚧

## `ls -a`, `ls -l -h`

## `wget`

## `nohup`, `ps`, `kill`

```
nohup ... > foo.out 2>&1 </dev/null &

jobs

kill %i
```

https://tecadmin.net/run-command-in-background-on-linux/

## SSH

https://www.ssh.com/ssh/keygen/

## alias, `type`
