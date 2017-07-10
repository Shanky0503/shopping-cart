(function() {

  var app = angular.module('app', []);

  app.controller('StoreController', function($rootScope){
    $rootScope.menuItem = [
      { name: 'Satay', price: 11.90, category: 'starters' },
      { name: 'Curry Puff', price: 9.00, category: 'starters' },
      { name: 'Rojak Mamak', price: 12.90, category: 'starters' },
      { name: 'Deep Fried Calamari', price: 12.90, category: 'starters' },
      { name: 'Spring Rolls', price: 7.50, category: 'starters' },
      { name: 'Tamarind Tiger Prawn', price: 16.90, category: 'starters' },
      { name: 'Chicken Salad', price: 10.90, category: 'starters' },
      { name: 'Tom Yum Ayam', price: 12.90, category: 'starters' },
      { name: 'Mixed Platter', price: 30.00, category: 'starters' },
      { name: 'Chicken Curry Corner', price: 18.90, category: 'CurryCorner' },
      { name: 'Lamb Curry Corner', price: 18.90, category: 'CurryCorner' },
      { name: 'Fish and Okra Gulai', price: 21.90, category: 'Gulai' },
      { name: 'Prawn Gulai', price: 21.90, category: 'Gulai' },
      { name: 'Chicken Sambal', price: 18.90, category: 'Sambal' },
      { name: 'Fish Sambal', price: 21.90, category: 'Sambal' },
      { name: 'Prawn Sambal', price: 21.90, category: 'Sambal' },
      { name: 'Squid Sambal', price: 21.90, category: 'Sambal' },
      { name: 'Beef Rendang', price: 18.90, category: 'Rendang' },
      { name: 'Lamb Rendang', price: 18.90, category: 'Rendang' },
      { name: 'Chicken Rendang', price: 18.90, category: 'Rendang' },
      { name: 'Chicken Masak Lemak', price: 18.90, category: 'MasakLemak' },
      { name: 'Fish Masak Lemak', price: 21.90, category: 'MasakLemak' },
      { name: 'Vege Masak Lemak', price: 15.90, category: 'MasakLemak' },
      { name: 'Chicken Nasi Lemak', price: 19.90, category: 'NasiLemak' },
      { name: 'Beef Nasi Lemak', price: 19.90, category: 'NasiLemak' },
      { name: 'Chicken Kurma', price: 18.90, category: 'Kurma' },
      { name: 'Lamb Kurma', price: 18.90, category: 'Kurma' },
      { name: 'Vege Dhal Curry', price: 15.90, category: 'Garden' },
      { name: 'Gado Gado', price: 15.90, category: 'Garden' },
      { name: 'Chicken Stir Fry', price: 18.90, category: 'Chinese' },
      { name: 'Beef Stir Fry', price: 18.90, category: 'Chinese' },
      { name: 'Prawn Stir Fry', price: 21.90, category: 'Chinese' },
      { name: 'Calamari Stir Fry', price: 21.90, category: 'Chinese' },
      { name: 'Vege Stir Fry', price: 15.90, category: 'Chinese' },
      { name: 'Fish Perathal', price: 21.90, category: 'Special' },
      { name: 'Chicken Perathal', price: 18.90, category: 'Special' },
      { name: 'Lamb Perathal', price: 18.90, category: 'Special' },
      { name: 'Butter Chicken', price: 18.90, category: 'Special' },
      { name: 'Chicken Dosa', price: 17.90, category: 'Dosa' },
      { name: 'Lamb Dosa', price: 17.90, category: 'Dosa' },
      { name: 'Masala Dosa', price: 15.90, category: 'Dosa' },
      { name: 'Plain Dosa', price: 8.00, category: 'Dosa' },
      { name: 'Mee Goreng Mamak', price: 17.90, category: 'Hawkers' },
      { name: 'Curry Laksa', price: 17.90, category: 'Hawkers' },
      { name: 'Mee Goreng', price: 17.90, category: 'Hawkers' },
      { name: 'Nasi Goreng', price: 17.90, category: 'Hawkers' },
      { name: 'Chicken Murtabak', price: 18.90, category: 'Roti' },
      { name: 'Kothu Roti', price: 18.90, category: 'Roti' },
      { name: 'Plain Roti', price: 3.00, category: 'Roti' },
      { name: 'Garlic Roti', price: 3.50, category: 'Roti' },
      { name: 'Egg and Onion Roti', price: 4.50, category: 'Roti' },
      { name: 'Coconut Rice', price: 2.50, category: 'Side' },
      { name: 'Pappadoms', price: 1.50, category: 'Side' },
      { name: 'Peanut Sauce', price: 3.00, category: 'Side' },
      { name: 'Raita', price: 4.90, category: 'Side' },
      { name: 'Extra', price: 0.50, category: 'Side' },
      { name: 'Extra02', price: 1.00, category: 'Side' },
      { name: 'Extra03', price: 2.00, category: 'Side' },
      { name: 'Sub', price: -1.00, category: 'Side' },
      { name: 'BYO', price: 5.00, category: 'whitewine' },
      { name: 'Mi Terruno - Chardonnay Glass', price: 7.50, category: 'whitewine' },
      { name: 'Mi Terruno - Chardonnay Bottle', price: 34.00, category: 'whitewine' },
      { name: 'Riverstone - Gewurztraminer Glass', price: 7.50, category: 'whitewine' },
      { name: 'Riverstone - Gewurztraminer Bottle', price: 34.00, category: 'whitewine' },
      { name: 'Castelani - Pinot Gris Glass', price: 7.50, category: 'whitewine' },
      { name: 'Castelani - Pinot Gris Bottle', price: 34.00, category: 'whitewine' },
      { name: 'Giesen - Riesling Glass', price: 8.50, category: 'whitewine' },
      { name: 'Giesen - Riesling Bottle', price: 37.00, category: 'whitewine' },
      { name: 'Sula - Sauvingnon Glass', price: 7.50, category: 'whitewine' },
      { name: 'Sula - Sauvingnon Glass', price: 34.00, category: 'whitewine' },
      { name: 'Expresion - Extra Brut Sparklink Bottle', price: 34.00, category: 'whitewine' },
      { name: 'Escude - Merlot/Tempranillo Glass', price: 7.50, category: 'Red' },
      { name: 'Escude - Merlot/Tempranillo Bottle', price: 34.00, category: 'Red' },
      { name: 'Terre - Cabernet Glass', price: 7.50, category: 'Red' },
      { name: 'Terre - Cabernet Bottle', price: 34.00, category: 'Red' },
      { name: 'Caleche - Shiraz Glass', price: 7.50, category: 'Red' },
      { name: 'Caleche - Shiraz Bottle', price: 34.00, category: 'Red' },
      { name: 'Trivento - Pinot Noir Glass', price: 7.50, category: 'Red' },
      { name: 'Trivento - Pinot Noir Bottle', price: 34.00, category: 'Red' },
      { name: 'Sula - Syrah Glass', price: 7.50, category: 'Red' },
      { name: 'Sula - Syrah Bottle', price: 34.00, category: 'Red' },
      { name: 'Contrada Monte - Rose Glass', price: 7.50, category: 'Red' },
      { name: 'Contrada Monte - Rose Bottle', price: 34.00, category: 'Red' },
      { name: 'Asahi', price: 8.00, category: 'Beer' },
      { name: 'Corona', price: 8.00, category: 'Beer' },
      { name: 'Heineken', price: 7.00, category: 'Beer' },
      { name: 'Heineken Light', price: 7.50, category: 'Beer' },
      { name: 'Kingfisher Lager', price: 7.50, category: 'Beer' },
      { name: 'Monteiths Range', price: 7.00, category: 'Beer' },
      { name: 'Steinlager', price: 8.00, category: 'Beer' },
      { name: 'Stella Artois Pilsner ', price: 8.00, category: 'Beer' },
      { name: 'Tiger Lager ', price: 8.00, category: 'Beer' },
      { name: 'Tuatara Pilsner ', price: 8.00, category: 'Beer' },
      { name: 'Coke', price: 3.50, category: 'SoftDrinks' },
      { name: 'Diet Coke', price: 3.50, category: 'SoftDrinks' },
      { name: 'Sprite', price: 3.50, category: 'SoftDrinks' },
      { name: 'L&P', price: 3.50, category: 'SoftDrinks' },
      { name: 'Mango Lassi', price: 4.50, category: 'SoftDrinks' },
      { name: 'Sweet Lassi', price: 4.00, category: 'SoftDrinks' },
      { name: 'Apple Juice', price: 4.00, category: 'SoftDrinks' },
      { name: 'Apple Cider', price: 7.00, category: 'SoftDrinks' },
      { name: 'Pinapple Juice', price: 4.00, category: 'SoftDrinks' },
      { name: 'Orange Juice', price: 4.00, category: 'SoftDrinks' },
      { name: 'Ginger Beer', price: 4.00, category: 'SoftDrinks' },
      { name: 'Soda Water', price: 3.50, category: 'SoftDrinks' },
      { name: 'Sparkling Water', price: 3.50, category: 'SoftDrinks' },
      { name: 'Tonic Water', price: 3.50, category: 'SoftDrinks' },
      { name: 'Gin', price: 4.50, category: 'Sprites' },
      { name: 'Tequila', price: 4.50, category: 'Sprites' },
      { name: 'Bourboun', price: 4.50, category: 'Sprites' },
      { name: 'Vodka', price: 4.50, category: 'Sprites' },
      { name: 'Whisky', price: 4.50, category: 'Sprites' },
      { name: 'White Rum', price: 4.50, category: 'Sprites' },
      { name: 'Malaysian Teh Tarik', price: 4.00, category: 'HotDrinks' },
      { name: 'Malaysian Kopi', price: 4.00, category: 'HotDrinks' },
      { name: 'Ginger Masala Tea', price: 4.00, category: 'HotDrinks' },
      { name: 'Green Tea', price: 4.00, category: 'HotDrinks' },
      { name: 'Black Tea', price: 4.00, category: 'HotDrinks' },

    ];
    $rootScope.table = [
      {no: '1', occupied: false, orders: [], total: 0},
      {no: '2', occupied: false, orders: [], total: 0},
      {no: '3', occupied: false, orders: [], total: 0},
      {no: '4', occupied: false, orders: [], total: 0},
      {no: '5', occupied: false, orders: [], total: 0},
      {no: '6', occupied: false, orders: [], total: 0},
      {no: '7', occupied: false, orders: [], total: 0},
      {no: '8', occupied: false, orders: [], total: 0},
      {no: '9', occupied: false, orders: [], total: 0},
      {no: '10', occupied: false, orders: [], total: 0},
      {no: '11', occupied: false, orders: [], total: 0},
      {no: '12', occupied: false, orders: [], total: 0},
      {no: '13', occupied: false, orders: [], total: 0},
      {no: '14', occupied: false, orders: [], total: 0},
      {no: '15', occupied: false, orders: [], total: 0},
      {no: '16', occupied: false, orders: [], total: 0},
      {no: 'Side 01', occupied: false, orders: [], total: 0},
      {no: 'Side 02', occupied: false, orders: [], total: 0},
      {no: 'Side 03', occupied: false, orders: [], total: 0},
      {no: 'Side 04', occupied: false, orders: [], total: 0},
      {no: 'Side 05', occupied: false, orders: [], total: 0},
      {no: 'Take Away', occupied: false, orders: [], total: 0}
    ];
    this.orderView = true;
    this.tables = $rootScope.table;
      this.clearCart = function(index){
      var tempTable = this.tables[index];
      tempTable.occupied=false;
      tempTable.orders = [];
      tempTable.total = 0;
    };
  });

  app.controller('MenuController',['$rootScope', '$filter', function($rootScope,$filter){
    this.menuItem = $rootScope.menuItem;
    this.table = $rootScope.table;
    this.tableNo = 1;
    this.item = function(name, price, cost, quantity){
      this.name = name,
      this.price = price,
      this.cost = cost,
      this.quantity = quantity
    };

    this.addMenu = function(item){
      var tempTable = this.table[this.tableNo-1];
      if(tempTable == undefined){
        alert('Please select a table first!');
        return;
      }
      tempTable.occupied=true;
      var found = $filter('filter')(tempTable.orders, {name:item.name}, true)[0];
      if(found == undefined){
        tempTable.orders.push(new this.item(item.name, item.price, item.price, 1));
      }
      else{
        found.quantity++;
        found.price += item.price;
      }
    };

    this.removeItem = function(order)
    {
        var tempTable = this.table[this.tableNo-1];
        var index = tempTable.orders.indexOf(order);
        tempTable.orders.splice(index, 1);
    };

    this.clearCart = function(){
      var tempTable = this.table[this.tableNo-1];
      tempTable.occupied=false;
      tempTable.orders = [];
      tempTable.total = 0;
    };

    this.getTotal = function(tempTable){
      var total = 0;
      angular.forEach(tempTable.orders, function(item){
        total += item.price;
      });
      tempTable.total = total;
      return total;
    };

    this.getItems = function(menu){
      var total = 0;
      angular.forEach(menu, function(item){
        total += item.quantity;
      });
      return total;
    };

    this.removeOne = function(order){
      if(order.quantity == 1){
        var tempTable = this.table[this.tableNo -1];
        var index = tempTable.orders.indexOf(order);
        //console.log(index);
        if(index > -1)
          tempTable.orders.splice(index, 1);
      }
      else{
        order.price -= order.cost;
        order.quantity--;
      }
    };

    this.addOne = function(order){
      order.quantity++;
      order.price += order.cost;
    }

  }]);

})();
