# Vim

?> No fancy tips, just for simple editing (otherwise use VSCode instead!)

## Moving cursor

| Key                          | Operation                                                |
| ---------------------------- | -------------------------------------------------------- |
| <kbd>g</kbd><kbd>g</kbd>     | go to start of file                                      |
| <kbd>G</kbd>                 | go to end of file                                        |
| <kbd>Ctrl</kbd>+<kbd>f</kbd> | next page                                                |
| <kbd>Ctrl</kbd>+<kbd>b</kbd> | previous page                                            |
| <kbd>w</kbd>                 | next word (<kbd>d</kbd><kbd>w</kbd> delete current word) |
| <kbd>b</kbd>                 | previous word                                            |

## Copy and paste

| Key                      | Operation                                          |
| ------------------------ | -------------------------------------------------- |
| <kbd>y</kbd><kbd>y</kbd> | copy the line (mnemonic: **y**ank)                 |
| <kbd>d</kbd><kbd>d</kbd> | **d**elete the line (behaves like a cut operation) |
| <kbd>p</kbd>             | **p**aste after the current line                   |
| <kbd>P</kbd>             | **p**aste before the current line                  |

<kbd>yj</kbd> copy 2 lines, <kbd>y2k</kbd> copy 3 lines (which includes 2 lines above)
<kbd>d4l</kbd> delete 4 chars rightwards (including current char)

## Replace/Overtype

| Key           | Operation                                                          |
| ------------- | ------------------------------------------------------------------ |
| <kbd>r</kbd>  | replace current char (in-place)                                    |
| <kbd>cw</kbd> | replace current word (delete current word and enter *insert* mode) |
| <kbd>R</kbd>  | enter *replace* mode                                               |

<kbd>x</kbd> to delete current char

## Search

| Key                       | Operation                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <kbd>/</kbd>              | enter *search* mode, type your search string, press <kbd>Enter</kbd> to confirm or <kbd>ESC</kbd> to cancel |
| <kbd>n</kbd>/<kbd>N</kbd> | go to next/previous occurrence (similar to <kbd>F3</kbd>/<kbd>Shift</kbd>+<kbd>F3</kbd> in most IDEs)       |

Type `:noh` to turn off highlighting until the next search
