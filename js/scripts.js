//business logic
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getCost = function () {
  this.toppings === 2;
  if (this.size === 8 || this.size === 12 || this.size === 15) {
    return this.size += this.toppings;
  }
}

//user-interface logic

var yourPizza = new Pizza(size, toppings);
