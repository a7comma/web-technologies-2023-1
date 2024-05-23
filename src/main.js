import './assets/styles/style.css'
import javascriptLogo from './assets/svg/javascript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './components/counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

class Pizza{
  constructor(name, price, calories, size){
    this.name = name;
    this.price = price;
    this.calories = calories;
    this.size = size;
  }

  toppings = [];

  addTopping(topping){
    this.toppings.push(topping);
  }

  removeTopping(topping){
    this.toppings = this.toppings.filter(x => x.name !== topping.name);
  }

  getToppings(){
    return this.toppings.map(x => x.name);
  }

  getSize(){
    return this.size.name;
  }

  getStuffing(){
    return this.name;
  }

  calculatePrice(){
    let price = this.price + this.size.price;
    for(var i = 0; i < this.toppings.length; i++)
      price += this.toppings[i].price * this.size.toppingPriceCoef;
    return price;
  }

  calculateCalories(){
    let calories = this.calories + this.size.calories;
    for(var i = 0; i < this.toppings.length; i++)
      calories += this.toppings[i].calories;
    return calories;
  }
}

class MargaretPizza extends Pizza{
  constructor(size){
    super("Маргарита", 500, 300, size)
  }
} 

class PepperoniPizza extends Pizza{
  constructor(size){
    super("Пепперони", 800, 400, size)
  }
}

class BavarianPizza extends Pizza{
  constructor(size){
    super("Баварская", 700, 450, size)
  }
}

class Size{
  constructor(name, price, calories, toppingPriceCoef){
    this.name = name;
    this.price = price;
    this.calories = calories;
    this.toppingPriceCoef = toppingPriceCoef;
  }
}

class BigSize extends Size{ 
  constructor(){
    super("Большая", 200, 200, 2)
  }
}

class SmallSize extends Size{
  constructor(){
    super("Маленькая", 100, 100, 1)
  }
}

class Topping{
  constructor(name, price, calories){
    this.name = name;
    this.price = price;
    this.calories = calories;
  }
}

class CreamyMozzarella extends Topping{
  constructor(){
    super("Сливочная моцарелла", 50, 20)
  }
}

class CheeseBoard extends Topping{
  constructor(){
    super("Сырный борт", 150, 50)
  }
}

class CheddarAndParmesan extends Topping{
  constructor(){
    super("Чедер и пармезан", 150, 50)
  }
}

let margaret = new MargaretPizza(new BigSize()); 
margaret.addTopping(new CreamyMozzarella()); 
margaret.addTopping(new CheeseBoard()); 
margaret.addTopping(new CheddarAndParmesan());
margaret.removeTopping(new CheddarAndParmesan());
console.log(margaret.getToppings());
console.log(margaret.getStuffing());
console.log(margaret.getSize());
console.log(margaret.calculatePrice());
console.log(margaret.calculateCalories());

let pepperoni = new PepperoniPizza(new SmallSize());
pepperoni.addTopping(new CreamyMozzarella());
pepperoni.addTopping(new CheeseBoard());
pepperoni.addTopping(new CheddarAndParmesan());
pepperoni.removeTopping(new CreamyMozzarella());
console.log(pepperoni.getToppings());
console.log(pepperoni.getStuffing());
console.log(pepperoni.getSize());
console.log(pepperoni.calculatePrice());
console.log(pepperoni.calculateCalories());