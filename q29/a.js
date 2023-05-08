var s = prompt("");

function game(){
    document.write(s);
    var r = Math.floor(Math.random() * 3) + 1;
    if ( r == 1) {
        document.write("가위");
    } else if( r == 2){
        document.write("바위");
    } else{
        document.write("보");
    }
}
game();
