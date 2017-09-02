// // business logic
// function Pizza (a, b) {
//   this.size = a;
//   this.topping = b;
//   this.totalCost = 0;
// }
//
// Pizza.prototype.sizeCost = function() {
//   this.sizeCost = 0;
//   if (this.size === "small"){
//     this.sizeCost = 6;
//   } else if (this.size === "medium"){
//     this.sizeCost = 8;
//   } else if (this.size === "large"){
//     this.sizeCost = 10;
//   }
// }
//
// Pizza.prototype.toppingCost = function() {
//     this.toppingCost = 0;
//     if (this.topping === "meat") {
//       this.toppingCost += 2;
//     } else if (this.topping === "vegetable") {
//       this.toppingCost += 1;
//     }
//   }
//
// Pizza.prototype.getCost = function() {
//   this.totalCost =  sizeCost() + toppingCost();
// }


// user-interface logic
$(document).ready(function() {
  $("#pizza-selection").submit(function(event){
    event.preventDefault();
    $("#pizza-options").hide();
    var inputtedSize = $("select#size").val();
    var inputtedToppings = [];
    $("input[name='topping']:checked").each(function(){
      var topping = $(this).val();
      inputtedToppings.push(topping);
    });

    // var yourPizza = new Pizza(inputtedSize, inputtedToppings);
    // yourPizza.getCost();
    // console.log(yourPizza);

    $("#your-pizza").show();
    $(".pizza-overlay").show();
    $(".next-button").hide();
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
