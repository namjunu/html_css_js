var userRpc = "";
while(true){
    userRpc = prompt("가위, 바위 ,보 중에 하나를 입력하세요 : ");
    if(userRpc == "가위" || userRpc == "바위" || userRpc == "보"){
        break;
    }   else{
        alert("장난 그만!")
    }
}

var comRpc = Marth.floor( Math.random() * 3 + 1);
if(comRpc == 1){
    comRpc = "가위";
}
if(comRpc == 2){
    comRpc = "바위";
}
if(comRpc == 3){
    comRpc ="보";
}

dw(" 유저 : "+userRpc);
br();
dw(" 컴퓨터 : "+comRpc);
br();

var winDrawLose = "";
switch(userRpc){
    case "가위":
        switch(comRpc){
            case "가위" :
                winDrawLose = "DRAW";
                break;
            case "바위" :
                winDrawLose = "LOSE";
                break;
            case "보" :
                winDrawLose = "WIN";
                break;        
        }
        break;
    case "바위":
        switch(comRpc){
            case "가위" :
                winDrawLose = "WIN";
                break;
            case "바위" :
                winDrawLose = "DRAW";
                break;
            case "보" :
                winDrawLose = "LOSE";
                break;
        }
        break;
    case "보":
        switch(comRpc){
            case "가위" :
                winDrawLose = "LOSE";
                break;
            case "바위" :
                winDrawLose = "WIN";
                break;
            case "보" :
                winDrawLose = "DRAW";
                break;
        } 
        break; 
}

dw(winDrawLose)