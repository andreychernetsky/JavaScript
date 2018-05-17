function myFoo(){
  alert('hello');
}
myFoo();
-----------------------------
function getStr(){
  var str = prompt('enter str');
  if(!str){
    return;
  }else{
    alert(str);
    return;
  }
}
------------------------------
function getSumm(a,b) {
  var result = a+ b;
}
// var res = getSumm(12,34);
alert(getSumm(12,34));
----------------------------------
var func = (function (a,b){
  alert(a-b);
}(10,5));
-------------------------------
function myFoo(array){
  var lastEl;
  for(var i = 0; i < array.length; i++){
    document.write("ячейка-" + i + "значение"+ array[i]+'<br>');
    lastEl=array[i];
  }
  return lastEl;
  
}
var result = myFoo([12,4,34]);
alert(result);
------------------------------------------
function myFoo(array){
  var lastEl=0;
  for(var i = 0; i < array.length; i++){
    document.write("ячейка-" + i + "значение"+ array[i]+'<br>');
    lastEl+=array[i];
  }
  return lastEl;
---------------------------------------------  
}
var result = myFoo([12,4,34]);
alert(result);
----------------------------
function myFoo(array){
  var lastEl;
  for(var i = 0; i < array.length; i++){
    document.write("ячейка-" + i + "значение"+ array[i]+'<br>');
    lastEl=array[i];
  }
  return lastEl;
  
}
else {
  alert("wrong parametr");
}
var result = myFoo(12);
-------------------------------------
function foo(str){
  document.write("<h1>" + str +"</h1>");
}
foo();//undefind
-------------------------
function foo(){
  
  document.write("<h1>" + arguments[0]; +"</h1>");
}
foo('hello');
foo(2,3,4,5,6);
-------------------
function foo(){
  var arr = arguments;
  
for(var i = 0; i < array.length; i++){
   document.write("ячейка-" + i + "значение"+ array[i]+'<br>');
}

}
foo('hello','hello2','hello3');
foo(2,3,4,5,6);
---------------------------------
function foo(a,b){
  document.write(a+b);

}
foo(2,3,4,5,6);
---------------
var a = 10;
function myFoo(){
  var a = 1000;
  alert(a);//1000
}
myfoo();
----------------
var a = 10;
function myFoo(){
  var a = 1000;
  alert(a);
}
myfoo();
alert(a);//1000  //10
----------------------
function myFoo(){
  alert(a);
}
myfoo();
alert(a);  //10 //10
-----------------------
function myFoo(){
  var a;
  alert(a);
}
myfoo();
alert(a); 
------------------
function block(){
  ///kod
  var x1,x2;
}
block();

----------------------

(function()){
  var x1,x2
  alert("hello");
}());
------------------
function myFoo(x,y){
  alert(x+y);
  function myFoo2(){
    // document.write(x-y) ;
    return x-y;
  }
  return myFoo2();
}
myFoo2()
myFoo(myFoo(10,4),1);//14 //6 //7
-----------------------------
function getFactorial(n){
  if(n<1){
  
    return 1 ;
  }
    var result = n*getFactorial(n-1);
    return result;
  }

alert(getFactorial(3));
------------------------------------------
function myFoo(){
  var res_max = 0;
  for(var i = 0; i < arguments.length; i++){
    if(arguments[i]>res_max){
      res_max=arguments[i];
    }
  }
  return res_max;
}
var result = myFoo(1,3,2,20,80);
alert(result);
