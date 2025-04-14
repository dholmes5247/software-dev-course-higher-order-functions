/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/
function filterProducts(products, callback) { // Higher Order Function accepting Array (prodcuts) and Callback Fx
  return products.filter(callback); // applying callback using .filter method
}
const filterAvailability = (product) => product.inStock; // Callback function to filter by inStock
const filterByPrice = (product) => product.price < 550; //  Callback filtering by price

console.log("Available Products: ", filterProducts(products, filterAvailability));
console.log("Affordable Products: ", filterProducts(products, filterByPrice));

/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/

const productNamesUppercase = products.map(product => product.name.toUpperCase());
console.log("upperCase Product Names: ", productNamesUppercase);

/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage
- Returns a function that takes a product and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` that takes `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `map()` call to apply discounts to all products.
*/
function applyDiscount(discountPercent) {
  return function(product) {
    const discount = (product.price * discountPercent) / 100;
    const discountedPrice = product.price - discount;
    return { ...product, price: discountedPrice};
  }
}
const discountedProducts = products.map(applyDiscount(25)); // Applying discount of 25%
console.log("Discounted Products: ", discountedProducts);

/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/
// Step 1: Use `reduce()` on the products array
const totalInventoryValue = products.reduce((total, product) => {
  // Add the price to the total only if the product is in stock
  if (product.inStock) {
      return total + product.price;
  } else {
      return total;
  }
}, 0); // Set the initial value of total to 0

// Log the result
console.log("Total Inventory Value:", totalInventoryValue);

// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Filtered products:", ...);
// console.log("Uppercased names:", ...);
// console.log("Discounted products:", ...);
// console.log("Total value in stock:", ...);
