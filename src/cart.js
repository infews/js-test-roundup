function Cart() {
  var self = this;
  var myCount = 0;
  var lineItems = [];

  self.add = function(product, count) {
    lineItems.push({product: product, count: count});
    myCount += count; 
  };

  self.itemCount = function() {
    return myCount;
  };

  self.subtotal = function () {
    var s = 0;
    
    lineItems.forEach(function(item) {
      s += (item.count * item.product.price);
    });

    return s;    
  };

  return self;                    
}