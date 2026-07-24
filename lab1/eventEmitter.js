import{ EventEmitter} from "node:events";
const login = (name) => {
    console.log(`${name} logged in`);
};

const start = () => {
    console.log("System starts");

};
const working = (name) => {
    console.log(`${name} add items to cart`);
};
const checkout = (name) => {
    console.log(`${name} logged out`);
};

const task = new EventEmitter();
task.once("greet",start);

task.on("greet",login);
task.on("greet",working);
task.once("exit", () => {
  console.log("System shutting down");
});
task.emit("greet", "Aditi Yadav");
task.emit("greet","Mudit");
task.emit("greet","Manya")
