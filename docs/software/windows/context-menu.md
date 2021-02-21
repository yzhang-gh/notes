# 自定义右键菜单 (Custom Context Menu)

最常用的右键菜单（资源管理器某个文件夹空白处右键）在注册表中的位置

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

其他可能出现的位置

```
HKEY_CLASSES_ROOT\*\shell\
HKEY_CLASSES_ROOT\*\shellex\ContextMenuHandlers\

HKEY_CLASSES_ROOT\Folder\shell\
HKEY_CLASSES_ROOT\Directory\shell\
HKEY_CLASSES_ROOT\AllFilesystemObjects\shell\
; And corresponding `shellex` items

HKEY_CURRENT_USER\SOFTWARE\Classes\directory\background\shell\
```

`shell` 可以理解为静态的菜单项，`shellex` (shell extension) 则可以提供动态的功能。两者可以分别使用下面的工具查看

- [ShellMenuView](https://www.nirsoft.net/utils/shell_menu_view.html)
- [ShellExView](https://www.nirsoft.net/utils/shexview.html)
