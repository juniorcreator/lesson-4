
//# task 1
function Human(n = 'Vova', a = 30) {
  let _name = n;
  let _age = a;
  this.setName = (n) => {_name = n};
  this.getName = () => _name;
  this.setAge = (a) => {_age = a};
  this.getAge = () => _age;
  this.say = () => {
    console.log(`Hi I am ${_name} and I am ${_age}`);
  }
}
let human = new Human('Igor', 29);
//# task 2


