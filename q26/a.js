// 문22	고양이 나이, 고양이 종류, 고양이 이름 이 3가지를 각각 변수를 만드시고, 다 합친 변수도 하나 만드시고, 합친걸 팝업으로 출력하세요	
// 		고양이 나이
// 		고양이 종류
// 		고양이 이름
// 	메모에 js 코드를 첨부하세요	
// var a = "2살";
// var t = "시고르자브종";
// var n = "야옹이";
// var s = a + t + n;
// alert(s);
// 문22	고양이 나이, 고양이 종류, 고양이 이름 이 3가지를 각각 변수를 만드시고, 다 합친 변수도 하나 만드시고, 합친걸 팝업으로 출력하세요	
// 		고양이 나이
// 		고양이 종류
// 		고양이 이름
// 	메모에 js 코드를 첨부하세요	
//함수

//함수선언(만들기)
// function xx(){

//     var a = "2살";
//     var t = "시고르자브종";
//     var n = "야옹이";

//     var s = a + t + n;


//     alert(s);

// }

// //함수  사용하기. 실행한다. 호출한다.

// xx();

//함수

// case #2 ------> 젤 처음에 변수 선언 이후에 함수를 선언하고 이후에 조합하는 함수를 하나 더 만들어줌.
//변수
//전역변수. global. 인싸변수.
//지역변수. local. 아싸변수

// var a ;
// var t ;
// var n ;
// var s ;

// //함수선언(만들기)
// function xx(){
//     a = "2살";
//     t = "시고르자브종";
//     n = "야옹이";
    
//     word_plus();
//     alert(s);
// } 

// function word_plus(){
//     s = a + t + n;
// }

// //함수  사용하기. 실행한다. 호출한다.

// xx();
var a ;
var t ;
var n ;
var s ;

function xx (){
    a = "2살";
    t = "시고르잡종";
    n = "야옹이";

    word_plus();
    alert(s);
}

function word_plus(){
    s = a + t + n;
}


function yy(){
    a = "4살";
    t = "먼치킨";
    t = "야옹이";

    word_plus();
    alert(s);
}
xx();
yy();