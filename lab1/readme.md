# EventLoop
JS is synchronous and
single threaded bydefault
## There can be async behaviour
- with BrowserAPI-
setTimeout, setInterval,
setImmediate,nextTick
- with promise
- with event handlers
## Promise
a function not executed immediatly but it must be executed after a while, it has some status during the execution .At final it may resolve ()=>success or reject()=> unsuccess
## Call back function 
that pass as argument or the parameter to another function.
### Modern JavaScript is divided into two categories 
- 1st - Common JS (.cjs)-> supports OPPS-> require
   - priority (nextTick, Promise, setImmediate/setTimeout)
- 2nd- ModuleJS (.mjs)-> follow modular approach -> import
   - priority (Promise, nextTick, setImmediate/setTimeout)