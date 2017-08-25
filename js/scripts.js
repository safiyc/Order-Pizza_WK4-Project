// business logic
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = [""];
}

Pizza.prototype.getCost = function() {
  if (this.size === "small"){
    this.cost === 8;
  } else if (this.size === "medium"){
    this.cost === 10;
  } else if (this.size === "large"){
    this.cost === 12;
  }
  for (var i = 0; i < this.toppings.length; i++){
    this.cost += 2;
  }
}

// user-interface logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("select#size").val();
    var inputtedToppings = [];
    $("input[name='toppings']:checked").each(function(){
      var topping = $(this).val();
      inputtedToppings.push(topping);
    });

    var yourPizza = new Pizza(inputtedSize, inputtedToppings);
    yourPizza.getCost();
    console.log(yourPizza);

  });
});
