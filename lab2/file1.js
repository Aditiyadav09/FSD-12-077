import {writeFile, appendFile} from "fs/promises";

//await writeFile("hello.txt", "All is well");

await appendFile("hello.txt", "\nFS is much easy than others");