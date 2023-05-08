
var userRpc = "";
var comRpc = "";
var rpcInputText;

window.onload = function(){

    rpcInputText = document.getElementById("rpc_input_text");

}

function rpcInputButtonClick(){
        while(true){
        userRpc = rpcInputText.value;
        if(userRpc == "가위" || userRpc == "바위" || userRpc == "보"){
            break;
        }  else {
            alert("장난 그만!");
        }
    }

    comRpc = Math.floor(Math.random()*3+1);
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
    dw(winDrawLose);
}