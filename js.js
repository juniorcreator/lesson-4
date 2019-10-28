function Human(name = 'Vova', age = 30) {
  this.name = name;
  this.age = age;
  let eat = 0;
  let drink = 0;
  let doEat = () => {eat++;};
  let dodrink = () => {drink++;};
  this.makeFeed = () => {doEat();};
  this.makeDrink = () => {dodrink();};
  this.say = () => {
    console.log(`Hi I am ${this.name} and I am ${this.age}, wanna eat = ${eat}, wanna drink = ${drink}`);
  }
}

let human = new Human('Igor', 29);
