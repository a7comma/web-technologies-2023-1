import './assets/styles/style.css'

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

const pizza = document.querySelectorAll(".pizza");
const size = document.querySelectorAll(".size");
const toppings = document.querySelectorAll(".topping");
const result = document.querySelector(".result");
let pizzaResult;
let indexPizza = 0;


pizza.forEach((pizza, index) => pizza.addEventListener("click", () => {
  cancelChoicePizza();
  choicePizza(index);
  indexPizza = index;
}));

size.forEach((size, index) => size.addEventListener("click", () => {
  cancelChoiceSize();
  choiceSize(index);
}));

toppings.forEach((topping, index)=> topping.addEventListener("click", () => {
  changeTopping(topping, index);
})); 

function cancelChoicePizza() {
  pizza.forEach(item => item.classList.remove("pizzaActive"));
}

function choicePizza(index) {
  pizza[index].classList.add("pizzaActive");
  let size = document.querySelector(".sizeActive");
  if(size.textContent === "Маленькая") 
    pizzaResult = createPizza(index, new SmallSize());
  else 
    pizzaResult = createPizza(index, new BigSize());
  let toppings = document.querySelectorAll(".toppingActive");
  addToppings(toppings);
  changeResult();
}

function createPizza(index, size) {
  switch(index)
  {
    case 0: return new PepperoniPizza(size);
    case 1: return new MargaretPizza(size);
    case 2: return new BavarianPizza(size);
  }
}

function addToppings(toppings) {
  toppings.forEach(t => {
    if(t.textContent.match("Сырный")?.length > 0) {
      pizzaResult.addTopping(new CheeseBoard());
    }
    if(t.textContent.match("Сливочная")?.length > 0) {
      pizzaResult.addTopping(new CreamyMozzarella());
    }
    if(t.textContent.match("Чеддер")?.length > 0) {
      pizzaResult.addTopping(new CheddarAndParmesan());
    }
  });
}

function changeResult() {
  let price = pizzaResult.calculatePrice();
  let calories = pizzaResult.calculateCalories();
  result.textContent = `${price} ₽ (${calories} кКал)`
}

function cancelChoiceSize() {
  size.forEach(item => item.classList.remove("sizeActive"));
}

function choiceSize(index) {
  size[index].classList.add("sizeActive");
  choicePizza(indexPizza);
}

function changeTopping(topping, index) {
  topping.classList.toggle("toppingActive");
  choicePizza(indexPizza);
}