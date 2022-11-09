import process from "node:process";
import vendingMachine from "./vending-machine.js";

// console.log(process.argv)

let arg = null;
let cost = null;
let payment = null;

//assigns cost and and payment in pennies
while ((arg = process.argv.shift()) != null) {
  if (arg == "--item-cost") {
    const costInput = process.argv.shift();
    cost = Math.floor(Number(costInput || "0") * 100);
  } else if (arg == "--payment") {
    const paymentInput = process.argv.shift();
    payment = Math.floor(Number(paymentInput || "0") * 100);
  }
}

console.error("--item-cost", cost);
console.error("--payment", payment);

// Narrow cost to a number.
if (cost == null) {
  console.error("--item-cost is required but not provided. Exiting.");
  process.exit(1);
}
if (payment == null) {
  console.error("--payment is required but not provided. Exiting.");
  process.exit(2);
}
//we don't want to deal in negatives so we'll place a guard for that just in case
if (payment < cost) {
  console.error("--insufficient funds provided. Exiting.");
  process.exit(3);
}

vendingMachine(cost, payment);