var config;

(function(){
  qz.websocket.connect().then(function() {
    return qz.printers.find("EPSON");
  }),then(function(printer){
    config = qz.configs.create(printer);
  });
})();

function printerPrint(data){
  qz.print(config, data).then(function(){
    alert('Printed!');
  });
}
