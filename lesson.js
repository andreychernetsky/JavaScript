//Переменная — это именованный фрагмент памяти, используемый для хранения разных значений.
 // Часть информации, на которую можно сослаться несколько раз, 
 // может быть сохранена в переменной для последующего 
 // использования или модификации.
/*
  Ключевое слово	Область видимости	Поднятие	Переназначение	Обновление
  var	            На уровне функции	  Да	        Да	        Да
  let	            На уровне блока	    Нет       	Да	        Нет
  const         	На уровне блока   	Нет	        Нет	        Нет
*/
/*
  - Глобальные переменные – это те, которые объявлены вне блока.
  - Локальные переменные – это те, которые объявлены внутри блока.
*/

if (true) {
  var varx = 5;
  let letx = 5; //область видимости блока; переменная, объявленная внутри блока, 
  // является локальной для функции (или глобальной области видимости), 
  // внутри которой находится данный блок.
  const constx = 5; //только для чтения
}
console.log(varx);
// console.log(letx);
// console.log(constx);




console.log(upx === undefined); // true
var upx = 3;

var x;
console.log(x === undefined); // true
x = 3;


var myvar = "my value";
(function() {
  console.log(myvar); 
  var myvar = "local value";
})();

(function() {
  var myvar;
  console.log(myvar); 
  myvar = "local value";
})();




foo(); 
function foo() {
  console.log("bar");
}

/* Определение функции через выражение */
//baz(); 
var baz = function() {
  console.log("bar2");
};
//baz();



//атрибуты объектов не защищены, так что следующее выражение выполнится без проблем
const MY_OBJECT = {"key": "value"};
MY_OBJECT.key = "otherValue";
не решили..

/*******************************************************/
var fooHide = 1;
function bar() {
  if (!fooHide) { 
    var fooHide = 10;
  }
  console.log(fooHide);
}
bar(); //10
=================================
let fooHide = 1;
function bar() {
  if (!fooHide) { 
    let fooHide = 10;
  }
  console.log(fooHide);
}
bar();//1


var a12 = 1;
function b() {
  a12 = 10;
  console.log(a12); 
  return;
  console.log(a12); 
  function a12() {}
}
b();
console.log(a12);
нет четкого решения




var x11 = 1;
console.log(x11); 
if (true) {
  var x11 = 2; 
  console.log(x11); 
}
console.log(x11);//1,2,2

let x11 = 1;
console.log(x11); 
if (true) {
  let x11 = 2; 
  console.log(x11); 
}
console.log(x11);//1,2,1

function foo13() {
  var x13 = 1;
  console.log('foo13 1', x13); //1
  if (x13) {
    (function () { 
      var x13 = 2;
      console.log('foo13 2', x13); //2
    }());
  }
  console.log('foo13 3', x13); //1
}
foo13();



//присваивание значений переменным не поднимается вместе с их объявлением. 
// Поднимаются только объявления переменных
function foo() {
  bar();
  var x = 1;
}
//==>
function foo() {
  var x;
  bar();
  x = 1;
}


function foo() {
  if (false) {
    var x = 1;
  }
  return;
  var y = 1;
}

function foo() {
   var x=(false) ? 1:2;//2
   
  console.log(x);
  return;
  var y = 1;
  
}
foo();
//==>
function foo() {
  var x, y;
  if (false) {
    x = 1;
  }
  return;
  y = 1;
}
// еще вариант
function foo() {
  var x, y;
    y = (false) ? 1:2; 
   
  y = 1;
  console.log(y);
  return;
}
foo();


function test() {
  foo(); // TypeError "foo is not a function"
  bar(); // "this will run!"
  var foo = function () { // функциональное выражение, присвоенное локальной переменной 'foo'
    console.log("this won't run!");
  }
  function bar() { // объявление функции с именем 'bar'
    console.log("this will run!");
  }
}
test();



foo(); // TypeError "foo is not a function"
bar(); // работает
baz(); // TypeError "baz is not a function"
spam(); // ReferenceError "spam is not defined"

var foo = function () {}; // анонимное функциональное выражени (поднимается 'foo')
function bar() {}; // объявление функции (поднимаются 'bar' и тело функции)
var baz = function spam() {}; // именованное функциональное выражение (поднимается только 'baz')

foo(); // работает
bar(); // работает
baz(); // работает
spam(); // ReferenceError "spam is not defined"

/************************** Timers *****************************/
/*
- var id = setTimeout(fn, delay); — создает единичный таймер, срабатывание которого выливается в вызов определенной функции после указанной задержки. Данный метод возвращает уникальный ID, с помощью которого можно в дальнейшем отменить таймер.
- var id = setInterval(fn, delay); — похож на предыдущий метод setTimeout, но совершает вызовы заданной функции постоянно (каждый раз с заданной задержкой), пока не будет отменен.
- clearInterval(id);, clearTimeout(id); — принимают в качестве параметр ID таймера (возвращаемый двумя предыдущими методами) и предотвращают дальнейшие вызовы таймера.

 точность периода задержки таймера не гарантируется. Начнем с того, что браузер исполняет все асинхронные JavaScript-события в одном потоке (такие как клик мышью или таймеры) и только в то время, когда пришла очередь этого события.
 
 стартуют два таймера: setTimeout с задержкой 10мс и setInterval с такой же задержкой. В зависимости от того, когда стартует таймер, он сработает в момент, когда мы еще не завершили первый блок кода. Заметьте, однако, что он не срабатывает сразу (это невозможно из-за однопоточности). Вместо этого отложенная функция попадает в очередь и исполняется в следующий доступный момент.
*/

setTimeout(function(){
  /* Some long block of code... */
  setTimeout(arguments.callee, 10);
}, 10);

setInterval(function(){
  /* Some long block of code... */
}, 10);
//Код, использующий setTimeout будет всегда иметь задержку хотя бы 10мс после предыдущего вызова (он может быть больше, но никогда не может быть меньше), тогда как код, использующий setInterval будет стремиться вызываться каждые 10мс независимо от того, когда отработал предыущий вызов.

setTimeout(function () {
  //do something
}, 0); //выполниться после прогонки всего кода


/************************** Модуль *****************************/
var basketModule = (function() {
  var basket = []; // приватная переменная
  return { // методы доступные извне
    addItem: function(values) {
      basket.push(values);
    },
    getItemCount: function() {
      return basket.length;
    },
    getTotal: function() {
      var q = this.getItemCount(),p=0;
      while(q--){
        p+= basket[q].price;
      }
      return p;
    }
  }
}());
// basketModule - это объект со свойствами, которые могут также быть и методами:
basketModule.addItem({item:'bread', price:0.5});
basketModule.addItem({item:'butter', price:0.3});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

// А следующий ниже код работать не будет:
console.log(basketModule.basket); // undefined потому что не входит в возвращаемый объект
console.log(basket); // массив доступен только из замыкания
