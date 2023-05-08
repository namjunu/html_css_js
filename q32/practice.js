var userRpc = "";
var comRpc = "";
var rpcInputText;
var resultString = "";
var rpcResultScreen;

window.onload = function () {

    rpcInputText = document.getElementById("rpc_input_text");
    rpcResultScreen = document.getElementById("rpc_result_screen");

}

function rpcInputButtonClick() {
    resultString = "";
    rpcResultScreen.value = resultString;
    userRpc = rpcInputText.value;
    if(userRpc == "가위" || userRpc == "바위" || userRpc == "보")
    {

        comRpc = Math.floor(Math.random() * 3 + 1);
        if (comRpc == 1) {
            comRpc = "가위";
        }
        if (comRpc == 2) {
            comRpc = "바위";
        }
        if (comRpc == 3) {
            comRpc = "보";
        }

        resultString = resultString + "유저 : " + userRpc + "\n";
        // resultString = resultString + "\n";
        resultString = resultString + "컴퓨터 : " + comRpc + "\n"; 
        // = resultString = resultString +"\n";


        var winDrawLose = "";
        switch (userRpc) {
            case "가위":
                switch (comRpc) {
                    case "가위":
                        winDrawLose = "DRAW";
                        break;
                    case "바위":
                        winDrawLose = "LOSE";
                        break;
                    case "보":
                        winDrawLose = "WIN";
                        break;
                }
                break;
            case "바위":
                switch (comRpc) {
                    case "가위":
                        winDrawLose = "WIN";
                        break;
                    case "바위":
                        winDrawLose = "DRAW";
                        break;
                    case "보":
                        winDrawLose = "LOSE";
                        break;
                }
                break;
            case "보":
                switch (comRpc) {
                    case "가위":
                        winDrawLose = "LOSE";
                        break;
                    case "바위":
                        winDrawLose = "WIN";
                        break;
                    case "보":
                        winDrawLose = "DRAW";
                        break;
                }
                break;
        }
        resultString = resultString + "결과 : " + winDrawLose;
        rpcResultScreen.value = resultString; //결과값을 다 더해준후 rpcResultScreen.value로 집어넣어줌
    } else {
        alert("장난치지마!");
    }
}
