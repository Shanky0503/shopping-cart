(function() {

  var app = angular.module('app', []);

  app.controller('StoreController', function($rootScope){
    $rootScope.menuItem = [
      { name: 'Satay', price: 11.90, category: 'starters' },
      { name: 'Curry Puff', price: 9.00, category: 'starters' },
      { name: 'Rojak Mamak', price: 12.90, category: 'starters' },
      { name: 'Chicken Curry Corner', price: 18.90, category: 'mains' },
      { name: 'Lamb Curry Corner', price: 18.90, category: 'mains' },
      { name: 'Fish and Okra Gulai', price: 21.90, category: 'mains' },
    ];
    $rootScope.table = [
      {no: 1, occupied: false, orders: [], total: 0},
      {no: 2, occupied: false, orders: [], total: 0},
      {no: 3, occupied: false, orders: [], total: 0},
      {no: 4, occupied: false, orders: [], total: 0},
      {no: 5, occupied: false, orders: [], total: 0},
      {no: 6, occupied: false, orders: [], total: 0},
      {no: 7, occupied: false, orders: [], total: 0},
      {no: 8, occupied: false, orders: [], total: 0},
      {no: 9, occupied: false, orders: [], total: 0},
      {no: 10, occupied: false, orders: [], total: 0},
      {no: 11, occupied: false, orders: [], total: 0},
      {no: 12, occupied: false, orders: [], total: 0},
      {no: 13, occupied: false, orders: [], total: 0},
      {no: 14, occupied: false, orders: [], total: 0},
      {no: 15, occupied: false, orders: [], total: 0}
    ];
    this.orderView = true;
    this.tables = $rootScope.table;
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
        console.log(index);
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
