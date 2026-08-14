import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "products.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};
const addToCart = async (product) => {
  const myCart = await getCart();
  const isFound = myCart.find((item) => item.id === product.id);
  if (isFound) {
    isFound.quantity += product.quantity;
  } else {
    myCart.push(product);
  }
  await saveCart(myCart);
  console.log(`Product added to cart successfully! with id ${product.id}`);
};
const showCart = async () => {
  const myCart = await getCart();
  console.table(myCart);
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
        await showCart();
        break;
      case "2":
        let data = await cin.question(
          "Enter the id , name , price , quantity: ",
        );
        const [id, name, price, quantity] = data
          .split(",")
          .map((item) => item.trim());
        const product = {
          id: Number(id),
          name,
          price: Number(price),
          quantity: Number(quantity),
        };
        await addToCart(product);

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
