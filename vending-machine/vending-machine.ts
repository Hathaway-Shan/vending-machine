// Implement your vending machine here!

export default function vendingMachine(cost: number, payment: number) {
  //we'll need to provide counts of quarters, dimes, nickles, and pennies so lets make variables for those
  let quarters = 0;
  let dimes = 0;
  let nickles = 0;
  let pennies = 0;

  //we will also need a variable that stores the amount of change which we can get by subtracting payment from cost
  let change = (payment -= cost);

  //lets account for different use case values of change starting with the easiest 0
  if (change === 0) {
    return;
  }

  /*
  there's probably a fancy way to get everything we need with forEach(). But for the data shape I need I can just
  increment the coin variables with multiple while loops and return those values with less optimal more readable syntax
  
  **UPDATE** this method also fails when tested with .41 cents so it's back to the drawing board.

  */
  // while (change <= 25) {
  //   change -= 25;
  //   quarters++;
  // }
  // while (change >= 10) {
  //   change -= 10;
  //   dimes++;
  // }
  // while (change > 5) {
  //   change -= 5;
  //   nickles++;
  // }
  // while (change > 0) {
  //   change -= 1;
  //   nickles++;
  // }

  /*
  since the while loop approach failed we'll create a function that uses division and Math.floor 
  to return the coin totals and then run it on each coin value, this is also probably more scalable
  if we wanted do things like add additional currencies over time.
  */
  const getNumberOfCoins = (coin: number) => {
    let numberOfCoins = Math.floor(change / coin);
    change = change - numberOfCoins * coin;
    return numberOfCoins;
  };

  //here we call our new function for the value of each coin variable we declared above order is important
  //ideally this would get broken out into it's own function as well but I have tests to write.
  quarters = getNumberOfCoins(25);
  dimes = getNumberOfCoins(10);
  nickles = getNumberOfCoins(5);
  pennies = getNumberOfCoins(1);

  //now that we have all our information we just need to return it in the assigned shape with a tiny bit of regex
  let result = `Quarters: ${quarters}\nDimes: ${dimes}\nNickles: ${nickles}\nPennies: ${pennies}`;

  return result;
}
