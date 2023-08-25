// let num = 5;
// // document.write(`num.toString() : ${typeof num.toString()} <br>`);
// // document.write(`num.toString() : ${(3).toString()} <br>`);
// document.write(`num.toString(2) : ${(3).toString(2)} <br>`);

// console.log('num')

// (12345678910).toLocaleString('ar-IQ')
// (12345678910).toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })


//논리곱 (&&) 연산자 and *, 논리합 (||) 연산자 or +, 논리부정 (!) 연산자 not
//`console.log(true && true); // true


// const x = 3
// x > 2, x < 7
// 2 < x && x < 7

// function test(x) { return x > 2 && x < 7}
// console.log(x)

// let S = x>2;
// console.log(S);
// let M = x<7;
// console.log(M);
// let A = S && M;
// console.log(A);

//function(){}  함수는 실행을 하면 리턴값이 나와야 한다
//{} <- 코드블럭

function plus2(x){ 
    // 로직
    const result = x+2;
    return result
}

const plus2Result = plus2(1);

console.log(plus2)



function 안녕하세요(){
    console.log('안녕하세요')
    return
}

// ((x,y)=>x+y)(1,2) <- 일회용으로 저장되지 않음 
function 이해했음() {
    "이해" + "못함"
    return 
}
이해했음()

//console.log("이해못함")


// 콜백함수
// const arr = ['참외', '키위', '감귤'];
// arr.forEach(function(item, index) {
//   console.log(item, index);
// 	arr[index] = index;
// });