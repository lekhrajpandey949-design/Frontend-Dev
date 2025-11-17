const cart = [ 
{ item: "Laptop", category: "electronics", price: 45000 }, { item: "Shoes", category: "fashion", price: 2500 }, { item: "Book", category: "education", price: 600 } ];

let total = 0;
for(let i=0;i<cart.length;i++){
    let price = cart[i].price;

    if(cart[i].category === "electronics"){
        price -= price * 0.10;
    }
    else if(cart[i].category === "fashion"){
        price -= price * 0.05;
    }

    total = total + price;
}

if(total>5000){
    total -= total * 0.05;
}

console.log("Final cart total:",total);