## Pizza Parlor

#### by _**(Evgeny Zbirun)**_

#### The application let user pick five topping and a size. After submit it will show list of topping and price.



#### the project link to github: https://github.com/evegyzbirun/Pizza-pick

## Technologies Used:
* VS code
* Git console
* JavaScript
* Html 

## Setup instructions

1. download from github link
2. unzip
3. open with Visual Studio Code or some other editor that reads Html, Css and JavaScript.
4. open index.html with live server.
5. pick options.
6. Click submit to see the result.

## Known bugs
 non

## License

Copyright <2022> Evgeny Zbirun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### Tests:
Test1
Describe: Pizza();

* Test: pick toppings(or none of them) and size.
* Code: let PizzaOrder = new Pizza("pepperoni", "sausage", "green bell pepper", "black olives", "none", "medium" ).
* Expect: {toppings: "pepperoni", "sausage", "green bell pepper", "black olives", "none", size: "small", price: 18}.

Test2
Describe: CalToppingsOne();

* Test: pick one topping(small size by default).
* Code:  let PizzaOrder = new Pizza ("pepperoni").
* Expect: {toppings: "pepperoni", 7}.

Test3
Describe: CalToppingsTwo();

* Test: pick two toppings(small size by default).
* Code:  let PizzaOrder = new Pizza ("pepperoni","green bell pepper").
* Expect: {toppings:"pepperoni","green bell pepper", 10}.