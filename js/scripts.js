// business logic
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getCost = function() {
  var sizeCost = function(){
    if (this.size === "small") {
      return sizeCost = 10;
    } else if (this.size === "medium") {
      return sizeCost = 12;
    } else {
      return sizeCost = 15;
    }
  }

  var toppingsCost = function(){
    // if (this.toppings.length === 0) {
    //   toppingsCost += 2;
      if (this.toppings === "1") {
        toppingsCost = 10;
      } else if (this.toppings === "2") {
        toppingsCost = 12;
      } else {
        toppingsCost = 15;
      }
    }

    return sizeCost + toppingsCost;
    console.log(sizeCost + toppingsCost);
};

// user-interface logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("select#size").val();
    var inputtedToppings = $("select#toppings").val();
    // forEach("input[name='toppings']:checked") (function(topping){
    //   inputtedToppings.push($(this.toppings).val());
    // });

    var yourPizza = new Pizza(inputtedSize, inputtedToppings);
    console.log(yourPizza);

  });
});
