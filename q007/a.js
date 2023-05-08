
var random = Math.floor(Math.random() * 100 ) + 1;

for ( var i=1; i<=random ; i=i+1 ) {
    if (i == 7) {
        document.write(i);
        document.write("<img id='goldcat' src='cat.jpg'");
    }   else{
        document.write(i);
        document.write("<img src='cat.jpg'>");
    }   
}


