//Business Logic for picking toppings and size

function Pizza(first, second, third, fourth, fifth, size) {
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

  // Pizza.prototype.CalPrice = function () {
  //   document.getElementById("#price-pizza").innerHTML = this.price;
  // }

};


//User Interface Logic 





window.addEventListener("load", function () {

  document.querySelector("form#pick").addEventListener("submit", function handlePick(event) {
    event.preventDefault();

    let pick1 = document.getElementById("firstTopping");
    let pick11 = pick1.options[pick1.selectedIndex].value;
    let pick2 = document.getElementById("secondTopping");
    let pick22 = pick2.options[pick2.selectedIndex].value;
    let pick3 = document.getElementById("thirdTopping");
    let pick33 = pick3.options[pick3.selectedIndex].value;
    let pick4 = document.getElementById("fourthTopping");
    let pick44 = pick4.options[pick4.selectedIndex].value;
    let pick5 = document.getElementById("fifthTopping");
    let pick55 = pick5.options[pick5.selectedIndex].value;

    let sizePick = document.getElementById("pickSize");
    let size = sizePick.options[sizePick.selectedIndex].value;

    //const priceShow = document.getElementById("price-pizza").text(this.price);


    let PizzaOrder = new Pizza(pick11, pick22, pick33, pick44, pick55, size);



    PizzaOrder.CalSizePrice();
    console.log(PizzaOrder);
    PizzaOrder.CalToppingsOne();
    PizzaOrder.CalToppingsTwo();
    PizzaOrder.CalToppingsThree();
    PizzaOrder.CalToppingsFour();
    PizzaOrder.CalToppingsFive();




    document.getElementById("price-pizza").innerHTML = PizzaOrder.price;
    document.getElementById("topping-pizza").innerText = PizzaOrder.pick11 + "," + PizzaOrder.pick22 + "," + PizzaOrder.pick33 + "," + PizzaOrder.pick44 + "," + PizzaOrder.pick55;
    document.getElementById("size-pizza").innerText = PizzaOrder.size;
  })

});


