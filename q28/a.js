function xx(){
    for (var i = 1; i <= 10; i = i + 1) {
        if ( i % 2 == 0 ) {
            document.write(i + "은 짝수입니다.");
            br(); 
        }   else {
            document.write(i + "는 홀수입니다.");
            br();
        }   
    }
} 

function br() {
    document.write("<br>");
}

xx();