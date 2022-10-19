var bcounter //Button Counter

function saySomething(_bId, _id){
    if (bcounter == 0) {
        document.getElementById(_bId).style.visibility = "visible";
        document.getElementById(_id).style.visibility = "visible";
    }
    else if (bcounter == 1) {
        document.getElementById(_bId).style.visibility = "hidden";
        document.getElementById(_id).style.visibility = "hidden";
    }
    _random = math.random();
    if (_random == 1){
        _random = random.math();
        if (_random == 1){
            document.getElementById(_id).innerHTML = "Thats a hidden feature";
        }
        else if (_random == 0){
            document.getElementById(_id).innerHTML = "Thats is literally crazy";
        }
    }
    else if (_random == 0){
        _random = math.random();
        if (_random == 1){
            document.getElementById(_id).innerHTML = "1. e4 e5 2. ke2 ke7";
        }
        else if (_random == 0){
            document.getElementById(_id).innerHTML = "";
        }
    }
}