var random = Math.floor(Math.random() * 10) + 1;

for ( var i = 1; i <= 10; i = i + 1) {
        document.write(i);
        if ( i == random ){
            break
        } 
    }