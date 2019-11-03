
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
      let isSwapped = false;
      for (let j = 0; j < this.length -1; j++) {
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


// lesson 5 practice lesson

// #1 task

let menu = ['home', 'about', 'lesson', 'lesson1', 'contacts'];
const removeActiveClasses = (el) => {
  document.querySelectorAll(el).forEach((el, index) => {
    el.classList.remove('active');
  })
};
const changeContent = (e) => {
  e.stopPropagation();
  removeActiveClasses('.list li');
  e.target.classList.add('active');
  document.querySelectorAll('.content__item').forEach((el, index) => {
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
    month:Math.floor(Math.random() * (12 - 1)) + 1,
    day: Math.floor(Math.random() * (7 - 1)) + 1
  }
};

const arrDateCreator = () => {
  let arr = [];
  for (let i = 0; i<10; i++) {
    arr.push(randomDate());
  }
  return arr.sort(() => Math.random() - 0.5);
};

const setToLocal = (dates, from) => {localStorage.setItem(dates, from);};

const getLocal = (item) => {
  return  JSON.parse(localStorage.getItem(item));
};

const sortDates = dates =>  dates.sort((prev, next) => prev.year - next.year);

setToLocal('dates', JSON.stringify(arrDateCreator()));

let sortedDates = sortDates(getLocal('dates'));

setToLocal('dates', JSON.stringify(sortedDates));



