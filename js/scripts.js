//Business Logic for picking toppings and size

function Pizza(first, second, third, fourth, fifth, size) {
  this.first = first;
  this.second = second;
  this.third = third;
  this.fourth = fourth;
  this.fifth = fifth;
  this.size = size;
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
    //console.log(size);

    //const priceShow = document.getElementById("price-pizza").text(this.price);


    let PizzaOrder = new Pizza(pick11, pick22, pick33, pick44, pick55, size);



    PizzaOrder.CalSizePrice();
    PizzaOrder.CalToppingsOne();
    PizzaOrder.CalToppingsTwo();
    PizzaOrder.CalToppingsThree();
    PizzaOrder.CalToppingsFour();
    PizzaOrder.CalToppingsFive();




    document.getElementById("price-pizza").innerText = PizzaOrder.price;
    document.getElementById("topping-pizza").innerText = PizzaOrder.pick11 + "," + PizzaOrder.pick22 + "," + PizzaOrder.pick33 + "," + PizzaOrder.pick44 + "," + PizzaOrder.pick55;
    document.getElementById("size-pizza").innerText = PizzaOrder.size;
  })

});


