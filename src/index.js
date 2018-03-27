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

