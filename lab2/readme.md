# File System (FS Module)
FS module directly communicate with operating system rather than browser the common operations on a file or a folders are 
-  Files-> writeFile ,readFile ,appendFile
-  Folder-> Mkdir/MD , rmdir/rm ,readdir
-  File Metadata -> stat , lstat , rstat
-  Watch -> watch, unwatch
-  Stream -> readStream() , writeStream()

All functions are promise so it must be called with await keyword.
### apendFile()
appendFile() in Node.js is a function used to add new data to the end of an existing file without overwriting its previous content.

In simple words: AppendFile = add content at the end of a file.
### writeFile()
writeFile() in Node.js is a function used to write data into a file. If the file already contains data, writeFile() overwrites the existing content.

In simple words: writeFile() = write or replace content in a file.