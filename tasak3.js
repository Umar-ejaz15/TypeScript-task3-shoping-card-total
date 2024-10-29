"use strict";
// Task 3: TypeScript Shopping Cart
const obj = [
    {
        name: "Product 1",
        price: 10,
        category: "Electronics",
    },
    {
        name: "Product 2",
        price: 20,
        category: "Clothing",
    },
    {
        name: "Product 3",
        price: 30,
        category: "Electronics",
    },
    {
        name: "Product 4",
        price: 40,
        category: "Clothing",
    },
];
function totalPrice(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}
console.log(totalPrice(obj));
