//Business Logic for picking toppings and size

function Pizza(first, second, third, fourth, fifth, size) {
  this.none = none;
  this.firstP = first;
  this.secondP = second;
  this.thirdP = third;
  this.fourthP = fourth;
  this.fifthP = fifth;
  this.sizeP = size;
  this.price = 4;

  Pizza.prototype.CalSizePrice = function () {
    if (this.size === "xlarge") {
      this.price += 6;
    } else if (this.size === "large") {
      this.price += 4;
    } else if (this.size === "medium") {
      this.price += 2;
    } else {

    }
  };

  Pizza.prototype.CalToppingsOne = function () {
    if (this.first === "none") {
      this.price += 0;
    } else {
      this.price += 3;
    }
  };

  Pizza.prototype.CalToppingsTwo = function () {
    if (this.second === "none") {
      this.price += 0;
    } else {
      this.price += 3;
    }
  };

  Pizza.prototype.CalToppingsThree = function () {
    if (this.third === "none") {
      this.price += 0;
    } else {
      this.price += 3;
    }
  };

  Pizza.prototype.CalToppingsFour = function () {
    if (this.fourth === "none") {
      this.price += 0;
    } else {
      this.price += 3;
    }
  };

  Pizza.prototype.CalToppingsFive = function () {
    if (this.fifth === "none") {
      this.price += 0;
    } else {
      this.price += 3;
    }
  };


};

// Pick.prototype.picked = function () {
//   return this.firstP + "," + this.secondP + "," + this.thirdP + "," + this.fourthP + "," + this.fifthP + "," + this.sizeP;
// };

//User Interface Logic 





window.addEventListener("load", function () {


  document.querySelector("form#pick").addEventListener("submit", function (event) {
    event.preventDefault();

    const pick1 = document.getElementById("firstTopping");
    const pick11 = pick1.options[pick1.selectedIndex].value;
    const pick2 = document.getElementById("secondTopping");
    const pick22 = pick2.options[pick2.selectedIndex].value;
    const pick3 = document.getElementById("thirdTopping");
    const pick33 = pick3.options[pick3.selectedIndex].value;
    const pick4 = document.getElementById("fourthTopping");
    const pick44 = pick4.options[pick4.selectedIndex].value;
    const pick5 = document.getElementById("fifthTopping");
    const pick55 = pick5.options[pick5.selectedIndex].value;

    const sizePick = document.getElementById("pickSize");
    const size = sizePick.options[sizePick.selectedIndex].value;

    let NewPizza = new Pizza(pick11, pick22, pick33, pick44, pick55, size);


  })
});


