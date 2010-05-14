describe("Cart", function () {
  var cart, prod1, prod2;

  beforeEach(function() {
    prod1 = new Product({name: 'prod1', price: 10.95});
    prod2 = new Product({name: 'prod2', price: 0.99});
    cart = new Cart();
  });

  describe("when products are added", function () {
    beforeEach(function() {
      cart.add(prod1, 1);
      cart.add(prod2, 2);
    });

    it("should have the items", function() {
      expect(cart.itemCount()).toEqual(3);
    });

    it("should update the subtotal", function() {
      expect(cart.subtotal()).toEqual(12.93);
    });

  });

});