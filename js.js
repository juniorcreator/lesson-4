
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

Array.prototype.myMap = function (func) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(func(this[i], i, this));
  }
  return res;
};

Array.prototype.myForEach = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this);
  }
};


let arr = [1,4,2,11,5, 10, 6, 3, 8, 7, 9];
let arr2 = [1,4,2,11];


Array.prototype.mySort = function(func) {
  if (!arguments.length) {
    const min = (array) => {
      let smallestElement = array[0];
      let smallestIndex = 0;

      for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
          smallestElement = array[i];
          smallestIndex = i;
        }
      }
      return smallestIndex;
    };
    const sort = (array) => {
      const sortedArray = [];
      for (let i = 0; i < array.length; i++) {
        sortedArray.push(array.splice(min(array), 1)[0]);
      }
      return sortedArray;
    };
    return  sort(this);
  }
};

//## bubble sort
Array.prototype.mySort2 = function(func) {
  if (this.length < 2) return;
  if(!arguments.length) {
    for (let i = 0; i < this.length -1; i++) {
      debugger
      let isSwapped = false;
      for (let j = 0; j < this.length -1; j++) {
        debugger
        if (this[j] > this[j+1]) {
          let swap = this[j];
          this[j] = this[j+1];
          this[j+1] = swap;
          isSwapped = true;
        }
      }
    }
    return this;
  }
};
