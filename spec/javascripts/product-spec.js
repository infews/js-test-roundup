describe("Product", function () {
  var product;

  beforeEach(function() {
    product = new Product({name: "Blue Hair Dye", price: 10.99});
  });

  it("should have a getter for a name", function() {
    expect(product.name()).toEqual("Blue Hair Dye");
  });

  it("should have a getter for a price", function() {
    expect(product.price()).toEqual(10.99);
  });
});