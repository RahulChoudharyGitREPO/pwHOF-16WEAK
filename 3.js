const exchangeRate = 80;

const storeInventory = [
  { item: "Item 1", priceUSD: 10 },
  { item: "Item 2", priceUSD: 25 },
  { item: "Item 3", priceUSD: 40 },
  { item: "Item 4", priceUSD: 15 },
];

const convertedInventory = storeInventory.map((item) => ({
  ...item,
  priceINR: item.priceUSD * exchangeRate,
}));

console.log("Original Inventory:");
console.log(storeInventory);

console.log("\nConverted Inventory (Prices in INR):");
console.log(convertedInventory);
