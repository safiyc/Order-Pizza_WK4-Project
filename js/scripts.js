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
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    $("#pizza-options").hide();
    var inputtedSize = $("select#size").val();
    var inputtedToppings = [];
    $("input[name='toppings']:checked").each(function(){
      var topping = $(this).val();
      inputtedToppings.push(topping);
    });

    var yourPizza = new Pizza(inputtedSize, inputtedToppings);
    yourPizza.getCost();
    console.log(yourPizza);

    $("#your-pizza").show();
  });

  $("#address-form").submit(function(event){
    event.preventDefault();
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state= $("#state").val();
    var zipCode = $("#zipcode").val();
  });
});
