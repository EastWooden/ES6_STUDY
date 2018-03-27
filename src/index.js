let a =1;
var b = 'moudong';
// window.onload = function () {
//   console.log(b);
// }

{
  let a="某东"
}

for(var i=0;i<10;i++) {
  console.log("循环体内"+ i);
}
console.log("循环体外"+ i)  //这里的i是上面循环体内的变量，用var 声明，全局声明，污染了循环体外的变量
console.log(a);

for(let j=0;j<10;j++) {  //let 为局部声明
  console.log("循环体内" + j);
}
// console.log(j)

const c = 10;  // const声明是常量
console.log(c);
let [e,f,g] = [0,1,2];
console.log(e);
console.log(f);
console.log(g);

let [a2,b2,c2] = [1,2,3] //数组的解构赋值

let foo;
({foo} = {foo:'jsdong'}); //提前声明变量，必须在对象解构的值中，加一对括号；
console.log(foo)

const [a1,b1,c1,d1,e1] = 'jsdon'  //字符串的赋值结构
console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)
console.log(e1)

//对象扩展运算符
function jsdong(...arg) {
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
}
jsdong('m','o','d');

//下面这种写法同时会改变两个数组里面的值
let arr1 = ['www','jsdong','com'];
// let arr2 = arr1;
// console.log(arr2);
// arr2.push('hahah');
// console.log(arr1);
// console.log(arr2);

//用...扩展运算符则会避免这种情况

let arr3 = [...arr1];
arr3.push('hahaha1');
console.log(arr1);

//rest ... 运算符  和...扩展运算符，用法类似，表示的是剩下的参数
function jsdong_ajfkd(first,...arg) {
  for(let val of arg) {
    console.log(val)
  };
}
jsdong_ajfkd(1,2,3,4,5);

//字符串模板
let mouddong = '牟东';
let blog = `这是${mouddong}的bolg`;
document.write(blog+'\n');

//字符串查找

let mjs = '牟东';
let blog1 = '这是一篇关于牟东技术的博客文章哈哈哈带来福利';
console.log(blog1.indexOf(mjs));  //这是用es5的方法，检查字符串在一个字符串中的位置,只返回第一个字符在在包含字符串的索引值，具体位置还需要我们自己确认

//ES6直接用includes就可以判断，不再返回索引值，这样的结果我们更喜欢，更直接。

document.write(blog1.includes(mjs)+'<br/>');  //返回true
document.write(blog1.startsWith(mjs)+'<br/>');  //返回false
document.write(blog1.endsWith(mjs) + '<br/>');  //返回 false


// 数字判断转和转换

// 数字验证Number.isFinite( xx ）  检查是否是数字，无论是浮点型还是整型

let a_num = 11/4;
console.log(Number.isFinite(a_num)); //true
console.log(Number.isFinite('moudodng')); //false
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(undefined)); //false

// NaN 验证
// NaN是特殊的非数字，可以使用Number.isNaN()来进行验

console.log(Number.isNaN(NaN)); //true

// 判断是否为整数

let a_isInteger =123.1;
console.log(Number.isInteger(a_isInteger)); //false

// 整数转换Number.parseInt(xxx) 和浮点转换Number.parseFloat(xxx)
let a_parse = '9.18';
console.log(Number.parseInt(a_parse));  //9
console.log(Number.parseFloat(a_parse)); //9.18


//整数取值范围操作
//整数的操作是有一个取值范围的，它的取值范围就是2的53次方。我们先用程序来看一下这个数字是什么.


let a_pow = Math.pow(2, 53) - 1;
console.log(a_pow); //9007199254740991
// 在我们计算时会经常超出这个值，所以我们要进行判断，ES6提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。

// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER);
// 最小安全整数

console.log(Number.MIN_SAFE_INTEGER);

// 安全整数判断isSafeInteger()

console.log(Number.isSafeInteger(a_pow));//false


// 第7节： ES6中新增的数组知识（1）

// json 数组格式转换
let json = {
  '0': 'jsdong',
  '1': '技术东',
  '2': '彩笔',
  length: 3
}

// 这就是一个标准的JSON数组格式，跟普通的JSON对比是在最后多了一个length属性。只要是这种特殊的json格式都可以轻松使用ES6的语法转变成数组。在ES6中绝大部分的Array操作都存在于Array对象里。我们就用Array.from(xxx)来进行转换。我们把上边的JSON代码转换成数组，并打印在控制台。

let json_arr = Array.from(json);  //将json数据格式转换成数组
console.log(json_arr);

//Array.of 方法
let arr_of = Array.of('1','2','3');
console.log(arr_of);

//find() 实例方法
let arr_find = ['jsdong','技术东','caibo']
console.log(arr_find.find(function (value,index,arr) {
  return value = 'jsdong';
}));

// fill() 实例方法
let arr_fill = [0,1,2,3,4,5,6,7,8,9];
arr_fill.fill('jsdong', 2, 5);   //把数组从第二位到第五位用jspang进行填充。 2-5变成了jsdong
console.log(arr_fill);

// 数组的遍历

// for...of循环
// 这种形式比ES5的for循环要简单而且高效。先来看一个最简单的for...of循环。

let arr_forof = ['jsdong','技术东','哈哈']

for(let item of arr_forof) {
  console.log(item);
}

// for...of数组索引: 有时候开发中是需要数组的索引的，那我们可以使用下面的代码输出数组索引。

for (let index of arr_forof.keys()) {
  console.log(index);
}

//同时输出数组的内容和索引：我们用entries() 这个实例方法，配合我们的for...of循环就可以同时输出item 和index
for(let [index,item] of arr_forof.entries()) {
  console.log(`${index}:${item}`);
}

// entries() 实例方法
// entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
let list  =  arr_forof.entries();
console.log(list);
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);



// ES6箭头函数和扩展



function add(a, b) {
  return a + b;
}
console.log(add(1, 2));
//我们声明了一个add函数，然后传入a和b两个值，返回a + b的值。 然后我们在控制台打印了这个函数的返回结果，这里是3.

 // 默认值
//在ES6中给我们增加了默认值的操作，我们修改上边的代码，可以看到现在只需要传递一个参数也是可以正常运行的。


function add(a, b = 1) {
  return a + b;
}
console.log(add(1));
1
2
3
4
function add(a, b = 1) {
  return a + b;
}
console.log(add(1));
//主动抛出错误
//在使用Vue的框架中，可以经常看到框架主动抛出一些错误，比如v - for必须有: key值。那尤大神是如何做到的那？其实很简单，ES6中我们直接用throw new Error(xxxx), 就可以抛出错误。


// function add(a, b = 1) {

//   if (a == 0) {
//     throw new Error('This is error')
//   }
//   return a + b;
// }

// console.log(add(0));


//函数中的严谨模式
//我们在ES中就经常使用严谨模式来进行编程，但是必须写在代码最上边，相当于全局使用。在ES6中我们可以写在函数体中，相当于针对函数来使用。



// function add(a, b = 1) {
//   'use strict'
//   if (a == 0) {
//     throw new Error('This is error');
//   }
//   return a + b;
// }

// console.log(add(1));
//上边的代码如果运行的话，你会发现浏览器控制台报错，这是ES6中的一个坑，如果没人指导的话，可能你会陷进去一会。这个错误的原因就是如果你使用了默认值，再使用严谨模式的话，就会有冲突，所以我们要取消默认值的操作，这时候你在运行就正常了。


// function add(a, b) {
//   'use strict'
//   if (a == 0) {
//     throw new Error('This is error');
//   }
//   return a + b;
// }

// console.log(add(1, 2));

//获得需要传递的参数个数
//如果你在使用别人的框架时，不知道别人的函数需要传递几个参数怎么办？ES6为我们提供了得到参数的方法(xxx.length).我们用上边的代码看一下需要传递的参数个数。


// function add(a, b) {
//   'use strict'
//   if (a == 0) {
//     throw new Error('This is error');
//   }
//   return a + b;
// }

// console.log(add.length);

// function add(a, b) {
//   'use strict'
//   if (a == 0) {
//     throw new Error('This is error');
//   }
//   return a + b;
// }

// console.log(add.length);
//这时控制台打印出了2，但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1， 也就是说它得到的是必须传入的参数。

//箭头函数
//在学习Vue的时候，我已经大量的使用了箭头函数，因为箭头函数真的很好用，我们来看一个最简单的箭头函数。也就是上边我们写的add函数，进行一个改变，写成箭头函数。


// var add = (a, b = 1) => a + b;
// console.log(add(1));
//{ } 的使用

//在箭头函数中，方法体内如果是两句话，那就需要在方法体外边加上{ } 括号。例如下边的代码就必须使用{ }.


// var add = (a, b = 1) => {
//   console.log('jspang')
//   return a + b;
// };
// console.log(add(1));
// var add = (a, b = 1) => {
//   console.log('jspang')
//   return a + b;
// };
// console.log(add(1));
//箭头函数中不可加new，也就是说箭头函数不能当构造函数进行使用。

//最后我还是要重复强调的是，你一定要动手敲一下代码，要不你是学不会的，在工作中的改变就是学习了ES6得语法，在写新项目的时候尽量使用ES6带来的便利和特点，这样才能快速成长。

//对象的函数解构
let json_fun = {
  'id':'jsdong',
  'name': 'moudong',
  'haha':'hah'
}

function fun({id,b='moudong',haha}) {
  console.log(id, b, haha);
}
fun(json_fun);

//数组解构

let arr_arr = ['a','b','c']
function arr_arrfun(a,b,c) {
  console.log(arr_arr)
}
arr_arrfun(arr_arr);

// 数组转换成字符串
// join()方法

let arr = ['jspang','技术胖','前端教程'];
console.log(arr.join('|'));  //将数组转换成字符串，中间加了|线

// toString() 方法
console.log(arr.toString());

// 对象赋值
let name = 'jsdong';
let skill = 'web';
var obj = {name,skill};
console.log(obj);

// 对象key值构建

let key = 'skill';
var obj_skill = {
  [key]: 'web'
}
console.log(obj_skill);

// Object.is() 对象比较
let obj1 = {name: 'jsdong'};
let obj2 = {name: 'jsdong'};

console.log(obj1.name === obj2.name ); //true
console.log(Object.is(obj1.name,obj2.name)) //true
  // === 为同值相等，is()为严格相等。
console.log(+0 === -0);  //true
console.log(NaN === NaN); //false
console.log(Object.is(+0, -0)); //false
console.log(Object.is(NaN, NaN)); //true


// Object.assign() 合并对象

var obj_a = {a: 'jsdong'};
var obj_b = {b: '技术东'};
var obj_c = {c: 'web'};
let obj_d = Object.assign(obj_a, obj_b, obj_c)

console.log(obj_d)

//Symbol()

//Set和WeakSet数据结构

// Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
let setArr = new Set(['jspang','技术胖','web']);
setArr.add('前端技术') //用add进行追加 set {'jspang','技术胖','web','前端技术'}
setArr.delete('前端技术'); //删除 delete
console.log(setArr); //set {'jspang','技术胖','web'}
console.log(setArr.has('web')); //true 查找has:
setArr.clear(); //删除clear:

// set的循环
// for...of ... 循环

for(let item of setArr ){
  console.log(item);
}

// size属性
// size属性可以获得Set值得数量

console.log(setArr.size);

// WeakSet的声明

let weakObj = new WeakSet();
let obj_weakObj= { a: 'jspang', b: '技术胖' }
weakObj.add(obj_weakObj);

console.log(weakObj);

// 这里需要注意的是，如果你直接在new 的时候就放入值，将报错。

// WeakSet里边的值也是不允许重复的，我们来测试一下。

let obj_weakObj1 = { a: 'jspang', b: '技术胖' }
let obj_weakObj2 = obj_weakObj1;

weakObj.add(obj_weakObj1);
weakObj.add(obj_weakObj2);

console.log(weakObj);

//map数据结构

let json_map = {
  name:'moudong',
  skill: 'web',
}
let map = new Map();
map.set(json_map,'iam');
console.log(map);
map.set('hah', json_map); //为map增加值

// promise 主要用来处理回调函数
// 1.洗菜做饭 2.坐下来吃饭 3.收拾桌子洗完
let state = 1;

function step1(resolve, reject) {
  console.log('1.开始-洗菜做饭');
  if (state == 1) {
    resolve('洗菜做饭--完成');
  } else {
    reject('洗菜做饭--出错');
  }
}


function step2(resolve, reject) {
  console.log('2.开始-坐下来吃饭');
  if (state == 1) {
    resolve('坐下来吃饭--完成');
  } else {
    reject('坐下来吃饭--出错');
  }
}


function step3(resolve, reject) {
  console.log('3.开始-收拾桌子洗完');
  if (state == 1) {
    resolve('收拾桌子洗完--完成');
  } else {
    reject('收拾桌子洗完--出错');
  }
}

new Promise(step1).then(function (val) {
  console.log(val);
  return new Promise(step2);

}).then(function (val) {
  console.log(val);
  return new Promise(step3);
}).then(function (val) {
  console.log(val);
  return val;
});