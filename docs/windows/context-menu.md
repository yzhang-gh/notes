# 自定义右键菜单 (Custom Context Menu)

最常用的右键菜单

```
HKEY_CLASSES_ROOT\Directory\Background\shell\
```

格式例如

```
HKEY_CLASSES_ROOT\Directory\Background\shell\
└── VSCode
    │   (Default):      Open with Code
    │   Icon:           [path/to/vscode]
    └── command
            (Default):  "[path/to/vscode]" "%V"
```

<details>
<summary>其他位置的右键菜单</summary>

```
HKEY_CLASSES_ROOT\Folder\shell\
HKEY_CLASSES_ROOT\Directory\shell\
HKEY_CLASSES_ROOT\AllFilesystemObjects\shell\
```

</details>

---

仅对当前用户

```
HKEY_CURRENT_USER\SOFTWARE\Classes\directory\background\shell\
```
