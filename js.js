//# task 1

function Human(n = 'Vova', a = 30) {
  let _name = n;
  let _age = a;
  this.setName = (n) => _name = n;
  this.getName = () => _name;
  this.setAge = (a) => _age = a;
  this.getAge = () => _age;
  this.say = () => {
    console.log(`Hi I am ${_name} and I am ${_age}`);
  }
}

let human = new Human('Igor', 29);

//# task 2

Array.prototype.myMap = function (func, thisArgs) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(func.call(thisArgs, this[i], i, this,));
  }
  return res;
};

Array.prototype.myForEach = function (func, thisArgs) {
  for (let i = 0; i < this.length; i++) {
    func.call(thisArgs, this[i], i, this);
  }
};

let arr = [1, 4, 2, 11, 5, 10, 6, 3, 8, 7, 9];
let arr2 = [1, 4, 2, 11];


//## bubble sort
Array.prototype.mySort2 = function (func) {
  if (this.length < 2) return;
  for (let i = 0; i < this.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < this.length - 1; j++) {
      if (!func) {
        if (this[j].toString() > this[j + 1].toString()) {
          let swap = this[j];
          this[j] = this[j + 1];
          this[j + 1] = swap;
          isSwapped = true;
        }
      } else {
        func(this[j], this[j + 1]); // can not understand what to do next
        if (this[j] > this[j + 1]) {
          let swap = this[j];
          this[j] = this[j + 1];
          this[j + 1] = swap;
          isSwapped = true;
        }
      }
    }
    if (!isSwapped) break;
  }
  return this;
};

// lesson 5 practice lesson

// #1 task

let menu = ['home', 'about', 'lesson', 'lesson1', 'contacts'];

const removeActiveClasses = (el) => {
  document.querySelectorAll(el).forEach(el => {
    el.classList.remove('active');
  })
};
const changeContent = (e) => {
  e.stopPropagation();
  removeActiveClasses('.list li');
  e.target.classList.add('active');
  document.querySelectorAll('.content__item').forEach((el) => {
    el.classList.remove('active');
    if (el.dataset.item === e.target.textContent) {
      el.classList.add('active');
    }
  });
};
const menuCreator = (arr) => {
  arr.forEach((el, index) => {
    let li = document.createElement('li');
    li.textContent = el;
    if (index === 0) li.classList.add('active');
    li.addEventListener('click', (e) => {
      changeContent(e);
    });
    document.getElementById('menu').appendChild(li);
  })
};
menuCreator(menu);

//#2 task

const randomDate = () => {
  return {
    year: Math.floor(Math.random() * (2019 - 1990)) + 1990,
    month: Math.floor(Math.random() * (12 - 1)) + 1,
    day: Math.floor(Math.random() * (7 - 1)) + 1
  }
};

const arrDateCreator = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(randomDate());
  }
  return arr.sort(() => Math.random() - 0.5);
};

localStorage.setItem('dates', JSON.stringify(arrDateCreator()));

const sortDates = dates => dates.sort((prev, next) => prev.year - next.year);

localStorage.setItem('dates', JSON.stringify(arrDateCreator()));

let sortedDates = sortDates(JSON.parse(localStorage.getItem('dates')));

localStorage.setItem('dates', sortedDates);

let obb = {a: 5, b: 'serhii'};
let arr5 = [3, 5, 6, 7, 4, 4, 6];
let hhh = [1, 2, 10, 11, 2, 13, 4, 14, 5, 6, 16];

console.log(hhh.mySort2((a, b) => {
  return a - b;
}));




