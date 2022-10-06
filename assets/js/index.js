//1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
//(например n=4 , 1+2+3+4)
const sequence = [1, 5, 8, 22, 7, 14, 0, 9];
const n = 4;

const elementsSum = (sequence, n) => {
  let sum = 0;
  for(let i = 0; i < Math.min(n, sequence.length); i++) {
    sum += sequence[i];
  }
  return sum;
}

const result = elementsSum(sequence, n);

//2.1 Создать объект student который содержит следующие свойства: 
//имя, фамилию, пол, контактные данные, id.
const student = {
  firsName: 'Denis',
  lastNema: 'Medko',
  sex: 'male',
  contacts : {
    phone: '0123456789',
    email: 'denis@medko.com',
    city: 'Zaporizhzhya',
    country: 'Ukraine',
  },
  id: 0,
  dateOfApplication : new Date(1994, 08, 01),
};
//2.2 Создать объект студентской группы, содержащий имя университета, факультета и кафедры 
const universityGroup = {
  universityName: 'KPU',
  facultyName: 'management',
  department: 'sociology',
}
//2.3 Связать обьект студента с обьектом его группы
const {id} = student;
const groupCast = new Map([[id, universityGroup]]);

//2.4 Реализовать функцию вывода на экран всей информации о студенте 
//(включая и информацию, связанную с универом) в произвольном виде. 
//Функция должна принимать обьект студента
const showStudentInfo = ( {id, contacts, ...student} ) => {
  for ([key, val] of Object.entries(student)) {
    console.log(key, val);
  }
  for ([key, val] of Object.entries(contacts)) {
    console.log(key, val);
  }
  for ([key, val] of Object.entries(groupCast.get(id))) {
    console.log(key, val);
  }

}
showStudentInfo(student);

//3.1 Создать числовой массив и проинициализировать его из 25 элементов.
const arr = [];
arr.push(0);
for (let i = 0; i <= 25; i++) {
  arr.push(Math.floor(Math.random() * (100 + 100) - 100));
}
arr.push(0);
//3.2 Вывести элементы с четными индексами
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]);  
}
//альтернативный вариант, но более затратный
for (i in arr) {
  if (i % 2 === 0) {
    console.log(arr[i]);  
  } 
}
//3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
console.log('even values'); 
for (elem of arr.filter(element => element %2 === 0)) {
  console.log(elem);  
}
//3.4 Вывести индексы элементов, равных нулю ( если таковых нет то добавить 1-2 для проверки)
console.log('indexes of 0 value'); 
arr.forEach((e, i) => {
  if (e === 0) {
    console.log(i);  
  } 
}); 
//3.5 Подсчитать количество отрицательных чисел в массиве
console.log('negative count : '); 
console.log(arr.filter(element => element < 0).length);
//4 Создать классы:
//- Книга (автор, название, год издания, издательство)
//- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
class Book {
  #author;
  #name;
  #year;
  #publishingHouse;
  constructor(author, name, year, publishingHouse) {
    this.author = author;
    this.name = name;
    this.year = year;
    this.publishingHouse = publishingHouse;
  }
  set author(author) {
    this.#author = author;
  }
  set name(name) {
    this.#name = name;
  }
  set year(year) {
    this.#year = new Date(year, 0, 1);
  }
  set publishingHouse(publishingHouse) {
    this.#publishingHouse = publishingHouse;
  }
  get author() {
    return this.#author;
  }
  get name() {
    return this.#name;
  }
  get year() {
    return this.#year.getFullYear();
  }
  get publishingHouse() {
    return this.#publishingHouse;
  }
}
class ElectronicBook extends Book {
  #format;
  #id; 
  constructor(author, name, year, publishingHouse, format, id) {
    super(author, name, year, publishingHouse);
    this.format = format;
    this.id = id; 
  }
  set format(format) {
    this.#format = format;
  }
  set id(id) {
    this.#id = id;
  }
  get format() {
    return this.#format;
  }
  get id() {
    return this.#id;
  }  
}
const eBook1 = new ElectronicBook('Shevchenko', 'Kobzar', 2022, 'UkrBook', 'pdf', 2233 );
//5
//Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, 
//которая функция принимает в качестве параметра, с такими условиями:
//вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
//вывод fizz вместо чисел, кратных 3;
//вывод buzz вместо чисел, кратных 5;
console.log('task fizzbuzz');
const fizzbuzz = (n) => {
  if (typeof n !== 'number' || !isFinite(n) || !Number.isInteger(n)) {
    throw new Error(`${n} is not positive finite integer`);
  }
  for (let i = 1; i <= n; i++) {
    let res = '';
    if (i % 3 !== 0 && i % 5 !== 0) {
      res = i;
    } else {
      if (i % 3 === 0) {
        res = 'fizz';
      }
      if (i % 5 === 0) {
        res += 'buzz';
      }
    }
    console.log(res); 
  }
}
try {
  fizzbuzz(30);
} catch (e) {
  console.log(e.message);
}

//6
//С сервера передается обьект, имеющий следующую структуру:
const serverResponse = {
  data: {
    data: [
      {
        id: 0,
        name: "John",
        lastName: "Doe",
      },
      {
        id: 1,
        name: "Jane",
        lastName: "Doe",
      },
      {
        id: 2,
        name: "Admin",
        lastName: "Tiranovich",
      },
      {
        id: 3,
        name: "User",
        lastName: "Undefinovich",
      },
    ],
  },
};
//С помощью деструктуризации:
//- создать переменную users на основании массива в обьекте serverResponse
//const {data: {data}} = serverResponse;
const { data: {data: users} } = serverResponse;
console.log(users);
//- создать отдельные переменные для 3 и 4 пользователя
const [ , ,user3 , user4] = users;
