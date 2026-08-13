# File System (FS Module)
FS module directly communicate with operating system rather than browser the common operations on a file or a folders are 
-  Files-> writeFile ,readFile ,appendFile
-  Folder-> Mkdir/MD , rmdir/rm ,readdir
-  File Metadata -> stat , lstat , rstat
-  Watch -> watch, unwatch
-  Stream -> readStream() , writeStream()

All functions are promise so it must be called with await keyword.
### apendFile()
it is to add
### writeFile()