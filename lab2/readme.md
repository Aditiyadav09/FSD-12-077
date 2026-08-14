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
## CRUD OPERATIONS
C=Create
R=Retrive
U=Update
D=Delete


assume we are making a cart related project

1. user can add any product (id,name,price,quantity)into cart

2. user can see all the items of cart

3. user can remove items from cart

4. user can also update quantity of products

5. all the items should be stored after termination of project