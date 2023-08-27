// true ? "사실" : "거짓"
// const result = true ? "사실" : "거짓"
// const r3 =_num.filter() .reduce() < = > [] .reduce()
// 단 const r3 =_num.pop() .reduce() < / > [] .reduce() 은 안된다



// let score = 69;
// let money = 1000;

// if (score > 90) {
//     document.write('참 잘했습니다!<br>');
//     money += 100000
// } else if (score > 80) {
//     document.write('잘했습니다!<br>');
//     money += 10000
// } else if (score > 70) {
//     document.write('했습니다!<br>');
//     money += 1000
// } else {
//     money = 0
// }

// document.write(money);



// switch ('3') {
//     case 4:
//         console.log('4')
//             // 값1에 대한 실행 코드
//         break;
//     case 2:
//         console.log('2')
//             // 값2에 대한 실행 코드
//         break;

//     default:
//         console.log('없음')
//             // 모든 case에 해당하지 않을 때 실행될 코드
//         break;
// }



// switch (new Date().getDay()) {
//     case 1:
//       document.write('월요일입니다.');
//       break;
//     case 2:
//       document.write('화요일입니다.');
//       break;
//     case 3:
//       document.write('수요일입니다.');
//       break;
//     case 4:
//       document.write('목요일입니다.');
//       break;
//     case 5:
//       document.write('금요일입니다.');
//       break;
//     default:
//       document.write('금금요일입니다. 주말이 뭐죠?');
//       break;
//   }



// let price = 0;
// let menu = '카페라떼'; // 메뉴를 바꿔보세요!

// switch (menu) {
//     case '아메리카노':
//         price = 4000;
//     case '카페라떼':
//         price = 5000;
//     case '바닐라라떼':
//         price = 6000;
//     case '콜드브루':
//         price = 5500;
//     case '딸기라떼':
//         price = 7000;
//     case '레몬에이드':
//         price = 6500;
//     case '에스프레소':
//         price = 3500;
//     case '루이보스':
//         price = 4500;
//     default:
//         console.log('메뉴를 정확히 입력하세요.');
// }

// --> 코드줄을 줄일수 있다

// switch (menu) {
//     case '아메리카노':
//         price = 4000;
//         break;
//     case '카페라떼':
//         price = 4000;
//         break;
//     case '바닐라라떼':
//         price = 6000;
//         break;
//     case '콜드브루':
//         price = 6000;
//         break;
//     case '딸기라떼':
//         price = 6500;
//         break;
//     case '레몬에이드':
//         price = 6500;
//         break;
//     case '에스프레소':
//         price = 3500;
//         break;
//     case '루이보스':
//         price = 4000;
//         break;
//     default:
//         console.log('메뉴를 정확히 입력하세요.');
//         break;
// }

// switch (menu) {
//     case '아메리카노':
//     case '카페라떼':
//     case '루이보스':
//         price = 3700;
//         break;
//     case '바닐라라떼':
//     case '콜드브루':
//         price = 6000;
//         break;
//     case '딸기라떼':
//     case '레몬에이드':
//         price = 6500;
//         break;
//     case '에스프레소':
//         price = 3500;
//         break;
//     default:
//         console.log('메뉴를 정확히 입력하세요.');
//         break;
// } //이런식으로 코드를 줄일수 있다



// for(초기화식; 조건식; 증감식) {
//	실행문;
//}

// for (let i = 0; i < 10; i += 2) {
//     document.write(i, '<br>');
// }

//구구단 작성하기
// for (let i = 0; i < 10; i++) {
//     document.write(i, '<br>');
// }
// 2단
// for (let i = 1; i < 11; i++) {
//     document.write(i * 2, '<br>');
// }

//이중 
// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++)
//     
//         document.write((i * j), '<br>');
// }


//최댓값 구하기
// var value = [100, 200, 50, 400, 900];

// function maximum(value) {
//     var max = 0;
//     for (var i = 0; i < value.length; i++) {
//         if (max < value[i]) {
//             max = value[i];
//         }
//     }
//     return max;
// }
// document.write(maximum(value)); //900
// document.write('<br>');

// //Math.max.apply() 사용해서 최댓값 구하기
// var max2 = Math.max.apply(null, value);
// document.write(max2); //900



// for (let i = 0; i < 10; i += 2) {
//     document.write(i, '<br>');
// }

// let i = 1;
// while (i < 10) {
//     console.log('실행')
//     document.write(i, '<br>');
//     i++
// }



// let i = 10; //복잡한 로직으로 만들어짐 랜덤값
// do {
//     console.log('무조건실행')
// }
// while (i < 10)
// // {
// //     console.log('실행')
// //     document.write(i * 2, '<br>');
// //     i++
// //}



// //break
// let num = 0;
// while (num < 11) {
//     num++;
//     document.write(num, '<br>');
//     if (num >= 5) {
//         break;
//     }
// }




// let num = 0;
// while (num < 10) {
//     num++;
//     //    if (num > 5) {
//     //    if (num != 5) { // 5만 표기
//     //    if (num >= 5) { // 1~4만 표기하고 5에서 넘어간다
//     if (num == 5) { // 5만 표기 인하고 나머지 다 표기, 5일때만 넘어가고 싶다
//         // if (num % 2 === 0) { // 5만 표기 인하고 나머지 다 표기, 5일때만 넘어가고 싶다
//         continue;
//     }
//     document.write(num, '<br>');
// } //5



//label

// outer: for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         if (i * j > 50)  {
//             break outer;
//         }
//         document.write((i * j), '<br>');
//     }
//      console.log(i,"단끝")
// }




// outer: for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         if (i * j > 20) {
//             continue outer;
//         }
//         document.write((i * j), '<br>');
//     }
//     console.log(i, "단끝")
// }


// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         if (i * j > 20) {
//             continue
//         }
//         document.write((i * j), '<br>');
//     }
//     console.log(i, "단끝")
// }

// const myBtn = document.querySelector("button");

// myBtn.addEventListener('click', function() {
//     console.log("hello world");
// })

// //옵저버 패턴
// const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("poster-image_state_visible")
//             }
//         })
//     }, { threshold: 0.2 })
//     //화면에서 20퍼센트 보일떄 나와라

// document.querySelectorAll(".poster-image_wrapper").forEach((poster) => {
//         observer.observe(poster)
//     }) //모든 포스트 이미지 웨퍼에 적용한다.