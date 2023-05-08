var userRpc="";
var comRpc="";

var rpcInputText;
var rpcResultscreen;
var resultstring="";

var divRpcimgCom;
var divRpcimgUser;

window.onload = function(){
    rpcInputText = document.getElementById("rpc_input_text");
    rpcResultscreen = document.getElementById("rpc_result_screen");
    divRpcimgCom = document.getElementById("rpc_com");
    divRpcimgUser = document.getElementById("rpc_user");
}

function rpcInputButtonClick(){

    while(true){
        userRpc = rpcInputText.value;
        if(userRpc=="가위" || userRpc=="바위" || userRpc=="보" ){
            break
        } else {
            alert("장난치지 마세요!!!");
        }
    }

    comRpc = Math.floor(Math.random() *3 + 1);
    if(comRpc == 1){
        comRpc = "가위";
    }
    if(comRpc == 2){
        comRpc = "바위";
    }
    if(comRpc == 3){
        comRpc = "보";
    }

    resultstring = "user : " + userRpc;
    resultstring = resultstring + "\n";
    resultstring = resultstring + "com : " + comRpc;
    resultstring = resultstring + "\n"

    switch(userRpc){
        case "가위":
            divRpcimgUser.innerHTML = "<img src='sc.png'>"
            break;
        case "바위":
            divRpcimgUser.innerHTML = "<img src='ro.png'>"
            break;
        case "보":
            divRpcimgUser.innerHTML = "<img src='pa.png'>"
            break;
    }

    switch(comRpc){
        case "가위":
            divRpcimgCom.innerHTML = "<img src = 'c_sc.png'>"
            break;
        case "바위":
            divRpcimgCom.innerHTML = "<img src = 'c_ro.png'>"
            break;
        case "보":
            divRpcimgCom.innerHTML = "<img src = 'c_pa.png'>"
            break;
    }
    var WinDrawLose = "";
    switch(userRpc){
        case "가위":
            switch(comRpc){
                case "바위":
                    WinDrawLose = "Lose"
                    break;
                case "보":
                    WinDrawLose = "Win"
                    break;
                case "가위":
                    WinDrawLose = "Draw"
                    break;
            } break;
        case "바위":
            switch(comRPc){
                case "바위":
                    WinDrawLose = "Draw"
                    break;
                case "보":
                    WinDrawLose = "Lose"
                    break;
                case "가위":
                    WinDrawLose = "Win"
                    break;
            } break;
        case "보":
            switch(comRpc){
                case "바위":
                    WinDrawLose = "Win"
                    break;
                case "보":
                    WinDrawLose = "Draw"
                    break;
                case "가위":
                    WinDrawLose = "Lose"
                    break;
            }
            break;
    }
    resultString = resultstring + "result : " + WinDrawLose;
    rpcResultscreen.value = resultString;

}