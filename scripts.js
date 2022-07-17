//Business Logic for Pizza(order#)
function Pizza() {
  this.orders = {}
  this.currentId = 0;

}

Pizza.prototype.addOrder = function (order) {
  order.id = this.assignId();
  this.orders[order.id] = order;
};

Pizza.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

//Business Logic for picking toppings and size

function Pick(firstP, secondP, thirdP, fourthP, fifthP, sizeP) {
  this.firstP = firstP;
  this.secondP = secondP;
  this.thirdP = thirdP;
  this.fourthP = fourthP;
  this.fifthP = fifthP;
  this.sizeP = sizeP;
  this.total = 0;
};

Pick.prototype.Count = function () {
  if (this.firstP === "pepperoni" || this.firstP === "sausage" || this.firstP === "green bell pepper" || this.firstP === "black olives" || this.firstP === "mushrooms" || this.firstP === "chicken") {
    this.total += 3;
  }
};

Pick.prototype.picked = function () {
  return this.firstP + "," + this.secondP + "," + this.thirdP + "," + this.fourthP + "," + this.fifthP + "," + this.sizeP;
};

//User Interface Logic 

let pizza = new Pizza();





window.addEventListener("load", function () {
  document.querySelector("form#pick").addEventListener("submit")
});


