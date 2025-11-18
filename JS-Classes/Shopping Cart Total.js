class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    applyCoupon(code) {
        const reg = /^(SAVE|DISC)\d{2}$/;
        if (!reg.test(code)) return "Invalid Coupon";

        const discount = parseInt(code.match(/\d+/)[0]);
        const total = this.getTotal();
        return total - (total * discount / 100);
    }
}

const cart = new Cart();
cart.addItem("Shoes", 1500, 2);
cart.addItem("Watch", 2000, 1);

console.log("Total:", cart.getTotal());
console.log("Discounted:", cart.applyCoupon("SAVE20"));
