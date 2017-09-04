// business logic
function Pizza (size, meat, veggie) {
  this.size = size;
  this.meatTopping = meat;
  this.veggieTopping = veggie;
  this.cost;
}

Pizza.prototype.getCost = function() {
  if (this.size === "small"){
    this.cost = 6;
  } else if (this.size === "medium"){
    this.cost = 8;
  } else if (this.size === "large"){
    this.cost = 10;
  }
  for (var i = 0; i < this.meatTopping.length; i++){
    this.cost += 2;
  }
  for (var i = 0; i < this.veggieTopping.length; i++){
    this.cost += 1;
  }
  return this.cost;
}

// user-interface logic
$(document).ready(function() {
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    $("#pizza-options").hide();
    var inputtedSize = $("select#size").val();
    var inputtedMeat = [];
    var inputtedVeggie = [];
    $("input[name='meat']:checked").each(function(){
      var topping = $(this).val();
      inputtedMeat.push(topping);
    });
    $("input[name='veggie']:checked").each(function(){
      var topping = $(this).val();
      inputtedVeggie.push(topping);
    });

    var yourPizza = new Pizza(inputtedSize, inputtedMeat, inputtedVeggie);
    console.log(yourPizza);

    $("#your-pizza").show();
    $(".cost").text("This is your cost:" + " $" + yourPizza.getCost());
  });
});
