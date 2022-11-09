import { test, expect } from "@jest/globals";

import vendingMachine from "./vending-machine";

test("giving vendingMachine 1.41 payment for 1.00 cost returns 1 of each coin", () => {
  expect(vendingMachine(100, 141)).toEqual(
    "Quarters: 1\nDimes: 1\nNickles: 1\nPennies: 1"
  );
});
