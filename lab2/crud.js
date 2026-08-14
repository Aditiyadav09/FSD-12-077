import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "products.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(Mycart, null, 2));
};

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    console.log("Welcome to flipkart 🛒");
    console.log("1.............. Show Cart");
    console.log("2.............. Add Product");
    console.log("3.............. Remove product");
    console.log("4.............. Update quantity");
    console.log("5.............. Exit");
    choice = await cin.question("Enter your choice : ");
    switch (choice) {
      case "1":
        console.log("Show the Products");
        break;
      case "2":
        console.log("Add the Product");
        break;
      case "3":
        console.log("Remove the Product");
        break;
      case "4":
        console.log("Update the Product Quantity");
        break;
      case "5":
        console.log("See yaaaaa👋");
        break;
      default:
        console.log("Invalid choice. Please try again.😉");
    }
  } while (choice != 5);
  cin.close();
};

main();
