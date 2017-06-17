// Shopping Cart functions  


var shoppingCart = {};
shoppingCart.cart = [];
shoppingCart.Item = function(name, price, count) {
    this.name = name
    this.price = price
    this.count = count
};



shoppingCart.addItemToCart = function (name, price, count) {
    for (var i in this.cart) {
        if (this.cart[i].name === name) {
            this.cart[i].count += count;
            //cart[i].count ++;
            this.saveCart();
            return;
        }
    }
    var item = new this.Item(name, price, count);
    this.cart.push(item);
    this.saveCart();
};

shoppingCart.setCountForItem = function (name,count)
{
    for (var i in this.cart)
    {
        if (this.cart[i].name === name)
        {
            this.cart[i].count = count;
            break;
        }
    }
    this.saveCart();
};

shoppingCart.removeItemFromCart = function (name) 
{

    for (var i in this.cart) 
    {
        if (this.cart[i].name === name) 
        { 

            this.cart[i].count--;
            if (this.cart[i].count === 0) 
            {
                this.cart.splice(i, 1);
            }
            break;
        }
    }
    this.saveCart();            
};

shoppingCart.removeItemFromCartAll = function (name) {
    for (var i in this.cart) {
        if (this.cart[i].name === name) {
            this.cart.splice(i, 1);
            break;
        }
    }
    this.saveCart();
};

shoppingCart.clearCart = function () {
    this.cart = [];
    this.saveCart();
    displayCart();
};


shoppingCart.countCart = function () {
    var totalCount = 0;
    for (var i in this.cart) 
    {
        totalCount += this.cart[i].count;
    }
    return totalCount;

};

shoppingCart.totalCart = function () {
    var totalCost = 0;
    for (var i in this.cart) {                

        totalCost += this.cart[i].price * this.cart[i].count;

    }


    return totalCost.toFixed(2);
};



shoppingCart.listCart = function () 
{
    var cartCopy = [];
    for (var i in this.cart) 
    {
        var item = this.cart[i];
        var itemCopy = {};
        for (var p in item) 
        {
            itemCopy[p] = item[p];
        }
        itemCopy.total = (item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

shoppingCart.saveCart = function () {
    localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
}

shoppingCart.loadCart = function () {
    this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

shoppingCart.loadCart();


//loadCart();

//removeItemFromCart();

/*
addItemToCart("Satay",11.90,1);
addItemToCart("Rendang",18.99,1);
addItemToCart("Rendang",18.99,1);
addItemToCart("Rendang",18.99,1);
addItemToCart("Gulai",18.90,1);
addItemToCart("Satay",11.90,3);
addItemToCart("Satay",11.90,5);
addItemToCart("Satay",11.90,5);
addItemToCart("Curry",17.90,3);
addItemToCart("Dosa",17.90,2);
*/
