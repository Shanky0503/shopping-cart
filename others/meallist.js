var mealList ={};
mealList.starters =[];
mealList.mains =[];
mealList.drinks =[];

mealList.Item = function(name,price,category)
{
    this.name = name;
    this.price = price;
    this.category = category;
};

mealList.addItem = function (name,price,category)
{
    var item = new mealList.Item(name, price, category);
    if (category === "starters")
    {
        this.starters.push(item);  
    }
    if (category === "mains")
    {
        this.mains.push(item);  
    }
    if  (category === "drinks")
    {
        this.drinks.push(item);    
    }
};

mealList.listStarters = function()
{
    var startersCopy = [];
    for (var i in this.starters) 
    {
        var item = this.starters[i];
        var itemCopy = {};
        for (var p in item) 
        {
            itemCopy[p] = item[p];
        }
        itemCopy.total = (item.price * item.count).toFixed(2);
        startersCopy.push(itemCopy);
    }
    return startersCopy;
}

mealList.listMains = function()
{
    var mainsCopy = [];
    for (var i in this.mains) 
    {
        var item = this.mains[i];
        var itemCopy = {};
        for (var p in item) 
        {
            itemCopy[p] = item[p];
        }
        itemCopy.total = (item.price * item.count).toFixed(2);
        mainsCopy.push(itemCopy);
    }
    return mainsCopy;
}

mealList.listDrinks = function()
{
    var drinksCopy = [];
    for (var i in this.drinks) 
    {
        var item = this.drinks[i];
        var itemCopy = {};
        for (var p in item) 
        {
            itemCopy[p] = item[p];
        }
        itemCopy.total = (item.price * item.count).toFixed(2);
        drinksCopy.push(itemCopy);
    }
    return drinksCopy;
}

mealList.addItem("Satay",11.90,"starters");
mealList.addItem("Curry Puff",9.00,"starters");
mealList.addItem("Rojak Mamak",12.90,"starters");
mealList.addItem("Deep Fried Calamari",12.90,"starters");
mealList.addItem("Spring Rolls",7.50,"starters");
mealList.addItem("Tamarind Tiger Prawn",16.90,"starters");
mealList.addItem("Chicken Salad",10.90,"starters");
mealList.addItem("Tom Yum Ayam",11.90,"starters");
mealList.addItem("Mixed Platter",30.00,"starters");


mealList.addItem("Chicken Curry Corner",18.90,"mains");
mealList.addItem("Lamb Curry Corner",18.90,"mains");
mealList.addItem("Fish and Okra Gulai",21.90,"mains");
mealList.addItem("Prawn Gulai",21.90,"mains");
mealList.addItem("Chicken Sambal",18.90,"mains");
mealList.addItem("Fish Sambal",21.90,"mains");
mealList.addItem("Prawn Sambal",21.90,"mains");
mealList.addItem("Squid Sambal",21.90,"mains");
mealList.addItem("Beef Rendang",18.90,"mains");
mealList.addItem("Lamb Rendang",18.90,"mains");
mealList.addItem("Chicken Rendang",18.90,"mains");
mealList.addItem("Chicken Masak Lemak",18.90,"mains");
mealList.addItem("Fish Masak Lemak",21.90,"mains");
mealList.addItem("Vege Masak Lemak",15.90,"mains");
mealList.addItem("Chicken Nasi Lemak",19.90,"mains");
mealList.addItem("Beef Nasi Lemak",19.90,"mains");
mealList.addItem("Chicken Kurma",18.90,"mains");
mealList.addItem("Lamb Kurma",18.90,"mains");
mealList.addItem("Vege Dhal Curry",15.90,"mains");
mealList.addItem("Gado Gado",15.90,"mains");
mealList.addItem("Chicken Stir Fry",18.90,"mains");
mealList.addItem("Beef Stir Fry",18.90,"mains");
mealList.addItem("Prawn Stir Fry",21.90,"mains");
mealList.addItem("Calamari Stir Fry",21.90,"mains");
mealList.addItem("Vege Stir Fry",15.90,"mains");
mealList.addItem("Fish Perathal",21.90,"mains");
mealList.addItem("Chicken Perathal",18.90,"mains");
mealList.addItem("Lamb Perathal",18.90,"mains");
mealList.addItem("Butter Chicken",18.90,"mains");
mealList.addItem("Chicken Dosa",17.90,"mains");
mealList.addItem("Lamb Dosa",17.90,"mains");
mealList.addItem("Masala Dosa",15.90,"mains");
mealList.addItem("Plain Dosa",8.00,"mains");
mealList.addItem("Mee Goreng Mamak",17.90,"mains");
mealList.addItem("Curry Laksa",17.90,"mains");
mealList.addItem("Mee Goreng",17.90,"mains");
mealList.addItem("Nasi Goreng",17.90,"mains");
mealList.addItem("Chicken Murtabak",18.90,"mains");
mealList.addItem("Plain Roti",3.00,"mains");
mealList.addItem("Garlic Roti",3.50,"mains");
mealList.addItem("Egg and Onion Roti",4.50,"mains");
mealList.addItem("Coconut Rice",2.50,"mains");
mealList.addItem("Pappadoms",1.50,"mains");
mealList.addItem("Peanut Sauce",3.00,"mains");
mealList.addItem("Raita",4.90,"mains");



















