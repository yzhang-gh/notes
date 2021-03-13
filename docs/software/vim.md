# Vim

::: callout
Just for simple editing, otherwise why not use VS Code ;)
:::

Press <kbd>.</kbd> to repeat last change，给多行加 / 去注释的时候很实用

---

## Moving cursor

| Key                                       | Operation                                                    |
| ----------------------------------------- | ------------------------------------------------------------ |
| <kbd>g</kbd><kbd>g</kbd>                  | go to start of the **file**                                  |
| <kbd>G</kbd>                              | go to end of the file                                        |
| <kbd>0</kbd>/<kbd>Home</kbd>              | go to first char in the **line**                             |
| <kbd>^</kbd>                              | go to first non-blank char in the line                       |
| <kbd>$</kbd>/<kbd>End</kbd>               | go to last char in the line (just like in RegExp)            |
| <kbd>Ctrl</kbd>+<kbd>f</kbd>/<kbd>d</kbd> | next page/half **page**                                      |
| <kbd>Ctrl</kbd>+<kbd>b</kbd>/<kbd>u</kbd> | previous page/half page                                      |
| <kbd>w</kbd>                              | next **word** (<kbd>d</kbd><kbd>w</kbd> delete current word) |
| <kbd>b</kbd>                              | previous word                                                |
| <kbd>f</kbd><kbd>{char}</kbd>             | jump to next `{char}` (on this line)                         |

<kbd>;</kbd> repeat last <kbd>f</kbd> (or <kbd>F/t/T</kbd>) operation

## Copy and paste

| Key                            | Operation                                               |
| ------------------------------ | ------------------------------------------------------- |
| <kbd>y</kbd><kbd>y</kbd>       | copy the line (mnemonic: **y**ank)                      |
| <kbd>d</kbd><kbd>d</kbd>       | **d**elete the line (behaves like a cut operation)      |
| <kbd>p</kbd>                   | **p**aste after the current line                        |
| <kbd>P</kbd>                   | **p**aste before the current line                       |
| <kbd>dt</kbd><kbd>{char}</kbd> | delete up **t**o this `{char}` (excluding) on this line |

<kbd>yj</kbd> copy 2 lines, <kbd>y2k</kbd> copy 3 lines (which includes 2 lines above)
<kbd>df</kbd><kbd>{char}</kbd> ~ (including)

## Replace/Overtype

| Key           | Operation                                                          |
| ------------- | ------------------------------------------------------------------ |
| <kbd>r</kbd>  | replace current char (in-place)                                    |
| <kbd>cw</kbd> | replace current word (delete current word and enter *insert* mode) |
| <kbd>R</kbd>  | enter *replace* mode                                               |

<kbd>x</kbd> delete current char

## Search

| Key                       | Operation                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <kbd>/</kbd>              | enter *search* mode, type your search string, press <kbd>Enter</kbd> to confirm or <kbd>ESC</kbd> to cancel |
| <kbd>n</kbd>/<kbd>N</kbd> | go to next/previous occurrence (similar to <kbd>F3</kbd>/<kbd>Shift</kbd>+<kbd>F3</kbd> in most IDEs)       |

Type `:noh` to turn off highlighting until the next search

## More

Vim online documentation: <https://vimhelp.org/>
