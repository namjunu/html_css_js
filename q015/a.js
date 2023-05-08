// 문15	반복문	while	참고탭 참고	prompt 함수를 이용하여 숫자 값을 하나 입력 받기	
// 				숫자가 100이 아니면 숫자를 화면에 (팝업말고) 출력	
// 				숫자가 100이면 while 반복문을 끝내도록 처리	


window.onload = function(){

    var t = document.getElementById("a");

    var s ="";
    
    
    while(true){
    
        s = prompt("값을 입력하세요 :");
        if(s==100){
            break;
        }else{
            t.innerHTML = "마지막 입력값:"+s+"<br>";
        }
    }

}
