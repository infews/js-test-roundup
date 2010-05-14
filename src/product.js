function Product(seed) {
  var self = {};

  self.name = function() {
    return seed.name;
  };

  self.price = function() {
    return seed.price;
  };

  return self;
}