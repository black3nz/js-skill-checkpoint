// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;

inventory.orange = { price: 20, quantity: 300};

let totalValue = 0;
for (let fruit in inventory) {
  totalValue = totalValue + (inventory[fruit].price * inventory[fruit].quantity)
}

console.log(`Total inventory value: ${totalValue} baht`);