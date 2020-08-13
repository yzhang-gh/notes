# Vim

No fancy tips, just for simple editing

## Moving cursor

| Key                      | Operation           |
| ------------------------ | ------------------- |
| <kbd>g</kbd><kbd>g</kbd> | go to start of flie |
| <kbd>G</kbd>             | go to end of flie   |
| <kbd>ctrl f</kbd>        | next page           |
| <kbd>ctrl b</kbd>        | previous page       |
| <kbd>w</kbd>             | next word           |
| <kbd>b</kbd>             | previous word       |

## Copy and paste

| Key                      | Operation                                          |
| ------------------------ | -------------------------------------------------- |
| <kbd>y</kbd><kbd>y</kbd> | copy the line (mnemonic: **y**ank)                 |
| <kbd>d</kbd><kbd>d</kbd> | **d**elete the line (behaves like a cut operation) |
| <kbd>p</kbd>             | **p**aste after the current line                   |
| <kbd>P</kbd>             | **p**aste before the current line                  |

<kbd>yj</kbd> copy 2 lines, <kbd>y2k</kbd> copy 3 lines (which includes 2 lines above)

## Replace/Overtype

| Key           | Operation                                                          |
| ------------- | ------------------------------------------------------------------ |
| <kbd>r</kbd>  | replace current char (in-place)                                    |
| <kbd>cw</kbd> | replace current word (delete current word and enter *insert* mode) |
| <kbd>R</kbd>  | enter *replace* mode                                               |
