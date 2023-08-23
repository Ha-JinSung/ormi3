


// window.alert("'안녕'") html로 실행시 알람옴

// <- 주석다는 명령어

// 변수 만드는 3가지 방법
// var a;
// let b;
// 상수 변수를 만드는 방법

// 변하지 않는 값이라 꼭 =로 지정

// const c = 3; 

// var, let 는 아래처럼 값 수정 가능
// a = 3
// a = 10

// b = 1
// b = 2

// var a = 1;
// a = 3;  이미 만들어진 모드에선 엄격모드 안됨
// c = 3;  

// 'use strict';  // 자바스크립트를 엄격모드에서 실행

// valueA;        // 변수 키워드 생략은 엄격모드에서 에러발생!
// var valueA;
// var valueA;
// let valueA;    // 똑같은 이름으로 여러개 만들면 에러 재정의로 인한 에러발생!
// const my_name; // 초기화가 없어서 에러발생!

const a1 = 1;
console.log(typeof a1)



// console.log("         abc  ".trim()); 만약 abc 사이에 공백이 있다면 공백 그대로 출력 ex ab c -> ab c로 출력
// "abc"






var a = 1;
var b = 2;

let ab = 1;

console.log(a + b)

var a = 2;

console.log(a)

const x = 10

console.log(x)


// var, let, const 비교 정리
//  var는 변수값을 수정 할 수 있으며, 같은 변수명이 있을 시 후자우선으로 아래 변수명값으로 수정됩니다.
//  let도 변수값을 수정 할 수 있으나, 같은 변수명을 지정시 오류가 납니다 (window 상의 변수명에 전부 해당됨)
//  const는 한번 지정한 변수값은 수정 불가하며, const 변수명의 값을 다시 써야 합니다. (EX: const x = 10 선언 하면 x값은 10라서 나중에 x = 100으로 코드 수정 불가 하지만, const x = 10 -> const x = 100 이런식으로 10이 였던 값을 100으로 코드 자체 값을 변경해야 x = 100으로 변경이 되어 나옵니다.)

// 변수와 자료형에 관한 내용 정리
//  변수는 var, let, const의 키워드를 사용하여, 선언, 초기화, 할당을 할수 있는 값으로 데이터를 저장하고 참조하기 위한 식별자입니다.
//  자료형은 기본 자료형과 복합 자료형으로 나누어 지며, 기본 자료형은 숫자, 문자열, 불리언, null, undefined, symbol이 있으며, 복합 자료형은 객체, 배열, 함수, 날짜가 있습니다.

// const arr = [];
// const arr1 = [1, 2, 3];
// const arr2 = new Array(4, 5, 6);
// const arr3 = new Array(3);

// console.log(arr3)

let str1 = 'hello';
let str2 = str1;
console.log(str2); // 'hello'

str1 = 'world';

console.log(str1);

const data = [
    {
        "_id": "642ba3980785cecff3f39a8d",
        "index": 0,
        "age": 28,
        "eyeColor": "green",
        "name": "Annette Middleton",
        "gender": "female",
        "company": "KINETICA"
    },
    {
        "_id": "642ba398d0fed6e17f2f50c9",
        "index": 1,
        "age": 37,
        "eyeColor": "green",
        "name": "Kidd Roman",
        "gender": "male",
        "company": "AUSTECH"
    },
    {
        "_id": "642ba39827d809511d00dd8d",
        "index": 2,
        "age": 39,
        "eyeColor": "brown",
        "name": "Best Ratliff",
        "gender": "male",
        "company": "PRISMATIC"
    }
];
const ages = data.map((item) => item.age);
const eyeColor = data.map((item) => item.eyeColor);

console.log(ages);
console.log(eyeColor);

// const arr = [1, 2, 3];
// const newArr = arr.map(function(item, index) {
//   return item * index;
// });

// console.log(newArr);

const arr = ['참외', '키위', '감귤'];
arr.forEach(function(item, index) {
  console.log(item, index);
	arr[index] = index;
});



console.log(Number.isNaN(undefined)); // false